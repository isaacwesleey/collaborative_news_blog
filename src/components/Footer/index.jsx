import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ p: 3, bgcolor: 'grey.900', color: 'white' }}>
      <Typography variant='body1' align='center'>
        © 2023 Mi Blog
      </Typography>
    </Box>
  );
}

export default Footer;
