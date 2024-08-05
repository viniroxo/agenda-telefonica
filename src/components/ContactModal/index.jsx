import React, {useEffect, useState} from "react";
import {
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

    const [errorNome, setErrorNome] = useState("");
    const [errorTelefone, setErrorTelefone] = useState("");
    const [errorEmail, setErrorEmail] = useState("");

    useEffect(() => {
        setNome(selectedContact.nome);
        setTelefone(selectedContact.telefone);
        setEmail(selectedContact.email);
    }, [selectedContact]);

    const clearForm = () => {
        setNome("");
        setTelefone("");
        setEmail("");

        setErrorNome("");
        setErrorTelefone("");
        setErrorEmail("");
    };

    const isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    };

    const isInvalidForm = () => {
        let error = false;
        if (!nome) {
            setErrorNome("Preencha o campo Nome");
            error = true;
        }
        if (!telefone) {
            setErrorTelefone("Preencha o campo Telefone");
            error = true;
        }
        if (!email) {
            setErrorEmail("Preencha o campo Email");
            error = true;
        }
        return error;
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
                onSubmit: (event) => {
                    event.preventDefault();
                    if (!isInvalidForm()) {
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
                        clearForm();
                        onClose();
                    }
                },
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
                            id="nome"
                            label="Nome"
                            type="text"
                            variant="standard"
                            autoFocus
                            margin="dense"
                            fullWidth
                            value={nome}
                            error={!!errorNome}
                            helperText={errorNome}
                            onChange={handleChangeName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            margin="dense"
                            id="telefone"
                            label="Telefone"
                            type="tel"
                            fullWidth
                            variant="standard"
                            inputProps={{maxLength: 11}}
                            value={telefone}
                            error={!!errorTelefone}
                            helperText={errorTelefone}
                            onChange={handleChangeTelefone}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <TextField
                            margin="dense"
                            id="email"
                            label="Email"
                            type="email"
                            fullWidth
                            variant="standard"
                            value={email}
                            error={!!errorEmail}
                            helperText={errorEmail}
                            onChange={handleChangeEmail}
                        />
                    </Grid>
                </Grid>

            </DialogContent>
            <DialogActions>
                <Button onClick={() => {
                    clearForm();
                    onClose();
                }}>
                    Cancelar
                </Button>
                <Button variant="contained" type="submit">{isEmpty(selectedContact) ? "Adicionar" : "Alterar"}</Button>
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
