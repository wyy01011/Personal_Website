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

<section id="about" className="sectionAbout">
    <h2 style={{backgroundColor: "lightblue"}}>About Me</h2>
</section>

<section id="project" className="section project">
    <h2>Projects</h2>
    <div className="portfolio-item">
        <h3>Project 1</h3>
        <img src="project1-image.jpg" alt="Project 1"></img>
        <p>Description of Project 1 goes here. Include technologies used and link to the project if available.</p>
    </div>
    <div className="portfolio-item">
        <h3>Project 2</h3>
        <img src="project2-image.jpg" alt="Project 2"></img>
        <p>Description of Project 2 goes here. Include technologies used and link to the project if available.</p>
    </div>
</section>

<section id="blog" className="section blog">
    <h2>Blog</h2>
    <p>This section will feature some of my latest thoughts and posts. Stay tuned!</p>
</section>

<section id="contact" className="section contact">
    <h2>Contact</h2>
    <p>Feel free to get in touch with me through email or social media!</p>
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