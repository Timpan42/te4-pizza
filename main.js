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
  <main></main>
  <footer></footer>
</div>
`

setupCounter(document.querySelector('#counter'))