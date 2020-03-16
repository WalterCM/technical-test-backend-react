import React, {Component} from 'react';
import Button from '../../components/UI/Button/Button';

import style from './Auth.module.css';

import axios from '../../axios-connection';

class Auth extends Component {
  state = {
    username: null,
    password: null
  };

  onInputChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onLoginHandler = (event) => {
    event.preventDefault();
    axios.post('users/token/', this.state)
      .then(response => {
        const token = response.data.token;

        localStorage.setItem('token', token);
        // axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
      });
  };

  render() {
    return (
      <div>
        <form className={style.AuthForm}>
          <ul>
            <li>
              <label htmlFor="username">Nombre de usuario</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={this.onInputChangeHandler} />
            </li>
            <li>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={this.onInputChangeHandler} />
            </li>
            <Button type="Success" onClick={this.onLoginHandler}>Loguearse</Button>
          </ul>
        </form>
      </div>
    );
  }
}

export default Auth;
