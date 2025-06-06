const path = require('path');
const kebabCase = require('./src/utils/kebabCase');

// Gatsby node APIs used to enhance or extend the default build process.

// Add a slug field to markdown nodes based on `slug` or `title` in frontmatter.
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type !== 'MarkdownRemark') return;

  const slugSource = node.frontmatter?.slug || node.frontmatter?.title;
  if (!slugSource) return;

  createNodeField({
    node,
    name: 'slug',
    value: `/${kebabCase(slugSource)}`,
  });
};

// Query markdown files and create the necessary post and category pages.
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('src/templates/post.js');
  const categoryTemplate = path.resolve('src/templates/category.js');

  const result = await graphql(`
    {
      posts: allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              category
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.posts.edges;

  posts.forEach((edge, index) => {
    const next = index === 0 ? null : posts[index - 1].node;
    const prev = index === posts.length - 1 ? null : posts[index + 1].node;

    createPage({
      path: edge.node.fields.slug,
      component: postTemplate,
      context: {
        slug: edge.node.fields.slug,
        prev,
        next,
      },
    });
  });

  const categories = Array.from(new Set(posts.flatMap((edge) => edge.node.frontmatter.category || [])));

  categories.forEach((category) => {
    createPage({
      path: `/categories/${kebabCase(category)}`,
      component: categoryTemplate,
      context: { category },
    });
  });
};

