import React from 'react';

const steps = [
    {
        icon: 'fas fa-microphone-alt',
        title: 'Record Your Story',
        desc: 'Upload your pre-recorded audio with a clear voice. Add music and effects to enhance the impact.'
    },
    {
        icon: 'fas fa-cloud-upload-alt',
        title: 'Upload & Share',
        desc: 'Publish your story with a cover, title, and parts. Make it easily discoverable by others.'
    },
    {
        icon: 'fas fa-comments',
        title: 'Connect with Listeners',
        desc: 'Receive likes and feedback, grow your following, and connect with fellow storytellers.'
    }
];


const HowItWorks = () => {
    return (
        <section className="py-20 bg-[#121212]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white mb-16">
                    <i className="fas fa-magic text-[#8A2BE2] mr-2"></i> How It Works
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-[#1A1A1A] p-8 rounded-xl border border-[#ffffff10] text-center hover:border-[#8A2BE2] hover:shadow-lg transition-all duration-300">
                            <div className="w-20 h-20 mx-auto rounded-full bg-[#8A2BE220] flex items-center justify-center mb-6">
                                <i className={`${step.icon} text-3xl text-[#8A2BE2]`}></i>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                            <p className="text-gray-400">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
