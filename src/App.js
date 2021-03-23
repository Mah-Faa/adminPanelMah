import "./App.css";
import AdminLayout from "./Layouts/Admin-layout/AdminLayout";
import { Route, Switch } from "react-router";
import Login from "./components/auth/Login";
import PrivateRoute from "./utils/PrivateRoute";
function App() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <PrivateRoute path="/" component={AdminLayout} />
    </Switch>
  );
}

export default App;
