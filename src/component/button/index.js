import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function BasicButtons({ title, onClick }) {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={onClick}>{title}</Button>
        </Stack>
    );
}


export default BasicButtons;