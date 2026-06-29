import { AuthApi } from "@/entities/user/model/api";
import { useState } from "react";

export const LoginForm = ({onClose}: {onClose: () => void}) => {
    
    const [authData, setAuthData] = useState<{login: string; password: string}>({
        login: "",
        password: ""
    });

    const LoginHandle = async () => {
        console.log(authData);
        await AuthApi.login({
            username: authData.login,
            password: authData.password 
        })
    }

    return (
        <form className="flex flex-col gap-3 text-white mt-9 p-3">
            <input type="text" className="rounded-lg border p-1 shadow-sm" onChange={(e) => {
                setAuthData({...authData, login: e.target.value})
            }} value={authData.login}/>
            <input type="text"  className="rounded-lg border p-1 shadow-sm" onChange={(e) => {
                setAuthData({...authData, password: e.target.value})
            }} value={authData.password}/>
            <button onClick={(e) => {
                e.preventDefault();
                LoginHandle();
                onClose?.();
            }}>Enter</button>

        </form>
    )
}
