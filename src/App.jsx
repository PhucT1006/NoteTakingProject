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
import CornellModal from "./components/Modal/CornellModal";
import BoxingModal from "./components/Modal/BoxingModal";
import OutlineModal from "./components/Modal/OutlineModal";
import MappingModal from "./components/Modal/MappingModal";
import EditCornell from "./components/Edit/EditCornell";

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
      <BrowserRouter>
        <Routes>
          <Route element={<AuthRoute />}>
            <Route path="/MyNotes" element={<MyNotes />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Cornell" element={<Cornell />} />
            <Route path="/:id" element={<EditCornell />} />
          </Route>
          <Route path="/Notes" element={<Home />} />
          <Route path="/" element={<Index />} />
          <Route path="/StudyMethods" element={<StudyMethod />} />
          <Route path="/TodoList" element={<TodoList />} />
          <Route path="/Pomodoro" element={<Pomodoro />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ForgotPass" element={<ForgotPass />} />
          <Route path="/ResetPass" element={<ResetPass />} />
          <Route path="/CornellModal" element={<CornellModal />} />
          <Route path="/BoxingModal" element={<BoxingModal />} />
          <Route path="/MappingModal" element={<MappingModal />} />
          <Route path="/OutlineModal" element={<OutlineModal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
