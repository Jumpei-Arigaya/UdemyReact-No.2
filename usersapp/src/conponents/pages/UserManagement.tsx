import { HeaderLayout } from "../templates/HeaderLayout"
import { Grid } from "@mui/material"
import { UserCard } from "../organisms/user/UserCard"
import { useAllUsers } from "../../hooks/useAllUsers"
import { useEffect, useState } from "react"
import SimpleBackdrop from "../atoms/SimpleBackdrop"
import { FormDialog } from "../organisms/modal/ModalWindow"

export const UserManagement = () => {
    const { getUsers, users, loading } = useAllUsers();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    // eslint-disable-next-line
    useEffect(() => getUsers(), []);

    const onClickUser = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)

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
                                fullName={user.name}
                                onClick={onClickUser}
                            />
                        </div>
                    )}
                </Grid >
            }
            <FormDialog isOpen={isOpen} onClose={true} onClick={handleClose} />
        </>
    )
}

