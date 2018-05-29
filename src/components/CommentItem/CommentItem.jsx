import React, { Component } from 'react'
import { Comment, Form, Button } from 'semantic-ui-react'

class CommentItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      valueComment: '',
      valueAuthor: '',
      isEditingComment: false,
      isUpdatingAuthor: false,
    }

    this.handleChangeComment = this.handleChangeComment.bind(this)
    this.handleChangeAuthor = this.handleChangeAuthor.bind(this)
    this.handleUpdateComment = this.handleUpdateComment.bind(this)
    this.handleUpdateAuthor = this.handleUpdateAuthor.bind(this)
  }

  handleChangeComment(e) {
    this.setState({ valueComment: e.target.value })
  }

  handleChangeAuthor(e) {
    this.setState({ valueAuthor: e.target.value })
  }

  handleUpdateComment() {
    const { comment, updateCommentById } = this.props
    const { valueComment } = this.state

    updateCommentById({
      id: comment.id,
      text: valueComment,
    })
  }

  handleUpdateAuthor() {
    const { comment, updateUserInfo } = this.props
    const { valueAuthor } = this.state

    updateUserInfo({
      id: comment.commenter.id,
      name: valueAuthor,
    })
  }

  render() {
    const { comment } = this.props
    const { isEditingComment, isUpdatingAuthor } = this.state

    return (
      <Comment>
        <Comment.Author>{comment.commenter.name}</Comment.Author>
        <Comment.Text>{comment.text}</Comment.Text>
        <Comment.Actions>
          <Comment.Action
            onClick={() => this.setState({
              isEditingComment: !isEditingComment,
              isUpdatingAuthor: false,
            })}
            content="Edit comment"
          />
          <Comment.Action
            onClick={() => this.setState({
              isUpdatingAuthor: !isUpdatingAuthor,
              isEditingComment: false,
            })}
            content="Update author"
          />
        </Comment.Actions>

        {isEditingComment &&
        <Form reply>
          <Form.TextArea
            value={this.state.valueComment}
            onChange={this.handleChangeComment}
          />
          <Button
            content="Save comment"
            labelPosition="left"
            icon="edit"
            primary
            onClick={this.handleUpdateComment}
          />
        </Form>}

        {isUpdatingAuthor &&
        <Form reply>
          <Form.Input
            value={this.state.valueAuthor}
            onChange={this.handleChangeAuthor}
          />
          <Button
            content="Save author"
            labelPosition="left"
            icon="edit"
            primary
            onClick={this.handleUpdateAuthor}
          />
        </Form>}

      </Comment>
    )
  }
}

export default CommentItem
