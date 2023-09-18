import './style.css'
import './nav.css'

document.querySelector('#app').innerHTML = `
<div>

  <nav>
    <div class="nav-logo">
      <h1>UMEPIZZA</h1>
    </div>
    <ul class="nav-list">
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
    <div>

    </div>

    <div class="menu-container">

    </div>

    <div class="contact-container">

    </div>
  </main>
  <footer>

  </footer>
</div>
`

setupCounter(document.querySelector('#counter'))