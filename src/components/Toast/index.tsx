import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Section } from './styles';

const Toast : React.FC = () => (
  <Container>
    <Section type="error" hasDescription>
      <FiAlertCircle size={20} />
      <div>
        <strong>Aconteceu um erro</strong>
        <p>Não foi possivel fazer login na aplicação</p>
      </div>
      <button type="button"><FiXCircle size={18} /></button>
    </Section>
  </Container>
);

export default Toast;
