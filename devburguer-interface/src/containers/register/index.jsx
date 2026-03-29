import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
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
  } from './styles.js';

import Logo from '../../assets/logo.png';

import { Button } from '../../components/Button/index.jsx';

export default function Register() {
  const schema = yup
    .object({
      name: yup.string().required('O nome é obrigatório'),
      email: yup
        .string()
        .email('Email inválido')
        .required('Email é obrigatório'),

      password: yup
        .string()
        .min(6, 'A senha deve conter no mínimo 6 caracteres')
        .required('Senha é obrigatória'),
      confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
      .required('Confirme sua senha'),
    })
    .required();
    

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const response = await toast.promise(
      api.post('/users', {
      name: data.name,
      email: data.email,
      password: data.password,
    }), 
    {
      pending: 'Verificando suas credenciais...',
      success: 'Cadastro efetuado com sucesso!',
      error: 'Ops, algo deu errado. Tente novamente.',
    }
  );

  console.log(response);
};  

  return (
    <Container>

      <LeftContainer>
        <img src={Logo} alt="Logo-devburguer" />
      </LeftContainer>

      <RightContainer>
      
        <Title>
        Criar conta
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
      
          <InputContainer>
            <label>Nome</label>
            <input 
            type="text" 
            {...register('name')} />
            <span>{errors?.name?.message}</span>
          </InputContainer>

          <InputContainer>
            <label>Email</label>
            <input 
            type="email" 
            {...register('email')} />
            <span>{errors?.email?.message}</span>
          </InputContainer>
        
          <InputContainer>
            <label>Senha</label>
            <input 
            type="password" 
            {...register('password')} />
           {errors?.password && <span>{errors.password.message}</span>}
          </InputContainer>

          <InputContainer>
            <label>Confirmar senha</label>
            <input 
            type="password" 
            {...register('confirmPassword')} />
           {errors?.confirmPassword && <span>{errors.password.message}</span>}
          </InputContainer>

          <Link style = {{ color: '#fff' }} to="/forgot-password">Esqueci minha senha</Link>

          <Button type="submit">Criar conta</Button>

        </Form>

        <p>
        Já possui conta?<Link style={{ color: '#3744f5', textDecoration: 'underline', marginLeft: '5px' }} to="/cadastro">Clique aqui.</Link>
        </p>

      </RightContainer>

    </Container>
  );
}
