import React from 'react';
import { ModalContainer, Content, Mask } from './modal.styles';

const Modal = ({onClose, children}) => {
    return(
        <ModalContainer onClick={() => onClose()}>
            <Mask />
            <Content onClick={e => e.stopPropagation()}>{children}</Content>
        </ModalContainer>
    );
}

export default Modal;