import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import TopBar from "./components/TopBar/index";
import HelloWorld from "components/HelloWorld";

const App: React.FC = () => {
    return (
        <React.Fragment>
            <Router>
                <TopBar />
                <div className="app__body">
                    <div className="home__container">
                        <Switch>
                            <Route path="/">
                                <HelloWorld />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </React.Fragment>
    );
};

export default App;
