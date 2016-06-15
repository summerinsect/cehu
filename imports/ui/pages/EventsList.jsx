import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
 
import Event from '../components/Event.jsx';
 
// App component - represents the whole app
export default class Home extends Component {
  renderEvents() {
    return this.props.events.map((event) => (
      <Event key={event._id} event={event} />
    ));
  }
  render() {
    return (
      <div className="container">
      <header>
          <h1>Cehu List</h1>
      </header>
      {this.renderEvents()}
      </div>
    );
  }
}

Home.propTypes = {
  events: PropTypes.array.isRequired,
};