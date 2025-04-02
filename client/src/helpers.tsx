export const GetUserIcon = ({ name, size = 8 }: { name: any, size: number }) => {
    const colors = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-amber-500", "bg-rose-500"]
    const firstLetter = name.charAt(0).toUpperCase();
    const colorIndex = firstLetter.charCodeAt(0) % colors.length

    const sizeClasses = {
        7: "w-7 h-7",
        8: 'w-8 h-8',
        10: 'w-10 h-10'
    }[size] || "w-8 h-8"

    return <div className={`${colors[colorIndex]} ${sizeClasses} rounded-full flex items-center justify-center text-white font-medium text-sm`}>
        {firstLetter}
    </div>

}