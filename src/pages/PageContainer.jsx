import { BrowserTitle } from '../components/BrowserTitle/BrowserTitle';

export const PageContainer = ({ pageContent, sidebarContent, titlePage }) => {
    return (
        <>
            <BrowserTitle titlePage={titlePage}/>

            <section className='flex'>
                <div className="w-full 2xl:w-3/4 mt-5 mb-5 p-3 sm:p-5">
                    {pageContent}
                </div>

                <div className="2xl:w-96 border-l-2 border-gray-300 dark:border-gray-800 hidden 2xl:block p-3">
                    {sidebarContent}
                </div>
            </section>
        </>
    )
}
