const markdownIt = require('markdown-it')
const markdownItAttrs = require('markdown-it-attrs')
const markdownItContainer = require('markdown-it-container')

const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
}

function configureMarkdownIt() {
  // Reference: https://github.com/markdown-it/markdown-it-container/issues/23
  return markdownIt(markdownItOptions)
    .use(markdownItAttrs)
    .use(markdownItContainer, 'dynamic', {
      validate: function () { return true; },
      render: function (tokens, idx) {
        const token = tokens[idx];
        if (token.nesting === 1) {
          return '<div class="' + token.info.trim() + '">';
        } else {
          return '</div>';
        }
      }
    });
}
//------------------------------

module.exports = { configureMarkdownIt }
