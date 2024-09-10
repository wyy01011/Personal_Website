import WordChanger from './WordChanger';

function App() {
  return (
      <div>

<div class = 'header'>
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

<div class = 'imgAndWordChangeContainer'>
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