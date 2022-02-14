import axios from 'axios';

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
    }

    return token;
  } catch (error) {
    alert(error);
  }
}
