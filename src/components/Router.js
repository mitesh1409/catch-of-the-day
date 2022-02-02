import { BrowserRouter, Switch, Route } from "react-router-dom";
import StorePicker from "./StorePicker";

// Router is a Stateless Functional Component
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker} />
        </Switch>
    </BrowserRouter>
);

export default Router;
