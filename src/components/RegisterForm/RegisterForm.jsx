import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { StyledForm, StyledLabel } from './Registration.styled';

export function RegisterForm () {
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
      <StyledLabel required>
        Username
        <input type="text" name="name" />
      </StyledLabel>
      <StyledLabel required>
        Email
        <input type="email" name="email" />
      </StyledLabel>
      <StyledLabel required>
        Password
        <input type="password" name="password" />
      </StyledLabel>
      <button type="submit">Register</button>
    </StyledForm>
  );
};
