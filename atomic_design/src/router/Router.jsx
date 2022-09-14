import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Users } from '../Components/pages/Users'
import { Top } from '../Components/pages/Top'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Top />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </BrowserRouter>
    )
}
