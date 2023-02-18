import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  TextField,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

function Header() {
  return (
    <AppBar position='static'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton edge='start' color='inherit' aria-label='menu'>
          <img src='/path/to/logo.png' alt='Logo' height='40' />
        </IconButton>
        <Typography variant='h6' component='div'>
          Mi Blog
        </Typography>
        <div sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            id='outlined-basic'
            label='Buscar noticias'
            variant='outlined'
            size='small'
            InputProps={{ endAdornment: <SearchIcon /> }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
