import Head from 'next/head';

import Lottie from 'react-lottie';
import styled from 'styled-components';
import Card from '../../components/Card';

import CardContainer from '../../components/CardContainer';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { SiJavascript, SiElixir } from 'react-icons/si';
import { FaMoneyBill } from 'react-icons/fa';

import * as bookLoadingAnim from '../../lottie/book_loading.json';
import AbstractLogo from '../../public/abstract_1.svg';
import AbstractLogo2 from '../../public/abstract_2.svg';
import Wrapper from '../../components/Wrapper';

import dynamic from 'next/dynamic';

const NoSSRGlassChart = dynamic(() => import('../../components/GlassChart'), {
  ssr: false,
});

const bookLoadingAnimOptions = {
  loop: true,
  autoplay: true,
  animationData: bookLoadingAnim,
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
  background: linear-gradient(360deg, #b9fbff 0%, #d1c9f1 100%);
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const learnCards = [
  {
    isHot: false,
    title: 'Elixir course',
    type: 'Programming',
    actionTitle: 'Learn',
    descriptionTitle1: 'People',
    descriptionTitle2: 'Tokens',
    descriptionTitle3: 'Difficulty',
    descriptionTitle4: 'Cold',
    descriptionContent1: 6,
    descriptionContent2: 8,
    descriptionContent3: 'Hard',
    backgroundImage: '23622.jpg',
    icon: <SiElixir />,
  },
  {
    isHot: true,
    icon: <SiJavascript />,
    title: 'Javascript course',
    type: 'Programming',
    actionTitle: 'Learn',
    descriptionTitle1: 'People',
    descriptionTitle2: 'Tokens',
    descriptionTitle3: 'Difficulty',
    descriptionTitle4: 'Hot',
    descriptionContent1: 29,
    descriptionContent2: 2,
    descriptionContent3: 'Easy',
    backgroundImage: '366638.jpg',
  },
  {
    isHot: true,
    icon: <FaMoneyBill />,
    title: 'Accounting course',
    type: 'Accounting',
    actionTitle: 'Learn',
    descriptionTitle1: 'People',
    descriptionTitle2: 'Tokens',
    descriptionTitle3: 'Difficulty',
    descriptionTitle4: 'Hot',
    descriptionContent1: 62,
    descriptionContent2: 5,
    descriptionContent3: 'Medium',
    backgroundImage: 'mountains.jpeg',
  },
];

const marketCards = [
  {
    isHot: true,
    title: 'Yolo Pen',
    type: 'Yolo Merch',
    actionTitle: 'Buy',
    descriptionTitle1: 'Price',
    descriptionTitle2: 'Bought',
    descriptionTitle3: 'Weight',
    descriptionTitle4: 'Hot',
    descriptionContent1: 0.5,
    descriptionContent2: 827,
    descriptionContent3: 'Tiny',
    backgroundImage: 'gold.jpg',
    icon: <img src="/pen.png" alt="Pen" />,
  },
  {
    isHot: true,
    title: 'Yolo Pen',
    type: 'Yolo Merch',
    actionTitle: 'Buy',
    descriptionTitle1: 'Price',
    descriptionTitle2: 'Bought',
    descriptionTitle3: 'Weight',
    descriptionTitle4: 'Hot',
    descriptionContent1: 0.5,
    descriptionContent2: 827,
    descriptionContent3: 'Tiny',
    backgroundImage: 'bg.jpg',
    icon: <img src="/pen.png" alt="Pen" />,
  },
];

const Page = () => {
  return (
    <>
      <Header />
      <Container>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
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
              <h2>Some stats 😋</h2>
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
                <Card key={card.title} {...card} />
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

/* <Lottie
        options={bookLoadingAnimOptions}
        height={'50vw'}
        width={'50vw'}
        isStopped={true}
        isPaused={false}
      /> */
