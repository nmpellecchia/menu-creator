import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.min.css';

export function showErrorPopup(error) {
  const popup = Swal.mixin({
    customClass: {
      confirmButton:
        'rounded-full bg-red-600 border-4 border-red-600 p-4 text-white text-2xl uppercase font-bold duration-300 hover:bg-white hover:text-red-600',
    },
    buttonsStyling: false,
  });

  popup.fire({
    icon: 'error',
    title: error,
  });
}

export function showSuccessPopup(msg) {
  const popup = Swal.mixin({
    toast: true,
    position: 'bottom-right',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: '#BADA55',
    color: 'white',
    iconColor: 'white',
  });

  popup.fire({
    icon: 'success',
    title: msg,
  });
}
