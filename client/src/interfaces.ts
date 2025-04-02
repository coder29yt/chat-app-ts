export interface User {
    id: string,
    username: string,
}

export interface LoginProps {
    onLogin: (username: string) => void
}

export interface ChatProps {
    currentUser: User | null,
    onLogout: (username: string) => void
}

export interface Message {
    id: string,
    message: string,
    user: User,
    timestamp: Date
}

export interface HeaderProps {
    currentUser: User | null,
    users: User[],
    onLogout: (username: string) => void
}

export interface NotificationProps {
    type: "join" | "leave" | "message",
    text: string
}

export interface SidebarProps {
    users: User[],
    currentUser: User
}

export interface MessageCompProps {
    user: User,
    socket: any,
    message: string,
    timestamp: Date
}