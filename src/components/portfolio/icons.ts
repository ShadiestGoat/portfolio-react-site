export type categories = "backend" | "static" | "pwa" | "bots" | "tools" | "other"

export type projects = "mongosteel" | "ImgApi" |
                       "Set" | "GuessTheAuthor" |
                       "GoogleIt" | "NodeMessanger" |
                       "RougeLike" | "SpaceNode" |
                       "EA" | "Noble" |
                       "Capitalist" | "TwitterReddit" |
                       "ShadyGoatLegacy" | "Schedual" |
                       "ShadyGoat" | "EbaySpam"

export const cats:Record<categories, {full:string, icon:string, proj: projects[][], cl: "left" | "right" | "down" | "up"}> = {
    // https://simpleicons.org
    backend: {
        full: "Backend APIs",
        icon: "M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z",
        proj: [
            [
                "ImgApi",
                "RougeLike",
                "Capitalist"
            ],[
                "NodeMessanger"
            ]
        ],
        cl: "left",
    },
    // https://simpleicons.org
    bots: {
        full: "Discord Bots",
        icon: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",
        proj: [
            [
                "Capitalist",
                "EA",
                "GuessTheAuthor",
                "Noble",
            ],[
                "RougeLike",
                "SpaceNode",
                "EbaySpam"
            ]
        ],
        cl: "up",
    },
    // Taken from wikipidea's svg icon, then transformed into 1 path, 0 0 24 24
    pwa: {
        full: "Progressive Web Apps",
        icon: "m2.9 13.1h1.395c0.4226 0 0.7988-0.04726 1.129-0.1418l0.3607-1.114 1.008-3.115c-0.07668-0.1219-0.1644-0.2375-0.2631-0.3462-0.5176-0.5745-1.275-0.8615-2.272-0.8615h-3.508v8.494h2.149zm1.846-3.623c0.2023 0.204 0.3033 0.4772 0.3033 0.819 0 0.3447-0.08893 0.6181-0.2667 0.8201-0.195 0.2245-0.5539 0.3368-1.077 0.3368h-0.8062v-2.283h0.8121c0.4873 0 0.8321 0.1018 1.034 0.3059zm10.56 6.539 3.415-8.494-2.264 1.808e-4 -2.336 5.488-1.662-5.488h-1.741l-1.784 5.488-1.258-2.502-1.139 3.516 1.156 1.99h2.228l1.612-4.922 1.537 4.922zm2.008-1.057 0.6501-1.648h1.876l-0.8909-2.5 1.114-2.823 3.19 8.494h-2.353l-0.5452-1.521z",
        proj: [[
            "Set",
            "NodeMessanger",
            "ShadyGoat",
        ]],
        cl: "down",
    },
    // https://simpleicons.org
    static: {
        full: "Static Sites",
        icon: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z",
        proj: [
            ["ShadyGoatLegacy"]
        ],
        cl: "left",
    },
    // https://simpleicons.org
    tools: {
        full: "Tools/Modules",
        icon: "M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z",
        proj: [
            ["mongosteel"]
        ],
        cl: "right",
    },
    // https://simpleicons.org
    other: {
        full: "Other",
        icon: "M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z",
        proj: [[
            "TwitterReddit",
            "GoogleIt"
        ]],
        cl: "right"
    }
}

export const project:Record<projects, {
    full: string,
    desc: string,
    img: [string, "svg" | "img"],
    a:string,
}> = {
    // My Own PFP
    Capitalist: {
        full: "CapitalistMC Bot",
        desc: "A bot made for CapitalistMC. Medium sized bot, which included music, moderation, task management, staff management, polls, discord-shop, etc",
        a: "https://github.com/ShadiestGoat/ancient-archived-capitalist-mc-bot",
        img: ["/assets/pfp.webp", "img"]
    },
    // https://simpleicons.org
    EA: {
        full: "UFC-4 EA Bot",
        desc: "One of my bots was used by the offical EA UFC-4 discord server. It has been removed later on due to new game updates & wishes for custom bot, with an apology to me!",
        a: "https://discord.com/channels/725042927927296011/745702468511334440/785592584252424242",
        img: ["M6.308 7.843h2.797s-1.86 6.639-1.951 6.998c-.177.69-.353 1.316-2.043 1.316-2.037 0-3.22-.007-3.777 0-.698.007-1.521-.633-1.296-1.464l1.91-6.85H4.8S3.2 13.553 3.166 13.7c-.029.148-.19.557.698.564.64.014.69-.155.803-.564.268-.922 1.64-5.857 1.64-5.857zm10.272 0l-.507 1.824H9.986l.507-1.824zm-8.404 8.314l1.459-5.244h6.086l-.507 1.823h-3.262l-.95 3.421zm11.47-5.385c-.26.957-.493 1.774-.754 2.738-.05.17-.162.416-.127.57.078.367 1.29.226 1.726.226h1.945c-.155.612-.33 1.21-.5 1.81h-4.63c-.676-.064-1.557-.353-1.472-1.226.028-.274.156-.584.24-.887a1189.7 1189.7 0 001.24-4.463c.176-.648.317-1.197.83-1.457.333-.17.861-.218 1.255-.24H24c-.162.606-.331 1.211-.5 1.81h-2.643c-.317 0-.669-.036-.845.084-.19.141-.295.775-.366 1.035z", "svg"]
    },
    // https://simpleicons.org
    GoogleIt: {
        full: "Google It Powercord Plugin",
        desc: "A plugin for Powercord to tell idiots to 'just google it'",
        a: "https://github.com/ShadiestGoat/Powercord-googleit-plugin",
        img: ["M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z", "svg"]
    },
    GuessTheAuthor: {
        full: "Guess the Author bot",
        desc: "A discord bot for geussing who sent a messaage, packaged with a cli to download messages & format them",
        a: "https://github.com/ShadiestGoat/guess-the-author-message",
        img: ["/assets/pfp.webp", "img"]
    },
    ImgApi: {
        full: "Image Upload API",
        desc: "An image server API, which transforms all images to webp, allows user management and storage management!",
        a: "",
        img: ["/assets/pfp.webp", "img"]
    },
    // I unfortunatly couldn't find the old icon :/
    Noble: {
        full: "Noble Service Bot",
        desc: "A service team bot for Noble services (I think they are now defunct though)",
        a: "",
        img: ["/assets/pfp.webp", "img"]
    },
    NodeMessanger: {
        full: "Discord Ripoff/Messanger App",
        desc: "A Discord-like messanger app, cause discord bad. V1 is bad, V2 is getting worked on",
        a: "https://github.com/ShadiestGoat/node-react-messager-app",
        img: ["/assets/pfp.webp", "img"]
    },
    RougeLike: {
        full: "Rouglelike game RESTfull API",
        desc: "A Rougelike game API, archived. Main purpose is to be able to have multiple clients connect to 1 centralised & open source API, so that they can share inventory, map, etc, but have a completly different game style/plot/etc",
        a: "https://github.com/ShadiestGoat/Rougelike-REST-API-Closed",
        img: ["/assets/pfp.webp", "img"]
    },
    Set: {
        full: "SET Game site",
        desc: "SET Card game reloaded as a website for speedrunning",
        a: "https://set.shadygoat.eu/",
        img: ["https://set.shadygoat.eu/favicon.ico", "img"]
    },
    // I'm honestly not sure this is even right. But this is taken from their favicon
    SpaceNode: {
        full: "Space Node Bot",
        desc: "A discord bot for Space Node hosting company. Offers 65% coverage of the pterodactyl API, node status, etc. This organisation is possibly defunct, and the icon may be unrelated.",
        a: "",
        img: ["m18.5 15.41c-0.2222-1.796-1.583-3.296-3.333-3.635-0.4861-0.099-0.9722-0.1132-1.444-0.0283-0.0139 0-0.0139-0.0142-0.02781-0.0142-0.7639-1.627-2.403-2.702-4.181-2.702-1.778 0-3.403 1.047-4.181 2.674-0.0139 0-0.0139 0.0142-0.0278 0.0142-0.5-0.0566-1-0.0283-1.5 0.099-1.722 0.4243-3.028 1.895-3.264 3.678-0.0278 0.1839-0.0417 0.3678-0.0417 0.5375 0 0.5375 0.3611 1.033 0.8889 1.103 0.6528 0.099 1.222-0.4102 1.208-1.061 0-0.099 0-0.2122 0.0139-0.3112 0.1111-0.9053 0.7917-1.669 1.681-1.881 0.2778-0.0707 0.5556-0.08479 0.8195-0.0424 0.8472 0.1131 1.681-0.3254 2.042-1.089 0.2639-0.5658 0.6806-1.061 1.236-1.33 0.6111-0.2971 1.306-0.3395 1.944-0.1131 0.6666 0.2405 1.167 0.7497 1.472 1.386 0.3194 0.6224 0.4722 1.061 1.153 1.146 0.2778 0.0424 1.056 0.0283 1.347 0.01409 0.5695 0 1.139 0.198 1.542 0.6083 0.2638 0.2829 0.4583 0.6366 0.5417 1.033 0.125 0.6366-0.0278 1.273-0.4028 1.754-0.2639 0.3395-0.625 0.5941-1.028 0.7073-0.1944 0.05659-0.3889 0.0707-0.5833 0.0707h-3.069c-0.6111 0-1.097-0.4951-1.097-1.117v-4.145c0-0.1697-0.1389-0.3112-0.3055-0.3112h-0.4306c-0.8472 0.0141-1.528 0.9761-1.528 1.994v3.72c0 1.103 0.875 1.994 1.958 1.994 0 0 4.819-0.0142 4.889-0.0142 1.111-0.1132 2.139-0.6931 2.833-1.584 0.6945-0.8629 1.014-1.995 0.875-3.154zm-9.014-7.695c0.3055 0 0.6111 0.0283 0.9028 0.099v-0.58c0-0.8204 0.4167-1.301 1.25-1.301h0.3055v-2.136h-1c-2.153 0-2.986 1.117-2.986 3.14v1.047c0.4861-0.1697 1-0.2687 1.528-0.2687zm8.069 0.8349h-4.5c-0.0695 0-0.125-0.0566-0.125-0.1273v-0.2405c0-0.0707 0.05549-0.1273 0.125-0.1273h4.486c0.0695 0 0.125 0.0566 0.125 0.1273v0.2405c0 0.0566-0.04169 0.1273-0.1111 0.1273zm-0.8888 1.528h-2.25c-0.0695 0-0.125-0.0566-0.125-0.1273v-0.2405c0-0.0707 0.0556-0.1273 0.125-0.1273h2.25c0.0695 0 0.125 0.0566 0.125 0.1273v0.2405c0 0.0566-0.05551 0.1273-0.125 0.1273zm-0.5278-3.055h-3.083c-0.0695 0-0.125-0.0566-0.125-0.1273v-0.2405c0-0.0707 0.05549-0.1273 0.125-0.1273h3.097c0.0694 0 0.125 0.0566 0.125 0.1273v0.2405c0 0.0707-0.0695 0.1273-0.1389 0.1273zm6.806 3.904c-0.4584 0-0.7638-0.2688-0.7638-0.8204v-3.169c0-2.023-0.8334-3.14-2.986-3.14h-1v2.136h0.3056c0.8472 0 1.25 0.4668 1.25 1.301v2.801c0 1.216 0.3611 1.712 1.153 1.966-0.7917 0.2405-1.153 0.7497-1.153 1.966v2.079c0 0.5799 0 1.146-0.1528 1.726-0.1528 0.5375-0.4028 1.047-0.75 1.485-0.1944 0.2547-0.4167 0.4668-0.6666 0.6649v0.2829h0.9999c2.153 0 2.986-1.118 2.986-3.14v-3.169c0-0.5658 0.2916-0.8204 0.7638-0.8204h0.5695v-2.136h-0.5556z", "svg"]
    },
    // https://simpleicons.org
    TwitterReddit: {
        full: "Twitter->Reddit bot",
        desc: "A TwitterxReddit bot that automatically reposts tweets from certain users to a subreddit, extremly optimised (even though it uses python), uses raw API and basicalyl no dependencies besides aiohttp",
        a: "",
        img: ["M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z", "svg"]
    },
    // My module, but taken from the repo ig
    mongosteel: {
        full: "MongoSteel",
        desc: "A custom NodeJS MongoDB ODM module. Supports async, is extremly lightweight, has schema validation and the MongoDB Driver as the only dependency, supports both CommonJS and ESM!",
        a: "https://mongosteel.shadygoat.eu",
        img: ["m21.38 10.55q0.1361 0 0.2059 0.1085 0.06987 0.1066 0.06987 0.3015t-0.06803 0.3052q-0.06619 0.1085-0.2078 0.1085-0.1305 0-0.2004-0.1085-0.06803-0.1103-0.06803-0.3052t0.06435-0.3015q0.06435-0.1085 0.2041-0.1085zm0.8402 0.01839-0.7281 1.313h-0.1416l0.7281-1.313zm-0.8402 0.09561q-0.06987 0-0.103 0.07538-0.03125 0.07354-0.03125 0.2206 0 0.1471 0.03125 0.2225 0.03309 0.07538 0.103 0.07538 0.1416 0 0.1416-0.2978 0-0.296-0.1416-0.296zm0.8034 0.4118q0.1342 0 0.2041 0.1085 0.0717 0.1066 0.0717 0.3015 0 0.1949-0.06803 0.3052-0.06619 0.1085-0.2078 0.1085-0.1305 0-0.2004-0.1085-0.06803-0.1103-0.06803-0.3052 0-0.1949 0.06435-0.3015 0.06435-0.1085 0.2041-0.1085zm0 0.1158q-0.06987 0-0.103 0.07354-0.03125 0.07354-0.03125 0.2206 0 0.1489 0.03125 0.2243 0.03309 0.07354 0.103 0.07354 0.1416 0 0.1416-0.2978 0-0.2942-0.1416-0.2942zm-1.252 0.03125q0 0.2114-0.04413 0.364-0.04412 0.1508-0.1397 0.2317-0.0956 0.0809-0.2537 0.0809-0.2225 0-0.3291-0.1783-0.1048-0.1802-0.1048-0.4982 0-0.2133 0.04229-0.364 0.04413-0.1508 0.1397-0.2298 0.0956-0.0809 0.2519-0.0809 0.2206 0 0.3291 0.1783 0.1085 0.1765 0.1085 0.4964zm-0.7097 0q0 0.2703 0.06067 0.4045 0.06251 0.1342 0.2114 0.1342 0.1471 0 0.2096-0.1324 0.06435-0.1342 0.06435-0.4063 0-0.2684-0.06435-0.4026-0.06251-0.1342-0.2096-0.1342-0.1489 0-0.2114 0.1342-0.06067 0.1342-0.06067 0.4026zm-0.3475 0.6582h-0.8678v-0.1342l0.3438-0.3475q0.09928-0.09928 0.1673-0.1765 0.06803-0.07722 0.103-0.1508 0.03493-0.07538 0.03493-0.1636 0-0.1085-0.06435-0.1636-0.06435-0.057-0.1673-0.057-0.09561 0-0.1691 0.03309-0.0717 0.03309-0.1471 0.09193l-0.08641-0.1085q0.07722-0.06435 0.1765-0.1085 0.1011-0.04596 0.2261-0.04596 0.1839 0 0.2905 0.09377 0.1066 0.09193 0.1066 0.2556 0 0.103-0.04229 0.193-0.04229 0.09009-0.1177 0.1783-0.07538 0.08641-0.1765 0.1857l-0.2739 0.2703v0.0074h0.6637zm-1.05-0.2133-0.866-0.3806v-0.09193l0.866-0.4321v0.1434l-0.6931 0.3273 0.6931 0.2905zm-6.169-11.6a11.97 11.97 0 0 0-8.273 2.725 11.97 11.97 0 0 0-3.102 14.55 11.97 11.97 0 0 0 13.46 6.34 11.97 11.97 0 0 0 9.242-11.66h-7.76a7.725 7.725 0 0 0 0.0059-0.3555c0.0069-0.5544-0.07075-1.131-0.1348-1.51-0.2171-0.9581-0.5098-1.754-0.8282-2.416l3.992-5.246a11.97 11.97 0 0 0-6.598-2.428zm-0.7227 5.127c0.1163 0.2758 0.2571 0.5928 0.416 0.8164 0.1822 0.3978 1.878 1.439 2.596 4.605 0.05334 0.3155 0.117 0.7959 0.1113 1.258a6.436 6.436 0 0 1-2.064 4.803c-0.1396 0.1305-0.2458 0.2266-0.4824 0.3945-0.1282 0.5754-0.2244 1.155-0.2891 1.74h-0.2734a41.7 41.7 0 0 0-0.1875-1.623l-0.03906-0.0293c-0.3507-0.2548-2.935-2.253-2.775-5.607 0.1714-3.597 2.281-5.364 2.691-5.686 0.2656-0.2832 0.2764-0.391 0.2969-0.6719zm0.1387 5.367c-0.1561-5.68e-4 -0.1562 4.705-0.1562 4.705 0 0.366 0.2193 1.338 0.4355 1.363 0 0-0.1584-6.068-0.2793-6.068z", "svg"]
    },
    Schedual: {
        full: "Interactive Schedual",
        desc: "A Progressive Web App to tell me what my next class is, using Preact",
        a: "https://sch.shadygoat.eu",
        img: ["/assets/pfp.webp", "img"]
    },
    ShadyGoat: {
        full: "This site :)",
        desc: "My portfolio site",
        a: "https://shadygoat.eu",
        img: ["/assets/pfp.webp", "img"]
    },
    ShadyGoatLegacy: {
        full: "Legacy Portfolio",
        desc: "My Legacy portfolio site",
        a: "https://legacy.shadygoat.eu", //TODO: move to lagacy!
        img: ["/assets/pfp.webp", "img"]
    },
    // https://simpleicons.org
    EbaySpam: {
        full: "Ebay Spam Bot",
        desc: "A bot that adds views onto an ebay listing",
        a: "",
        img: ["M6.056 12.132v-4.92h1.2v3.026c.59-.703 1.402-.906 2.202-.906 1.34 0 2.828.904 2.828 2.855 0 .233-.015.457-.06.668.24-.953 1.274-1.305 2.896-1.344.51-.018 1.095-.018 1.56-.018v-.135c0-.885-.556-1.244-1.53-1.244-.72 0-1.245.3-1.305.81h-1.275c.136-1.29 1.5-1.62 2.686-1.62 1.064 0 1.995.27 2.415 1.02l-.436-.84h1.41l2.055 4.125 2.055-4.126H24l-3.72 7.305h-1.346l1.07-2.04-2.33-4.38c.13.255.2.555.2.93v2.46c0 .346.01.69.04 1.005H16.8a6.543 6.543 0 01-.046-.765c-.603.734-1.32.96-2.32.96-1.48 0-2.272-.78-2.272-1.695 0-.15.015-.284.037-.405-.3 1.246-1.36 2.086-2.767 2.086-.87 0-1.694-.315-2.2-.93 0 .24-.015.494-.04.734h-1.18c.02-.39.04-.855.04-1.245v-1.05h-4.83c.065 1.095.818 1.74 1.853 1.74.718 0 1.355-.3 1.568-.93h1.24c-.24 1.29-1.61 1.725-2.79 1.725C.95 15.009 0 13.822 0 12.232c0-1.754.982-2.91 3.116-2.91 1.688 0 2.93.886 2.94 2.806v.005zm9.137.183c-1.095.034-1.77.233-1.77.95 0 .465.36.97 1.305.97 1.26 0 1.935-.69 1.935-1.814v-.13c-.45 0-.99.006-1.484.022h.012zm-6.06 1.875c1.11 0 1.876-.806 1.876-2.02s-.768-2.02-1.893-2.02c-1.11 0-1.89.806-1.89 2.02s.765 2.02 1.875 2.02h.03zm-4.35-2.514c-.044-1.125-.854-1.546-1.725-1.546-.944 0-1.694.474-1.815 1.546z", "svg"]
    }
}
