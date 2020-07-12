import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../action/actions';
import { Form, Segment, Header, Icon, Dimmer, Loader, Modal, Button } from 'semantic-ui-react'

class NotesForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      active: false,
      open: false
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmission = (e) => {
    e.preventDefault();

    let { title, content } = this.state;

    if (title !== '') {

      this.setState({ active: true })
      console.log('add', this.state)
      this.props.addNote(title, content);

      setTimeout(() => { this.setState({ active: false }) }, 2000);


      this.setState({ title: '', content: '' });
    }
    else {
      console.log('vacio')
      this.setState({ open: true })

    }

  }


  UPloading = () => {
    this.setState({ active: true })
    setTimeout(() => { this.setState({ active: false }) }, 1000);
    console.log(this.state.active)
  }


  render() {
    return (
      <Segment raised>
        <Header as='h3'>Add a Note</Header>

        <Form>
          <Dimmer active={this.state.active}>
            <Loader>Adding Note</Loader>
          </Dimmer>
          <Form.Field widths='equal'>
            <label>Title</label>
            <input type="text" placeholder='title...' name="title" value={this.state.title} onChange={this.handleChange} />
          </Form.Field>
          <Form.TextArea label='Details' name="content" placeholder='Description...' value={this.state.content} onChange={this.handleChange} />

          <Modal open={this.state.open} size='tiny'
            trigger={

              <Form.Button color='teal' onClick={this.handleSubmission} ><Icon name='add circle'></Icon> Add Note</Form.Button>

            }>
            <Header icon='warning sign' as='H2' content='WARNING' />

            <Modal.Content>
              <Header as='h4'>Fields Title and Details is Empty</Header>
            </Modal.Content>
            <Modal.Actions>
              <Button basic color='red' onClick={() => this.setState({ open: false })}>
                <Icon name='remove' /> Close
                    </Button>
            </Modal.Actions>
          </Modal>





        </Form>

      </Segment>
    )
  }

}

export default connect(
  null,
  {
    addNote: addNote
  }
)(NotesForm);