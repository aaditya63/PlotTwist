import React, { useEffect } from 'react';
import HeroSectionBG from '../../assets/HeroSectionBG.jpg'


const HeroSection = () => {
  useEffect(() => {
    const chartDom = document.getElementById('audio-wave-chart');
    if (!chartDom) return;

    const ctx = chartDom.getContext('2d');
    const renderWave = () => {
      const width = chartDom.width = chartDom.offsetWidth;
      const height = chartDom.height = chartDom.offsetHeight;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#8A2BE2';
      for (let i = 0; i < 40; i++) {
        const barHeight = Math.random() * 60 + 20;
        ctx.fillRect(i * (width / 40), height - barHeight, width / 50, barHeight);
      }
    };
    const interval = setInterval(renderWave, 1000);
    renderWave();
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={HeroSectionBG}
          alt="Storytelling Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#12121299] to-[#12121240]"></div>
      </div>

      <div className="container mx-auto mt-14 md:mt-0 px-4 z-10 flex flex-col-reverse md:flex-row items-center justify-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Share Your Story <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#8A2BE2] to-[#4A00E0] bg-clip-text text-transparent">
              With The World
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-xl mx-auto md:mx-0">
            Upload audio stories, experiences, and connect with listeners globally. Your voice deserves to be heard.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="bg-[#8A2BE2] hover:bg-[#7B27CC] text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-200">
              <i className="fas fa-headphones-alt mr-2"></i> Start Listening
            </button>
            <button className="border border-[#8A2BE2] text-[#8A2BE2] hover:bg-[#8A2BE240] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-200">
              <i className="fas fa-microphone mr-2"></i> Share Your Story
            </button>
          </div>
        </div>

        {/* Audio Wave Canvas */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <div className="relative w-72 sm:w-80 md:w-96 aspect-square">
            <div className="absolute inset-0 bg-[#ffffff05] backdrop-blur-sm rounded-full flex items-center justify-center">
              <div className="w-3/4 h-3/4 relative">
                <canvas id="audio-wave-chart" className="w-full h-full"></canvas>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#8A2BE2] hover:bg-[#7B27CC] flex items-center justify-center text-white cursor-pointer transition-all duration-300 shadow-lg shadow-[#8A2BE240]">
                    <i className="fas fa-play text-2xl sm:text-3xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
