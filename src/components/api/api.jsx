
import axios from 'axios';

export const tokenGenrate = () => {
    let data = JSON.stringify({
      "username": process.env.REACT_APP_USERNAME,
      "password": process.env.REACT_APP_PASSWORD
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://realm.mongodb.com/api/client/v2.0/app/data-mkzhb/auth/providers/local-userpass/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios.request(config)
      .then((response) => {
        sessionStorage.setItem('access_token', response?.data?.access_token)
      })
      .catch((error) => {
        console.log(error);
      });
  }
