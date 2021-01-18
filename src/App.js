import logo from './logo.svg';
import './App.css';
// import First from './component/first';
// import Second from './component/second';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Breadcrumb, Alert } from 'antd';
import {Provider} from 'react-redux';
import { store } from './redux/store';


const First = lazy(()=>import('./component/first'));
const Second = lazy(()=>import('./component/second'));
const Third = lazy(()=>import('./component/ShowDetail'))

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Suspense fallback ={<div>Lazy Loading</div>}>
      <div className="demo-nav">
        <Link to="/">Home</Link>
        <Link to="/second">Application List</Link>
      </div>
        {/* <ul className="app-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/second">Second</Link>
          </li>
        </ul> */}
     
      <Switch>
     
        <Route path="/second">
          <Second/>
        </Route>
        
        <Route path="/third"> 
           <Third/>
        </Route>
        <Route path="/">
          <First/>
        </Route>
      </Switch>
      </Suspense>
    </Router>
    </Provider>
    
  );
}

export default App;
