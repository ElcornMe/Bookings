import './assets/css/style.css';
import { Link } from 'react-router-dom';
import heart from './assets/images/heart.svg';


function SingUp () {
    return (
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Assistan+Display:wght@400;600&family=Playfair+Display:wght@400;600&display=swap"
    />
    <link rel="stylesheet" href="./assets/css/style.css" />
    <title>Travel app</title>
  </head>
  <body>
    <header class="header">
      <div class="header__inner">
        <Link to='/' class="header__logo">Travel App</Link>
      </div>
    </header>
    <main class="sign-up-page">
      <h1 class="visually-hidden">Travel App</h1>
      <form class="sign-up-form" autocomplete="off">
        <h2 class="sign-up-form__title">Sign Up</h2>
        <label class="trip-popup__input input">
          <span class="input__heading">Full name</span>
          <input name="full-name" type="text" required />
        </label>
        <label class="trip-popup__input input">
          <span class="input__heading">Email</span>
          <input name="email" type="email" required />
        </label>
        <label class="trip-popup__input input">
          <span class="input__heading">Password</span>
          <input name="password" type="password" autocomplete="new-password" required />
        </label>
        
        <button class="button" type="submit">Sign Up</button>
      </form>
      <span>
        Already have an account?
        <Link to='/signIn' class="sign-up-form__link">Sign in</Link>
      </span>
    </main>
    <footer class="footer">
      <span class="footer__text">
        from <a class="footer__link" href="https://binary-studio.com">binary studio</a> with
        <img class="footer__icon" src={heart} alt="heart icon" />
      </span>
    </footer>
  </body>
</html>
    )
}

export default SingUp;