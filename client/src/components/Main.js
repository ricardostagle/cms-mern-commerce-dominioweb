import { Component } from 'react';
import AddItem from './pages/AddItem';
import Home from './pages/Home';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Cart from './pages/Cart';
import Orders from './pages/Order';
import Profile from './pages/UserProfile';
import UpdateUser from './pages/UpdateUser';
import UpdateItem from './pages/UpdateItem';
import CreateUser from './pages/CreateUser';
import Category from './pages/Category';
import My404Component from './pages/404';
import Detail from './pages/Detail';
import Users from './pages/Users';
import Items from './pages/Items';
import Store from './pages/Store';

class Main extends Component {
    render(){
        return (
            <div>
                <Switch>
                    <Route path="/home"><Home/></Route>
                    <Route path="/my-profile"><Profile/></Route>
                    <Route path="/my-users"><Users/></Route>
                    <Route path="/my-items"><Items /></Route>
                    <Route path="/add-item"><AddItem /></Route>
                    <Route path="/store"><Store /></Route>
                    <Route path="/cart"><Cart /></Route>
                    <Route path="/orders"><Orders/></Route>
                    <Route exact path="/create_user" component={CreateUser} />
                    <Route exact path="/update_user/:id" component={UpdateUser} />
                    <Route path="/update-user/:id" component={UpdateUser}/>
                    <Route path="/update-item/:id" component={UpdateItem}/>
                    <Route path="/item/:id" component={Detail}/>
                    <Route path="/category/:id" component={Category}/>
                    <Redirect to="/home"/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(connect()(Main));
