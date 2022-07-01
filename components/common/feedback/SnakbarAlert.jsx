import { Alert, Snackbar } from '@mui/material'
import React from 'react'


const SnakbarAlert = ({ open, handleClose, message, type }) => {

    const onSnakClose = (event, reason) => {
        if (reason === "clickaway") {
            return
        }

        handleClose()
    }

    return (
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={2000} onClose={onSnakClose}>
            <Alert variant="filled" onClose={onSnakClose} severity={type} sx={{ width: '100%' }}>

                {
                    Array.isArray(message) ?
                        message.map((m, index) => <div key={index} className="text-base">{m}</div>) :
                        <div className="text-base">{message}</div>
                }
            </Alert>
        </Snackbar>
    )
}

export default SnakbarAlert