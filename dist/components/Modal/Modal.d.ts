import React from 'react';
export type ModalProps = {
    visible: boolean;
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};
declare const Modal: ({ visible, onClick, children, className, style }: ModalProps) => React.JSX.Element;
export default Modal;
//# sourceMappingURL=Modal.d.ts.map