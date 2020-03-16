import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import Button from '../../components/UI/Button/Button';

import style from './Auth.module.css';

import axios from '../../axios-connection';
import Header from "../../components/UI/Header/Header";

class Auth extends Component {
  state = {
    username: null,
    password: null,
    loginIn: true
  };

  componentDidMount = () => {
    if (this.props.match.url === '/logout/') {
      this.props.history.push('/');
    }
  };

  onInputChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onMainHandler = (event) => {
    event.preventDefault();
    let url = 'users/token/';
    if (!this.state.loginIn) {
      url = 'users/create/'
    }
    axios.post(url, this.state)
      .then(response => {
        if (!this.state.loginIn) {
          this.setState({loginIn: true})
          return;
        }
        const token = response.data.token;

        localStorage.setItem('token', token);
        this.props.history.push('/notes/');
      });
  };

  onSwitchAuth = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      loginIn: !prevState.loginIn
    }))
  };

  render() {
    if (localStorage.getItem('token') == null) {
      this.props.history.push('/notes/');
    }

    let title = 'Logueate';
    let otherAuth = 'Registro';
    if (!this.state.loginIn) {
      title = 'Registrate';
      otherAuth = 'Logueo';
    }

  return (
      <div>
        <Header>{title}</Header>
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
            <Button type="Success" onClick={this.onMainHandler}>{title}</Button>
            <Button type="Danger" onClick={this.onSwitchAuth}>Cambia a {otherAuth}</Button>
          </ul>
        </form>
      </div>
    );
  }
}

export default withRouter(Auth);
