import React, { Component } from 'react'
import styles from './App.css'

class App extends Component {
  render () {
    return (
      <div className={styles.App}>
        <h1 className={styles.App_title}>{this.props.title}</h1>
      </div>
    )
  }
}

export default App
