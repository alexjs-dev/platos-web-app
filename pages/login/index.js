import styled from 'styled-components';
import Login from '../../utils/google/Login';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  height: 100vh;
  background: linear-gradient(360deg, #b9fbff 0%, #d1c9f1 100%);
`;

const Page = () => (
  <Container>
    <div
      style={{
        marginBottom: '50px',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img
        width="200px"
        src="Logo.png"
        alt="google login"
        className="icon"
      ></img>
      <h2 style={{ marginTop: '20px' }}>Plato</h2>
    </div>

    <Login />
  </Container>
);

export default Page;
