import { Fragment, FunctionComponent } from "preact";
import { useCallback, useState } from "preact/hooks";
import { categories, cats, project, projects } from "./icons"
import style from "../Icon/style.css"
import Icon from "../Icon";
import ChangePage from "../changePage";

const Portfolio:FunctionComponent = () => {
    const [catP, setCatPage] = useState<categories | "none">("none")
    const [projectI, setProjectI] = useState<projects[][]>([[]])
    const [selectedSmt, setSelectedSmt] = useState<boolean>(false)

    const changeCatP = useCallback((name:(categories | "none")) => {
        const nP = name == catP ? "none" : name
        setCatPage(nP)
        setProjectI(nP == "none" ?
            [[]]
            :
            cats[nP].proj
        )
        setSelectedSmt(false)
    }, [ catP ])

    const projectSel = useCallback((name:projects | "none") => {
        setProjectI(name == "none" ? cats[catP as categories].proj: [[name]])
        setSelectedSmt(name != "none")
    }, [catP])

    const Cats:categories[][] = [
        ['backend', 'bots', 'tools'],
        ['static', 'pwa', 'other']
    ]

    return <Fragment>
        <div class={`col ${style.trans}`} style={{transform: (catP != "none") ? "translate(0px, -70vh)" : ""}}>
            <h1 class="row" style={{marginTop: "12vh"}}>Hey There, I'm Shady Goat</h1>
            <h2 class="row" style={{marginTop: "3vh", marginBottom: "4vh"}}>But call me Shady (he/him). Here are my projects</h2>
        </div>
        {
            Cats.map((Hehe, rowIndex) => (<div key={Hehe.join(',')} class="row" style={{marginBottom: "4vh", height: `6vw`}}>
                    {
                        Hehe.map((name, index) => {
                            return <Icon key={name}
                                lvl1={true}
                                ariaLabel={cats[name].full}
                                src={[cats[name].icon, "svg"]}
                                hide={(catP != name) && catP != "none"  || selectedSmt}
                                selected={catP == name && !selectedSmt}
                                title={cats[name].full}
                                rounded={false}
                                showText={[cats[name].full]}
                                onClick={() => changeCatP(name)}
                                inRow={{
                                    pos: index,
                                    row: rowIndex,
                                    rowLength: Hehe.length,
                                    totRows: Cats.length
                                }}
                                a=""
                                />
                        })
                    }
                </div>
            ))
        }
        {
            Object.keys(project).map((v) => {
                const n = v as projects
                const selected = projectI[0].length == 1 && projectI[0][0] == n && selectedSmt
                const ia:{row:number, pos:number, rowLength:number, totRows: number} = {
                    pos: 0,
                    row: 0,
                    rowLength: 0,
                    totRows: projectI.length
                }
                projectI.forEach((row, i) => {
                    if (row.includes(v as projects)) {
                        ia.rowLength = row.length
                        ia.row = i + 1
                        ia.pos = row.indexOf(n)
                    }
                })
                return <Icon key={n}
                    lvl1={false}
                    ariaLabel={project[n].full}
                    src={project[n].img}
                    hide={!projectI.flat().includes(n)}
                    inRow={ia}
                    onClick={() => projectSel(selected ? "none" : n)}
                    rounded={true}
                    selected={selected}
                    showText={[project[n].full, project[n].desc]}
                    title={project[n].full}
                    a={project[n].a}
                />
            })
        }
        <div class={`row ${style.trans}`} style={{marginTop: "4vh", transform: (catP != "none") ? "translate(0px, 70vh)" : ""}}>
            <ChangePage page="" push="down" />
            <ChangePage page="contact" push="up" />
        </div>
    </Fragment>
}

export default Portfolio
