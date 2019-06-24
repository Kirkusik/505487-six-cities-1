<div style="display: none">
<svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewbox="0 0 7 4"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewbox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewbox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
</div>

<header class="header">
<div class="container">
  <div class="header__wrapper">
    <div class="header__left">
      <a class="header__logo-link" href="main.html">
        <img class="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41">
      </a>
    </div>
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-item user">
          <a class="header__nav-link header__nav-link--profile" href="#">
            <div class="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span class="header__login">Sign in</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>
</header>

<main class="page__main page__main--login">
<div class="page__login-container container">
  <section class="login">
    <h1 class="login__title">Sign in</h1>
    <form class="login__form form" action="#" method="post">
      <div class="login__input-wrapper form__input-wrapper">
        <label class="visually-hidden">E-mail</label>
        <input class="login__input form__input" type="email" name="email" placeholder="Email" required="">
      </div>
      <div class="login__input-wrapper form__input-wrapper">
        <label class="visually-hidden">Password</label>
        <input class="login__input form__input" type="password" name="password" placeholder="Password" required="">
      </div>
      <button class="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  </section>
  <section class="locations locations--login locations--current">
    <div class="locations__item">
      <a class="locations__item-link" href="#">
        <span>Amsterdam</span>
      </a>
    </div>
  </section>
</div>
</main>