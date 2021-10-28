import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { useRouter,  } from 'next/router';
import { useState, useEffect } from 'react';
import { useGoogleLogin } from 'react-google-login';
import { CLIENT_ID } from '../login/google/config';
import Logout from '../login/google/Logout';
import Header from '../../components/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  height: 100vh;
  background: linear-gradient(360deg, #b9fbff 0%, #d1c9f1 100%);
`;

const Box= styled.div`
  margin: 0 auto;
  width: 500px;
  min-height: 500px;
  @media screen and (max-width: 768px) {
    width: 16rem;
    min-height: 300px;

  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255,0.4);
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  border-radius: 10px;
  backdrop-filter: blur(2px);
  margin-top: 10px;
`;

const Name = styled.h2`
  margin-top: 10px;
`
const Tokens = styled.div`
  display: flex;
  
`
const Row = styled.div`
  display: flex;
  margin-top: 10px;
  color: #352b73;
  width: 250px;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`
const Page = () => {
  const [coins, setCoins] = useState()
  useEffect(() => {
    const coinVal = localStorage.getItem('coins')
    setCoins(coinVal);
  }, [coins])
  const [profile, setProfile] = useState();
  useGoogleLogin({
    clientId: CLIENT_ID,
    isSignedIn: true,
    fetchBasicProfile: true,
    onSuccess: (res) => {
      console.log(res)
      setProfile(res.profileObj);
    },
  });

  return (
  <>
    <Header/>
    <Container>
      <Box>
        <FaUserCircle  size="5em" color="#352b73"/>
        <Name>
          { profile && profile.name }
        </Name>
        <Row>
          <div style={{marginTop: "18px", marginRight: "5px", fontSize: "20px"}}>
            Tokens: 
          </div>
          <Tokens>
            <div style={{marginTop: "25px", marginRight: "5px"}}>{coins} x</div> 
            <img width="40px"  style={{marginTop: "10px"}}src="https://s2.coinmarketcap.com/static/img/coins/64x64/2300.png" />
          </Tokens>
        </Row>
      </Box>
    </Container>
  </>
  )
};

export default Page;
