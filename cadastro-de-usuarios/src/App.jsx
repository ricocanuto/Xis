import {
  Title,
  Container,
  TopBackground,
  Form,
  ContainerInputs,
  Input,
  Button,
  InputLabel,
} from './styles'

// import Trash from './assets/trash.svg'

import UsersImage from './assets/users.png'

function Home() {

  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt='imagem-usuarios' />
      </TopBackground>

      <Form>
        <Title>Cadastrar Usuários</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type='text' placeholder='Nome de usuário' />
          </div>
          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type='number' placeholder='Idade do usuário' />
          </div>
        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>
            Email<span> *</span>
          </InputLabel>
          <Input type='e-mail' placeholder='E-mail do usuário' />
        </div>

        <Button>Cadastrar Usuários</Button>
      </Form>
    </Container >
  )
}

export default Home

