import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout, Wrapper, Header, SectionTitle } from '../components';
import kebabCase from '../utils/kebabCase';
import { media } from '../utils/media';

import config from '../../config/SiteConfig';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${(props) => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
`;

const Title = styled.h3`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`;

/**
 * @typedef {Object} CategoryProps
 * @property {{ group: Array<{fieldValue: string, totalCount: number}> }} data
 */

/**
 * @param {CategoryProps} props
 */
function Category({
  data: {
    allMarkdownRemark: { group },
  },
}) {
  return (
    <Layout>
      <Wrapper>
        <Helmet title={`Categories | ${config.siteTitle}`} />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
        </Header>
        <Content>
          <SectionTitle>Categories</SectionTitle>
          {group.map((category) => (
            <Title key={category.fieldValue}>
              <Link to={`/categories/${kebabCase(category.fieldValue)}`}>{category.fieldValue}</Link> (
              {category.totalCount})
            </Title>
          ))}
        </Content>
      </Wrapper>
    </Layout>
  );
}

export default Category;

export const postQuery = graphql`
  query CategoriesPage {
    allMarkdownRemark {
      group(field: { frontmatter: { category: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;
