"use client"
import Link from "next/link"
import {Eye, EyeOff} from "lucide-react"
import { useState, useEffect } from "react"

export default function Login() {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [isEye, setIsEye] = useState(true);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setDisabled(!(email.length > 0 && password.length > 0 && name.length > 0));
    }, [email, password, name])

    const handlePassword = () => {
        setIsEye(!isEye);
    }


    return (
        <>
            <main className="grid place-content-center min-h-screen bg-gradient-to-t from-purple-400">
                <div className="flex flex-col p-10 bg-white rounded-lg items-center">
                    <header className="text-center text-slate-800 font-bold text-2xl">
                        Welcome to <span className="text-purple-600">Workflo!</span>
                    </header>
                    <form className="flex flex-col bg-white">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="bg-gray-200 m-3 outline-none text-gray-600 text-xs p-2 w-72 rounded-lg"
                    />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your Email"
                            className="bg-gray-200 m-3 outline-none text-gray-600 text-xs p-2 w-72 rounded-lg"
                        />
                        <div className="flex m-3" style={{ position: 'relative' }}>
                            <input 
                                type={isEye ? "password" : "text"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="bg-gray-200 outline-none text-gray-600 text-xs p-2 w-72 rounded-lg"
                            />
                            <div className="cursor-pointer grid place-content-center m-2 absolute right-2 top-1/4 transform -translate-y-1/2">
                                {isEye ? <Eye size={15} strokeWidth={0.6} onClick={handlePassword} /> : <EyeOff size={15} strokeWidth={0.6} onClick={handlePassword} />}
                            </div>
                        </div>
                    </form>
                    <button className="w-72 bg-purple-800 m-3 text-xs rounded-lg p-2 text-white" style={{backgroundColor: disabled? "thistle" : "purple"}} disabled={disabled}>Sign Up</button>
                    <div className="text-xs m-3 text-center">Already have an account? <a className="text-purple-800" href="#">Log in.</a></div>
                </div>
            </main>
        </>
    )
}