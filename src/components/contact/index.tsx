import { Fragment, FunctionalComponent } from "preact";
import { Pages } from "../../routes/home";
import SVGdef from "../svg";
import iconStyle from "../Icon/style.css"

const contactInfo:Record<string, {info:string, icon:string, open:string}> = {
    Discord: {
        icon: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",
        info: "Shady Goat#2893",
        open: ""
    },
    Email: {
        icon: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z",
        info: "",
        open: "mailto:shady@shadygoat.eu"
    },

}

const ContactMe:FunctionalComponent<{
    changePage:(newPage: Pages, push: "up" | "down") => void,
}> = ({changePage}) => {
    return <Fragment>
        <div class={`col`}>
            <h1 class="row" style={{marginTop: "12vh"}}>Hey There, I'm Shady Goat</h1>
            <h2 class="row" style={{marginTop: "3vh", marginBottom: "4vh"}}>But call me Shady (he/him). You can contact me like this</h2>
        </div>
        <div class="row" style={{width: "100%", marginTop: "5vh"}}>
            {
                Object.keys(contactInfo).map(item => {
                    const svg = <SVGdef
                        title={item}
                        d={contactInfo[item].icon}
                        className={`${iconStyle.ico} ${iconStyle.trans}`}
                        onClick={():void => {return}}
                        size="6vw"
                        style={{position: "relative"}}
                        />
                    if (contactInfo[item].open) return <a href={contactInfo[item].open} class="col" key={item} style={{alignItems: "center", justifyContent: "center", alignContent: "center", width: `${100/Object.keys(contactInfo).length}%`}}>{svg}</a>
                    return <div key={item} class="col" style={{alignItems: "center", width: `${100/Object.keys(contactInfo).length}%`}}>
                        {svg}
                    <h2 style={{marginTop: "4vh"}}>{contactInfo[item].info}</h2>
                </div>}
                )
            }
        </div>
        <div class={`row`} style={{marginTop: "10vh"}}>
            <div class="col btn btn-p" style={{flex: "0 0 0px", justifyContent: "center"}} onClick={(e) => {
                if (e.button != 0) return
                changePage('home', 'down')
            }}>
            Home
            </div>
        </div>
    </Fragment>
}

export default ContactMe
