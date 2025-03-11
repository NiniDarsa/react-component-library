import React, { useState } from 'react';
import styled from 'styled-components';


const FormValidation = ({className,style}:{className?: string;
  style?: React.CSSProperties;}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email.');
    } else {
      setError('');
      alert('Form submitted!');
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit} className={className} style={style}>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <button type="submit">Submit</button>
    </FormWrapper>
  );
};

export default FormValidation;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`;