import { useState } from "react"
import { LoginProps } from "../interfaces";

const Login = ({ onLogin }: LoginProps) => {

    const [username, setUsername] = useState<string>("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.trim()) {
            onLogin(username)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-50 p-4 ">

            <div className="w-full max-w-md bg-white rounded-xl shadow-xl shadow-black/5 overflow-hidden">

                {/* Left side gradient section */}
                <div className="h-2 bg-gradient-to-r from-blue-500 to-violet-500">
                </div>

                <div className="px-8 py-12">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-slate-800">Welcome to TeamSpaces</h1>
                        <p className="mt-2 text-slate-600">Join the conversation</p>
                    </div>

                    {/* Login form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="username" className="block text-sm font-medium text-slate-700">Choose a username</label>
                            <div className="relative">
                                <input type="text" id="username" placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 placeholder:text-slate-400" required />
                                {
                                    username && <div className="absolute right-10 top-1/2 -translate-y-1/2">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                    </div>
                                }
                            </div>
                        </div>
                        <button disabled={!username.trim()} type="submit" className="w-full px-4 py-3 text-white font-medium bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shdow-none">Join Chat</button>
                    </form>

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-slate-100">
                        <p className="text-center text-sm text-slate-500">By joining, you agree to our
                            <a href="#" className="text-blue-500 hover:text-blue-600 mx-1">Terms</a>
                            and
                            <a href="#" className="text-blue-500 hover:text-blue-600 ml-1">Privacy Policy</a>
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Login