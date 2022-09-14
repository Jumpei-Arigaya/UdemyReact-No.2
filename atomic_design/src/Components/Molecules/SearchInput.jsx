import React from 'react'
import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { Input } from '../atoms/Input/Input'
import styled from 'styled-components'
import { memo } from 'react'

export const SearchInput = memo(() => {
    return (
        <SContainer>
            <Input placeholder="検索条件を入力" />
            <SButtonWrapper>
                <PrimaryButton>検索</PrimaryButton>
            </SButtonWrapper>
        </SContainer>
    )
})

const SButtonWrapper = styled.div`
    padding-left: 8px;
`
const SContainer = styled.div`
    display: flex;
    align-items: center;
`