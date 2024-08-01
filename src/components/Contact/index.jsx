import {
    Avatar,
    Card,
    CardHeader,
    IconButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
} from "@mui/material";

import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Icon = styled(ListItemIcon)`
  color: ${props => props.color} !important;
`;

const Container = styled.div`
  margin: 4px;
`;

function Contact({data, onFavorite, onEdit, onDelete}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Container>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{bgcolor: data.cor}} aria-label="recipe">
                            {data.nome.charAt(0)}
                        </Avatar>
                    }
                    action={
                        <>
                            <IconButton aria-label="settings" onClick={handleClick}>
                                <MoreVertIcon/>
                            </IconButton>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={() => {
                                    handleClose();
                                    onFavorite();
                                }}>
                                    <Icon color={"#f91880"}>
                                        <FavoriteIcon fontSize="small"/>
                                    </Icon>
                                    <ListItemText>Favoritar</ListItemText>
                                </MenuItem>
                                <MenuItem onClick={() => {
                                    handleClose();
                                    onEdit();
                                }}>
                                    <Icon>
                                        <EditIcon fontSize="small"/>
                                    </Icon>
                                    <ListItemText>Editar</ListItemText>
                                </MenuItem>
                                <MenuItem onClick={() => {
                                    handleClose();
                                    onDelete();
                                }}>
                                    <Icon color="red">
                                        <DeleteIcon fontSize="small"/>
                                    </Icon>
                                    <ListItemText>Deletar</ListItemText>
                                </MenuItem>
                            </Menu>
                        </>
                    }
                    title={data.nome}
                    subheader={`${data.email} - ${data.telefone}`}
                />

            </Card>
        </Container>
    );
}

Contact.propTypes = {
    data: PropTypes.object.isRequired,
    onFavorite: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Contact;
