// src/utils/alertHelper.js
import Swal from 'sweetalert2';

export const showSuccess = (message = "Success!") => {
  Swal.fire({
    icon: 'success',
    title: message,
    timer: 1500,
    showConfirmButton: false,
    position: 'top-end',
    toast: true,
  });
};

export const showError = (message = "Something went wrong!") => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: message,
  });
};

export const showConfirm = async (message = "Are you sure?", confirmButtonText = "Yes") => {
  const result = await Swal.fire({
    title: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText: "Cancel",
    reverseButtons: true,
  });

  return result.isConfirmed;
};
