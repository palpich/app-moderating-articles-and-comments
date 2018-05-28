import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as actionCreators from 'appActions'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  componentDidMount() {
    const { fetchArticles, fetchArticleById } = this.props

    fetchArticles()
    fetchArticleById()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

App.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  fetchArticleById: PropTypes.func.isRequired,
}

export default connect(
  state => state,
  actionCreators,
)(App)
