import { useUserStore } from "@/entities/user";
import { useState } from "react";

export const LoginForm = ({onClose}: {onClose: () => void}) => {
    
    const [authData, setAuthData] = useState<{login: string; password: string}>({
        login: "",
        password: ""
    });

    const login = useUserStore((s) => s.login);
    const getMe = useUserStore((s) => s.getMe);

    const LoginHandle = async () => {
        await login(authData.login, authData.password );
        await getMe();
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
