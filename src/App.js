import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './lib/bootstrap/css/bootstrap.css';
import TeacherState from './context/TeacherContext/TeacherState';
import Home from './pages/Home';
import TeacherList from './pages/TeacherList';
import ViewTeacher from './pages/ViewTeacher';
import EditTeacher from './pages/EditTeacher';
import CreateTeacher from './pages/CreateTeacher';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <TeacherState>
            <Router>
                <div className='App'>
                    <NavBar />
                    <div className='container'>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route
                                exact
                                path='/Teachers'
                                component={TeacherList}
                            />
                            <Route
                                exact
                                path='/Teacher/Create'
                                component={CreateTeacher}
                            />
                            <Route
                                path='/Teacher/Details/:id'
                                component={ViewTeacher}
                            />
                            <Route
                                path='/Teacher/Edit/:id'
                                component={EditTeacher}
                            />
                        </Switch>
                    </div>
                </div>
            </Router>
        </TeacherState>
    );
};

export default App;
