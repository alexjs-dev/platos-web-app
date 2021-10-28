import styled from 'styled-components';
import Login from './google/Login'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Page = () => (
 <Container>
   <Login/>
  </Container>
);

export default Page;
