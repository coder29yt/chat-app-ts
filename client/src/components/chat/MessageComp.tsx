import { BsCheck2All } from "react-icons/bs"
import { GetUserIcon } from "../../helpers"
import { MessageCompProps } from "../../interfaces"

const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    })
}

const MessageComp = ({ user, message, timestamp, socket }: MessageCompProps) => {
    return (
        <div className={`flex ${user.id === socket.id ? "flex-row-reverse" : ""} space-x-2 max-w-sx md:max-w-md`}>
            <div className="rounded-full overflow-hidden">
                <GetUserIcon name={user.username} size={8} />
            </div>
            <div className={`rounded-xl mr-2 p-3 shadow-sm ${user.id === socket.id ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-none" : "bg-white border border-slate-200 rounded-bl-none"}`}>
                <div className="flex items-baseline space-x-2 mb-1">
                    <span className={`text-xs font-medium ${user.id === socket.id ? "text-blue-100" : "text-slate-600"}`}>
                        {user.username}
                        {user.id === socket.id && "(You)"}
                    </span>
                    <span className={`text-xs ${user.id === socket.id ? "text-blue-200" : "text-slate-400"}`}>
                        {formatTime(timestamp)}
                    </span>
                </div>
                <p className="text-sm">{message}</p>
                {
                    user.id === socket.id && <div className="flex justify-end mt-1">
                        <BsCheck2All className="h-3 w-3 text-blue-200" />
                    </div>
                }
            </div>
        </div>
    )
}

export default MessageComp