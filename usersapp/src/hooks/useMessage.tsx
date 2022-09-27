import { render } from "@testing-library/react"
import { useCallback, useState } from "react"
import { Snackbar, Alert } from "@mui/material"

type Props = {
    title: string;
    severity: "error" | "warning" | "info" | "success"
}

export const useMessage = () => {
    const [open, setOpen] = useState(true)
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const showMessage = useCallback(({ title, severity }: Props) => {
        render(
            < Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert severity={severity} sx={{ width: '100%' }}>
                    {title}
                </Alert>
            </Snackbar >
        )
    }, [])
    return { showMessage }
}
