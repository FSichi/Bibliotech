import { PageContainer } from "./PageContainer"

export const About = () => {
    return (
        <PageContainer pageContent={<AboutContent />} sidebarContent={<AboutSidebar />} titlePage={'Acerca De'}/>
    )
}

const AboutContent = () => {
    return (
        <section>
            <div className="mt-4 mr-10">
                <h1 className="text-xl text-white">Librerias de Utilidad General</h1>

                <h2 className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi necessitatibus, dolorum temporibus iure alias totam esse error dolores dicta fugit ipsa. Facilis omnis eligendi voluptatem. Quisquam dolor tempore deserunt assumenda id provident at nemo laborum qui? Ea corporis quam, corrupti nisi eos voluptates soluta ex aut exercitationem laborum accusantium provident reprehenderit consectetur pariatur sit totam eius iusto, nemo, excepturi voluptas laboriosam magni. At aliquid consequuntur odio blanditiis voluptatum maiores, totam animi commodi odit perspiciatis debitis fugiat non. Facere expedita id accusamus laudantium aspernatur ea ipsa voluptatem. Modi optio quidem, voluptatibus magni ipsam quam laboriosam enim minus eveniet consequuntur, sapiente architecto.</h2>

                <h2 className="text-slate-400 mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi necessitatibus, dolorum temporibus iure alias totam esse error dolores dicta fugit ipsa. Facilis omnis eligendi voluptatem. Quisquam dolor tempore deserunt assumenda id provident at nemo laborum qui? Ea corporis quam, corrupti nisi eos voluptates soluta ex aut exercitationem laborum accusantium provident reprehenderit consectetur pariatur sit totam eius iusto, nemo, excepturi voluptas laboriosam magni. At aliquid consequuntur odio blanditiis voluptatum maiores, totam animi commodi odit perspiciatis debitis fugiat non. Facere expedita id accusamus laudantium aspernatur ea ipsa voluptatem. Modi optio quidem, voluptatibus magni ipsam quam laboriosam enim minus eveniet consequuntur, sapiente architecto.</h2>
            </div>

            <div className="mt-10 mb-10 mr-10">
                <hr style={{ borderColor: 'rgb(30, 41, 59)', borderStyle: 'solid' }} />
            </div>

            <div className="mt-8 mr-10">
                <h1 className="text-xl text-white">Librerias de Utilidad Especifica</h1>

                <h2 className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi necessitatibus, dolorum temporibus iure alias totam esse error dolores dicta fugit ipsa. Facilis omnis eligendi voluptatem. Quisquam dolor tempore deserunt assumenda id provident at nemo laborum qui? Ea corporis quam, corrupti nisi eos voluptates soluta ex aut exercitationem laborum accusantium provident reprehenderit consectetur pariatur sit totam eius iusto, nemo, excepturi voluptas laboriosam magni. At aliquid consequuntur odio blanditiis voluptatum maiores, totam animi commodi odit perspiciatis debitis fugiat non. Facere expedita id accusamus laudantium aspernatur ea ipsa voluptatem. Modi optio quidem, voluptatibus magni ipsam quam laboriosam enim minus eveniet consequuntur, sapiente architecto.</h2>

                <h2 className="text-slate-400 mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi necessitatibus, dolorum temporibus iure alias totam esse error dolores dicta fugit ipsa. Facilis omnis eligendi voluptatem. Quisquam dolor tempore deserunt assumenda id provident at nemo laborum qui? Ea corporis quam, corrupti nisi eos voluptates soluta ex aut exercitationem laborum accusantium provident reprehenderit consectetur pariatur sit totam eius iusto, nemo, excepturi voluptas laboriosam magni. At aliquid consequuntur odio blanditiis voluptatum maiores, totam animi commodi odit perspiciatis debitis fugiat non. Facere expedita id accusamus laudantium aspernatur ea ipsa voluptatem. Modi optio quidem, voluptatibus magni ipsam quam laboriosam enim minus eveniet consequuntur, sapiente architecto.</h2>
            </div>

            <div className="mt-8 mr-10">
                <h1 className="text-xl text-white">Librerias de Utilidad Especifica</h1>

                <h2 className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi necessitatibus, dolorum temporibus iure alias totam esse error dolores dicta fugit ipsa. Facilis omnis eligendi voluptatem. Quisquam dolor tempore deserunt assumenda id provident at nemo laborum qui? Ea corporis quam, corrupti nisi eos voluptates soluta ex aut exercitationem laborum accusantium provident reprehenderit consectetur pariatur sit totam eius iusto, nemo, excepturi voluptas laboriosam magni. At aliquid consequuntur odio blanditiis voluptatum maiores, totam animi commodi odit perspiciatis debitis fugiat non. Facere expedita id accusamus laudantium aspernatur ea ipsa voluptatem. Modi optio quidem, voluptatibus magni ipsam quam laboriosam enim minus eveniet consequuntur, sapiente architecto.</h2>

                <h2 className="text-slate-400 mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi necessitatibus, dolorum temporibus iure alias totam esse error dolores dicta fugit ipsa. Facilis omnis eligendi voluptatem. Quisquam dolor tempore deserunt assumenda id provident at nemo laborum qui? Ea corporis quam, corrupti nisi eos voluptates soluta ex aut exercitationem laborum accusantium provident reprehenderit consectetur pariatur sit totam eius iusto, nemo, excepturi voluptas laboriosam magni. At aliquid consequuntur odio blanditiis voluptatum maiores, totam animi commodi odit perspiciatis debitis fugiat non. Facere expedita id accusamus laudantium aspernatur ea ipsa voluptatem. Modi optio quidem, voluptatibus magni ipsam quam laboriosam enim minus eveniet consequuntur, sapiente architecto.</h2>
            </div>
        </section>
    )
}
const AboutSidebar = () => {
    return (
        <div className="text-white p-2 fixed content-sidebar-scroll content-sidebar-container">

            <div className='mb-8 content-sidebar-container-children'>

                <h1 className="text-sky-400 text-center">Contenido de la Pagina</h1>

                <h1 className="mt-8 ml-4 text-sky-300">Librerias de Utilidad General</h1>

                <h2 className="ml-10 mt-2 text-slate-400">Libreria 1</h2>
                <h2 className="ml-10 mt-2 text-sky-300">Libreria 2</h2>
                <h2 className="ml-10 mt-2 text-slate-400">Libreria 3</h2>

                <h1 className="mt-5 ml-4 text-slate-400"> Librerias de Utilidad Especifica</h1>

                <h2 className="ml-10 mt-2 text-slate-400">Libreria 1</h2>
                <h2 className="ml-10 mt-2 text-slate-400">Libreria 2</h2>
                <h2 className="ml-10 mt-2 text-slate-400">Libreria 3</h2>

                <h1 className="mt-5 ml-4 text-slate-400"> Librerias de Utilidad Especifica</h1>

                <h2 className="ml-10 mt-2 text-slate-400">Libreria 1</h2>
                <h2 className="ml-10 mt-2 text-slate-400">Libreria 2</h2>
                <h2 className="ml-10 mt-2 text-slate-400">Libreria 3</h2>


                <h1 className="mt-5 ml-4 text-slate-400"> Librerias de Utilidad Especifica</h1>

                <h2 className="ml-10 mt-2 text-slate-400">Libreria 1</h2>
                <h2 className="ml-10 mt-2 text-slate-400">Libreria 2</h2>
                <h2 className="ml-10 mt-2 text-slate-400">Libreria 4</h2>

                <h1 className="mt-5 ml-4 text-slate-400"> Librerias de Utilidad Especifica</h1>

                <h2 className="ml-10 mt-2 text-slate-400">Libreria 1</h2>
                <h2 className="ml-10 mt-2 text-slate-400">Libreria 2</h2>
                <h2 className="ml-10 mt-2 text-slate-400">Libreria 4</h2>

            </div>

        </div>
    )
}