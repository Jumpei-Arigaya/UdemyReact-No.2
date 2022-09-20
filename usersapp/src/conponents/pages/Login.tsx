import styled from "styled-components"
import { ChangeEvent, SetStateAction, useRef, useState } from "react";

export const Login = () => {
    const [userId, setUserId] = useState('');
    const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);


    return (

        <Formarea className="container-sm mt-5">
            <h1>ユーザー管理アプリ</h1>
            <hr />
            <input className="form-control w-50" type="text" placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
            <button className="btn btn-info w-50 mt-3">ログイン</button>
        </Formarea>
    )
}

const Formarea = styled.form`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    height: 50%;
    background-color: #cacfdf;
    border-radius: 20px;
    
`



