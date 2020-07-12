import React, { useState } from 'react'
import { connect } from 'react-redux';
import { removeNote, selectNote } from '../action/actions';
import { Segment, Header, Divider, Table, Icon, Modal, Button, Dimmer, Loader } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { kebabCase } from 'lodash';
import ListNote from './List'

const AllNotes = (props) => {

  const [showCart, setShowCart] = useState(false);
  const [loader, setLoader] = useState(false);
  //=======================================
  const removeNote = (index) => {
    setLoader(true)
    props.removeNote(index);
    setTimeout(() => { setLoader(false) }, 1000);
  }

  const selectNote = (index) => {
    props.selectNote(index);
  }

  const list = props.notes.filter((note, index) => {
    return (index === props.selected)
  })
  const noteObject = list[0];
  console.log("newsObject ", noteObject)


  const itemNotes = props.notes;

  const notesItems = () => {

    if (itemNotes) {
      return itemNotes.map((note, index) => {
        return (
          <Table.Row key={index} note={note}>
            <Modal size='large' trigger={

              <Table.Cell textAlign='left' verticalAlign='top'>
                <Link to={`/ListNotes/${kebabCase(note.title)}`} onClick={() => setShowCart(true)}>
                  <Icon name='check' onClick={() => selectNote(index)}></Icon>
                </Link>
              </Table.Cell>


            } closeOnEscape={true}
              closeOnRootNodeClick={true} open={showCart}>

              <Header as='h3'>Details Notes</Header>
              <Divider></Divider>
              <Modal.Content>
                <ListNote data={noteObject} />
              </Modal.Content>

              <Modal.Actions>
                <Link to="/ListNotes">
                  <Button
                    negative
                    type='button'
                    icon='remove'
                    labelPosition='right'
                    onClick={() => setShowCart(false)}
                    content='Cancel'
                  />
                </Link>
              </Modal.Actions>
            </Modal>

            <Table.Cell>
              <Header textAlign='justified'>
                <Header.Content as='h4'>{note.title}</Header.Content>
              </Header>
            </Table.Cell>


            <Table.Cell textAlign='justified' verticalAlign='top'>
              <Icon name='cancel' color='red' onClick={() => removeNote(index)}></Icon>
            </Table.Cell>

          </Table.Row>

          /*<List.Item key={ index } note={note}>
              <Link to={`/ListNotes/${kebabCase(note.title)}`}>
                  <List.Icon name='cancel' onClick={ () => removeNote(index) }/> 
                  {note.title} 
                  <List.Icon name='check' onClick={() => selectNote(index)}/>
              </Link>
          </List.Item>

          <Segment>
          <Header as='h3'>List Notes</Header>
          <Divider></Divider>
          <List>
          {notesItems()}
          </List>
          </Segment>

           <Segment>
          <Header as='h3'>Details Notes</Header>
          <Divider></Divider>
          <ListNote data ={noteObject}/>
      </Segment>

          */
        )

      })
    }
  }




  // <span>{ note.content }</span>
  return (

    <Segment.Group horizontal>

      <Segment >
        <Dimmer active={loader}>
          <Loader>Remove Note</Loader>
        </Dimmer>
        <Table color='blue'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell >Select</Table.HeaderCell>
              <Table.HeaderCell textAlign='left'>List Notes</Table.HeaderCell>
              <Table.HeaderCell textAlign='left'>Remove</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {notesItems()}
          </Table.Body>
        </Table>
      </Segment>



    </Segment.Group >

  )


}


const mapStateToProps = state => {
  return {
    notes: state.notes,
    selected: state.selected
  };
};

const mapDispatchToProps = {
  removeNote: removeNote,
  selectNote: selectNote
};


export default connect(mapStateToProps, mapDispatchToProps)(AllNotes);




/**
 *
 * const selectNote = (title) => {
    //const {title} = useParams();
    const list = props.notes.filter((note) => {
    return (kebabCase(note.title) === title)
   })
    const noteObject = list[0];
    console.log(list)



 *
 * class AllNotes extends Component {

  removeNote = (index) => {
    this.props.removeNote(index);
  }

  selectNote = (title,content) => {
    this.props.selectNote(title,content);
  }

   notesItems = ()=>{

        return this.props.notes.map((note, index) =>
        {
        return(
                <List.Item key={ index } note={note}>
                    <Link to={`/ListNotes/${kebabCase(note.title)}`}>
                        <List.Icon name='cancel' onClick={ () => this.removeNote(index) }/>
                        {note.title}

                        <List.Icon name='check' onClick={() => this.selectNote(note.title,note.conten)}/>
                    </Link>
                </List.Item>
            )

            })
    }



  render() {

     //const list = this.props.notes.filter((note) => {
    // return (kebabCase(note.title) === this.selectNote())
    //})
    //  const noteObject = list[0];
    // console.log("newsObject ", noteObject)


// <span>{ note.content }</span>
    return (

        <Segment.Group horizontal>
            <Segment>
                <Header as='h3'>List Notes</Header>
                <Divider></Divider>
                <List>
                {this.notesItems()}
                </List>
            </Segment>
            <Segment>
                <Header as='h3'>Details Notes</Header>
                <Divider></Divider>

                <Form>
                    <Form.Field widths='equal'>
                        <label>Title</label>
                        <input type="text" placeholder='title...' name="title" />
                    </Form.Field>
                    <label>Details</label>
                    <TextArea placeholder='Tell us more' />
                    <Divider></Divider>
                    <Form.Button color='teal'>Edit</Form.Button>
            </Form>
            </Segment>

        </Segment.Group >

    )
  }

}


const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

const mapDispatchToProps = {
  removeNote: removeNote,
  selectNote: selectNote
};


export default connect(mapStateToProps, mapDispatchToProps)(AllNotes);
 */
