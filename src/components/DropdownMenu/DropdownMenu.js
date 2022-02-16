import * as React from 'react';
import Button from '@mui/material/Button';
import { Container } from "./styled";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';


export default function DropdownMenu({ categories }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Container>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Categorias
            </Button>
            </Container>
            <Menu 
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {categories.map(({ catId, name }) => (
                    <MenuItem onClick={handleClose} key={catId}>
                        <Container>
                            <Link to={`/category/${catId}`}>{name}</Link>
                        </Container>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
