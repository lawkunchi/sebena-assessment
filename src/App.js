import React  from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/utils/Navbar';

import ExerciseList from './components/exercise/ExerciseList';
import CreateExercise from './components/exercise/CreateExercise';

import UserList from './components/user/UserList';
import CreateUser from './components/user/CreateUser';

const App = () => {

  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" exact component={CreateExercise} />
        <Route path="/create" exact component={CreateExercise} />
        <Route path="/user" exact component={CreateUser} />
        <Route path="/users" exact component={UserList} />
         <Route path="/edit/user/:id" exact component={CreateUser} />
      </div>
    </Router>
   
  );
}

export default App;
