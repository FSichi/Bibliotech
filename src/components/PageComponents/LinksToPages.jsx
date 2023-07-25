
export const LinksToPages = ({ link }) => {
    return (
        <p className="text-lg text-sky-400 mt-3 hover:text-indigo-400">
            <a href={link} target="_blank" rel="noreferrer">{link}</a>
        </p>
    )
}

export const LinksToPagesOrange = ({ link }) => {
    return (
        <p className="text-lg text-orange-400 mt-3 hover:text-indigo-400">
            <a href={link} target="_blank" rel="noreferrer">{link}</a>
        </p>
    )
}

export const LinksToPagesChromeWeb = ({ link, text }) => {
    return (
        <p className="text-lg text-orange-400 mt-3 hover:text-indigo-400">
            <a href={link} target="_blank" rel="noreferrer">{text}</a>
        </p>
    )
}
