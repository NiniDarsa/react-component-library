import React from 'react';
import styled from 'styled-components';

export type ModalProps= {
  visible: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Modal= ({ visible, onClick, children,className,style }:ModalProps) => {
  return (
    <ModalOverlay visible={visible} onClick={onClick} className={className} style={style}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClick}>Close</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
const ModalOverlay = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 400px;
`;
