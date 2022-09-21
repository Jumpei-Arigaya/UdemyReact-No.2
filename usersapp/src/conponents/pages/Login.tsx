import styled from "styled-components"
import { ChangeEvent, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
    const [userId, setUserId] = useState('');
    const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
    const { login, loading } = useAuth();
    const onClickLogin = () => login(userId);
    return (
        <SFormarea className="container-sm mt-5">
            <h1>ユーザー管理アプリ</h1>
            <hr />
            <input className="form-control w-50" type="text" placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
            <button className="btn btn-info w-50 mt-3" disabled={false} onClick={onClickLogin}>ログイン</button>
            {{ loading } ? <p>a</p> : <p>v</p>}
        </SFormarea>
    )
}

const SFormarea = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    height: 50%;
    background-color: #c1cad5;
    border-radius: 10px;
    
`



