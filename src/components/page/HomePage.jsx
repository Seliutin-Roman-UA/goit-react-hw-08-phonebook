import { Paper } from '@mui/material/';

export function HomePage() {
  return (
    <Paper elevation={3} sx={{p:"10px"}}>
      <h1 style={{ textAlign: 'center',color : "rgba(156, 39, 176, 0.6)",}}>
        WELCOME!!! Please, register or log in!
      </h1>
    </Paper>
  );
}
