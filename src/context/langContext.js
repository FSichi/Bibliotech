import React, {useState} from 'react';
import MensajesIngles from '../lang/en-US.json';
import MensajesEsp from '../lang/es-MX.json';
import {IntlProvider} from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({children}) => {

	let localePorDefecto;
	let mensajesPorDefecto;

	if (localStorage.getItem('lang') === null) {
		localStorage.setItem("lang", 'en-US');
	} 

	const lang = localStorage.getItem('lang');

	if(lang){
		localePorDefecto = lang

		if(lang === 'es-MX'){
			mensajesPorDefecto = MensajesEsp;
		} else if(lang === 'en-US'){
			mensajesPorDefecto = MensajesIngles
		} else {
			localePorDefecto = 'en-US'
			mensajesPorDefecto = MensajesIngles
		}
	}

	const [mensajes, establecerMensajes] = useState(mensajesPorDefecto);
	const [locale, establecerLocale] = useState(localePorDefecto);

	const establecerLenguaje = (lenguaje) => {
		switch (lenguaje){
			case 'es-MX':
				establecerMensajes(MensajesEsp);
				establecerLocale('es-MX');
				localStorage.setItem('lang', 'es-MX');
				break;
			case 'en-US':
				establecerMensajes(MensajesIngles);
				establecerLocale('en-US');
				localStorage.setItem('lang', 'en-US');
				break;
			default:
				establecerMensajes(MensajesIngles);
				establecerLocale('en-US');
				localStorage.setItem('lang', 'en-US');
		}
	}

	return (
		<langContext.Provider value={{establecerLenguaje: establecerLenguaje}}>
			<IntlProvider locale={locale} messages={mensajes}>
				{children}
			</IntlProvider>
		</langContext.Provider>
	);
}
 
export {LangProvider, langContext};