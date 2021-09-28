import { FunctionalComponent } from 'preact';
import { Route, Router } from 'preact-router';
import Home from '../../src/routes/home';
import NotFoundPage from '../../src/routes/notfound';

const App: FunctionalComponent = () => {
    return (
        <div id="preact_root">
            <Router>
                <Route path="/" component={Home} />
                <NotFoundPage default />
            </Router>
        </div>
    );
};

export default App;
