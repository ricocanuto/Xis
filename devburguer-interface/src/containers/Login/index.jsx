import {
    Button,
    Container,
    Form,
    Input,
    InputContainer,
    LeftContainer,
    Link,
    RightContainer,
    Title,
    Label,
} from './styles';

import Logo from '../../assets/logo.png'

export default function Login() {
    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo-devburguer" />
            </LeftContainer>
            <RightContainer>
                <Title>Olá, seja bem-vindo ao <span>Dev Burguer!</span>
                <br />
                       Acesse com seu <span>login e senha.</span>
                </Title>
            
            <Form>
                <InputContainer>
                    <Label>Email</Label>
                    <Input type="email" placeholder='Digite seu email' />
                </InputContainer>
                <InputContainer>
                    <Label>Senha</Label>
                    <Input type="password" placeholder='Digite sua senha' />
                </InputContainer>
                <Link>Esqueci minha senha</Link>
                <Button>Entrar</Button>
            </Form>
            <Link>Não tem uma conta? <span>Cadastre-se</span></Link>
            </RightContainer>
        </Container>
    );
}