import { GET_POSTS, GET_CATEGORIES, GET_TAGS, GET_POST } from '../constants/ActionTypes';
import parseMarkdown from 'front-matter-markdown';

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('../../public/posts', false, /\.md$/)).sort().reverse();

export function init() {
  return async function (dispatch) {
    const markdownFilesContent = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
      .catch((err) => console.error(err));
    
    let posts = [];

    markdownFilesContent.forEach(content => {
      posts.push(parseMarkdown(content));
    });

    const categories = [...new Set(posts.map((post) => post.category))];
    let tags = [];
    const parsedTags = posts.map((post) => post.tags.split(',').map((tag) => tag.trim())).flat();
    tags = [...new Set(parsedTags)];

    dispatch({ type: GET_POSTS, payload: posts });
    dispatch({ type: GET_CATEGORIES, payload: categories });
    dispatch({ type: GET_TAGS, payload: tags });
  }  
};

export function getPost(slug) {
  return function (dispatch) {
    dispatch({ type: GET_POST, payload: slug });
  }
}
