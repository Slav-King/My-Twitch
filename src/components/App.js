// Client id:  996022732690-25mk892bs9haur8i1uo9494o720ig9c7.apps.googleusercontent.com
import React, { Fragment } from "react";
import { BrowserRouter, Route, Link, Switch} from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
// import { createBrowserHistory } from "history";


const App = () => {

    return (
        <Fragment>
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/streams/edit/:id" exact component={StreamEdit} />
                        <Route path="/streams/delete/:id" exact component={StreamDelete} />
                        <Route path="/streams/:id" exact component={StreamShow} />
                    </Switch>
                </div>
            </BrowserRouter>
        </Fragment>
    )
};

export default App;