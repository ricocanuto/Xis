import { CategoriesCarousel } from '../../components/CategoriesCarousel';
import { OffersCarousel } from '../../components/OffersCarousel';
import { Banner, ContainerHome, Content } from './styles.js';

export default function Home() {
  return (
    <main>
      <Banner>
        <h1>Bem-vindo (a)!</h1>
      </Banner>
      <ContainerHome>
        <Content>
          <CategoriesCarousel />
          <OffersCarousel />
        </Content>
      </ContainerHome>
    </main>
  );
}