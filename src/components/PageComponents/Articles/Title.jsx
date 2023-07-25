
export const Title = ({ title, id = '', customClass = '' }) => {
    return (
        <h1 className={`text-3xl text-white ${customClass}`} id={id}>{title}</h1>
    )
}
