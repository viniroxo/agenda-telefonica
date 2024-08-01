import React from "react";

import SearchIcon from '@mui/icons-material/Search';
import {FormControl, Input, InputAdornment} from "@mui/material";
import PropTypes from "prop-types";

function InputSearch({onSearch}) {

    return (
        <FormControl fullWidth variant="standard">
            <Input
                startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
                placeholder={"Digite o nome do seu contato..."}
                onChange={(e)=> onSearch(e)}
            />
        </FormControl>
    );
}

InputSearch.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default InputSearch;