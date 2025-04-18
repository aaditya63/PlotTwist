import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#ffffff10] pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold flex items-center mb-6">
              <i className="fas fa-microphone-alt text-[#8A2BE2] mr-2"></i>
              <span className="bg-gradient-to-r from-[#8A2BE2] to-[#4A00E0] bg-clip-text text-transparent">Plot Twist</span>
            </div>
            <p className="text-gray-400 mb-6">
              Connecting the world through audio storytelling. Share your voice, discover new perspectives.
            </p>
            <div className="flex space-x-4">
              {["twitter", "instagram", "facebook-f", "youtube"].map(icon => (
                <a key={icon} href="#" className="w-10 h-10 rounded-full bg-[#ffffff10] flex items-center justify-center text-gray-400 hover:bg-[#8A2BE2] hover:text-white transition-all duration-200">
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              {["Home", "Explore", "Upload Story", "Categories", "About Us"].map(link => (
                <li key={link}><a href="#" className="hover:text-[#8A2BE2] transition-colors duration-200">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3 text-gray-400">
              {["Help Center", "Community Guidelines", "Privacy Policy", "Terms of Service", "Contact Us"].map(link => (
                <li key={link}><a href="#" className="hover:text-[#8A2BE2] transition-colors duration-200">{link}</a></li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
