// make sure to clean up code later
import AuthRoute from "./components/AuthRoute/AuthRoute";
import Home from "./components/Home/Home";
import Index from "./components/Index/Index";
import Notes from "./components/Notes/Notes";
import StudyMethod from "./components/StudyMethod/StudyMethods";
import TodoList from "./components/TodoList/TodoList";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import MyNotes from "./components/MyNotes/MyNotes";
import Signup from "./components/SignUp/Signup";
import LogIn from "./components/LogIn/LogIn";
import ForgotPass from "./components/ForgotPass/ForgotPass";
import ResetPass from "./components/ResetPassword/ResetPass";
import Cornell from "./components/Cornell/Cornell";
import {
  Route,
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Router,
  Routes,
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
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<AuthRoute />}>
            <Route path="/MyNotes" element={<MyNotes />} />
            <Route path="/Home" element={<Home />} />
          </Route>
          <Route path="/Notes" element={<Notes />} />
          <Route path="/" element={<Index />} />
          <Route path="/StudyMethods" element={<StudyMethod />} />
          <Route path="/TodoList" element={<TodoList />} />
          <Route path="/Pomodoro" element={<Pomodoro />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ForgotPass" element={<ForgotPass />} />
          <Route path="/ResetPass" element={<ResetPass />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
