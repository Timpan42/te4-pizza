import './style.css'

document.querySelector('#app').innerHTML = `
<div>
  <nav>

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