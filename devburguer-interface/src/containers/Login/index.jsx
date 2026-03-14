import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Link } from "react-router-dom";
import { api } from '../../services/api.js';

import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
  } from './styles';

import Logo from '../../assets/logo.png';

import { Button } from '../../components/Button/index.jsx';

export default function Login() {
  const schema = yup
    .object({
      email: yup
        .string()
        .email('Email inválido')
        .required('Email é obrigatório'),

      password: yup
        .string()
        .min(6, 'A senha deve conter no mínimo 6 caracteres')
        .required('Senha é obrigatória'),
    })
    

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const response = await api.post('./session', {
      email: data.email,
      password: data.password,
    });
  };

  return (
    <Container>

      <LeftContainer>
        <img src={Logo} alt="Logo-devburguer" />
      </LeftContainer>

      <RightContainer>
      
        <Title>
          Olá, seja bem-vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu <span>login e senha.</span>
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
      
          <InputContainer>
            <label>Email</label>
            <input 
            type="email" 
            {...register('email')} />
            {errors.email && <span>{errors.email.message}</span>}
          </InputContainer>
        
          <InputContainer>
            <label>Senha</label>
            <input 
            type="password" 
            {...register('password')} />
           {errors.password && <span>{errors.password.message}</span>}
          </InputContainer>

          <Link to="/forgot-password">Esqueci minha senha</Link>

          <Button type="submit">Entrar</Button>

        </Form>

        <p>
          Não tem uma conta?<a>Cadastre-se</a>
        </p>

      </RightContainer>

    </Container>
  );
}
