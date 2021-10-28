import React from 'react';
import PropTypes from 'prop-types';
import { SiElixir } from 'react-icons/si';
import { HiDotsVertical } from 'react-icons/hi';
import { BiLineChart, BiLineChartDown } from 'react-icons/bi';
import { AwesomeButton } from 'react-awesome-button';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 2rem;
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.67);
  background-color: white;
  max-width: 360px;
  width: 100%;
  height: 500px;
  display: grid;
  grid-template-rows: 11rem 1fr;
  overflow: hidden;
  position: relative;
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
  height: 11rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-sizing: border-box;
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
  position: absolute;
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 6rem;
  left: 50%;
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.67);
  transform: translateX(-50%);
  transition: all 0.3s ease-in-out;
  svg {
    font-size: 30px;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    background-color: black;
    transform: translateX(-50%);
    svg {
      color: #f3f3f3;
    }
  }
  @media screen and (max-width: 768px) {
    height: 3.5rem;
    width: 3.5rem;
    top: 9rem;
  }
`;

const Settings = styled.button`
  position: absolute;
  top: 12rem;
  right: 0.5rem;
  border-radius: 1rem;
  padding: 0.2rem;
  svg {
    font-size: 30px;
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
      color: #8c8c8c;
      transition: all 0.3s ease-in-out;
    }
    h4 {
      color: #0096ff;
      margin-bottom: 4px;
    }
    &:hover {
      p {
        color: #0096ff;
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
  timeSpent,
  title,
  type,
  peopleLearning,
  tokensGenerated,
}) => {
  const ChartColor = isHot ? '#FF5733' : '0096ff';
  const ChartIcon = isHot ? BiLineChart : BiLineChartDown;
  return (
    <Container>
      <Icon>
        <SiElixir />
      </Icon>
      <Settings>
        <HiDotsVertical />
      </Settings>
      <Banner src={backgroundImage} />
      <Content>
        <h1>{title}</h1>
        <p>{type}</p>
        <Details>
          <section>
            <h4>People learning</h4>
            <p>{peopleLearning}</p>
          </section>
          <section>
            <h4>Tokens generated</h4>
            <p>{tokensGenerated}</p>
          </section>
        </Details>
        <Details>
          <section>
            <h4>Time spent</h4>
            <p>{timeSpent}h</p>
          </section>
          <section>
            <h4>Popularity</h4>
            <ChartIcon color={ChartColor} />
          </section>
        </Details>
        <AwesomeButton type="primary">Learn</AwesomeButton>
      </Content>
    </Container>
  );
};

Card.propTypes = {
  backgroundImage: PropTypes.string,
  isHot: PropTypes.bool,
  timeSpent: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string,
  peopleLearning: PropTypes.number,
  tokensGenerated: PropTypes.number,
};

Card.defaultProps = {
  isHot: false,
  peopleLearning: 0,
  tokensGenerated: 0,
  title: 'Elixir course',
  type: 'Programming',
  timeSpent: 0,
  backgroundImage:
    'https://images.unsplash.com/photo-1506391436719-ceef2f52be69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
};

export default Card;
