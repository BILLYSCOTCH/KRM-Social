"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect } from "react";



export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email:"",
        password:"",
        
    })

    const[buttonDisabled, setButtonDisabled] = React.useState(false);
    const[loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            router.push("/profile");
            toast.success("Login successfully");

        } catch (error: any) {
            console.log("Login failed", error.message)
            toast.error("Login failed");

        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        if(user.email.length > 0 && user.email.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user])


    return (
        <div className="flex flex-col items-center justify-center 
        min-h-screen py-2">
            <h1>{loading ? "Processing" : "Login"}</h1>
            <hr />

            <label htmlFor="username">email</label>
            <input
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="email"
                className="p-2 border border-gray-300 rounded-lg mb-4
                focus:outline-none focus:border-indigo-500 text-black"
            />

            <label htmlFor="username">password</label>
            <input
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password"
                className="p-2 border border-gray-300 rounded-lg mb-4
                focus:outline-none focus:border-indigo-500 text-black"
            />

            <button 
            onClick={onLogin}
            className="p-2 border border-gray-300 rounded-lg
            mb-4 focus:outline-none focus:border-gray-600">
                {buttonDisabled ? "No Login" : "Login here"}
            </button>
            
            <Link href="/signup">Visit Signup page</Link>
        </div>
    )
} 