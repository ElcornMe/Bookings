import './assets/css/style.css';

import { Link } from 'react-router-dom';
import iceland from './assets/images/iceland.jpg';
import heart from './assets/images/heart.svg';
import briefcase from './assets/images/briefcase.svg';
import user from './assets/images/user.svg';

function Home() {
  return (
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
      <main>
        <h1 class="visually-hidden">Travel App</h1>
        <section class="trips-filter">
          <h2 class="visually-hidden">Trips filter</h2>
          <form class="trips-filter__form" autocomplete="off">
            <label class="trips-filter__search input">
              <span class="visually-hidden">Search by name</span>
              <input name="search" type="search" placeholder="search by title" />
            </label>
            <label class="select">
              <span class="visually-hidden">Search by duration</span>
              <select name="duration">
                <option value="">duration</option>
                <option value="0_x_5">&lt; 5 days</option>
                <option value="5_x_10">&lt; 10 days</option>
                <option value="10_x">&ge; 10 days</option>
              </select>
            </label>
            <label class="select">
              <span class="visually-hidden">Search by level</span>
              <select name="level">
                <option value="">level</option>
                <option value="easy">easy</option>
                <option value="moderate">moderate</option>
                <option value="difficult">difficult</option>
              </select>
            </label>
          </form>
        </section>
        <section class="trips">
          <h2 class="visually-hidden">Trips List</h2>
          <ul class="trip-list">
            <li class="trip-card">
              <img src={iceland} alt="trip image" />
              <div class="trip-card__content">
                <div class="trip-info">
                  <h3 class="trip-info__title">Island</h3>
                  <div class="trip-info__content">
                    <span class="trip-info__duration"><strong>15</strong> days</span>
                    <span class="trip-info__level">easy</span>
                  </div>
                </div>
                <div class="trip-price">
                  <span>Price</span>
                  <strong class="trip-price__value">7000 $</strong>
                </div>
              </div>
              <Link to='/trip' class="button">Discover a trip</Link>
            </li>
            <li class="trip-card">
              <img src={iceland} alt="trip image" />
              <div class="trip-card__content">
                <div class="trip-info">
                  <h3 class="trip-info__title">Island</h3>
                  <div class="trip-info__content">
                    <span class="trip-info__duration"><strong>15</strong> days</span>
                    <span class="trip-info__level">easy</span>
                  </div>
                </div>
                <div class="trip-price">
                  <span>Price</span>
                  <strong class="trip-price__value">7000 $</strong>
                </div>
              </div>
              <Link to='/trip' class="button">Discover a trip</Link>
            </li>
            <li class="trip-card">
              <img src={iceland} alt="trip image" />
              <div class="trip-card__content">
                <div class="trip-info">
                  <h3 class="trip-info__title">Island</h3>
                  <div class="trip-info__content">
                    <span class="trip-info__duration"><strong>15</strong> days</span>
                    <span class="trip-info__level">easy</span>
                  </div>
                </div>
                <div class="trip-price">
                  <span>Price</span>
                  <strong class="trip-price__value">7000 $</strong>
                </div>
              </div>
              <Link to='/trip' class="button">Discover a trip</Link>
            </li>
            <li class="trip-card">
              <img src={iceland} alt="trip image" />
              <div class="trip-card__content">
                <div class="trip-info">
                  <h3 class="trip-info__title">Island</h3>
                  <div class="trip-info__content">
                    <span class="trip-info__duration"><strong>15</strong> days</span>
                    <span class="trip-info__level">easy</span>
                  </div>
                </div>
                <div class="trip-price">
                  <span>Price</span>
                  <strong class="trip-price__value">7000 $</strong>
                </div>
              </div>
              <Link to='/trip' class="button">Discover a trip</Link>
            </li>
          </ul>
        </section>
      </main>
      <footer class="footer">
        <span class="footer__text">
          from <a class="footer__link" href="https://binary-studio.com">binary studio</a> with
          <img class="footer__icon" src={heart} alt="heart icon" />
        </span>
      </footer>
  </div>
  );
}


export default Home;
