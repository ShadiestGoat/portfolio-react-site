import { FunctionalComponent } from 'preact';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from "preact-transitioning"
import { Helmet } from 'react-helmet';
import BoutMe from './AboutMe';
import ContactMe from './contact';
import HomeP from './Home';
import Portfolio from './portfolio';
import Notfound from '../routes/notfound';

export type Pages = "" |
             "portfolio" |
             "contact" |
             "boutme"

const App: FunctionalComponent = () => {
    return (
        <div class="container">
            <BrowserRouter>
                <Helmet>
                    <link rel="canonical" href={`https://shadygoat.eu${location.pathname}`} />
                </Helmet>
                <Route render={(rrr) => {
                    return (
                    <TransitionGroup>
                        <CSSTransition key={rrr.location.key} exit={true} in={true} enter={true} appear={false} duration={1300} classNames="pageFromTop">
                            <div class="col" style={{width: `50vw`, position: "absolute", left: "25vw"}}>
                                <Switch location={rrr.location}>
                                    <Route exact path="/" component={HomeP} />
                                    <Route exact path="/portfolio" component={Portfolio} />
                                    <Route exact path="/contact" component={ContactMe} />
                                    <Route exact path="/boutme" component={BoutMe} />
                                    <Route component={Notfound} />
                                </Switch>
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                )}}
                />
            </BrowserRouter>
        </div>
    );
};

export default App;
