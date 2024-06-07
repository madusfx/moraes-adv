import ReactInputMask from 'react-input-mask';
import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: #fff;
  padding: 12px;
`;

export const InputMask = styled(ReactInputMask)`
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: #fff;
  padding: 12px;
`;

export const ErrorText = styled.p`
  color: white;
  font-size: 16px;
`;
