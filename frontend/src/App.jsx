import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/common/Navbar"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "./components/common/Footer";
import { LoginPage } from "./pages/Login";
import { SignupPage } from "./pages/Signup";
import CustomToast from "./lib/ToastProvider";
import Upload from "./pages/Upload";
function App() {

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/upload" element={<Upload/>} />

      </Routes>
      <Footer/>
      <CustomToast/>
    </div>
  )
}

export default App
