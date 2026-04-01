import { CategoriesCarousel } from '../../components/CategoriesCarousel';
import { Banner, Container, Content } from "./styles";

export default function Home() {

    return (
        <main>
            <Banner>
            <h1>Bem-vindo (a)!</h1>
            </Banner>
            <Container>
                <Content>
                    <CategoriesCarousel />
                    <div>Carrossel Categorias</div>
                    <div>Carrossel Produtos</div>
                </Content>
            </Container>
        </main>
    );
}