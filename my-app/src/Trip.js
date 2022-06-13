import './assets/css/style.css';
import { Link } from 'react-router-dom';
import heart from './assets/images/heart.svg';
import briefcase from './assets/images/briefcase.svg';
import user from './assets/images/user.svg';
import iceland from './assets/images/iceland.jpg';

function Trip() {
    return(
<div>
    <header class="header">
      <div class="header__inner">
      <Link to='/' class="header__logo">Travel App</Link>
        <nav class="header__nav">
          <ul class="nav-header__list">
            <li class="nav-header__item" title="Bookings">
                <Link to='/bookings' class="nav-header__inner">
                  <span class="visually-hidden">Bookings</span>
                  <img src={briefcase} alt=" icon" />
                </Link>
            </li>
            <li class="nav-header__item" title="Profile">
              <div class="nav-header__inner profile-nav" tabindex="0">
                <span class="visually-hidden">Profile</span>
                <img src={user} alt="profile icon" />
                <ul class="profile-nav__list">
                  <li class="profile-nav__item profile-nav__username">John Doe</li>
                  <li class="profile-nav__item">
                  <Link to='/signIn' class="profile-nav__sign-out button">Sign Out</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="trip-page">
      <h1 class="visually-hidden">Travel App</h1>
      <div class="trip">
        <img src={iceland} class="trip__img" alt="trip image" />
        <div class="trip__content">
          <div class="trip-info">
            <h3 class="trip-info__title">Iceland</h3>
            <div class="trip-info__content">
              <span class="trip-info__duration"><strong>15</strong> days</span>
              <span class="trip-info__level">easy</span>
            </div>
          </div>
          <div class="trip__description">
            An island is a body of land surrounded by water. Continents are also surrounded by
            water, but because they are so big, they are not considered islands. Australia, the
            smallest continent, is more than three times the size of Greenland, the largest island.
            There are countless islands in the ocean, lakes, and rivers around the world. They vary
            greatly in size, climate, and the kinds of organisms that inhabit them.
          </div>
          <div class="trip-price">
            <span>Price</span>
            <strong class="trip-price__value">7000 $</strong>
          </div>
          <button class="trip__button button">Book a trip</button>
        </div>
      </div>
    </main>
    <footer class="footer">
      <span class="footer__text">
        from <a class="footer__link" href="https://binary-studio.com">binary studio</a> with
        <img class="footer__icon" src={heart} alt="heart icon" />
      </span>
    </footer>
    <div hidden>
      <div class="modal">
        <div class="trip-popup">
          <button class="trip-popup__close">×</button>
          <form class="trip-popup__form" autocomplete="off">
            <div class="trip-info">
              <h3 class="trip-info__title">Iceland</h3>
              <div class="trip-info__content">
                <span class="trip-info__duration"><strong>15</strong> days</span>
                <span class="trip-info__level">easy</span>
              </div>
            </div>
            <label class="trip-popup__input input">
              <span class="input__heading">Date</span>
              <input name="date" type="date" required />
            </label>
            <label class="trip-popup__input input">
              <span class="input__heading">Number of guests</span>
              <input name="guests" type="number" min="1" max="10" value="1" required />
            </label>
            <span class="trip-popup__total">
              Total: <output class="trip-popup__total-value">4000$</output>
            </span>
            <button class="button" type="submit">Book a trip</button>
          </form>
        </div>
      </div>
    </div>
</div>
    )
}

export default Trip;