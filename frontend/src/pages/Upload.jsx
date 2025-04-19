import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import { UserStore } from "../store/userStore";
import AudioIntput from "@/components/upload/AudioIntput";

export default function Upload() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [part, setPart] = useState(1);
    const [photo, setPhoto] = useState('');
    const [loading, setLoading] = useState(false);
    let [audio, setAudio] = useState([])




    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file)
            return
        setLoading(true);
        const data = new FormData()
        data.append("file", file)
        data.append("upload_preset", "first_preset")
        data.append("cloud_name", "dv7rknqkk")

        const res = await fetch("https://api.cloudinary.com/v1_1/dv7rknqkk/image/upload", {
            method: "POST",
            body: data
        })
        const imageUrl = await res.json()
        setPhoto(imageUrl.secure_url);
        setLoading(false);
    };


    const handleSignupSubmit = (e) => {
        e.preventDefault();

        if(title.trim() == "" || description.trim() == ""){
            toast.error("All Feilds are required")
            return;
        }
        const readyAudio = audio.slice(0,part);
        
        let flag = false;
        for(let i=0;i<readyAudio.length && !flag;i++){
            for(let key in readyAudio[i]){
                if(readyAudio[i][key] == ""){
                    flag = true;
                    break;
                }
            }
        }
        if(flag){
            toast.info("All Feilds are required!")
            return;
        }
        
        if (loading) {
            toast.info("Image is not uploaded!");
            return;
        }
        
        
        // Need to Call the Function to save on Server


    };
    return (
        <div className="min-h-screen bg-[#121212] text-white pt-20 flex items-center justify-center px-4">
            <div className="md:w-3/4 bg-[#1A1A1A] p-8 rounded-2xl shadow-lg border border-[#ffffff10]">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-1">
                    Let the world hear your <br /> <span className="bg-gradient-to-r p-[2px] rounded-2xl from-[#8A2BE2] to-[#4A00E0]">Story.</span>
                </h2>
                <form className="space-y-4" onSubmit={handleSignupSubmit}>
                    <div>
                        <label className="block text-sm mb-1">Story Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-[#ffffff10] border border-[#ffffff20] focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]"
                            placeholder="Enter Story Title"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Story Description</label>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-[#ffffff10] border border-[#ffffff20] focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]"
                            placeholder="Enter Story Description"
                        />
                    </div>

                    <div className="flex justify-around">
                        <div className="w-1/2 lg:w-1/3">
                            <label className="block text-sm mb-5">Story Cover Photo<br /></label>
                            <div className='mt-1 w-full flex items-center justify-start ml-5 lg:ml-10 h-20 md:h-30'>
                                <input type='file' id='image' className='sr-only' accept='image/*' onChange={handleImageChange} />
                                <label
                                    htmlFor='image'
                                    className='text-center overflow-hidden cursor-pointer text-wrap w-20 h-20 md:w-30 md:h-30 flex justify-center items-center bg-[#ffffff10] border-gray-700 border rounded-xl shadow-sm text-sm leading-4 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2'
                                >
                                    {!loading && !photo && <p>Upload <br /> Cover Image</p>}
                                    {loading && <BeatLoader color='#7B27CC' loading={true} />}
                                    {!loading && photo && <img src={photo} className='h-32 w-32' alt="Cover Image" />}
                                </label>
                            </div>
                        </div>
                        <div className="w-1/2 lg:w-1/3 lg:px-10  flex-col items-center">
                            <label htmlFor="numberSelect" className="block text-sm font-medium text-white mb-2 mt-10">
                                Select no. Parts
                            </label>
                            <select id="numberSelect" name="numberSelect"
                                value={part}
                                onChange={(e) => {setPart(e.target.value)}}
                                className="block w-full bg-[#ffffff10] text-white rounded-2xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2 text-base">
                                {Array.from({ length: 6 }, (_, i) => (
                                    <option className="bg-gray-900 text-white" key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="m-[1px]">
                        {
                            Array.from({ length: part }).map((_, key) => (
                                <div key={key} className="border-1 border-gray-400 rounded-2xl my-2 p-2">
                                    <p>Part {key+1}</p>
                                    <AudioIntput key={key} i={key} audio={audio} setAudio={setAudio}/>                                
    
                                </div>
                            ))
                        }
                    </div>
                    
                    <button
                        type="submit"
                        className="cursor-pointer w-full mt-2 py-3 bg-[#8A2BE2] hover:bg-[#7B27CC] rounded-lg font-semibold transition-colors duration-200"
                    >
                        <i class="fa-solid fa-cloud-arrow-up mr-2"></i> Publish
                    </button>
                </form>
            </div>
        </div>
    )
}
