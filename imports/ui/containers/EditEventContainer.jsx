import { Meteor } from 'meteor/meteor';
import { Events } from '../../api/events.js';
import { Tags } from '../../api/tags.js';
import { createContainer } from 'meteor/react-meteor-data';
import NewEvent from '../pages/NewEvent.jsx';

export default createContainer(({ params: { id } }) => {
	Meteor.subscribe('events');
	Meteor.subscribe('tags');
  const event = Events.findOne(id);
  const eventExists = !!event;
  return {
    eventExists,
    tags: Tags.find().fetch(),
    event: eventExists ? event : {},
  };
}, NewEvent);
