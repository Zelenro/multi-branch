import styled from 'styled-components';

export const ContactsList = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0px;
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const FormButton = styled.button`
  width: 80px;
  padding: 10px;
  margin: 10px;
  background-color: #009688;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #00796b;
  }
`;
