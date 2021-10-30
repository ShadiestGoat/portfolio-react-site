import { FunctionComponent, Fragment } from "preact";
import ChangePage from "../changePage";

const HomeP:FunctionComponent = (() => {
    return <Fragment>
        <h1 class="row" style={{marginTop: "20vh"}}>Hey There, I'm Shady Goat, the Fullstack Dev</h1>
        <h2 class="row" style={{marginTop: "3vh", marginBottom: "26vh"}}>Here is my portfolio, find out more about me!</h2>
        <div class="row">
            <ChangePage page="portfolio" push="up" />
            <ChangePage page="contact" push="up" />
            <ChangePage page="boutme" push="up" />
        </div>
    </Fragment>
})

export default HomeP
