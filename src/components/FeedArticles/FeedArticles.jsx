import React from 'react'
import PropTypes from 'prop-types'
import { Container, Header, Divider } from 'semantic-ui-react'
import ArticleComments from 'appComponents/ArticleComments/ArticleComments'

function FeedArticles(props) {
  const { articles: { list } } = props

  const FeedEvent = list.map((event, index, arr) => (
    <div key={event.id}>
      <Header as="h4" icon="user circle outline" content={event.author.name} />
      <Container text>
        <Header as="h2">{event.title}</Header>
        <p>{event.text}</p>
      </Container>
      <ArticleComments
        comments={event.comments}
        {...props}
      />
      <Divider
        section
        hidden={arr.length === index + 1}
      />
    </div>
  ))

  return (
    <div>
      {FeedEvent}
    </div>
  )
}

FeedArticles.propTypes = {
  articles: PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.object),
  }),
}

FeedArticles.defaultProps = {
  articles: {
    list: [],
  },
}

export default FeedArticles
