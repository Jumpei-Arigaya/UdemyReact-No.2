import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type Props = {
    isOpen: boolean;
    onClose: boolean;
    onClick: () => void;
}

export const FormDialog = ({ isOpen, onClose, onClick }: Props) => {

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
                        value="あり"
                        disabled={true}

                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="フルネーム"
                        type="text"
                        fullWidth
                        variant="standard"
                        value="jumpei arigaya"
                        disabled={true}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Mail"
                        type="email"
                        fullWidth
                        variant="standard"
                        value="a@gmail.com"
                        disabled={true}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="TEL"
                        type="phone"
                        fullWidth
                        variant="standard"
                        value="000-1234-5667"
                        disabled={true}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClick} >閉じる</Button>
                    <Button onClick={onClick} disabled={true}>修正</Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}
