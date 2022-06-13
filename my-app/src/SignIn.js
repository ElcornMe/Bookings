import './assets/css/style.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import heart from './assets/images/heart.svg';




function SingIn () {
    return (
        <div>

    <header class="header">
      <div class="header__inner">
        <Link to='/' class="header__logo">Travel App</Link>
      </div>
    </header>
    <main class="sign-in-page">
      <h1 class="visually-hidden">Travel App</h1>
      <form class="sign-in-form" autocomplete="off">
        <h2 class="sign-in-form__title">Sign In</h2>
        <label class="trip-popup__input input">
          <span class="input__heading">Email</span>
          <input name="email" type="email" required />
        </label>
        <label class="trip-popup__input input">
          <span class="input__heading">Password</span>
          <input name="password" type="password" autocomplete="new-password" required />
        </label>
        <button class="button" type="submit">Sign In</button>
      </form>
      <span>
        Already have an account?
        <Link to='/signUp' class="sign-in-form__link">Sign Up</Link>
      </span>
    </main>
    <footer class="footer">
      <span class="footer__text">
        from <a class="footer__link" href="https://binary-studio.com">binary studio</a> with
        <img class="footer__icon" src={heart} alt="heart icon" />
      </span>
    </footer>
    
    </div>

    )
}

export default SingIn;