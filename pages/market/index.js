import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import toast, { Toaster } from 'react-hot-toast';
import { BsPencilFill } from 'react-icons/bs';
import { ContextApi } from '../../state/ContextApi';
import { MdFastfood } from 'react-icons/md';
import AbstractLogo from '../../public/abstract_1.svg';
import Card from '../../components/Card';
import CardContainer from '../../components/CardContainer';
import Search from '../../components/Search';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Wrapper from '../../components/Wrapper';
import Categories from '../../components/Categories';
import { useRouter } from 'next/router';

import { marketCards } from '../../mock';
import GlassButton from '../../components/GlassButton';
import * as animation from '../../lottie/book_loading.json';

const animationOptions = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  overflow: hidden;
  min-height: 100vh;
  background: linear-gradient(360deg, #b9fbff 0%, #d1c9f1 100%);
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Market = () => {
  const [cards, setCards] = useState(marketCards);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const router = useRouter();
  const context = useContext(ContextApi);
  console.log('context', context);
  const $event = context.event;
  return (
    <>
      <Toaster />
      <Header />
      <Container>
        <Search />
        <Categories
          onClick={(category) => {
            if (category.id === activeCategory) {
              setActiveCategory(null);
            } else {
              setActiveCategory(category.id);
            }
          }}
          activeCategory={activeCategory}
          categories={[
            {
              id: 'merch',
              icon: BsPencilFill,
            },
            {
              id: 'food',
              icon: MdFastfood,
            },
          ]}
        />
        <Wrapper
          title="Marketplace"
          content={
            <CardContainer>
              {cards
                .filter((card) => {
                  if (activeCategory) {
                    const type = card.item && card.item.type;
                    return type === activeCategory;
                  }
                  return true;
                })
                .map((card) => (
                  <Card
                    key={card.title}
                    onClick={(card) => {
                      const coinVal = localStorage.getItem('coins');
                      const price =
                        card.descriptionContent1 &&
                        parseFloat(card.descriptionContent1);
                      if (price && coinVal) {
                        const current = parseFloat(coinVal);
                        if (current >= price) {
                          localStorage.setItem('coins', current - price);
                          toast('Purchased 🔥');
                          $event.emit('purchase');
                        } else {
                          toast('Not enough coins 😞!');
                        }
                      }
                    }}
                    {...card}
                  />
                ))}
            </CardContainer>
          }
          background={<AbstractLogo />}
        />
        {loading && (
          <Lottie
            options={animationOptions}
            height={'30vw'}
            width={'30vw'}
            isStopped={false}
            isPaused={false}
          />
        )}
        {!loading && (
          <GlassButton
            onPress={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                setCards((prev) => [...prev, ...marketCards]);
              }, Math.random() * 5000 + 1000);
            }}
          >
            Load more
          </GlassButton>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Market;
