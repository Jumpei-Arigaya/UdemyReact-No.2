import React from 'react'
import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { Input } from '../atoms/Input/Input'
import styled from 'styled-components'

export const SearchInput = () => {
    return (
        <div>
            <Input placeholder="検索条件を入力" />
            <SButtonWrapper>
                <PrimaryButton>検索</PrimaryButton>
            </SButtonWrapper>
        </div>
    )
}

const SButtonWrapper = styled.div`
    padding-left: 8px;
`