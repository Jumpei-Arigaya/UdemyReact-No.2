import { useLoginUser } from './useLoginUser';
import { useMessage } from './useMessage';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { User } from "../types/api/user";
import { useState } from "react";

export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const navigater = useNavigate();
    const { showMessage } = useMessage();
    const { setLoginUser } = useLoginUser();

    const login = (id: string) => {
        setLoading(true);
        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
            if (res.data) {
                navigater("/home");
                const isAdmin = res.data.id === 10 ? true : false;
                setLoginUser({ ...res.data, isAdmin });
                showMessage({ title: "ログインに成功しました", severity: "success" });
            } else {
                alert("ユーザーが存在しません")
            }
        }).catch(() => {
            showMessage({ title: "ログインに失敗しました", severity: "error" });
        }).finally(
            () => setLoading(false));
    }
    return { login, loading }
}