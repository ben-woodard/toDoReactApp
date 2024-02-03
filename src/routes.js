import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard/dashboard";
import ToDoApp from "./Components/ToDoApp/todoApp";

export const Routes = () => {
   return (
    <Router>
        <Switch>
            <Route path="/" element={<ToDoApp />} />      
            <Route path="/dashboard" component={<Dashboard />} />     
           
        </Switch>
    </Router>
   );
}

export default Routes;