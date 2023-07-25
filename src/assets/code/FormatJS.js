export const langContextCode = `import React, { useState } from 'react';
import EnglishMessages from '../language/en-US.json';
import SpanishMessages from '../language/es-MX.json';
import { IntlProvider } from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({ children }) => {

    let defaultLocal;
    let defaultMessages;

    if (localStorage.getItem('lang') === null) {
        localStorage.setItem("lang", 'en-US');
    }

    const lang = localStorage.getItem('lang');

    if (lang) {
        defaultLocal = lang

        if (lang === 'es-MX') {
            defaultMessages = SpanishMessages;
        } else if (lang === 'en-US') {
            defaultMessages = EnglishMessages
        } else {
            defaultLocal = 'en-US'
            defaultMessages = EnglishMessages
        }
    }

    const [messages, setMessages] = useState(defaultMessages);
    const [locale, setLocale] = useState(defaultLocal);

    const setLanguage = (lenguaje) => {
        switch (lenguaje) {
            case 'es-MX':
                setMessages(SpanishMessages);
                setLocale('es-MX');
                localStorage.setItem('lang', 'es-MX');
                break;
            case 'en-US':
                setMessages(EnglishMessages);
                setLocale('en-US');
                localStorage.setItem('lang', 'en-US');
                break;
            default:
                setMessages(EnglishMessages);
                setLocale('en-US');
                localStorage.setItem('lang', 'en-US');
        }
    }

    return (
        <langContext.Provider value={{ setLanguage: setLanguage }}>
            <IntlProvider locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
}

export { LangProvider, langContext };`

export const indexProvider = `import React from 'react';
import ReactDOM from "react-dom/client";
import { LangProvider } from './context/langContext';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
	    <LangProvider>  
            <App />
	    </LangProvider>,
	</React.StrictMode>,
);`


export const esMXFile = ` /* es-MX.json */

{
	"app.loadingSpinner": "Cargando Datos...",

	"app.login.info": "Bienvenido a mi aplicacion X",
	"app.login.enter": "Ingresar",

	"navbar.user": "Usuario:",
	"navbar.profile": "Perfil:",
	"navbar.logout": "Cerrar Sesión"
}`

export const enUSFile = `/* en-US.json */

{
	"app.loadingSpinner": "Loading data...",

	"app.login.info": "Welcome to my X App",
	"app.login.enter": "Log in",

	"navbar.user": "User:",
	"navbar.profile": "Profile:",
	"navbar.logout": "Logout",
}`

export const FormattedMessageImport = `import { FormattedMessage } from "react-intl";`

export const FormattedMessageExample = `<FormattedMessage id={'app.login.info'} defaultMessage="-" />`

export const switchExample = `import React from 'react'
import { useContext } from 'react';
import es from '../../container/Login/img/spain.png'
import en from '../../container/Login/img/united-kingdom.png'
import { langContext } from '../../context/langContext'
import { ToastNotification } from '../../utils/ToastSweetAlert';
import './styles.css'

export const SelectLanguaje = () => {

    const language = useContext(langContext);

    const setLanguage = (lang) => {

        (lang === 1) 
            ? language.setLanguage('es-MX') 
            : language.setLanguage('en-US')

        ToastNotification.fire({
            icon: 'success',
            title: (lang === 1)
                ? 'Lenguaje Actualizado con Exito a Español'
                : 'Language Switched Succesfully to English'
        });

        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }

    return (
        <div className='row mt-3 mb-4 d-flex justify-content-center'>
            <div className='col-3 d-flex justify-content-center'>
                <button 
                    type="button" className="p-2 me-2 languajeButton" 
                    onClick={() => { setLanguage(1) }}
                >
                    <img 
                        src={es} alt="" 
                        style={{ width: '40px', height: '40px' }} 
                        className='ms-2 me-2' 
                    />
                </button>
            </div>
            <div className='col-3 d-flex justify-content-center'>
                <button 
                    type="button" className="p-2 ms-2 languajeButton" 
                    onClick={() => { setLanguage(2) }}
                >
                    <img 
                        src={en} alt="" 
                        style={{ width: '40px', height: '40px' }} 
                        className='ms-2 me-2' 
                    />
                </button>
            </div>
        </div>
    )
}`