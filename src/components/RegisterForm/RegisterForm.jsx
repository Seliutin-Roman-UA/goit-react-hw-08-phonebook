import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { StyledForm } from './Registration.styled';
import { Button, TextField } from '@mui/material';
import { IoMdPersonAdd } from 'react-icons/io';

export function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="on">
      <h1 style={{ textAlign: 'center' }}>Please, fill the fields:</h1>
      <TextField
        inputProps={{
          sx: {
            p: '5px',
            width: '320px',
          },
        }}
        margin="dense"
        color="secondary"
        id="outlined-basic"
        label="Username"
        variant="outlined"
        size="small"
        type="text"
        name="name"
        required
      />
      <TextField
        inputProps={{
          sx: {
            p: '5px',
            width: '320px',
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
            width: '320px',
          },
        }}
        inputLabelProps={{ size: 'small' }}
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
        startIcon={<IoMdPersonAdd />}
        type="submit"
      >
        Register
      </Button>
    </StyledForm>
  );
}
