import React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import {
  Layout,
  Wrapper,
  Header,
  SubLine,
  Article,
  SectionTitle,
} from "components";
import { media } from "../utils/media";
import config from "../../config/SiteConfig";

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

/**
 * @typedef {Object} CategoryPageProps
 * @property {{ category: string }} pageContext
 * @property {{ allMarkdownRemark: { edges: Array<any>, totalCount: number } }} data
 */

/**
 * @param {CategoryPageProps} props
 */
const Category = ({
  pageContext: { category },
  data: { allMarkdownRemark },
}) => {
  const { edges, totalCount } = allMarkdownRemark;
  const subline = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${category}"`;

  return (
    <Layout>
      <Wrapper>
        <Helmet title={`${category} | ${config.siteTitle}`} />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
        </Header>
        <Content>
          <SectionTitle>Category &ndash; {category}</SectionTitle>
          <SubLine sectionTitle>
            {subline} (See <Link to="/categories">all categories</Link>)
          </SubLine>
          {edges.map((post) => (
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
};

export default Category;


export const postQuery = graphql`
  query CategoryPage($category: String!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MM.DD.YYYY")
            category
          }
          fields {
            slug
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`;
