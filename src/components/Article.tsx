import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import kebabCase from '../utils/kebabCase';

import SubLine from './SubLine';

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
`;

const Title = styled.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`;

const Initial = styled.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: -1;
`;

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

/**
 * @typedef {Object} ArticleProps
 * @property {string} title
 * @property {string} date
 * @property {string} excerpt
 * @property {string} slug
 * @property {number} timeToRead
 * @property {string} category
 */

/**
 * @param {ArticleProps} props
 */
function Article({ title, date, excerpt, slug, timeToRead, category }) {
  const firstChar = title.charAt(0);

  return (
    <Post>
      <Title>
        <Initial>{firstChar}</Initial>
        <Link to={slug}>{title}</Link>
      </Title>
      <SubLine>
        {date} &mdash; {timeToRead} Min Read &mdash; In{' '}
        <Link to={`/categories/${kebabCase(category)}`}>{category}</Link>
      </SubLine>
      <Excerpt>{excerpt}</Excerpt>
    </Post>
  );
}

export default Article;
