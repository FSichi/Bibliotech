import { BrowserTitle } from '../components/BrowserTitle/BrowserTitle';

export const PageContainer = ({ pageContent, sidebarContent, titlePage }) => {
    return (
        <>
            <BrowserTitle titlePage={titlePage}/>

            <section className='flex'>
                <div className="xl:w-3/4 mt-5 mb-5 p-3 sm:p-5">
                    {pageContent}
                </div>

                <div className="xl:w-96 border-l-2 border-gray-800 hidden xl:block p-3">
                    {sidebarContent}
                </div>
            </section>
        </>
    )
}
