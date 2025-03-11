import React  from 'react';
import styled from 'styled-components';

export type CardProps= {
  imgUrl?:string
  title:string
  description:string
  actions?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Card=({
 imgUrl,
 title,
 description,
 actions,
 children,
 className,
 style
}:CardProps) => {
  //??????????/
  return (
    <CardStyled className={className} style={style} imgUrl={imgUrl} title={title} description={description}>
      {imgUrl&&<CardImage src={imgUrl} alt={title}/>}
       <CardTitle>{title}</CardTitle>
       <CardDescription>{description}</CardDescription>
       {children&&<div>{children}</div>}
       {actions && <CardActions>{actions}</CardActions>}
    </CardStyled>
  );
};
export default Card

const CardStyled = styled.div<CardProps>`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #e0e0e0a5;
  overflow: hidden;
  width: 300px;
  padding: 16px;

`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
`;
const CardActions = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
`;



