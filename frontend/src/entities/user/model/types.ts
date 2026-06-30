export interface User {
    username: string;
    role: string;
}

export interface UserResponse {
    data: User;
}

export interface UserPayload {
    username: string;
    password: string;
}
