import React from 'react'
import { Header } from '../atoms/layout/Header'

export const HeaderOnly = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
