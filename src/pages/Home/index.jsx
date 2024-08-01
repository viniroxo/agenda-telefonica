import React, {useState} from "react";
import Contact from "../../components/Contact";
import {Grid} from "@mui/material";
import {Fab} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import styled from "styled-components";
import InputSearch from "../../components/InputSearch";
import ContactModal from "../../components/ContactModal";

const contrastingColorNames = [
    "Black",
    "Blue",
    "BlueViolet",
    "Brown",
    "Crimson",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DodgerBlue",
    "FireBrick",
    "ForestGreen",
    "Fuchsia",
    "Green",
    "GreenYellow",
    "HotPink",
    "Indigo",
    "LawnGreen",
    "Lime",
    "LimeGreen",
    "Magenta",
    "Maroon",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "Navy",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RoyalBlue",
    "SaddleBrown",
    "SeaGreen",
    "SlateBlue",
    "SlateGray",
    "SteelBlue",
    "Teal",
    "Tomato",
    "Turquoise",
    "YellowGreen"
];

const StyledFab = styled(Fab)`
  position: fixed !important;
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
            cor: "Blue",
            favorito: false
        },
        {
            id: 1,
            nome: "Maria Leopoldina",
            email: "maria.leopoldina@gmail.com",
            telefone: "(11) 99422-1115",
            cor: "Crimson",
            favorito: false
        },
        {
            id: 2,
            nome: "João Pedro",
            email: "joao.pedro@globo.com",
            telefone: "(11) 99333-2288",
            cor: "DarkGreen",
            favorito: false
        },
        {
            id: 3,
            nome: "Stefany da Silva",
            email: "stefany.silva@gmail.com",
            telefone: "(15) 98333-9730",
            cor: "MediumPurple",
            favorito: false
        },
        {
            id: 4,
            nome: "Maria Luiza",
            email: "maria.luiza@gmail.com",
            telefone: "(81) 99100-3700",
            cor: "OrangeRed",
            favorito: false
        },
        {
            id: 5,
            nome: "Ana Paula Barbosa",
            email: "ana.barbosa@gmail.com",
            telefone: "(11) 98766-7033",
            cor: "Teal",
            favorito: false
        },
        {
            id: 6,
            nome: "Pedro Nogueira",
            email: "pedro.nogueira@gmail.com",
            telefone: "(11) 98711-3363",
            cor: "Fuchsia",
            favorito: false
        }
    ]);

    const [searchText, setSearchText] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [selectedContact, setSelectedContact] = useState({});

    const handleFavorite = (id) => {
        setContactList((prev) =>
            prev.map((item) =>
                item.id === id ? {...item, favorito: !item.favorito} : item
            )
        );
    };

    const handleEdit = (contact) => {
        setSelectedContact(contact);
        setOpenModal(true);
    };

    const handleDelete = (id) => {
        setContactList((prev) => prev.filter((item) => item.id !== id));
    };

    const onAdd = (contact) => {
        setContactList((prev) => {
            const newContact = {
                id: prev.length, ...contact,
                cor: contrastingColorNames[Math.floor(Math.random() * contrastingColorNames.length)]
            };
            return [...prev, newContact]
        })
        setOpenModal(false);
    };

    const onEdit = (contact, id) => {
        const newList = contactList.map((item) => item.id === id ? {...item, ...contact} : item)
        setContactList(newList)
        setSelectedContact({});
        setOpenModal(false);
    };

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setSelectedContact({});
        setOpenModal(false);
    };

    return (
        <div>
            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 1, md: 1}} justifyContent="center">
                <Grid item xs={12} sm={8} md={8} xl={8}>
                    <InputSearch onSearch={handleSearch}/>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 1, md: 1}}>
                {contactList
                    .sort((a, b) => {
                        if (a.favorito === b.favorito) {
                            return a.nome.localeCompare(b.nome);
                        }
                        return a.favorito ? -1 : 1;
                    }) // Ordena a lista em ordem alfabética
                    .filter((contact) => contact.nome.toLocaleLowerCase().includes(searchText.toLowerCase())) // Filtra a lista de acordo com o texto digitado no camp ode busca
                    .map(contact =>
                        <Grid item xs={12} sm={12} md={6} xl={3} key={contact.id}>
                            <Contact
                                data={contact}
                                onFavorite={handleFavorite}
                                onEdit={handleEdit}
                                onDelete={handleDelete}/>
                        </Grid>
                    )}
            </Grid>
            <ContactModal onClose={handleClose}
                          open={openModal}
                          selectedContact={selectedContact}
                          onAdd={(contact) => onAdd(contact)}
                          onEdit={onEdit}/>
            <StyledFab color="secondary" aria-label="add" onClick={handleOpen}>
                <AddIcon/>
            </StyledFab>
        </div>
    );
}

export default Home;
