import { BrowserTitle } from '../components/BrowserTitle/BrowserTitle';

export const PageContainer = ({ pageContent, sidebarContent, titlePage }) => {
    return (
        <>
            <BrowserTitle titlePage={titlePage}/>

            <section className='flex'>
                <div className="xl:w-3/4">
                    {pageContent}
                </div>

                <div className="w-80 xl:w-96 border-l-2 border-gray-800 hidden xl:block">
                    {sidebarContent}
                </div>
            </section>
        </>
    )
}
