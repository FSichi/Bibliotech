
export const SubTitle = ({ text, id = '', customClass = '' }) => {
    return (
        <h1 className={`text-2xl text-sky-400 ${customClass}`} id={id}>{text}</h1>
    )
}