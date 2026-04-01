import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { api } from '../../services/api.js';

import {
  Container,
  Form,
  InputContainer,
  Link,
  LeftContainer,
  RightContainer,
  Title,
  } from './styles.js';

import Logo from '../../assets/logo.png';

import { Button } from '../../components/Button/index.jsx';

export default function Register() {
  const navigate = useNavigate()
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
    try {
    const { status } = await api.post(
      '/users', 
      {
      name: data.name,
      email: data.email,
      password: data.password,
    }, 
    {
      validateStatus: () => true,
    },
  );
  
  if (status ===200 || status === 201 ) {
    setTimeout(() => {
      navigate('/login');
    }, 2000);
    toast.success('Conta criada com sucesso!');
 } else if (status === 409) {  
    toast.error('Email já cadastrado! Faça o login para continuar');
} else {
  throw new Error();
}
} catch (error) {
  toast.error('Falha no sistema! Tente novamente');
}
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
           {errors?.confirmPassword && <span>{errors.confirmPassword.message}</span>}
          </InputContainer>

          <Link style = {{ color: '#fff' }} to="/login">Esqueci minha senha</Link>

          <Button type="submit">Criar conta</Button>

        </Form>

        <p>
        Já possui conta?<Link 
        style={{ color: '#3744f5', textDecoration: 'underline', marginLeft: '5px' }} 
        to="/login">Clique aqui.
        </Link>
        </p>

      </RightContainer>

    </Container>
  );
}
