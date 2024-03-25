import { useState } from "react";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/Signup";
import LogIn from "./components/LogIn/LogIn";
/* const [currentFile, setCurrentFile] = useState("");*/
//https://stackoverflow.com/questions/66919014/is-it-a-good-idea-to-store-components-in-state#:~:text=Is%20it%20good%20practice%20to,the%20component%20in%20the%20state.

//user click on link in Home.jsx
// we have handle click event that will send setCurrentFile, set to the page user clicked on, back to the APP.jsx
// in the APP.jsx we will have a useState that contains
const [currentFile, setCurrentFile] = useState([
  { id: 1, component: <Home />, name: "Home" },
  { id: 2, component: <SignUp />, name: "SignUp" },
  { id: 3, component: <LogIn />, name: "LogIn" },
]);

function App() {
  return <>{currentFile.component}</>;
}

export default App;
