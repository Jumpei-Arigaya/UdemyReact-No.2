import axios from "axios";
import { useCallback } from "react"
import { useNavigate } from "react-router-dom";
import { User } from "../types/api/user";
import { useState } from "react";

export const useAuth = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigater = useNavigate();
    const login = useCallback((id: string) => {
        setLoading(true);
        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
            if (res.data) {
                navigater("/home")
            } else {
                alert("ユーザーが存在しません")
            }
        }).catch(() => alert("ログインに失敗しました")).finally(() => setLoading(false));
    }, [navigater])
    return { login, loading }
}