import {
    Avatar,
    Card, CardContent,
    IconButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem, Typography,
} from "@mui/material";

import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  margin: 8px;
`;

const ContactCard = styled(Card)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
`;


const Icon = styled(ListItemIcon)`
  color: ${props => props.color} !important;
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
            <ContactCard>
                <ContactInfo>
                    <Avatar sx={{bgcolor: data.cor}} aria-label="recipe">
                        {data.nome.charAt(0).toUpperCase()}
                    </Avatar>
                    <CardContent sx={{maxWidth: "155px"}}>
                        <Typography sx={{
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden"
                        }}>
                            {data.nome}
                        </Typography>
                        <Typography variant={"subtitle2"} sx={{
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden"
                        }}>
                            {data.email}
                        </Typography>
                        <Typography variant={"subtitle2"} sx={{
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden"
                        }}>
                            {data.telefone}
                        </Typography>
                    </CardContent>
                </ContactInfo>
                <div>
                    {data.favorito && (
                        <IconButton sx={{color: "#f91880"}}>
                            <FavoriteIcon/>
                        </IconButton>
                    )}
                    <IconButton onClick={handleClick}>
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
                            onFavorite(data.id);
                        }}>
                            <Icon color={data.favorito ? "" : "#f91880"}>
                                <FavoriteIcon fontSize="small"/>
                            </Icon>
                            <ListItemText>{data.favorito ? "Desfavoritar" : "Favoritar"}</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => {
                            handleClose();
                            onEdit(data);
                        }}>
                            <Icon>
                                <EditIcon fontSize="small"/>
                            </Icon>
                            <ListItemText>Editar</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => {
                            handleClose();
                            onDelete(data.id);
                        }}>
                            <Icon color="red">
                                <DeleteIcon fontSize="small"/>
                            </Icon>
                            <ListItemText>Deletar</ListItemText>
                        </MenuItem>
                    </Menu>
                </div>
            </ContactCard>
        </Container>
    )
        ;
}

Contact.propTypes = {
    data: PropTypes.object.isRequired,
    onFavorite: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Contact;
