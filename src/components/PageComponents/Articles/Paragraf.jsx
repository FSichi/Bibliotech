
export const ParagrafComponent = ({ children, classNameCustom = '' }) => {
    return (
        <h2 className={`text-slate-400 mt-4 ${classNameCustom}`}>
            {children}
        </h2>
    )
}
