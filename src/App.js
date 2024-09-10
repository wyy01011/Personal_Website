import WordChanger from './WordChanger';

function App() {
  return (
      <div>

<div className = 'header'>
<div class='titleLine'>
        <header>
    <h1>Valarie Wong </h1>
</header>
</div>

<div class='titleLine'>
<nav>
    <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>

</div>

</div>

<div className = 'imgAndWordChangeContainer'>
<div class = "imgAndWordChange">
<img src="/images/Homepage_me.jpg" alt="Picture of me"></img>
</div>

<div class = "imgAndWordChange">
<WordChanger />

</div>
</div>

<section id="about" className="sectionSkilledAt">
    <h2>Skilled At...</h2>
</section>

<div className = 'skills'>
<img src="/images/python.png" alt="Python"></img>
<img src="/images/java.png" alt="Java"></img>
<img src="/images/C++.png" alt="C++"></img>
<img src="/images/HTML.png" alt="HTML"></img>

<img src="/images/CSS.png" alt="CSS"></img>
<img src="/images/JS.png" alt="JS"></img>

<img src="/images/R.png" alt="R"></img>
<img src="/images/Go.png" alt="Go"></img>
<img src="/images/react.png" alt="React"></img>
<img src="/images/sql.png" alt="SQL"></img>
<img src="/images/pytorch.png" alt="Pytorch"></img>
<img src="/images/AI.png" alt="AI"></img>
<img src="/images/WP.png" alt="WordPress"></img>
<img src="/images/shopify.png" alt="Shopify"></img>
<img src="/images/blender.png" alt="Blender"></img>
<img src="/images/canva.png" alt="Canva"></img>
<img src="/images/adobe.png" alt="Adobe Suite"></img>
<img src="/images/microsoft.png" alt="Microsoft Suite"></img>
</div>

<footer>
    <p>&copy; 2024 Your Name</p>
    <div className="social-icons">
        <a href="https://github.com/yourprofile">GitHub</a>
        <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
        <a href="mailto:your.email@example.com">Email</a>
    </div>
</footer>
      
      
      </div>

      
    
  );
}

export default App;