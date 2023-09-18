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
      <h1>hej</h1>
      <h2>då</h2>
      <h3>Svensson</h3>
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