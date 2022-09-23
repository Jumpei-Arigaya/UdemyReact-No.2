import { AlertColor } from '@mui/material';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { User } from "../types/api/user";
import { useState } from "react";

type Props = {
    message: string;
    severity: AlertColor;
    status: string;
}

export const useAuth = () => {
    const [alertStatus, setAlertStatus] = useState<Props>();
    const [loading, setLoading] = useState(false);
    const navigater = useNavigate();
    const login = (id: string) => {
        setLoading(true);
        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
            if (res.data) {
                navigater("/home")
            } else {
                alert("ユーザーが存在しません")
            }
        }).catch(() => {
            setAlertStatus((prevState) => ({ ...prevState, message: "ログインに失敗しました", severity: "error", status: "error" }))
        }).finally(
            () => setLoading(false));
    }
    return { login, loading, alertStatus }
}