export const FETCHING_ARTICLES = 'FETCHING_ARTICLES'
export const FETCHED_ARTICLES = 'FETCHED_ARTICLES'
export const FETCHING_ARTICLE_BY_ID = 'FETCHING_ARTICLE_BY_ID'
export const FETCHED_ARTICLE_BY_ID = 'FETCHED_ARTICLE_BY_ID'
export const UPDATED_COMMENT = 'UPDATED_COMMENT'
export const UPDATED_USER_INFO = 'UPDATED_USER_INFO'

function fetchingArticles() {
  return {
    type: FETCHING_ARTICLES,
  }
}

function fetchedArticles(articles) {
  return {
    type: FETCHED_ARTICLES,
    articles,
  }
}

export function fetchArticles() {
  return (dispatch) => {
    dispatch(fetchingArticles())
    setTimeout(() => {
      dispatch(fetchedArticles([{
        id: '1',
        author: {
          id: '1',
          name: 'Polly Jane',
        },
        title: 'How I spent my summer',
        text: 'Few words about my summer story...',
        comments: [
          {
            id: '1',
            text: 'Paris is so cool!',
            commenter: {
              id: '2',
              name: 'John Galt',
            },
          },
          {
            id: '2',
            text: 'Paris is so cool!',
            commenter: {
              id: '2',
              name: 'John Galt',
            },
          },
        ],
      },
      {
        id: '2',
        author: {
          id: '2',
          name: 'John Galt',
        },
        title: 'Walk in Paris',
        text: 'The French eating habits the world should learn from',
        comments: [
          {
            id: '2',
            text: 'Paris is so cool!',
            commenter: {
              id: '1',
              name: 'Polly Jane',
            },
          },
        ],
      }]))
    }, 1000)
  }
}

function fetchingArticleById() {
  return {
    type: FETCHING_ARTICLE_BY_ID,
  }
}

function fetchedArticleById(selectedArticle) {
  return {
    type: FETCHED_ARTICLE_BY_ID,
    selectedArticle,
  }
}

export function fetchArticleById(id) {
  return (dispatch) => {
    dispatch(fetchingArticleById())
    setTimeout(() => {
      dispatch(fetchedArticleById({
        id: '1',
        author: {
          id: '1',
          name: 'Polly Jane',
        },
        title: 'How I spent my summer',
        text: 'Few words about my summer story...',
        comments: [
          {
            id: '1',
            text: 'Paris is so cool!',
            commenter: {
              id: '2',
              name: 'John Galt',
            },
          },
        ],
      }))
    }, 1000)
  }
}

function updatedComment() {
  return {
    type: UPDATED_COMMENT,
  }
}

export function updateCommentById({ id, text }) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(updatedComment())
    }, 1000)
  }
}

function updatedUserInfo() {
  return {
    type: UPDATED_USER_INFO,
  }
}

export function updateUserInfo({ id, name }) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(updatedUserInfo())
    }, 1000)
  }
}
