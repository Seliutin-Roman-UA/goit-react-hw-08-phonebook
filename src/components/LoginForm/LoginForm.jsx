import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { StyledForm } from './LoginForm.styled';
import { Button, TextField } from '@mui/material';
import { MdOutlineLogin } from 'react-icons/md';

export function LoginForm() {
  const dispatch = useDispatch();

   const handleSubmit = e => {
     e.preventDefault();
     const form = e.currentTarget;
     dispatch(
       logIn({
         email: form.elements.email.value,
         password: form.elements.password.value,

       }, )
     );
     form.reset();

   };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="on">
      <h1 style={{ textAlign: 'center' }}>Please, enter your data:</h1>
      <TextField
        inputProps={{
          sx: {
            p: '5px',
            width: '280px',
          },
        }}
     
        margin="dense"
        color="secondary"
        id="outlined-basic"
        label="Email"
        variant="outlined"
        size="small"
        type="email"
        name="email"
        required
      />
      <TextField
        inputProps={{
          sx: {
            p: '5px',
            width: '280px',
          },
        }}
       
        margin="dense"
        color="secondary"
        id="outlined-basic"
        label="Password"
        variant="outlined"
        size="small"
        type="password"
        name="password"
        required
      />
      <Button
        sx={{ marginTop: '8px' }}
        variant="outlined"
        color="secondary"
        size="small"
        startIcon={<MdOutlineLogin />}
        type="submit"
      >
        Log in
      </Button>
    </StyledForm>
  );
};
