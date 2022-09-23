import { HeaderLayout } from "../templates/HeaderLayout"
import { Box, Grid, Stack } from "@mui/material"
import styled from "styled-components"

export const UserManagement = () => {
    return (
        <>
            <HeaderLayout />
            <Grid container>
                <Box justifyContent="center"
                    sx={{
                        width: 260,
                        height: 260,
                        backgroundColor: 'gray',
                        display: 'flex',
                        flexDirection: 'row',
                        margin: 1,
                        padding: 2,
                        borderRadius: 2,
                        '&:hover': {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                            cursor: 'pointer'
                        },
                    }}
                >
                    <Stack>
                        <SIcon src="https://source.unsplash.com/random" alt="プロフィール画像" />
                        <SNickName>あり</SNickName>
                        <SFullName>jumpei arigaya</SFullName>
                    </Stack>
                </Box >
            </Grid >
        </>
    )
}

const SIcon = styled.img`
    border-radius: 50%;
    width:140px;
    height:140px;
    justify-content: center;
`
const SNickName = styled.p`
    text-align: center;
    font-weight: bold;
    color: #ffffff;
    margin-top: 8px;
    font-size: large;
`
const SFullName = styled.p`
    text-align: center;
    font-size: small;
    color: azure;
`