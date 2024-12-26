import Options from "./components/Options";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RegisterRest from "./components/RegisterRest";
import SignIn from "./components/SignIn";
import VerifyOtp from "./components/VerifyOtp";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar />  */}
        <Routes>
          <Route path={"/"} element={<Options />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"sign-in"} element={<SignIn />} />
          <Route path={"sign-up"} element={<RegisterRest />} />
          <Route path={"verify-otp"} element={<VerifyOtp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
