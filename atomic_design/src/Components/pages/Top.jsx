import React from 'react'
import styled from 'styled-components'
import { DefaultLayout } from '../templates/DefaultLayout'

export const Top = () => {
    return (
        <>
            <DefaultLayout />
            <SContainer>
                <h2>TOPページです</h2>
            </SContainer>

        </>
    )
}

const SContainer = styled.div`
    text-align: center;

`