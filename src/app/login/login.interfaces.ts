import { User } from "../shared/interfaces/user.interface";

export interface LoginResponse {
    usuario: User,
    token: string,
}