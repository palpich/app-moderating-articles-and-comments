export const FETCHING_ARTICLES = 'FETCHING_ARTICLES'
export const FETCHED_ARTICLES = 'FETCHED_ARTICLES'

function fetchedArticles(articles) {
  return {
    type: FETCHED_ARTICLES,
    articles,
  }
}

function fetchingArticles() {
  return {
    type: FETCHING_ARTICLES,
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
