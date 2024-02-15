import styled from 'styled-components';
import { ErrorMessage } from 'formik';

const ErrorText = styled.p`
  color: blue;
`;

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};
