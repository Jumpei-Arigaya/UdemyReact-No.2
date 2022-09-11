import React from 'react'
import styled from 'styled-components'

export const UserIconWithName = ({ user }) => {
    return (
        <SContainer>
            <SImage height={160} width={160} src={`${process.env.PUBLIC_URL}/${user.image}`} alt="プロフィール" />
            <SName>{user.name}</SName>
        </SContainer>
    )
}
const SContainer = styled.div`
    text-align: center;
`;

const SImage = styled.img`
    border-radius: 50%;
`;

const SName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #40514e;
`;
