import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserStore } from "../store/userStore";


export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const login = UserStore((state) => state.login);
  const loggedIn = UserStore((state) => state.loggedIn);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    login({ email, password })
  };
  useEffect(() => {
    if (loggedIn) {
      navigate('/');
    }
  }, [loggedIn])

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-20 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#1A1A1A] p-8 rounded-2xl shadow-lg border border-[#ffffff10]">
        <h2 className="text-3xl font-bold text-center mb-6">
          <i className="fas fa-sign-in-alt text-[#8A2BE2] mr-2"></i> Log In
        </h2>
        <form className="space-y-4" onSubmit={handleLoginSubmit}>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#ffffff10] border border-[#ffffff20] focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#ffffff10] border border-[#ffffff20] focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer py-3 bg-[#8A2BE2] hover:bg-[#7B27CC] rounded-lg font-semibold transition-colors duration-200"
          >
            <i className="fas fa-sign-in-alt mr-2"></i> Log In
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          Don’t have an account? <span onClick={() => navigate('/signup')} className="text-[#8A2BE2] cursor-pointer hover:underline">Sign Up</span>
        </p>
      </div>
    </div>
  );
};