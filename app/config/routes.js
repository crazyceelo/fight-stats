var React = require("react");
import { HashRouter, Route, Switch } from "react-router-dom";
import "../assets/css/style.css";

// require components
import Main from "../components/Main";

module.exports = (
    <HashRouter >
        <Switch>
            <Route path="/" component={Main}/>
        </Switch>
    </HashRouter>
);