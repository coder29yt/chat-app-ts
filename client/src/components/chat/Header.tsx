import { RiMessage2Fill } from "react-icons/ri"
import { HeaderProps } from "../../interfaces"
import { GetUserIcon } from "../../helpers"
import { FiLogOut } from "react-icons/fi"
import { BsCircleFill } from "react-icons/bs"

const Header = ({ currentUser, users, onLogout }: HeaderProps) => {
    return (
        <header className="bg-white border-b border-gray-200 shadow-sm">
            <div className="px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* App Brand */}
                    <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-violet-500 to-indigo-500 p-2 rounded-xl shadow-lg shadow-indigo-500/20">
                            <RiMessage2Fill className="h-5 w-5 text-white" />
                        </div>
                        <h1 className="text-xl font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">TeamSpace</h1>
                    </div>

                    {/* User Profile */}
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-3 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                            <div className="relative">
                                <GetUserIcon name={currentUser?.username} size={7} />
                                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white"></div>
                            </div>
                            <span className="text-sm font-medium text-gray-700">{currentUser?.username}</span>
                        </div>

                        <button onClick={() => onLogout(currentUser?.username)} className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-all">
                            <FiLogOut className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Online Users Bar */}
            <div className="px-4 py-2 bg-white border-2 border-gray-100 flex items-center space-x-2 overflow-x-auto">
                <div className="flex -space-x-2 mr-3">
                    {
                        users.slice(0, 5).map((user) => {
                            return (
                                <div key={user.id} className="relative group">
                                    <div className="w-8 h-8 rounded-full ring-2 ring-white">
                                        <GetUserIcon name={user.username} size={8} />
                                    </div>
                                </div>
                            )
                        })
                    }

                    {
                        users.length > 5 && <div className="w-8 h-8 rounded-full ring-2 ring-white bg-gray-100 flex items-center justify-center">
                            <span className="text-xs font-medium text-gray-500">+{users.length - 5}</span>
                        </div>
                    }
                </div>
                <div className="h-4 w-px bg-gray-200"></div>
                <span className="text-sm text-gray-500 flex items-center">
                    <BsCircleFill className="h-2 w-2 text-emerald-500 mr-2" />
                    {users.length} online
                </span>
            </div>
        </header>
    )
}

export default Header