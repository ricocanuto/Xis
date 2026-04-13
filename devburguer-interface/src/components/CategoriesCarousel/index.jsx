import { useEffect, useState } from 'react';
import CarouselModule from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import { api } from '../../services/api';
import { Button, Container, ContainerItems, Title } from './styles.js';

const Carousel = CarouselModule.default;

console.log(Carousel);

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([]);

  

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get('/categories');
        console.log('Categories loaded:', data);
        setCategories(data);
      } catch (error) {
        console.error('Erro na API:', error);
      }
    }
    loadCategories();
  }, []);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1280 }, items: 4 },
    tablet: { breakpoint: { max: 1280, min: 690 }, items: 3 },
    mobile: { breakpoint: { max: 690, min: 0 }, items: 2 },
  };

 return (
  <Container>
    <Title>Categorias</Title>

    
    <CarouselModule.default
      responsive={responsive}
      infinite={true}
      partialVisible={false}
      itemClass="carousel-item"
    >
      {categories.map((category) => (
        <Button key={category.id} to={`/cardapio?categoria=${category.id}`}>
          <ContainerItems imageUrl={category.url}>
            <p>{category.name}</p>
          </ContainerItems>
        </Button>
      ))}
    </CarouselModule.default>
  </Container>
); 
}