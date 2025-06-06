import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout, Article, Wrapper, SectionTitle } from '../components';
import { media } from '../utils/media';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 3rem 6rem;
  @media ${media.tablet} {
    padding: 3rem 2rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`;

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${(props) => props.theme.colors.grey.dark};

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media ${media.phone} {
      font-size: 1.25rem;
    }
    @media ${media.tablet} {
      font-size: 1.45rem;
    }
  }
`;

/**
 * @typedef {Object} IndexProps
 * @property {{ edges: Array<any> }} data
 */

/**
 * @param {IndexProps} props
 */
function IndexPage({
  data: {
    allMarkdownRemark: { edges: postEdges },
  },
}) {
  return (
    <Layout>
      <Wrapper>
        <Hero>
          <h1>Hi.</h1>
          <p>
            I&apos;m Sean McBride, a military veteran turned Software Engineer.
            <br />I code with Honor, defend the Just, and pursue lofty undertakings on the Cutting Edge
          </p>
          <p>
            You can connect with me on
            <a href="https://www.linkedin.com/in/bushidocodes/"> LinkedIn</a>,
            <a href="https://x.com/bushidocodes"> X</a>, or
            <a href="https://www.youtube.com/@BushidoCodes"> YouTube</a>
          </p>
        </Hero>
        <Content>
          <SectionTitle>Latest stories</SectionTitle>
          {postEdges.map((post) => (
            <Article
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              excerpt={post.node.excerpt}
              timeToRead={post.node.timeToRead}
              slug={post.node.fields.slug}
              category={post.node.frontmatter.category}
              key={post.node.fields.slug}
            />
          ))}
        </Content>
      </Wrapper>
    </Layout>
  );
}

export default IndexPage;

export const IndexQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MM.DD.YYYY")
            category
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`;
