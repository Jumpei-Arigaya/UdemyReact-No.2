import React from 'react'

export const HeaderOnly = ({ children }) => {
    return (
        <>
            <div style={{
                height: "50px", backgroundColor: "red"
            }}>
            </div >
            {children}
        </>
    )
}
