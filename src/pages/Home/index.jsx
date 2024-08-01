import React, {useState} from "react";
import Contact from "../../components/Contact";
import {Grid} from "@mui/material";
import {Fab} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import styled from "styled-components";

const StyledFab = styled(Fab)`
  position: absolute !important;
  bottom: 16px;
  right: 16px;
`;

function Home() {

    const [contactList, setContactList] = useState([
        {
            id: 0,
            nome: "Vanessa dos Santos",
            email: "vanessa.santos@gmail.com",
            telefone: "(11) 99333-2288",
            cor: "Blue"
        },
        {
            id: 1,
            nome: "Maria Leopoldina",
            email: "maria.leopoldina@gmail.com",
            telefone: "(11) 99422-1115",
            cor: "Crimson"
        },
        {
            id: 2,
            nome: "João Pedro",
            email: "joao.pedro@globo.com",
            telefone: "(11) 99333-2288",
            cor: "DarkGreen"
        },
        {
            id: 3,
            nome: "Stefany da Silva",
            email: "stefany.silva@gmail.com",
            telefone: "(15) 98333-9730",
            cor: "MediumPurple"
        },
        {
            id: 4,
            nome: "Maria Luiza",
            email: "maria.luiza@gmail.com",
            telefone: "(81) 99100-3700",
            cor: "OrangeRed"
        },
        {
            id: 5,
            nome: "Ana Paula Barbosa",
            email: "ana.barbosa@gmail.com",
            telefone: "(11) 98766-7033",
            cor: "Teal"
        },
        {
            id: 6,
            nome: "Pedro Nogueira",
            email: "pedro.nogueira@gmail.com",
            telefone: "(11) 98711-3363",
            cor: "Fuchsia"
        }
    ])

    const handleFavorite = (contact) => {
        console.log(contact)
    };

    const handleEdit = (contact) => {
        console.log(contact)
    };

    const handleDelete = (contact) => {
        console.log(contact)
    };

    return (
        <div>
            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                {contactList.map(contact =>
                    <Grid item xs={12} sm={12} md={4} xl={3} key={contact.id}>
                        <Contact
                            data={contact}
                            onFavorite={() => handleFavorite(contact)}
                            onEdit={() => handleEdit(contact)}
                            onDelete={() => handleDelete(contact)}/>
                    </Grid>
                )}
            </Grid>
            <StyledFab color="secondary" aria-label="add">
                <AddIcon/>
            </StyledFab>
        </div>
    );
}

export default Home;
