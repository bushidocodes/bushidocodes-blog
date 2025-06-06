import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout, Wrapper, Header } from '../components';
import config from '../../config/SiteConfig';

const Content = styled.div`
  grid-column: 2;
  padding: 2rem 4rem;
  text-align: center;
`;

function NotFoundPage() {
  return (
    <Layout>
      <Wrapper>
        <Header>
          <Link to="/">{config.siteTitle}</Link>
        </Header>
        <Content>
          <h1>Page not found</h1>
          <p>
            Sorry, we couldn&apos;t find what you were looking for. <Link to="/">Go back home</Link>.
          </p>
        </Content>
      </Wrapper>
    </Layout>
  );
}

export default NotFoundPage;

export function Head() {
  return <Helmet title={`404 | ${config.siteTitle}`} />;
}
