import React, { useCallback, useRef } from 'react';
import {
  FiMail, FiLock, FiUser, FiArrowLeft,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import getValidationsErrors from '../../utils/getValidationsErrors';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';

interface signUpFormData{
    name: string,
    email: string,
    password: string
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const handleSubmit = useCallback(async (data: signUpFormData) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um email válido'),
        password: Yup.string().min(6, 'No minimo 6 digítos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/users', data);

      history.push('/');

      addToast({
        type: 'success',
        title: 'Cadastro realizado!',
        description: 'Você já pode fazer seu login!',
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationsErrors(err);
        formRef.current?.setErrors(errors);
      }

      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Ocorreu um erro ao criar cadastro, Tente novamente.',
      });
    }
  }, [addToast, history]);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="Go Barber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
          <Button type="submit">Cadastrar</Button>
          <a href="forgot">Esqueci senha</a>
        </Form>
        <Link to="/">
          <FiArrowLeft />
          Voltar para Logon
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
