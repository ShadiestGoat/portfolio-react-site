import { Fragment, FunctionComponent } from "preact"
import { useState } from "preact/hooks"
import SVGdef from "../svg"
import style from "./style.css"

const Icon:FunctionComponent<{
    hide:boolean,
    selected:boolean,
    title:string,
    src: [string, "img" | "svg"],
    inRow: {row:number, pos:number, rowLength:number, totRows: number},
    onClick: () => void,
    rounded: boolean,
    showText:string[],
    a:string,
    ariaLabel:string
}> = ({
    hide,
    selected,
    title,
    src,
    onClick,
    inRow,
    rounded,
    showText,
    a,
    ariaLabel
}) => {
    const [showElmt, setShowElmnt] = useState(true)
    const [showH, setShowH] = useState(selected)

    const [comeback, setComeBack] = useState(false)
    const [comebackH, setComeBackH] = useState(false)

    if (!hide && !showElmt) {setShowElmnt(true); setComeBack(true)}
    if ((selected) && !showH) {setShowH(true);setComeBackH(true)}

    const away =    inRow.pos < Math.floor(inRow.rowLength/2) ? "left" :
                    inRow.pos > Math.floor(inRow.rowLength/2) ? "right" :
                    inRow.row < inRow.totRows/2 ? "up" :
                    "down"

    const away2 = {left: "right", right: "left", up: "down", down: "up"}[away]

    const titles = showText.map((text, i) => i == 0 ?
        <h1 onAnimationEnd={() => {if (!selected) setShowH(false);setComeBack(false)}} style={{top: "33vh"}} class={`${style.info} ${!selected ? style[`away${away2}`] : comebackH ? style[`back${away}`] : ""}`}>{text}</h1> :
        <h2 style={{top: `${32 + 13 * i}vh`}} class={`${style.info} ${!selected ? style[`away${away2}`] : comebackH ? style[`back${away}`] : ""}`}>{text}</h2>)

    return (showElmt) ? <Fragment> {
            src[1] == "svg" ? <SVGdef
            onAnimationEnd={() => {if (hide) setShowElmnt(false);setComeBack(false)}}
            title={title}
            className={`${style.ico} ${style.trans} ${hide ? style[`away${away}`] : comeback ? style[`back${away}`] : ""} `}
            d={src[0]}
            onClick={onClick}
            size={`6vw`}
            style={{
                padding: selected ? "0.5vw" : "",
                top: `${selected ? 16 : (29.2 + 16*inRow.row)}vh`,
                // left: `${selected ? 47 : ((56*inRow.pos)/(inRow.rowLength + 1) + 56/(inRow.rowLength + 1) + 19)}vw`,
                left: `${selected ? 22 : ((56*inRow.pos)/(inRow.rowLength + 1) + 56/(inRow.rowLength + 1) - 6)}vw`,
                borderRadius: `${rounded ? 50 : 12.25}%`
            }} ariaLabel={ariaLabel}
            /> : <img
            label={ariaLabel}
            alt={`The icon for ${title}`}
            onAnimationEnd={() => {if (hide) setShowElmnt(false);setComeBack(false)}}
            title={title}
            className={`${style.ico} ${style.trans} ${hide ? style[`away${away}`] : ""} ${comeback ? style[`back${away}`] : ""}`}
            src={src[0]}
            onClick={onClick}
            style={{
                padding: selected ? "0.5vw" : "",
                top: `${selected ? 16 : (29.2 + 16*inRow.row)}vh`,
                left: `${selected ? 22 : ((56*inRow.pos)/(inRow.rowLength + 1) + 56/(inRow.rowLength + 1) - 6)}vw`,
                borderRadius: `${rounded ? 50 : 12.25}%`,
                width: "6vw",
                height: "6vw"
            }} />
        }
        {showH ? a ? <a href={a} target="_blank" rel="noreferrer">{titles}</a> : titles
        : <Fragment />}

    </Fragment> : <Fragment />
}

export default Icon
