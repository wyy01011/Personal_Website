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

<div class = "homepageMePicResumeContainer">
<a href="https://shorturl.at/Axm39" target="_blank"><img src="/images/Homepage_me.jpg" alt="Picture of me" class="imageMe"></img></a>

<div class = "middle">
<div class="hoverResume">
    <a href="https://shorturl.at/Axm39" target="_blank"><div class="resume">Click for my resume</div></a>
    </div>
</div>
</div>

<div class = "wordChange">
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

<section className="sectionWork">
    <h2>From Working With...</h2>
</section>

<div className = 'work'>
<img src="/images/prime.png" alt="Prime Concepts Limited"></img>
<img src="/images/hodlnaut.png" alt="Hodlnaut"></img>
<img src="/images/toyeast.png" alt="Toyeast"></img>
<img src="/images/uottawa.png" alt="uOttawa"></img>
<img src="/images/kumon.png" alt="Kumon"></img>
<img src="/images/lukadvisor.png" alt="LukAdvisor"></img>
<img src="/images/hth.png" alt="Hack the Hill" />



</div>

<footer>
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