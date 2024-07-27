import Link from "next/link"

export default function Login() {
    return (
        <>
            <main className="grid place-content-center min-h-screen bg-gradient-to-t from-purple-400">
                <div className="flex flex-col p-10 bg-white rounded-lg ">
                <header className="text-center text-slate-800 font-bold text-2xl">
                    Welcome to <span className="text-purple-600">Workflo!</span>
                </header>
                    <form className="flex flex-col bg-white items-centre">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-gray-200 m-3 outline-none text-gray-600 text-xs p-2 w-72 rounded-lg"
                        />
                        <input 
                            type="password"
                            placeholder="Password"
                            className="bg-gray-200 m-3 outline-none text-gray-600 text-xs p-2 w-72 rounded-lg"
                        />
                    </form>
                    <button className="w-72 bg-purple-800 m-3 text-xs rounded-lg p-2 text-white">Login</button>
                </div>
            </main>
        </>
    )
}