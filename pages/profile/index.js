import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';
import { FaFeatherAlt } from 'react-icons/fa';
import { ContextApi } from '../../state/ContextApi';

import { useState, useEffect, useContext } from 'react';
import { useGoogleLogin } from 'react-google-login';
import { CLIENT_ID } from '../../utils/google/config';
import Header from '../../components/Header';
import Logout from '../../utils/google/Logout';
import { useRouter } from 'next/router';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  min-height: 100vh;
  align-items: center;
  background: linear-gradient(360deg, #b9fbff 0%, #d1c9f1 100%);
`;
const BoxContainer = styled.div`
  width: 500px;
  @media screen and (max-width: 768px) {
    width: 20rem;
  }
`;
const Box = styled.div`
  margin: 0 auto;
  padding: 12px 0;
  max-width: 500px;
  width: 100%;
  min-height: 500px;
  max-height: 800px;
  overflow: auto;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    width: 20rem;
    min-height: 300px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  backdrop-filter: blur(2px);
  margin-top: 10px;
`;

const Name = styled.h2`
  margin-top: 10px;
`;
const Tokens = styled.div`
  display: flex;
`;
const Purchases = styled.div`
  margin-top: '20px';
  color: '#352b73';
  div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 40px !important;
    height: 40px !important;
    border-radius: 24px;
  }
`;

const Row = styled.div`
  display: flex;
  margin-top: 10px;
  color: #352b73;
  width: 250px;
  justify-content: space-between;
  align-items: center;
`;
const Page = () => {
  const [coins, setCoins] = useState();
  const router = useRouter();
  useEffect(() => {
    const coinVal = localStorage.getItem('coins');
    setCoins(coinVal);
  }, [coins]);
  const [profile, setProfile] = useState();
  useGoogleLogin({
    clientId: CLIENT_ID,
    isSignedIn: true,
    fetchBasicProfile: true,
    onSuccess: (res) => {
      setProfile(res.profileObj);
    },
  });
  const { data } = useContext(ContextApi);
  console.log(data);
  return (
    <>
      <Header />
      <Container>
        <BoxContainer>
          <Box>
            <FaUserCircle size="5em" color="#352b73" />
            <Name>{profile && profile.name}</Name>
            <Row>
              <div
                style={{
                  marginTop: '18px',
                  marginRight: '5px',
                  fontSize: '20px',
                }}
              >
                Token balance:
              </div>
              <Tokens>
                <div
                  style={{
                    marginTop: '25px',
                    marginRight: '5px',
                    fontSize: '20px',
                  }}
                >
                  {coins} x
                </div>
                <Image
                  src="/coin.png"
                  width={40}
                  alt="Coin"
                  height={40}
                  style={{ marginTop: '20px' }}
                />
              </Tokens>
            </Row>
            <Purchases>
              <div
                style={{
                  marginTop: '10px',
                  fontSize: '20px',
                }}
              >
                Your purchases
              </div>
              {data &&
                data.purchases &&
                data.purchases.map((purchase) => {
                  const Icon = purchase.icon;
                  return (
                    <div
                      key={Math.random()}
                      style={{
                        marginTop: '20px',
                      }}
                    >
                      {Icon}1 x {purchase.title} {purchase.descriptionContent1}
                      PLT
                    </div>
                  );
                })}
            </Purchases>
          </Box>
          <Logout
            style={{ width: '100%' }}
            clear={() => {
              router.push('/');
            }}
          />
        </BoxContainer>
      </Container>
    </>
  );
};

export default Page;
