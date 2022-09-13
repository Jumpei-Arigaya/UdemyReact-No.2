import React from 'react'
import styled from 'styled-components'
import { HeaderOnly } from '../templates/HeaderOnly'
import { SearchInput } from '../Molecules/SearchInput'
import { UserCard } from '../Organisms/user/UserCard';

const users = [...Array(15).keys()].map((val) => {
    return {
        id: val,
        image: "girl.jpg",
        name: `あり-${val}`,
        mail: "1234@gmail.com",
        tell: "090-1111-2222",
        company: "あいうえお株式会社",
        web: "abcd.co.jp"
    }
});

export const Users = () => {
    return (
        <>
            <HeaderOnly />
            <SContainer>
                <h2>ユーザー一覧です</h2>
                <SearchInput />
                <SUserArea>
                    {users.map((user) => {
                        return (
                            <UserCard key={user.id} user={user} />
                        )
                    })}
                </SUserArea>
            </SContainer>
        </>
    )
}

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;

`

const SUserArea = styled.div`
    padding: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`