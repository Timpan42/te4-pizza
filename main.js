import './style.css'
import './nav.css'
import Pizzamenu from './pizzamenu'

document.querySelector('#app').innerHTML = `
<div>
  <nav>

    <div class="navbar">
      <div class="nav-logo">
        <h1>UMEPIZZA</h1>
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
      <h1>Smack av Ume!</h1>
      <h2>Måndag-Tordag: 11-20 | Fredag-Söndag: 12-02 </h2>
      <h3>099-09-pizza</h3>
    </div>

    <div class="menu-container">
    ${Pizzamenu}
    </div>

    <div class="contact-container">
      <div class="contact-text">
        <h1>Kontakt information</h1>
        <p>fake address 17, Umeå</p>
        <p>099-09-pizza</p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7257.341272498429!2d20.208207204164115!3d63.79257890240078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c5be90eceb9fd%3A0x26411d9c0060d007!2zU8O2ZHJhIFLDtmLDpGNrc3bDpGdlbiAzOCwgOTA0IDQwIFLDtmLDpGNr!5e1!3m2!1ssv!2sse!4v1695105122976!5m2!1ssv!2sse"
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
  </main>
  <footer>

  </footer>
</div>
`