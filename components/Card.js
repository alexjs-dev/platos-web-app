import React from 'react';
import PropTypes from 'prop-types';
import { SiElixir } from 'react-icons/si';
import { BsCartFill } from 'react-icons/bs';
import { BiLineChart, BiLineChartDown } from 'react-icons/bi';
import GlassButton from './GlassButton';
import styled, { css } from 'styled-components';

const gridStylesReverted = css`
  .grid:nth-child(even) {
    order: -1;
  }
`;

const Container = styled.div`
  background: linear-gradient(
    180deg,
    rgba(185, 251, 255, 0.5) 0%,
    rgba(209, 201, 241, 0.5) 100%
  );
  box-shadow: 40px 40px 100px rgba(24, 48, 63, 0.2);
  border-radius: 40px;
  opacity: 1;
  width: 360px;
  height: 500px;
  display: grid;
  grid-template-rows: ${(props) => (props.revert && 'unset') || '11rem 1fr'};
  overflow: hidden;
  position: relative;
  ${(props) => props.revert && gridStylesReverted}
  @media screen and (max-width: 768px) {
    max-width: unset;
    width: 100%;
    height: auto;
    min-height: 500px;
  }
`;

const Banner = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  max-height: 11rem;
  height: ${(props) => (props.revert && 'auto') || '11rem'};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
  @media screen and (min-width: 769px) {
    background-attachment: fixed;
  }
`;

const Content = styled.div`
  padding: 2.5rem 1rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  button {
    width: 100%;
    margin-top: auto;
  }
  h1 {
    margin-bottom: 4px;
    text-align: center;
  }
  > p {
    color: #8c8c8c;
    text-align: center;
    margin-bottom: 16px;
  }
`;

const Icon = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 42.15%
  );
  backdrop-filter: blur(9px);
  border-radius: 20px;
  position: absolute;
  height: 4rem;
  z-index: 1;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${(props) => (props.revert && 'unset') || '9rem'};
  bottom: ${(props) => (props.revert && '4rem') || 'unset'};
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s ease-in-out;
  > span {
    overflow: visible !important;
  }
  svg {
    font-size: 30px;
    color: #f3f3f3;
    transition: all 0.3s ease-in-out;
  }
  img {
    width: 80% !important;
    height: 80% !important;
    transition: all 0.3s ease-in-out;
    margin-bottom: 80px;
    object-fit: scale-down;

    &:hover {
      transform: scale(1.2);
    }
  }
  &:hover {
    cursor: pointer;
    svg {
      transform: scale(1.2);
    }
  }
  @media screen and (max-width: 768px) {
    height: 3.5rem;
    width: 3.5rem;
    top: ${(props) => (props.revert && 'unset') || '9rem'};
    bottom: ${(props) => (props.revert && '1.5rem') || 'unset'};
  }
`;

const Settings = styled.button`
  position: absolute;
  top: ${(props) => (props.revert && 'unset') || '11rem'};
  bottom: ${(props) => (props.revert && '3rem') || 'unset'};
  right: 0.5rem;
  border-radius: 1rem;
  padding: 0.7rem;
  svg {
    font-size: 20px;
  }
  &:hover {
    cursor: pointer;
    background-color: #f1f1f1;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    svg {
      font-size: 30px;
    }
    p {
      color: black;
      font-weight: 300;
      transition: all 0.3s ease-in-out;
    }
    h4 {
      color: #352b73;
      margin-bottom: 4px;
    }
    &:hover {
      p {
        color: #352b73;
      }
    }
  }
  section:last-child {
    align-items: flex-end;
    text-align: right;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    section {
      align-items: center !important;
      justify-content: center !important;
      text-align: center !important;
    }
  }
`;

const Card = ({
  backgroundImage,
  isHot,
  isReverted,
  title,
  type,
  descriptionTitle1,
  descriptionTitle2,
  descriptionTitle3,
  descriptionTitle4,
  descriptionContent1,
  descriptionContent2,
  descriptionContent3,
  actionTitle,
  onClick,
  icon,
}) => {
  const ChartColor = isHot ? '#FF5733' : '0096ff';
  const ChartIcon = isHot ? BiLineChart : BiLineChartDown;
  return (
    <Container revert={isReverted}>
      <Icon revert={isReverted}>{icon}</Icon>
      <Settings revert={isReverted}>
        <BsCartFill />
      </Settings>
      <Banner src={backgroundImage} className="grid" revert={isReverted} />
      <Content className="grid">
        <h1>{title}</h1>
        <p>{type}</p>
        <Details>
          <section>
            <h4>{descriptionTitle1}</h4>
            <p>{descriptionContent1}</p>
          </section>
          <section>
            <h4>{descriptionTitle2}</h4>
            <p>{descriptionContent2}</p>
          </section>
        </Details>
        <Details>
          <section>
            <h4>{descriptionTitle3}</h4>
            <p>{descriptionContent3}</p>
          </section>
          <section>
            <h4>{descriptionTitle4}</h4>
            <ChartIcon color={ChartColor} />
          </section>
        </Details>
        <GlassButton type="primary" onPress={onClick}>
          {actionTitle}
        </GlassButton>
      </Content>
    </Container>
  );
};

Card.defaultProps = {
  isHot: false,
  isReverted: false,
  title: 'Elixir course',
  icon: <SiElixir />,
  onClick: () => {},
  type: 'Programming',
  actionTitle: 'Learn',
  descriptionTitle1: 'Title 1',
  descriptionTitle2: 'Title 2',
  descriptionTitle3: 'Title 3',
  descriptionTitle4: 'Title 4',
  descriptionContent1: 'Content 1',
  descriptionContent2: 'Content 2',
  descriptionContent3: 'Content 3',
  backgroundImage:
    'https://images.unsplash.com/photo-1506391436719-ceef2f52be69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
};

export default Card;
