import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 30px;
  padding-bottom: 15px;
  
  background-color: #efefef;
  overflow-x: hidden;

  .react-multi-carousel {
    overflow: visible;
  }
  .carousel-item {
    padding-right: 40px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #61a120;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin: 70px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: #61a120;
    left: 50%;
    transform: translateX(-50%);
  }
`;
export const Button = styled(Link)`
    padding: 20px 10px;
    width: 100%;
    height: 270px;
    cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerItems = styled.div`
  background-image: url(${(props) => props.$imageUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 90%;
  height: 250px;

  p {
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 20px;
    font-weight: bold;
    margin-top: 50px;
  }
`;