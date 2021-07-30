import React , {useEffect} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useDispatch} from 'react-redux';
import {getUsers} from './actions/users';

import Navbar from './components/utils/navbar.component';
import ExerciseList from './components/exercise/exercise-list.component';
import EditExercise from './components/exercise/edit-exercise.component';
import CreateExercise from './components/exercise/create-exercise.component';
import CreateUser from './components/user/create-user.component';
import Users from './components/user/users.component';


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());

  }, [dispatch])
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" exact component={EditExercise} />
        <Route path="/create" exact component={CreateExercise} />
        <Route path="/user" exact component={CreateUser} />
        <Route path="/users" exact component={Users} />
      </div>
    </Router>
   
  );
}

export default App;
