import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        margin:"0.5rem"
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="検索ワード" variant="filled" />
    </Box>
  );
}