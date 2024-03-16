import { User } from "./user";

export interface Message {
    id: string,
    user: User,
    content: string,
    sendTime: Date
}
