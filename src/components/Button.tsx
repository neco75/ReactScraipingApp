import * as React from 'react';
import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';

import Stack from '@mui/material/Stack';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2} className='SearchBtn'>
      {/* Buttonを中央配置 */}
      <Button variant="outlined" startIcon={<SearchIcon />} >
        <div >検索</div>
      </Button>
    </Stack>
  );
}