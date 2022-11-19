import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { StyledForm, StyledLabel } from './LoginForm.styled';

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
      <StyledLabel required>
        Email
        <input type="email" name="email" />
      </StyledLabel>
      <StyledLabel required>
        Password
        <input type="password" name="password" />
      </StyledLabel>
      <button type="submit">Log in</button>
    </StyledForm>
  );
};
