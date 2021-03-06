import Head from 'next/head';

import Lottie from 'react-lottie';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Card from '../../components/Card';

import CardContainer from '../../components/CardContainer';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Search from '../../components/Search';

import * as animation from '../../lottie/girl_reading_book.json';
import AbstractLogo from '../../public/abstract_1.svg';
import AbstractLogo2 from '../../public/abstract_2.svg';
import Wrapper from '../../components/Wrapper';
import { learnCards, marketCards } from '../../mock';

import dynamic from 'next/dynamic';

const NoSSRGlassChart = dynamic(() => import('../../components/GlassChart'), {
  ssr: false,
});

const animationOptions = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Charts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-height: 50vh;
  h2 {
    /* dont wrap text */
    font-size: 2rem;
    white-space: nowrap;
  }
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0.2rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(360deg, #b9fbff 0%, #d1c9f1 100%);
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Page = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <Container>
        <Head>
          <title>Yolo</title>
          <meta name="description" content="Yolo coin market place" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Begin your journey</h1>
        <Lottie
          options={animationOptions}
          height={'50vw'}
          width={'50vw'}
          isStopped={false}
          isPaused={false}
        />
        <Search />
        <Wrapper
          title="To Learn"
          content={
            <CardContainer>
              {learnCards.map((card) => (
                <Card key={card.title} {...card} />
              ))}
            </CardContainer>
          }
          background={<AbstractLogo2 />}
        />
        <Wrapper
          content={
            <Charts>
              <h2>Some stats ????</h2>
              <NoSSRGlassChart />
            </Charts>
          }
          background={<AbstractLogo />}
        />
        <Wrapper
          title="To Buy"
          content={
            <CardContainer>
              {marketCards.map((card) => (
                <Card
                  key={card.title}
                  isReverted={true}
                  onClick={() => router.push('/market')}
                  {...card}
                />
              ))}
            </CardContainer>
          }
          background={<AbstractLogo2 />}
        />
      </Container>
      <Footer />
    </>
  );
};

export default Page;
