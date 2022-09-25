import { Box, Stack } from "@mui/material"
import styled from "styled-components"

type Props = {
    imageUrl: string;
    userName: string;
    fullName: string;
    onClick: () => void;
}

export const UserCard = ({ imageUrl, userName, fullName, onClick }: Props) => {
    return (
        <Box justifyContent="center" onClick={onClick}
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
                <SIcon src={imageUrl} alt={userName} />
                <SNickName>{userName}</SNickName>
                <SFullName>{fullName}</SFullName>
            </Stack>
        </Box >
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