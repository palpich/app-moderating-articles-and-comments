import React from 'react'
import { Comment, Header, Segment } from 'semantic-ui-react'

function ArticleComments(props) {
  const { comments } = props

  const CommentList = comments.map(comment => (
    <Comment key={comment.id} >
      <Comment.Author>{comment.commenter.name}</Comment.Author>
      <Comment.Text>{comment.text}</Comment.Text>
      <Comment.Actions>
        <Comment.Action>
          Edit
        </Comment.Action>
      </Comment.Actions>
    </Comment>
  ))

  return (
    <Segment>
      <Comment.Group>
        <Header as="h3" dividing>Comments</Header>
        {CommentList}
      </Comment.Group>
    </Segment>
  )
}

export default ArticleComments
