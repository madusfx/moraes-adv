import { Dispatch, SetStateAction } from 'react';
import { Background, CloseButton, ModalContent, ModalText } from './styles';

type ModalProps = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

export function Modal({ setModalOpen }: ModalProps) {
  return (
    <Background>
      <ModalContent>
        <ModalText>E-mail enviado com sucesso!</ModalText>
        <CloseButton onClick={() => setModalOpen(false)}>Fechar</CloseButton>
      </ModalContent>
    </Background>
  );
}
