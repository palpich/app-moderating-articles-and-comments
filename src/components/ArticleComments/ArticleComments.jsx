import React from 'react'
import PropTypes from 'prop-types'
import { Comment, Header, Segment } from 'semantic-ui-react'
import CommentItem from 'appComponents/CommentItem/CommentItem'

function ArticleComments(props) {
  const { comments } = props

  return (
    <Segment>
      <Comment.Group>
        <Header as="h3" dividing>Comments</Header>

        {comments.map(comment => (
          <CommentItem
            comment={comment}
            key={comment.id}
            {...props}
          />
          ))}

      </Comment.Group>
    </Segment>
  )
}

ArticleComments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
}

ArticleComments.defaultProps = {
  comments: [],
}

export default ArticleComments
