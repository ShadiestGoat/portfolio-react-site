import { Fragment, FunctionalComponent } from 'preact';
import { useCallback, useState } from "preact/hooks"
import BoutMe from '../../components/AboutMe';
import ContactMe from '../../components/contact';
import Portfolio from '../../components/portfolio';
import style from "./style.css"

/**
 * 0 - Below screen
 *
 * 1 - Currently on screen
 *
 * 2 - Above screen
 */
type PageStatus = 0 |
                  1 |
                  2

export type Pages = "home" |
             "portfolio" |
             "contact" |
             "boutme"

type PageState = {
    pages: Record<Pages, PageStatus>,
    oPages: Record<Pages, PageStatus>
    pageStatus: Record<Pages, boolean>
    curP: Pages
}

const Home: FunctionalComponent = () => {
    const [pages, setPages] = useState<PageState>({
        pages: {
            home: 1,
            portfolio: 0,
            contact: 0,
            boutme: 0
        },
        oPages: {
            home: 1,
            portfolio: 0,
            contact: 0,
            boutme: 0
        },
        pageStatus: {
            home: true,
            portfolio: false,
            contact: false,
            boutme: false
        },
        curP: "home"
    })

    const [firstT, setFirstT] = useState<boolean>(true)

    const changePage = useCallback((newPage: Pages, push: "up" | "down") => {
        const newP = {...pages}
        newP.pages[newP.curP] = push == "down" ? 0 : 2
        newP.curP = newPage
        newP.pages[newP.curP] = 1
        newP.pageStatus[newPage] = true
        newP.oPages[pages.curP] = push == "down" ? 0 : 2
        setPages(newP)
        // route(`/${newPage}`, true)
        setFirstT(false)

    }, [pages, setPages])

    const gapIcon = 6

    const cards:Record<Pages, JSX.Element> = {
        home: (
            <Fragment>
                <h1 class="row" style={{marginTop: "20vh"}}>Hey There, I'm Shady Goat</h1>
                <h2 class="row" style={{marginTop: "3vh", marginBottom: "26vh"}}>A Fullstack Dev</h2>
                <div class="row">
                    <button class="col btn btn-p" onClick={(e) => {
                        if (e.button) return
                        changePage('portfolio', 'up')
                    }}>
                        View My Portfolio
                    </button>
                    <button class="col btn btn-p" onClick={(e) => {
                        if (e.button) return
                        changePage('contact', 'up')
                    }}>
                        Contact Me
                    </button>
                    <button class="col btn btn-p" onClick={(e) => {
                        if (e.button) return
                        changePage('boutme', 'up')
                    }}>
                        About Me
                    </button>
                </div>
            </Fragment>
        ),
        portfolio: <Portfolio changePage={changePage} gapF={gapIcon} />,
        boutme: <BoutMe changePage={changePage} gapF={gapIcon} />,
        contact: <ContactMe changePage={changePage} />,
    }

    return (
        <div style={{overflow: 'hidden', width: "100vw", height: "100vh"}}>
            {
            Object.keys(cards).map((name) => {
                const n:Pages = name as Pages
                if (pages.pageStatus[n]) return <div key={n} onAnimationEnd={() => {
                    if (pages.curP == n) return
                    const nP = {...pages}
                    nP.pageStatus[n] = false
                    setPages(nP)
                }} class={`container ${firstT ? "" : pages.pages[n] == 1 ? pages.oPages[n] == 2 ? style.pageFromTop : style.pageFromBottom : pages.pages[n] == 2 ? style.pageToTop : style.pageToBottom}`}>
                    <div class="col" style={{width: `50vw`}}>
                        {cards[n]}
                    </div>
                </div>
            })
            }
        </div>
    );
};

export default Home;
