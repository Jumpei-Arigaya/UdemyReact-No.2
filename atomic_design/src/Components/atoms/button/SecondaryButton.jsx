import React from 'react'
import styled from 'styled-components'
import { BaseButton } from './BaseButton'


export const SecondaryButton = ({ children, onClick }) => {
    return (
        <div>
            <SButton onClick={onClick}>{children}</SButton>
        </div>
    )
}

const SButton = styled(BaseButton)`
    background-color: #11999e;
    color: white;
    `
