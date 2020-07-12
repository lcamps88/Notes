import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Segment, Header, Divider, List } from 'semantic-ui-react'

class Notes extends Component {


  NotesList = () => {
    return this.props.notes.map((note, index) => {
      return (
        <List.Item key={index} note={note}  >
          <List.Icon name='sticky note' size='large' verticalAlign='middle' />
          <List.Content >
            <List.Header color='blue'>{note.title} </List.Header>
            {note.content}
          </List.Content>


        </List.Item>
      )
    }

    )
  }

  render() {
    return (

      <Segment color='blue'>
        <Header as='h3'>List Notes</Header>
        <Divider></Divider>


        <List size='large' >
          {this.NotesList()}
        </List>

      </Segment>

    )
  }


}
function mapStateToProps(state) {
  return {
    notes: state.notes
  }
};
export default connect(mapStateToProps, null)(Notes)

