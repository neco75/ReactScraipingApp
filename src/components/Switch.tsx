import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';

export default function SwitchesGroup() {
  const [state, setState] = React.useState({
    Amazon: false,
    Merukari: false,
    PayPay: false,
    Surugaya: false,
    Rasinban: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <FormControl component="fieldset" variant="standard" sx={{margin:"1rem"}}>
      <FormLabel component="legend" sx={{textAlign:"center"}}>検索</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch checked={state.Amazon} onChange={handleChange} name="Amazon" />
          }
          label="Amazon"
        />
        <FormControlLabel
          control={
            <Switch checked={state.Merukari} onChange={handleChange} name="Merukari" />
          }
          label="メルカリ"
        />
        <FormControlLabel
          control={
            <Switch checked={state.PayPay} onChange={handleChange} name="PayPay" />
          }
          label="PayPayフリマ"
        />
                <FormControlLabel
          control={
            <Switch checked={state.Surugaya} onChange={handleChange} name="Surugaya" />
          }
          label="駿河屋"
        />
                <FormControlLabel
          control={
            <Switch checked={state.Rasinban} onChange={handleChange} name="Rasinban" />
          }
          label="らしんばんオンライン"
        />

      </FormGroup>
      <FormHelperText>
        どのサイトを検索するか選択してください
      </FormHelperText>
    </FormControl>
  );
}
