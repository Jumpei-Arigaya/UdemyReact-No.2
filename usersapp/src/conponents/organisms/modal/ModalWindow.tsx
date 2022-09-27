import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { User } from '../../../types/api/user';
import { useLoginUser } from '../../../hooks/useLoginUser';
import { ChangeEvent, useEffect, useState } from 'react';

type Props = {
    isOpen: boolean;
    onClose: boolean;
    onClick: () => void;
    user: User | null;
}

export const FormDialog = ({ isOpen, onClose, onClick, user }: Props) => {

    const { loginUser } = useLoginUser();
    const onClickUpdata = () => alert();
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        setUsername(user?.username ?? '');
        setName(user?.name ?? '');
        setEmail(user?.email ?? '');
        setPhone(user?.phone ?? '');
    }, [user])

    const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);

    console.log(username)

    return (
        <div>
            <Dialog open={isOpen} onClose={onClick}>
                <DialogTitle>ユーザー詳細</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="名前"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={username}
                        disabled={!(loginUser?.isAdmin)}
                        onChange={onChangeUsername}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="フルネーム"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={name}
                        disabled={!(loginUser?.isAdmin)}
                        onChange={onChangeName}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Mail"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={email}
                        disabled={!(loginUser?.isAdmin)}
                        onChange={onChangeEmail}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="TEL"
                        type="phone"
                        fullWidth
                        variant="standard"
                        value={phone}
                        disabled={!(loginUser?.isAdmin)}
                        onChange={onChangePhone}
                    />
                </DialogContent>
                {loginUser?.isAdmin &&
                    <DialogActions>
                        <Button onClick={onClick} >閉じる</Button>
                        <Button onClick={onClickUpdata} >更新</Button>
                    </DialogActions>
                }
            </Dialog>
        </div >
    );
}
