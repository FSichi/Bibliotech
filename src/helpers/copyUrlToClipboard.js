import { ToastNotification } from './Toast';

const makeToastNotification = () => {
    ToastNotification.fire({
        icon: 'success',
        title: 'Se copio la direccion del Sitio en el portapapeles. Gracias por el apoyo.'
    })
}

const copyUrlToClipboard = () => {

    const urlToCopy = 'https://bibliotech-app.netlify.app/';

    const tempInput = document.createElement('input');
    tempInput.value = urlToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    makeToastNotification();
};

export default copyUrlToClipboard;
