import React from 'react'
import { Comment, Header, Segment } from 'semantic-ui-react'
import CommentItem from 'appComponents/CommentItem/CommentItem'

function ArticleComments(props) {
  const { comments, updateCommentById, updateUserInfo } = props

  return (
    <Segment>
      <Comment.Group>
        <Header as="h3" dividing>Comments</Header>

        {comments.map(comment => (
          <CommentItem
            comment={comment}
            updateCommentById={updateCommentById}
            updateUserInfo={updateUserInfo}
            key={comment.id}
          />
          ))}

      </Comment.Group>
    </Segment>
  )
}

export default ArticleComments
