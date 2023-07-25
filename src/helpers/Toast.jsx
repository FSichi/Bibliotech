import Swal from 'sweetalert2';

export const ToastNotification = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: false,
    background: 'white',
    color: 'black',
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});