import React, { Component } from 'react'
import { Comment, Header, Segment, Form, Button } from 'semantic-ui-react'

class CommentItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      isEditing: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleUpdateComment = this.handleUpdateComment.bind(this)
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  handleUpdateComment() {
    const { comment, updateCommentById } = this.props
    const { value } = this.state

    updateCommentById({
      id: comment.id,
      text: value,
    })
  }

  render() {
    const { comment } = this.props
    const { isEditing } = this.state

    return (
      <Comment>
        <Comment.Author>{comment.commenter.name}</Comment.Author>
        <Comment.Text>{comment.text}</Comment.Text>
        <Comment.Actions>
          <Comment.Action
            onClick={() => this.setState({ isEditing: !isEditing })}
            content="Edit"
          />
        </Comment.Actions>

        {isEditing &&
        <Form reply>
          <Form.TextArea
            value={this.state.value}
            onChange={this.handleChange}
          />
          <Button
            content="Save comment"
            labelPosition="left"
            icon="edit"
            primary
            onClick={this.handleUpdateComment}
          />
        </Form>}

      </Comment>
    )
  }
}

export default CommentItem
