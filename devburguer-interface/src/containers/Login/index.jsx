import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { api } from '../../services/api';

import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  RightContainer,
  Title,
} from './styles.js';

import Logo from '../../assets/logo.png';

import { Button } from '../../components/Button/index';

export default function Login() {
  const navigate = useNavigate();
  const schema = yup.object({
    email: yup.string().email('Email inválido').required('Email é obrigatório'),

    password: yup
      .string()
      .min(6, 'A senha deve conter no mínimo 6 caracteres')
      .required('Senha é obrigatória'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // Ajuste na desestruturação: pegamos o token de dentro do data retornado pela API
      const response = await toast.promise(
        api.post('/sessions', {
          email: data.email,
          password: data.password,
        }),
        {
          pending: 'Verificando seus dados...',
          success: {
            render() {
              setTimeout(() => {
                navigate('/');
              }, 2000);
              return 'Seja bem vindo(a)!';
            },
          },
          error: 'Email ou senha incorretos 🤯',
        },
      );
      // O token vem de response.data.token
      const token = response.data.token;
      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Erro crítico no login:', error);
      // toast.error('Erro no sistema. Tente novamente mais tarde.');
    }
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
            <label htmlFor="email">Email</label>
            <input id="email" type="email" {...register('email')} />
            <span>{errors?.email?.message}</span>
          </InputContainer>

          <InputContainer>
            <label htmlFor="password">Senha</label>
            <input id="password" type="password" {...register('password')} />
            {errors?.password && <span>{errors.password.message}</span>}
          </InputContainer>

          {/* <Link style = {{ color: '#fff' }} to="/forgot-password">Esqueci minha senha</Link> */}

          <Button type="submit">Entrar</Button>
        </Form>

        <p>
          Não tem uma conta?{' '}
          <Link
            style={{
              color: '#cf3057',
              textDecoration: 'underline',
              marginLeft: '5px',
            }}
            to="/cadastro"
          >
            Cadastre-se{' '}
          </Link>
        </p>
      </RightContainer>
    </Container>
  );
}
