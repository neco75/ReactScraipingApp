import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo() {
  return (
    <Box sx={{ minWidth: 120,margin:"1rem" }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          並び順
        </InputLabel>
        <NativeSelect
          defaultValue={10}
          inputProps={{
            name: 'sort',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>おすすめ順</option>
          <option value={20}>安い順</option>
          <option value={30}>新着順</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}