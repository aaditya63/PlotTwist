import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import { UserStore } from "../store/userStore";


export const SignupPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [photo, setPhoto] = useState('');
    
    
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const signup = UserStore((state) => state.signup);


    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file)
            return
        setLoading(true);
        const data = new FormData()
        data.append("file", file)
        data.append("upload_preset", "first_preset")
        data.append("cloud_name", "dv7rknqkk")

        console.log(data);

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
        if(name.trim() === "" || email.trim() === "" || password.trim() === "" || photo.trim() === ""){
            toast.info("All Feilds are required!")
            return;
        }
        if(loading){
            toast.info("Image is not uploaded!");
            return;
        }
        
        signup({name,email,password,photo})
        setName("");
        setEmail("");
        setPassword("");
        setPhoto("");

        navigate('/login')
    };

    return (
        <div className="min-h-screen bg-[#121212] text-white pt-20 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-[#1A1A1A] p-8 rounded-2xl shadow-lg border border-[#ffffff10]">
                <h2 className="text-3xl font-bold text-center mb-6">
                    <i className="fas fa-user-plus text-[#8A2BE2] mr-2"></i> Sign Up
                </h2>
                <form className="space-y-4" onSubmit={handleSignupSubmit}>
                    <div>
                    <label className="block text-sm mb-1">Profile Image</label>
                        <div className='mt-1 w-full flex items-center justify-center h-20'>
                            <input type='file' id='image' className='sr-only' accept='image/*' onChange={handleImageChange} />
                            <label
                                htmlFor='image'
                                className='text-center overflow-hidden cursor-pointer text-wrap w-30 h-30 flex justify-center items-center bg-[#ffffff10] border-gray-700 border rounded-full shadow-sm text-sm leading-4 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2'
                            >
                                {!loading && !photo && <p>Upload <br /> Profile Image</p>}
                                {loading && <BeatLoader color='#7B27CC' loading={true} />}
                                {!loading && photo && <img src={photo} className='h-32 w-32' alt="Profle Image" />}
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-[#ffffff10] border border-[#ffffff20] focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]"
                            placeholder="Enter your name"
                        />
                    </div>
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
                            placeholder="Create a password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="cursor-pointer w-full py-3 bg-[#8A2BE2] hover:bg-[#7B27CC] rounded-lg font-semibold transition-colors duration-200"
                    >
                        <i className="fas fa-user-plus mr-2"></i> Sign Up
                    </button>
                </form>
                <p className="text-center text-gray-400 mt-4">
                    Already have an account? <span onClick={()=>navigate('/login')} className="text-[#8A2BE2] cursor-pointer hover:underline">Log In</span>
                </p>
            </div>
        </div>
    );
};