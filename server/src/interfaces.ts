export interface User {
    id: string,
    username: string
}

export interface Message {
    user: User,
    message: string,
    timestamp: Date
}