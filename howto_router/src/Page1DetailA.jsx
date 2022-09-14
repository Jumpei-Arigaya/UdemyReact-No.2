import { useLocation, useNavigate } from 'react-router-dom'

import React from 'react'

export const Page1DetailA = () => {

    const navigate = useNavigate();
    const onClickBack = () => navigate(-1);

    const location = useLocation();
    console.log(location);
    return (
        <div>
            Page1DetailAページです
            <button onClick={onClickBack}>戻る</button>
        </div>
    )
}
