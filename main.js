import './style.css'
import './nav.css'

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
    <div class="top-container"></div>
    <div class="menu-container"></div>
    <div class="contact-container"></div>
  </main>
  <footer>

  </footer>
</div>
`

setupCounter(document.querySelector('#counter'))