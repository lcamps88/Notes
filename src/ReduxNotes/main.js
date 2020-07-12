import { Provider } from 'react-redux';
import React from 'react'
import store from './store/store';
import Notes from './Notes/Notes';
import NotesForm from './Notes/NotesForm';
import AllNotes from './Notes/AllNotes'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Icon, Menu ,Header,Segment} from 'semantic-ui-react'
import ListNote from './Notes/List'

class Main extends React.Component {
    

    render(){
        return(
            <div>
                <Header as='h1'>
                <Icon name='wordpress forms' />
                    React Redux Notes</Header>
                
                <Router>
                <Menu icon='labeled' color='blue' inverted >
                <Link to="/">
                    <Menu.Item
                    name='Home'
                    >
                    <Icon name='home' />
                    Home
                    </Menu.Item>
                </Link>
                <Link to="/Note">
                    <Menu.Item
                    name='Note'
                    >
                    <Icon name='sticky note' />
                    Note
                    </Menu.Item>
                </Link>
                <Link to="/ListNotes" >
                    <Menu.Item
                    name='List Notes'
                    
                    >
                    <Icon name='list ul' />
                    List Notes
                    </Menu.Item>
                </Link>
                </Menu>
                
               <Segment>

               
                    <Provider store={store}>
                        <Switch>
                        <Route path="/Note">
                        
                                <NotesForm/>
                            
                        </Route>
                        <Route path="/ListNotes">
                            <AllNotes />
                        </Route>
                        <Route path="/ListNotes/:title" component={ListNote}/>
        
                    
                        <Route path="/" exact >
                            <Notes/>
                        </Route>
                        </Switch>
                    </Provider>
                </Segment>
                </Router>
                
            </div>
        )
    }
}
export default Main


