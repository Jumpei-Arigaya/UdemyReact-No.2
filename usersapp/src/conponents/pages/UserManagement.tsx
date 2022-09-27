import { HeaderLayout } from "../templates/HeaderLayout"
import { Grid } from "@mui/material"
import { UserCard } from "../organisms/user/UserCard"
import { useAllUsers } from "../../hooks/useAllUsers"
import { useCallback, useEffect, useState } from "react"
import SimpleBackdrop from "../atoms/SimpleBackdrop"
import { FormDialog } from "../organisms/modal/ModalWindow"
import { useSelectUsers } from "../../hooks/useSelectUsers"

export const UserManagement = () => {
    const { getUsers, users, loading } = useAllUsers();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { onSelectUser, selectedUser } = useSelectUsers();

    // eslint-disable-next-line
    useEffect(() => getUsers(), []);

    const onClickUser = useCallback((id: number) => {
        onSelectUser({ id, users });
        setIsOpen(true)
    }, [users, onSelectUser])

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
                                id={user.id}
                                imageUrl={"https://source.unsplash.com/random"}
                                userName={user.username}
                                fullName={user.name}
                                onClick={onClickUser}
                            />
                        </div>
                    )}
                </Grid >
            }
            <FormDialog isOpen={isOpen} onClose={true} onClick={handleClose} user={selectedUser} />
        </>
    )
}

