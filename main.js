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
<<<<<<< HEAD
    <div class="top-container">
      <h1>Smack av Ume!</h1>
      <h2>Måndag-Tordag: 11-20 | Fredag-Söndag: 12-02 </h2>
      <h3>099-09-pizza</h3>
    </div>

    <div class="menu-container">
      <ul class="menu">
        <li class="pizza"> 
          <ul class="ingredients">      
            <li></li> 
          </ul>
        </li>

        <li class="pizza"> 
          1. Margerita  90.00:-
          <ul class="ingredients">      
            <li>tomat</li> 
            <li>ost</li>
          </ul>
        </li>

        <li class="pizza"> 
          2. Champinjonpizza  90.00:-
          <ul class="ingredients">      
            <li>tomat</li>
            <li>ost</li>
            <li>champinjoner</li> 
          </ul>
        </li>

        <li class="pizza"> 
          3. Vesuvio  90.00:-
          <ul class="ingredients">      
            <li>tomat</li> 
            <li>ost</li> 
            <li>skinka</li> 
          </ul>
        </li>

        <li class="pizza"> 
          4. Räkpizza 90.00:-
          <ul class="ingredients">      
            <li>tomat</li> 
            <li>ost</li> 
            <li>räkor</li> 
          </ul>
        </li>

        
        <li class="pizza"> 
          5. Pescatore  95.00:-  
          <ul class="ingredients">      
            <li>tomat</li> 
            <li>ost</li> 
            <li>tonfisk</li> 
            <li>lök</li> 
          </ul>
        </li>
        
        <li class="pizza"> 
          6. Hawaii 95.00:-
          <ul class="ingredients">      
            <li>tomat</li> 
            <li>ost</li>
            <li>skinka</li> 
            <li>ananas</li>  
          </ul>
        </li>

        <li class="pizza"> 
          7. Capricciosa  95.00:-
          <ul class="ingredients">      
            <li>tomat</li> 
            <li>ost</li>
            <li>skinka</li> 
            <li>champinjoner</li> 
          </ul>
        </li>
          
        <li class="pizza"> 
          8. Bussola  95.00:-
          <ul class="ingredients">      
            <li>tomat</li> 
            <li>ost</li>
            <li>skinka</li> 
            <li>räkor</li> 
          </ul>
        </li>
          
        <li class="pizza"> 
          9. Opera  95.00:-
          <ul class="ingredients">      
            <li>tomat</li>
            <li>ost</li>
            <li>champinjoner</li>
            <li>räkor</li> 
          </ul>
        </li>
        
        <li class="pizza"> 
          10. Milano  100.00:-
          <ul class="ingredients">      
            <li>tomat</li>
            <li>ost</li>
            <li>champinjoner</li>
            <li>köttfärs</li>
            <li>vitlök</li> 
          </ul>
        </li>
        
        <li class="pizza"> 
          11. Napoletana  100.00:-
          <ul class="ingredients">      
            <li>tomat</li>
            <li>ost</li>
            <li>sardeller</li>
            <li>oliver</li>
            <li>paprika</li> 
          </ul>
        </li>
        
        <li class="pizza"> 
          12. Oriental  100.00:-
          <ul class="ingredients">      
            <li>tomat</li>
            <li>ost</li>
            <li>ananas</li>
            <li>lök</li>
            <li>champinjoner</li>
            <li>feferoni</li> 
          </ul>
        </li>

        <li class="pizza"> 
          13. Vegetarisk pizza  105.00:-
          <ul class="ingredients">      
            <li>tomat</li>
            <li>ost</li>
            <li>paprika</li>
            <li>champinjoner</li>
            <li>lök</li>
            <li>oliver</li>
            <li>färska tomater</li>
            <li>kronärtskocka</li> 
          </ul>
        </li> 
        
        <li class="pizza"> 
          14. Salamipizza 100.00:-
          <ul class="ingredients">      
            <li>tomat</li>
            <li>ost</li>
            <li>salami</li>
            <li>oliver</li>
            <li>feferoni</li> 
          </ul>
        </li>

        <li class="pizza"> 
          15. Boscaiola 100.00:-
          <ul class="ingredients">      
            <li>tomat</li>
            <li>ost</li>
            <li>salami</li>
            <li>vitlök</li> 
            <li>paprika</li>
          </ul>
        </li>

        <li class="pizza"> 
          16. Sofia pizza 100.00:-
          <ul class="ingredients">      
            <li>tomat</li>
            <li>ost</li>
            <li>bacon</li>
            <li>ägg</li>
            <li>lök</li> 
          </ul>
        </li>

        <li class="pizza"> 
          17. Roma  100.00:-
          <ul class="ingredients">      
            <li>tomat</li>
            <li>ost</li>
            <li>skinka</li>
            <li>tonfisk</li>
            <li>lök</li> 
          </ul>
        </li>
        
        <li class="pizza"> 
          18. Mexikansk pizza 100.00:-
          <ul class="ingredients">      
            <li>tomat</li>
            <li>ost</li>
            <li>köttfärs</li>
            <li>lök</li>
            <li>feferoni</li> 
          </ul>
        </li>
        
        <li class="pizza"> 
          19. Marinara  100.00:-
          <ul class="ingredients">      
            <li>tomat</li>
            <li>ost</li>
            <li>räkor</li> 
            <li>musslor</li> 
            <li>tonfisk</li> 
          </ul>
        </li>

        <li class="pizza"> 
          20. Alfredo 100.00:-
          <ul class="ingredients">      
            <li>tomat</li>
            <li>ost</li>
            <li>skinka</li>
            <li>champinjoner</li>
            <li>räkor</li>
            <li>ananas</li> 
          </ul>
        </li>
        
        <li class="pizza"> 
          21. Pepperonipizza  100.00:-
          <ul class="ingredients">      
            <li>tomat</li>
            <li>ost</li>
            <li>pepperonikorv</li>
            <li>stark mangosås</li> 
          </ul>
        </li>

        <li class="pizza"> 
          22. Quattro stagioni  105.00:-
          <ul class="ingredients">      
            <li>tomat</li>
            <li>ost</li>
            <li>skinka</li>
            <li>champinjoner</li>
            <li>räkor</li> 
            <li>musslor</li>
            <li>kronärtskocka</li>
          </ul>
        </li>
        
        <li class="pizza"> 
          23. Quattro formaggi  105.00:-
          <ul class="ingredients">      
            <li>tomat</li>
            <li>fetaost</li>
            <li>gorgonzola</li>
            <li>chevré</li>
            <li>ridderost</li>
            <li>toppad med ruccola</li> 
          </ul>
        </li>
        
        <li class="pizza"> 
          24. Mama mia  105.00:-
          <ul class="ingredients">      
            <li>tomat</li>
            <li>ost</li>
            <li>skinka</li>
            <li>champinjoner</li>
            <li>räkor</li> 
            <li>paprika</li>
            <li>oliver</li>
            <li>lök</li>
          </ul>
        </li>

        <li class="pizza"> 
          25. Hawaii special  105.00:-
          <ul class="ingredients">      
            <li>tomat</li>
            <li>ost</li>
            <li>skinka</li>
            <li>banan</li>
            <li>ananas</li>
            <li>curry</li> 
          </ul>
        </li>
        
        <li class="pizza"> 
          26. Umepizza special  105.00:-
          <ul class="ingredients">      
            <li>tomat</li>
            <li>ost</li>
            <li>köttfärs</li>
            <li>lök</li>
            <li>ägg</li>
            <li>paprika</li> 
          </ul>
        </li>
        
        <li class="pizza"> 
          27. Grabbarnas special  105.00:-
          <ul class="ingredients">      
            <li>tomat</li>
            <li>ost</li>
            <li>salami</li> 
            <li>champinjoner</li>
            <li>räkor</li>
          </ul>
        </li>
        
        <li class="pizza"> 
          28. Mexikansk special 105.00:-
          <ul class="ingredients">      
            <li>tomat</li>
            <li>ost</li>
            <li>köttfärs</li>
            <li>lök</li>
            <li>färsk tomat</li>
            <li>stark mangosås</li> 
          </ul>
        </li>
      </ul>
    </div>
    <div class="contact-container"></div>
=======
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
>>>>>>> 692546f047b8ecc2a3f47d9f8461537c14b1bf9f
  </main>
  <footer>

  </footer>
</div>
`