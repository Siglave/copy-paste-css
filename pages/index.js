import styled from 'styled-components';
import Layout from '@/frontend/Layout';

const Title = styled.h1`
  font-size:16px;
`

export default function Home() {
  return (
    <Layout>
      <Title>FIRST PAGE</Title>
    </Layout>
  )
}
