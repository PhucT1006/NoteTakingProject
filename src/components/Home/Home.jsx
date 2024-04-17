import { useAuth } from "../../context/AuthProvider";

const Home = () => {
  const { user } = useAuth();
  return <div>you are logged in with the email: {user.email}</div>;
};

export default Home;
