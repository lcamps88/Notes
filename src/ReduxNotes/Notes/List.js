import React,{useState} from 'react'
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { editNote } from '../action/actions';
import { Divider, TextArea,Form, Segment, Icon,Dimmer,Loader} from 'semantic-ui-react'



const ListNote =(props)=>{

    
    let dataList = props.data;
   
    
    // List States
    const [edit, setEdit] = useState(
      {
        title: '',
        content: ''
      });

    // console
    console.log('data',dataList)
    console.log('Edit',edit)
    
    const [editmode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(false);
    //-----------
    if (isEmpty(dataList)) return null

   const  handleChange = (e) => {
    
      setEdit({...edit,[e.target.name]:e.target.value} );
     
    }

    
    console.log(props.selected)

    const editNote =(e)=>{
      e.preventDefault();
      setLoading(true)
    
      //let { title, content } = edit;
      console.log(edit)
       // setEdit({title:title,content:content1})
      props.editNote(props.selected,edit)
      setTimeout(() => {setLoading (false )}, 1000);
       

    }
    
    return(
        <div>
            <Form >
            <Dimmer active={loading}>
            <Loader>Update Note</Loader>
            </Dimmer>
                <Form.Field widths='equal'>
                  <label>Title</label>
                  <input type="text" placeholder='title...' name="title" value={editmode? edit.title: dataList.title} onChange={handleChange} disabled={editmode?false : true}/>
                </Form.Field>
                  <label>Details</label>
                <TextArea type="text" placeholder='Tell us more' name="content" value={editmode? edit.content: dataList.content} onChange={handleChange} disabled={editmode?false : true}/>
                <Divider></Divider>
                <Segment.Group horizontal>
                  <Segment>
                    <Form.Button color='teal' onClick={()=> {setEditMode(true);setEdit(dataList)}}>
                      <Icon name='edit'></Icon>Edit</Form.Button>
                  </Segment>
                  <Segment>
                
                     <Form.Button color='blue' onClick={editNote}><Icon name='save'></Icon>  Save</Form.Button>
                     
                  </Segment>
                  
                </Segment.Group>
                
            </Form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      notes: state.notes,
      selected : state.selected
    };
  };


  
  const mapDispatchToProps = {
    editNote: editNote
    
  };

export default connect(mapStateToProps,mapDispatchToProps)(ListNote)