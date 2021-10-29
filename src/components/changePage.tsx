import { FunctionComponent } from "react";
import { Pages } from "../routes/home";

const ChangePage:FunctionComponent<{
    changePage:(newPage: Pages, push: "up" | "down") => void,
    page: Pages,
    push: "up" | "down",
}> = ({changePage, page, push}) => {
    const msgs:Record<Pages, string> = {
        boutme: "My Skills",
        contact: "Contact Me",
        portfolio: "Portfolio",
        home: "Back Home"
    }
    return <button class="col btn btn-p" onClick={(e) => {
        if (e.button) return
        changePage(page, push)
        }}>
        {msgs[page]}
    </button>
}

export default ChangePage
