import WordChanger from './WordChanger';

function App() {
  return (
      <div>
        <header>
    <h1>Valarie Wong</h1>
    <p>4th Year Computer Science Student</p>
</header>

<WordChanger />

<nav>
    <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>

<section id="about" className="section about">
    <h2 style={{backgroundColor: "lightblue"}}>About Me</h2>
    <p>Welcome! I'm [Your Name], a [Your Role/Title]. Here's a little bit about my background, experience, and passions.</p>
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