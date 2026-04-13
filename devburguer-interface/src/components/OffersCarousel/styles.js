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
  color: #9758a6;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 20px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: #9758a6;
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
