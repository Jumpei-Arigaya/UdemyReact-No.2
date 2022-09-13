import styled from 'styled-components'
import { BaseButton } from './BaseButton'


export const PrimaryButton = ({ children }) => {
    return (
        <div>
            <SButton>{children}</SButton>
        </div>
    )
}

const SButton = styled(BaseButton)`
    background-color: #40514e;
    color: white;
`
