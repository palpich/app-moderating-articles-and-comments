import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header, Divider } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import * as actionCreators from 'appActions'
import './App.css'
import FeedArticles from 'appComponents/FeedArticles/FeedArticles'

class App extends Component {
  componentDidMount() {
    const { fetchArticles, fetchArticleById } = this.props

    fetchArticles()
    fetchArticleById()
  }

  render() {
    const {
      articles,
      selectedArticles,
      updateCommentById,
      updateUserInfo,
    } = this.props

    return (
      <div className="App">
        <div className="App-header" />
        <div className="App-content">
          <Header as="h2" icon="beer" content="Feed" />
          <Divider hidden />
          <FeedArticles
            articles={articles}
            updateCommentById={updateCommentById}
            updateUserInfo={updateUserInfo}
          />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  fetchArticleById: PropTypes.func.isRequired,
  updateCommentById: PropTypes.func.isRequired,
  updateUserInfo: PropTypes.func.isRequired,
  articles: PropTypes.object,
}

export default connect(
  state => state,
  actionCreators,
)(App)
