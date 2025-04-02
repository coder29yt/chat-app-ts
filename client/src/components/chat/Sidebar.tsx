import { GetUserIcon } from "../../helpers"
import { SidebarProps } from "../../interfaces"

const Sidebar = ({ users, currentUser }: SidebarProps) => {
    return (
        <div className="hidden md:block w-64 border-r border-gray-200">
            <div className="p-4">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Active Member - {users.length} </h3>

                <div className="space-y-1">
                    {
                        users.map((user) => (
                            <div key={user.id} className={`flex items-center space-x-3 px-3 py-2 rounded-lg ${user.id === currentUser.id ? "bg-violet-50 text-violet-700" : "text-gray-700 hover:bg-gray-50"}`}>
                                <div className="relative">
                                    <GetUserIcon name={currentUser.username} size={6} />
                                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white"></div>
                                </div>
                                <div>
                                    <p className="text-sm font-medium">
                                        {user.username}
                                        {user.id === currentUser.id && "(You)"}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar