import './css/style.css'
import './css/nav.css'
import './css/pizzamenu.css'
import Pizzamenu1to14 from './pizzamenu1to14'
import Pizzamenu15to27 from './pizzamenu15to27'

document.querySelector('#app').innerHTML = `
<div></div>
<div>
  <nav>
    <div class="navbar">
      <div class="nav-logo">
        <a>UMEPIZZA</a>
      </div>
      <button class="nav-menu">Menu</button>
    </div>

    <ul class="nav-list collapse">
      <li class="nav-item">
        <a href="">Meny</a>
      </li>

      <li class="nav-item">
        <a href="">Kontakt</a>
      </li>

      <li class="nav-item">
        <a href="">Om Oss</a>

      </li>
    </ul>
  </nav>

  <main>
    <div class="top-container">
      <div class="background"></div>
      <h1>Smak av Ume!</h1>
      <h2>Måndag-Tordag: 11-20 | Fredag-Söndag: 12-02 </h2>
      <h3>099-09-pizza</h3>
    </div>

    <div class="menu-container">
      <div class="1-14">
      ${Pizzamenu1to14}
      </div>
      <div class="15-28">
      ${Pizzamenu15to27}
      </div>
    </div>
  </main>

  <footer class="contact-container">
    <div class="contact-flex">
      <div class="contact-text">
        <h1>Kontakt information</h1>
        <p>Flygplatsvägen 21, Umeå</p>
        <p>099-09-pizza</p>
        <p>Photo by <a
            href="https://unsplash.com/@iavnt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ivan
            Torres</a> on <a
            href="https://unsplash.com/photos/MQUqbmszGGM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d762.7579002252395!2d20.286757370889152!3d63.795397583873374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ssv!2sse!4v1695105498490!5m2!1ssv!2sse"
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </footer>
</div>
`