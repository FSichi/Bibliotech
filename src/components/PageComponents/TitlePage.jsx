
export const TitlePage = ({ sectionTitle, pageTitle }) => {
    return (
        <div className="mb-10">
            <h1 className="text-sky-500 font-medium text-base">{sectionTitle}</h1>
            <h2 className="text-3xl">{pageTitle}</h2>
        </div>
    )
}
