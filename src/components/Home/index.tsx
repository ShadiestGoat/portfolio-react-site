import { FunctionComponent, Fragment } from "preact";
import { Pages } from "../../routes/home";
import ChangePage from "../changePage";

const HomeP:FunctionComponent<{
    changePage:(newPage: Pages, push: "up" | "down") => void,
}> = (({changePage}) => {
    return <Fragment>
        <h1 class="row" style={{marginTop: "20vh"}}>Hey There, I'm Shady Goat</h1>
        <h2 class="row" style={{marginTop: "3vh", marginBottom: "26vh"}}>A Fullstack Dev</h2>
        <div class="row">
            <ChangePage changePage={changePage} page="portfolio" push="up" />
            <ChangePage changePage={changePage} page="contact" push="up" />
            <ChangePage changePage={changePage} page="boutme" push="up" />
        </div>
    </Fragment>
})

export default HomeP
