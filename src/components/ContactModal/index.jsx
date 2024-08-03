import React, {useEffect, useState} from "react";
import {
    Alert,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    TextField
} from "@mui/material";
import PropTypes from "prop-types";

function ContactModal({open, onClose, onAdd, onEdit, selectedContact}) {

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");

    const [error, setError] = useState(false);

    useEffect(() => {
        setNome(selectedContact.nome);
        setTelefone(selectedContact.telefone);
        setEmail(selectedContact.email);
    }, [selectedContact]);

    const isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    };

    const handleChangeName = (e) => {
        setNome(e.target.value);
    };

    const handleChangeTelefone = (e) => {
        setTelefone(e.target.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{
                component: 'form',
            }}
        >
            <DialogTitle>{isEmpty(selectedContact) ? "Adicionar" : "Alterar"} Contato</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Por favor, preencha os campos abaixo para {isEmpty(selectedContact) ? "adicionar" : "alterar"} este
                    contato
                </DialogContentText>
                <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 1, md: 1}}>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            label="Nome"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={nome}
                            onChange={handleChangeName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            required
                            margin="dense"
                            label="Telefone"
                            type="tel"
                            fullWidth
                            variant="standard"
                            inputProps={{maxLength: 11}}
                            value={telefone}
                            onChange={handleChangeTelefone}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <TextField
                            required
                            margin="dense"
                            label="Email"
                            type="email"
                            fullWidth
                            variant="standard"
                            value={email}
                            onChange={handleChangeEmail}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={error ? {} : {display: "none"}}>
                        <Alert severity="error">Preencha todos os campos</Alert>
                    </Grid>
                </Grid>

            </DialogContent>
            <DialogActions>
                <Button onClick={() => {
                    setError(false);
                    onClose();
                }}>
                    Cancelar
                </Button>
                <Button variant="contained" onClick={() => {
                    if (nome || telefone || email) {
                        let contact = {
                            nome,
                            telefone,
                            email,
                        };

                        if (isEmpty(selectedContact)) {
                            onAdd(contact);
                        } else {
                            onEdit(contact, selectedContact.id)
                        }

                        setNome("");
                        setTelefone("");
                        setEmail("");
                        setError(false);
                    } else {
                        setError(true);
                    }
                }}>{isEmpty(selectedContact) ? "Adicionar" : "Alterar"}</Button>
            </DialogActions>
        </Dialog>
    );
}

ContactModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    selectedContact: PropTypes.object,
};

export default ContactModal;
