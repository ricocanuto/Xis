import styled from 'styled-components';

import BannerHamburguer from '../../assets/banner-hamburguer.svg';

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  background: url('${BannerHamburguer}') no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #1f1f1f;
  height: 480px;
  position: relative;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    color: #f4f4f4;
    position: absolute;
    line-height: 60px;
    right: 20%;
    top: 30%;

    span {
      display: block;
      color: #fff;
      font-size: 20px;
    }
  }
  `;
  export const CategoryMenu = styled.div`
  
  `;
    
  export const Container = styled.div`
    
  `;

  export const ProductsContainer = styled.div`
  
  `;
