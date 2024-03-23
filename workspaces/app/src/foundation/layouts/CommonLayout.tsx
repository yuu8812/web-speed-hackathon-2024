import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Space } from '../styles/variables';

const _Content = styled.div`
  min-height: 100vh;
  padding: 0 ${Space * 2}px;
`;

const CommonLayout: React.FC = () => {
  return (
    <Container>
      <_Content>
        <Outlet />
      </_Content>
      <Footer />
    </Container>
  );
};

export default CommonLayout;
