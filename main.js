import './style.css'

document.querySelector('#app').innerHTML = `
<div>
  <nav>
    <div class='logo'>

    </div>
    <ul>
      <li>Meny</li>
      <li>Om oss</li>
      <li>Kontakta oss</li>
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