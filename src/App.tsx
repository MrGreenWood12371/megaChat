import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { Routes as ERoutes } from "./types/enums";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path={ERoutes.SignUp} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
