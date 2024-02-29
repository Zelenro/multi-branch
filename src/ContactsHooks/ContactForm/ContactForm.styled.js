import styled from 'styled-components';
import { Field } from 'formik';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 500px;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
`;

export const FormInput = styled(Field)`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  box-sizing: border-box;
`;

export const FormButton = styled.button`
  width: 100px;
  padding: 10px;
  margin: 10px auto;
  background-color: #009688;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #00796b;
  }
`;
