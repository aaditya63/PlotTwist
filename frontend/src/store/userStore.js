import { create } from 'zustand'
import axios from 'axios'
import { toast } from "react-toastify";


export const UserStore = create((set, get) => ({

    loggedIn: false,
    AuthChecked: false,
    user: null,
    story: [],
    loading: false,

    signup: async ({ name, email, password, photo }) => {
        try {
            const res = await axios.post(`http://localhost:5000/api/user/signup`, { name, email, password, photo });
            toast.success("Registration Successfull!");
        } catch (error) {
            console.log("Failed to  Call!");
            toast.error("Registration Failed!");
        }
    },
    login: async ({ email, password }) => {
        set({ loading: true });
        try {
            const res = await axios.post(`http://localhost:5000/api/user/login`, { email, password }, {
                withCredentials: true
            });
            set({ user: res.data.user });
            set({ loggedIn: true });
            set({ AuthChecked: true });
            toast.success("Login Successfull!");
            set({ loading: false })
        } catch (error) {
            toast.error("Registration Failed!");
            set({ loading: false })
        }
    },

    //Check,.. Login with Cookie
    checkingAuth: async () => {
        if (get().AuthChecked)
            return;
        set({ AuthChecked: true });
        try {
            const res = await axios.get(`http://localhost:5000/api/user/check-auth`, {
                withCredentials: true
            });
            if (res.data.success) {
                set({ user: res.data.user });
                set({ loggedIn: true });
            }
        } catch (error) {
            console.log("Failed to  Call!");
        }
    },

    //Logout function
    logout: async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/user/logout`, {
                withCredentials: true
            });
            set({ user: null });
            set({ loggedIn: false });
            toast.success("Logout Successful")
        } catch (error) {
            console.log("Failed to  Logout!");
        }
    },

    uploadStory: async (title,description,photo,audio) => {
        set({ loading: true });
        try {
            const res = await axios.post(`http://localhost:5000/api/story/upload`, { title,description,photo,audio }, {
                withCredentials: true
            });
            if(res.data.success == false)
                toast.error("Failed to upload Story!");
            else toast.success("Story Upload Successfull!");
            set({ loading: false })
        } catch (error) {
            toast.error("Failed to Upload Story");
            set({ loading: false })
        }
    }
}))