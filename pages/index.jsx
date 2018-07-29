import React from 'react';
import data from '../data/data.json';
import './index.css';
import Card from './Card';

export default class Index extends React.Component {
  static async getInitialProps() {
    return { cards: data }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          src="/static/logo.png"
              className="static-logo" alt="logo"
            />
        </header>
        <div className="Grid">
          {
            this.props.cards.map(card => (
              <Card key={card.id} />
            ))
          }
        </div>
      </div>
    )
  }
}

