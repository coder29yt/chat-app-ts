import { FiLogOut, FiUserPlus } from "react-icons/fi"
import { NotificationProps } from "../../interfaces"

const Notification = ({ text, type }: NotificationProps) => {
    return (
        <div className={`text-center py-2 text-sm font-medium animate-fade-in flex items-center justify-center space-x-2 ${type === "join" ? "bg-green-100 text-green-800" : type === "leave" ? "bg-amber-100 text-amber-800" : "bg-blue-100 text-blue-800"}`}>
            {
                type === "join" ? <FiUserPlus className="h-4 w-4" /> : <FiLogOut className="h-4 w-4" />
            }
            <span>{text}</span>
        </div>
    )
}

export default Notification