import React, { useEffect, useState } from "react";
import styled from "styled-components";


const Toast = ({ message,className,style }:{message:string,className?: string;
  style?: React.CSSProperties;}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
   {isVisible&& (<ToastWrapper className={className} style={style} >
      {message}
    </ToastWrapper>)}
    </>
  );
};

export default Toast;

const ToastWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: black;
  padding: 15px;
  border-radius: 5px;
  animation: fade-in 0.5s forwards, fade-out 0.5s 3.5s forwards;
`;
