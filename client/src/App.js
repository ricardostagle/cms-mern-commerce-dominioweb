import { Component } from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import store from './store';
import {loadUser} from './actions/authActions';
import { BrowserRouter } from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeo_FGKWbeowNN-ScI3TDtbyGn3HR8OaY",
  authDomain: "dominiowebcommx-b6ee1.firebaseapp.com",
  projectId: "dominiowebcommx-b6ee1",
  storageBucket: "dominiowebcommx-b6ee1.appspot.com",
  messagingSenderId: "60683105886",
  appId: "1:60683105886:web:9e70405ca3660d06bfe6cf",
  measurementId: "G-24X7JES76G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main/>
          </div>
        </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
