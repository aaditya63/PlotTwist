import { UserStore } from '../../store/userStore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const checkingAuth = UserStore((state) => state.checkingAuth);
  const checkedAuth = UserStore((state) => state.checkedAuth);
  const loggedIn = UserStore((state) => state.loggedIn);
  const user = UserStore((state) => state.user);
  const logout = UserStore((state) => state.logout);

  useEffect(() => {
    checkingAuth();
  }, [checkedAuth])
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#12121299] backdrop-blur-md border-b border-[#ffffff20] text-white">

      <div className="container mx-auto px-4 py-4 flex items-center w-full justify-between">
        <div className="text-2xl w-2/4 lg:w-1/4 font-bold  flex md:justify-start lg:justify-center items-center">
          <span onClick={() => navigate('/')} className='cursor-pointer'>
            <i className="fas fa-microphone-alt text-[#8A2BE2] mr-2"></i>
            <span className="bg-gradient-to-r from-[#8A2BE2] to-[#4A00E0] bg-clip-text text-transparent">Plot Twist</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex w-2/4  text-xl justify-center items-center space-x-6">
          <a href="#explore" className="text-gray-300 hover:text-white">Explore</a>
          <a href="#upload" className="text-gray-300 hover:text-white">Upload Story</a>
        </nav>


        {/* Desktop Auth Buttons */}
        {!loggedIn && <div className="hidden md:flex md:w-1/2 lg:w-1/4  md:justify-end lg:justify-center items-center space-x-4 ml-4">
          <button onClick={() => navigate('/login')} className="cursor-pointer border border-[#8A2BE2] text-[#8A2BE2] px-4 py-2 rounded-full hover:bg-[#8A2BE240]">
            <i className="fas fa-sign-in-alt mr-2"></i> Log In
          </button>
          <button onClick={() => navigate('/signup')} className="cursor-pointer bg-[#8A2BE2] text-white px-4 py-2 rounded-full hover:bg-[#7B27CC]">
            <i className="fas fa-user-plus mr-2"></i> Sign Up
          </button>
        </div>}
        {loggedIn && <div className="hidden md:flex md:w-1/2 lg:w-1/4  md:justify-end lg:justify-center items-center space-x-4 ml-4">
          <button onClick={() => navigate('/#')} className="cursor-pointer bg-[#8A2BE2] text-white px-4 py-2 rounded-full hover:bg-[#7B27CC]">
            <i className="fas fa-solid fa-user mr-2"></i> Profile
          </button>
          <button onClick={() => logout()} className="cursor-pointer border border-[#8A2BE2] text-[#8A2BE2] px-4 py-2 rounded-full hover:bg-[#8A2BE240]">
            <i className="fas fa-sign-in-alt mr-2"></i> Logout
          </button>
        </div>}

        {/* Mobile Toggles */}
        <div className="md:hidden flex items-center space-x-3">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fas text-2xl text-gray-300 hover:text-white ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 backdrop-blur-xl">
          <nav className="flex flex-col space-y-4">
            <a href="#explore" className="text-gray-300 hover:text-white">
              <i className="fas fa-compass mr-2"></i> Explore
            </a>
            <a href="#upload" className="text-gray-300 hover:text-white">
              <i className="fas fa-cloud-upload-alt mr-2"></i> Upload Story
            </a>
            {!loggedIn && <div className="flex space-x-2 pt-4">
              <button className="border border-[#8A2BE2] text-[#8A2BE2] px-4 py-2 rounded-full hover:bg-[#8A2BE240] flex-1">
                <i className="fas fa-sign-in-alt mr-2"></i> Log In
              </button>
              <button className="bg-[#8A2BE2] text-white px-4 py-2 rounded-full hover:bg-[#7B27CC] flex-1">
                <i className="fas fa-user-plus mr-2"></i> Sign Up
              </button>
            </div>}
            {loggedIn && <div className="flex space-x-2 pt-4">
              <button className="bg-[#8A2BE2] text-white px-4 py-2 rounded-full hover:bg-[#7B27CC] flex-1">
                <i className="fas fa-solid fa-user mr-2"></i> Profile
              </button>
              <button onClick={()=>logout()} className="border border-[#8A2BE2] text-[#8A2BE2] px-4 py-2 rounded-full hover:bg-[#8A2BE240] flex-1">
                <i className="fas fa-sign-in-alt mr-2"></i> Logout
              </button>
            </div>}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
