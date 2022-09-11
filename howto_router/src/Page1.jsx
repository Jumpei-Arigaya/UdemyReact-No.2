import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Page1 = () => {

    const navigate = useNavigate();
    const onClickDetailA = () => navigate('detailA', { state: arr })

    const arr = [...Array(100).keys()];
    return (
        <div>
            <h1>Page1ページです</h1>
            <Link to="/page1/detailA" state={arr}>DetailaA</Link>
            <br />
            <Link to="/page1/detailB">DetailaB</Link>
            <br />
            <button onClick={onClickDetailA}>DetailA</button>
        </div>
    )
}
