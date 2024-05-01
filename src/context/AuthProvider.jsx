//https://blog.openreplay.com/authentication-in-react-with-supabase/

import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../config/SupabaseClient";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const login = (email, password) =>
  supabase.auth.signInWithPassword({ email, password });

//https://blog.openreplay.com/authentication-in-react-with-supabase/
// go back to that page to work on the log out button and its functionality
const signOut = () => supabase.auth.signOut();

const passwordReset = (email) =>
  supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:5173/ResetPass",
  });

const updatePassword = (updatedPassword) => {
  supabase.auth.updateUser({ password: updatedPassword });
};
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      const { user: currentUser } = data;
      setUser(currentUser ?? null);
      setLoading(false);
    };
    getUser();

    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event == "PASSWORD_RECOVERY") {
        setAuth(false);
      } else if (event === "SIGNED_IN") {
        setUser(session.user);
        setAuth(true);
      } else if (event === "SIGNED_OUT") {
        setUser(null);
        setAuth(false);
      }
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  const getId = () => {
    return supabase.auth.id;
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        user,
        login,
        signOut,
        passwordReset,
        updatePassword,
        getId,
      }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
