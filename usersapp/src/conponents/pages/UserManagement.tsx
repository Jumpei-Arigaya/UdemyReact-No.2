import { HeaderLayout } from "../templates/HeaderLayout"
import { Grid } from "@mui/material"
import { UserCard } from "../organisms/user/UserCard"
import { useAllUsers } from "../../hooks/useAllUsers"
import { useEffect } from "react"
import SimpleBackdrop from "../atoms/SimpleBackdrop"

export const UserManagement = () => {
    const { getUsers, users, loading } = useAllUsers();
    useEffect(() => getUsers(), []);
    return (
        <>
            <HeaderLayout />
            {loading ?
                <SimpleBackdrop /> :
                <Grid container>
                    {users.map((user) =>
                        <div key={user.id}>
                            <UserCard
                                imageUrl={"https://source.unsplash.com/random"}
                                userName={user.username}
                                fullName={user.name} />
                        </div>
                    )}
                </Grid >
            }
        </>
    )
}

