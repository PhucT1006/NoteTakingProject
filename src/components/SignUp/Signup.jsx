import supabase from "../../config/SupabaseClient";

const handleSubmit = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: "bob@gmail.com",
    password: "123@Abc!",
  });
};

import React from "react";

const Signup = () => {
  return (
    <button
      onClick={() => {
        handleSubmit();
      }}>
      Submit
    </button>
  );
};

export default Signup;
