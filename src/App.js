import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './Pages/Login';
import Products from './components/Products/Products';
import QuoteDetail from './components/Products/ProductDetail';
import NotFound from './Pages/NotFound';
import Welcome from './Pages/welcome';
import './App.css';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  return (
    <Fragment>
    {!isAuth && (<Route path="/login" exact>
        <Login />
      </Route>)}
    {isAuth && (<Layout>
    <Switch>
      <Route path='/' exact>
        <Redirect to="/Welcome" />
      </Route>
      <Route path='/Welcome' exact>
        <Welcome />
      </Route>
      <Route path='/Products' exact>
        <Products />
      </Route>
      <Route path='/quotes/:quoteId'>
      <QuoteDetail />
      </Route>
      <Route path='*'>
      <NotFound />
      </Route>
    </Switch>
    </Layout>)}
    </Fragment>
  );
}

export default App;
