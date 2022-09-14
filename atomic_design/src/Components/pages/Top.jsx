import React from 'react'
import styled from 'styled-components'
import { SecondaryButton } from '../atoms/button/SecondaryButton'
import { DefaultLayout } from '../templates/DefaultLayout'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../providers/UserProvider'
import { useContext } from 'react'
import { useSetRecoilState } from 'recoil'
import { userState } from '../../store/userState'

export const Top = () => {

    // eslint-disable-next-line
    // const { userInfo, setUserInfo } = useContext(UserContext);
    const setUserInfo = useSetRecoilState(userState);
    const navigate = useNavigate();
    const onClickAdmin = () => {
        setUserInfo({ name: "じゅん", isAdmin: true });
        navigate('/users');
    }
    const onCliclkGeneral = () => {
        setUserInfo({ name: "あり", isAdmin: false });
        navigate('/users');
    }

    return (

        <>
            <DefaultLayout />
            <SContainer>
                <h2>TOPページです</h2>
                <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
                <br />
                <br />
                <SecondaryButton onClick={onCliclkGeneral}>一般ユーザー</SecondaryButton>
            </SContainer>

        </>
    )
}

const SContainer = styled.div`
    text-align: center;

`
