import React from 'react';
import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';
import ContentToast from './ContentToast';

interface ToastProps{
    messages: ToastMessage[];
}
const Toast : React.FC<ToastProps> = ({ messages }) => (
  <Container>
    {messages.map((message) => (
      <ContentToast key={message.id} message={message} />
    ))}
  </Container>
);

export default Toast;
