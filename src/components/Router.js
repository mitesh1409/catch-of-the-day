import { BrowserRouter, Switch, Route } from "react-router-dom";
import StorePicker from "./StorePicker";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker} />
        </Switch>
    </BrowserRouter>
);

export default Router;
