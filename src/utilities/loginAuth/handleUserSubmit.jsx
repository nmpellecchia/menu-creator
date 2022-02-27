import axios from 'axios';
import { showErrorPopup } from '../services/popups';

// changed name to UserSubmit to avoid conflicts
export async function handleUserSubmit(credentials) {
  let token = '';
  try {
    const res = await axios.get('http://challenge-react.alkemy.org/', {
      params: {
        email: credentials.email,
        password: credentials.password,
      },
    });
    if (res.status === 200) {
      token = res.data.token;
    } else {
      showErrorPopup('An error has ocurred! \n Please try again later.');
    }

    return token;
  } catch (error) {
    showErrorPopup('An error has ocurred! \n Please try again later.');
  }
}
