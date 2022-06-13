import './assets/css/style.css';
import { Link } from 'react-router-dom';
import heart from './assets/images/heart.svg';
import briefcase from './assets/images/briefcase.svg';
import user from './assets/images/user.svg';


function Bookings() {
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
    <main class="bookings-page">
      <h1 class="visually-hidden">Travel App</h1>
      <ul class="bookings__list">
        <li class="booking">
          <h3 class="booking__title">Iceland</h3>
          <span class="booking__guests">2 guests</span>
          <span class="booking__date">13.07.2022</span>
          <span class="booking__total">14000 $</span>
          <button class="booking__cancel" title="Cancel booking">
            <span class="visually-hidden">Cancel booking</span>
            ×
          </button>
        </li>
        <li class="booking">
          <h3 class="booking__title">Iceland</h3>
          <span class="booking__guests">2 guests</span>
          <span class="booking__date">30.09.2022</span>
          <span class="booking__total">14000 $</span>
          <button class="booking__cancel" title="Cancel booking">
            <span class="visually-hidden">Cancel booking</span>
            ×
          </button>
        </li>
        <li class="booking">
          <h3 class="booking__title">Iceland</h3>
          <span class="booking__guests">2 guests</span>
          <span class="booking__date">10.11.2022</span>
          <span class="booking__total">14000 $</span>
          <button class="booking__cancel" title="Cancel booking">
            <span class="visually-hidden">Cancel booking</span>
            ×
          </button>
        </li>
      </ul>
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

export default Bookings;