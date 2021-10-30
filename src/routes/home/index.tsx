import { FunctionalComponent } from 'preact';
import { useCallback, useMemo, useState } from "preact/hooks"
import BoutMe from '../../components/AboutMe';
import ContactMe from '../../components/contact';
import HomeP from '../../components/Home';
import Portfolio from '../../components/portfolio';
import style from "./style.css"
import Helmet from "react-helmet"

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

const allPages:Pages[] = ["portfolio", "home", "contact", "boutme"]

export type PageState = {
    pages: Record<Pages, PageStatus>,
    oPages: Record<Pages, PageStatus>
    pageStatus: Record<Pages, boolean>
    curP: Pages
}

const Home: FunctionalComponent = () => {
    const [pages, setPages] = useState<PageState>((
        () => {
        const initPage = allPages.includes(location.pathname.substr(1) as Pages) ? location.pathname.substr(1) as Pages : "home"
        const pg:PageState = {
            pages: {
                home: 0,
                portfolio: 0,
                contact: 0,
                boutme: 0
            },
            oPages: {
                home: 0,
                portfolio: 0,
                contact: 0,
                boutme: 0
            },
            pageStatus: {
                home: false,
                portfolio: false,
                contact: false,
                boutme: false
            },
            curP: initPage
        }
        pg.pages[initPage] = 1
        pg.oPages[initPage] = 1
        pg.pageStatus[initPage] = true
        return pg
    })())

    const [firstT, setFirstT] = useState<boolean>(true)

    const changePage = useCallback((newPage: Pages, push: "up" | "down") => {
        const newP = {...pages}
        newP.pages[newP.curP] = push == "down" ? 0 : 2
        newP.curP = newPage
        newP.pages[newP.curP] = 1
        newP.pageStatus[newPage] = true
        newP.oPages[pages.curP] = push == "down" ? 0 : 2
        setPages(newP)
        setFirstT(false)
    },  [pages, setPages])

    const gapIcon = 6

    const cards:Record<Pages, JSX.Element> = useMemo(() => ({
        home: <HomeP changePage={changePage} />,
        portfolio: <Portfolio changePage={changePage} gapF={gapIcon} />,
        boutme: <BoutMe changePage={changePage} gapF={gapIcon} />,
        contact: <ContactMe changePage={changePage} />,
    }), [changePage])

    return (
        <div style={{overflow: 'hidden', width: "100vw", height: "100vh"}}>
            <Helmet>
                <link rel="canonical" href={`https://shadygoat.eu${location.pathname}`} />
            </Helmet>
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
