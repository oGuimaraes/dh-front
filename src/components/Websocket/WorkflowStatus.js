import React from 'react';
import { connect } from 'react-redux';
import { receiveNotification } from '../../store/modules/notification/actions';

class WorkflowStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workflow_state: '{{ note.workflow_state }}',
      message: '',
    };
  }

  // instance of websocket connection as a class property
  ws = new WebSocket('ws://dh-ufmg.herokuapp.com/notifications/');

  componentDidMount() {
    this.ws.onopen = () => {
      console.log('connected');
    };

    this.ws.onmessage = (evt) => {
      const message = JSON.parse(evt.data);
      if (false) {
        this.setState(message);
      }
      this.props.receiveNotification(message);
      this.setState({ message: message });
      console.log(this.state);
    };

    this.ws.onclose = () => {
      console.log('disconnected');
      // automatically try to reconnect on connection loss
    };
  }

  retracted = () => {
    console.log('got a message that we are now draft');
    this.setState({ workflow_state: 'draft' });
    this.setState({ message: 'draft' });
  };
  published = () => {
    console.log('got a message that we are now published');
    this.setState({ workflow_state: 'published' });
    this.setState({ message: 'published' });
  };
  retract = () => {
    console.log('Retracting');
    fetch('{% url Note-retract pk=note.id %}')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });

    this.setState({ workflow_state: 'draft' });
  };
  publish = () => {
    console.log('Publishing');
    fetch('{% url Note-publish pk=note.id %}')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });

    this.setState({ workflow_state: 'published' });
  };

  render() {
    const wf_state = this.state.workflow_state;
    const can_publish = wf_state === 'draft';
    const can_retract = wf_state === 'published';

    return (
      <div>
        <button
          className={
            'btn' +
            (can_publish ? ' btn-outline-secondary disabled' : ' btn-primary')
          }
          disabled={can_publish}
          aria-disabled={can_publish}
          type="button"
          onClick={this.retract}
        >
          Retract
        </button>
        <button
          className={
            'btn' +
            (can_retract ? ' btn-outline-secondary disabled' : ' btn-primary')
          }
          disabled={can_retract}
          aria-disabled={can_retract}
          type="button"
          onClick={this.publish}
        >
          Publish
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  songs: state.songs,
});

const mapDispatchToProps = {
  receiveNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkflowStatus);
