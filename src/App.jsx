// make sure to clean up code later

import Index from "./components/Home/Index";
import Notes from "./components/Notes/Notes";
import StudyMethod from "./components/StudyMethod/StudyMethods";
import TodoList from "./components/TodoList/TodoList";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import MyNotes from "./components/MyNotes/MyNotes";
import Signup from "./components/SignUp/Signup";
import LogIn from "./components/LogIn/LogIn";
import ForgotPass from "./components/ForgotPass/ForgotPass";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/Notes",
    element: <Notes />,
  },
  {
    path: "/StudyMethods",
    element: <StudyMethod />,
  },
  {
    path: "/TodoList",
    element: <TodoList />,
  },
  {
    path: "/Pomodoro",
    element: <Pomodoro />,
  },
  {
    path: "/MyNotes",
    element: <MyNotes />,
  },
  {
    path: "/LogIn",
    element: <LogIn />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/ForgotPass",
    element: <ForgotPass />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
