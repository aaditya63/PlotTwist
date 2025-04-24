import React from 'react';
import ReadytoShare from '../../assets/ReadytoShareBG.jpg'


const CallToAction = () => {
  return (
    <section className="py-20 bg-[#121212] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src={ReadytoShare}
          alt="Wave Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Share <span className="bg-gradient-to-r from-[#8A2BE2] to-[#4A00E0] bg-clip-text text-transparent">Your Story?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of storytellers and listeners. Your voice matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#8A2BE2] hover:bg-[#7B27CC] cursor-pointer text-white px-8 py-4 text-lg rounded-full transition-all duration-200">
              <i className="fas fa-microphone-alt mr-2"></i> Start Uploading
            </button>
            <button className="border border-[#8A2BE2] text-[#8A2BE2] cursor-pointer hover:bg-[#8A2BE240] px-8 py-4 text-lg rounded-full transition-all duration-200">
              <i className="fas fa-headphones mr-2"></i> Explore Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
