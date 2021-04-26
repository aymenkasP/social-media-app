import { lazy, Suspense } from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes'
import useAuthListener from './hooks/useAuthListener';

const Login = lazy(()=> import('./pages/login') )
const Signup = lazy(()=> import('./pages/signup') )
const Dashboard = lazy(()=> import('./pages/Dashboard') )
const NotFound = lazy(()=> import('./pages/NotFound') )



function App() {

    const {User} = useAuthListener()
  return (
   <Router>
      <Suspense fallback = {<p>Loading</p>} >
          <Switch>
             <Route  path={ROUTES.LOGIN} component={Login }  />
             <Route  path={ROUTES.SIGNUP} component={Signup}  />
             <Route exact  path={ROUTES.DASHBOARD} component={Dashboard}  />
             <Route   component={NotFound}  />
        </Switch>
      </Suspense>
   </Router>
  );
}

export default App;
