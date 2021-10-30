import { Fragment, FunctionComponent } from "preact";
import { useCallback, useState } from "preact/hooks";
import { Langs, SimpleIconsL, SimpleIconsT, Tools } from "./icons";
import style from "../Icon/style.css"
import Icon from "../Icon/index"
import ChangePage from "../changePage";

const BoutMe:FunctionComponent = () => {
    const [skillP, setSkillPage] = useState<SimpleIconsL | "none">("none")
    const [toolI, setToolI] = useState<SimpleIconsT[][]>([[]])
    const [selectedTool, setselectedTool] = useState<boolean>(false)

    const LangIcons:SimpleIconsL[][] = [
        ['python', 'javascript', 'typescript', 'react', 'html', 'css'],
        ['mysql', 'mongodb', 'sqlite']
    ]

    const ToolToLangs:Record<SimpleIconsT, SimpleIconsL[]> = {} as Record<SimpleIconsT, SimpleIconsL[]>

    LangIcons.flat().forEach(lang => {
        Langs[lang].tools.flat().forEach(tool => {
            if (Object.keys(ToolToLangs).includes(tool)) {
                ToolToLangs[tool].push(lang)
            } else {
                ToolToLangs[tool] = [lang]
            }
        })
    })

    const selToolIco = useCallback((name:SimpleIconsT | "none") => {
        setToolI(name == "none" ? Langs[skillP as SimpleIconsL].tools : [[name]])
        setselectedTool(name != "none")
    }, [ skillP ])

    const changeSkillP = useCallback((name:(SimpleIconsL | "none")) => {
        const nP = name == skillP && !selectedTool ? "none" : name
        setSkillPage(nP)
        setToolI(nP == "none" ? [[]] : Langs[nP].tools)
        setselectedTool(false)
    }, [ skillP, selectedTool ])

    return <Fragment>
        <div class={`col ${style.trans}`} style={{transform: (skillP != "none" || selectedTool) ? "translate(0px, -70vh)" : ""}}>
            <h1 class="row" style={{marginTop: "12vh"}}>Hey There, I'm Shady Goat</h1>
            <h2 class="row" style={{marginTop: "3vh", marginBottom: "4vh"}}>But call me Shady (he/him). Here is my skill set:</h2>
        </div>
        {
            LangIcons.map((Hehe, rowIndex) => (<div key={Hehe.join(',')} class="row" style={{marginBottom: "4vh", height: `6vw`}}>
                {
                    Hehe.map((name, index) => {
                        const hideCondsArr = ToolToLangs[toolI[0][0]] ?? []
                        const notHideCauseDown = (hideCondsArr.includes(name) && toolI[0].length == 1 && selectedTool)
                        const selected = skillP == name && !notHideCauseDown
                        const hide = (skillP != name) && skillP != "none" && !notHideCauseDown ||
                                      selectedTool && !hideCondsArr.includes(name) ||
                                      notHideCauseDown && !hideCondsArr.includes(name) ||
                                      !selected && skillP != "none" && !hideCondsArr.includes(name)
                                      // I'm pretty sure some parts of this condition are redundent, but like I'm too tired to care so
                        const iA = {
                            pos: index,
                            row: rowIndex,
                            rowLength: Hehe.length,
                            totRows: LangIcons.length
                        }

                        if (notHideCauseDown) {
                            iA.row = 1
                            iA.rowLength = hideCondsArr.length
                            iA.totRows = 1
                            iA.pos = hideCondsArr.indexOf(name)
                        }

                        return <Icon key={name}
                            src={[Langs[name].d, "svg"]}
                            hide={hide}
                            selected={selected}
                            title={Langs[name].name}
                            ariaLabel={Langs[name].name}
                            rounded={false}
                            showText={[Langs[name].name]}
                            onClick={() => changeSkillP(name)}
                            inRow={iA}
                            a=""
                            />
                    })}
            </div>

            ))
        }
        {
            Object.keys(Tools).map((v) => {
                const n = v as SimpleIconsT
                const selected = toolI[0].length == 1 && toolI[0][0] == n && selectedTool
                const ia:{row:number, pos:number, rowLength:number, totRows: number} = {
                    pos: 0,
                    row: 0,
                    rowLength: 0,
                    totRows: toolI.length
                }
                toolI.forEach((row, i) => {
                    if (row.includes(v as SimpleIconsT)) {
                        ia.rowLength = row.length
                        ia.row = i + 1
                        ia.pos = row.indexOf(n)
                    }
                })
                return <Icon key={n}
                    src={[Tools[n].d, "svg"]}
                    hide={!toolI.flat().includes(n)}
                    inRow={ia}
                    onClick={() => selToolIco(selected ? "none" : n)}
                    rounded={true}
                    selected={selected}
                    showText={[Tools[n].name]}
                    ariaLabel={Tools[n].name}
                    title={Tools[n].name}
                    a={Tools[n].a}
                />
            })
        }

        <div class={`row ${style.trans}`} style={{marginTop: "4vh", transform: (skillP != "none" || selectedTool) ? "translate(0px, 70vh)" : ""}}>
            <ChangePage page="" push="down" />
            <ChangePage page="contact" push="up" />
        </div>
    </Fragment>
}

export default BoutMe
