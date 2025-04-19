import React, { use, useEffect, useState } from 'react'

export default function AudioIntput({ i, audio, setAudio }) {
    const [storyName, setStoryName] = useState("");
    const [audioUrl, setAudioUrl] = useState("");
    const [duration, setDuration] = useState("");


    const [uploading, setUploading] = useState(false);


    const handleAudioChange = async (e) => {
        const filee = e.target.files[0];
        if (!filee)
            return;
        setUploading(true);

        //Calculate duration
        const audio = new Audio(URL.createObjectURL(filee));
        audio.addEventListener("loadedmetadata", () => {
            const totalSeconds = Math.floor(audio.duration);
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;

            const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            setDuration(formatted);
        });

        //Upload to Cloudinary
        const data = new FormData()
        data.append("file", filee)
        data.append("upload_preset", "first_preset")
        data.append("cloud_name", "dv7rknqkk")


        try {
            const res = await fetch("https://api.cloudinary.com/v1_1/dv7rknqkk/auto/upload", {
                method: "POST",
                body: data
            })
            const resdata = await res.json();
            setAudioUrl(resdata.secure_url);
            setUploading(false);
            console.log("successfull : ", audioUrl);
        } catch (error) {
            console.error("Upload error:", error);
            setUploading(false);
        }
    };


    useEffect(() => {
        while (i >= audio.length) {
            audio.push({
                storyName: "",
                audioUrl: "",
                duration: ""
            })
        }
        const tempAudio = audio;
        tempAudio[i]['storyName'] = storyName;
        tempAudio[i]['audioUrl'] = audioUrl;
        tempAudio[i]['duration'] = duration;
        setAudio(tempAudio);
    }, [storyName, audioUrl, duration]);


    return (
        <div className='w-full'>

            <input
                type="text"
                value={storyName}
                onChange={(e) => setStoryName(e.target.value)}
                className="w-full mt-1 px-4 py-3 rounded-lg bg-[#ffffff10] border border-[#ffffff20] focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]"
                placeholder="Enter Part Name"
            />
            <div className='flex justify-center items-center pt-5'>
                <p>Choose Audio File</p>
                <input
                    type="file"
                    accept="audio/*"
                    onChange={handleAudioChange}
                    className="block ml-5 w-fit text-sm text-white
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-2xl cursor-pointer file:border-0
                   file:text-sm file:font-semibold
                   file:bg-indigo-50 file:text-purple-600
                   hover:file:bg-indigo-100"
                />
            </div>
            <div>
                <div className='max-w-md w-full mx-auto flex items-center justify-center'>
                    {uploading && <p className="text-white font-semibold mx-auto">Uploading...</p>}
                    {audioUrl && !uploading && <p className="text-white font-semibold mx-auto">Upload Successful</p>}
                </div>

            </div>

        </div>
    )
}
