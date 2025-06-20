import MouseFollower from './MouseFollower';
import Footer from './Footer';
import './Projects.css';

function Projects() {
    document.body.className = 'projects';

    return (
  
    <div>

        <MouseFollower/>

        <div className='topLeft'>
            <a href="#/"><img src={`${process.env.PUBLIC_URL}/images/icon.png`} alt="Website Icon" className="websiteIcon"/></a>
            <a href="#/" className='nameTopLeft'>Valarie Wong</a>
        </div>
  
        <div className = 'header'>
            <div className='titleLine'>
                <header><h1>Past <span style={{color: "#E3242B"}}>Projects</span></h1></header>
            </div>

            <div className='titleLine'>
            <nav>
                <ul>
                    <li><a href="#/">Home</a></li>
                    <li><a href="#/About">About</a></li>
                    <li><a href="https://drive.google.com/file/d/1_KMwGjWEeKP7sVC6FxLce6zEZbFOD5pC/view?usp=drive_link" target="_blank">Resume</a></li>
                </ul>
            </nav>
        </div>
        </div>


        <div className = 'subheader'>
            <p>Click to view all the details of projects I have worked on so far!</p>
        </div>

        <div className = "numeria">
            <img src={`${process.env.PUBLIC_URL}/images/numeria.png`} alt="numeria thumbnail" className="numeriaImg"/>

            <div className='numeriaDes'>
                <h2 className="numeriaTitle">Numeria &nbsp;&nbsp; <span style={{fontSize:"15px", fontWeight: 'bold', color: "#E3242B"}}>AI (DeepSeek API), Python, UI/X, TypeScript, CSS, React, JS</span></h2>
                <p>Numeria is a maths game for children aged 5-12, aiming to address early learning gaps and cognitive development. 
                    Players will get tailored generated questions according to their grade, country of residence and school curriculum. 
                    AI generated explanations will also be provided when users get a question wrong. This game follows a storyline, where 
                    players get to choose an animal to act as and explore different islands (with each island as a math subject with
                     practice questions). This is our team's submission for Ellehacks 9!</p>

                <a href="https://github.com/wyy01011/Numeria" target="_blank" class = "button">Learn More!</a>
            </div>
            
        </div>

        <div className = "uniSwap">
            <img src={`${process.env.PUBLIC_URL}/images/uniSwap.png`} alt="uniSwap thumbnail" className="uniSwapImg"/>

            <div className='uniSwapDes'>
                <h2 className="uniSwapTitle">uniSwap &nbsp;&nbsp; <span style={{fontSize:"15px", fontWeight: 'bold', color: "#E3242B"}}>Gadget, UI/X, HTML, CSS, React, JS</span></h2>
                <p>This app is a peer-to-peer shop platform for uOttawa students to buy, sell, or rent items, featuring user ratings and reviews to ensure trust and a secure 
                    marketplace experience. It addresses several real-world problems faced by university students, including affordability, sustainability 
                    and community building. This is our team's submission for uOttaHack 7 and I took care most of the UI/X portion!</p>

                <a href="https://www.linkedin.com/posts/yi-yau-wong_uottahack7-uottahack-hackathon-activity-7287107518739144705-RVC-?utm_source=share&utm_medium=member_desktop&rcm=ACoAADUiTHAByWegJpmWETRo5Lw2ChwQzH_OXak" target="_blank" class = "button">Learn More!</a>
            </div>
            
        </div>

        <div className = "opti">
            <img src={`${process.env.PUBLIC_URL}/images/optiflow.png`} alt="OptiflowAI thumbnail" className="optiImg"/>

            <div className='optiDes'>
                <h2 className="optiTitle">Optiflow AI &nbsp;&nbsp; <span style={{fontSize:"15px", fontWeight: 'bold', color: "#E3242B"}}>AI, Canva</span></h2>
                <p>Optiflow AI is a pitch idea me and my team had for Discover TechNATA Hacks. This AI model adjusts lighting and HVAC according to 
                    room occupancy. It also uses past data to predict when people will use the room. It also connects to the 
                    building's window shades and calendar to further reduce energy consumption and enhancing users' experience.  </p>

                <a href="https://drive.google.com/file/d/1gRRwZJlZ9FgIf7vvAaOPTb6OjnnSagTc/view?usp=drive_link" target="_blank" class = "button">Learn More!</a>
            </div>
            
        </div>

        <div className = "RtR">
            <img src={`${process.env.PUBLIC_URL}/images/RtR.png`}  alt="Road to Revival" className="rtrImg"/>

            <div className='rtrDes'>
                <h2 className="rtrTitle">Road to Revival &nbsp;&nbsp; <span style={{fontSize:"15px", fontWeight: 'bold', color: "#E3242B"}}>3D Printing, Laser Cutting</span></h2>
                <p> This project won <span style={{fontWeight: 'bold'}}>1st place</span> in Hack the Hill! Welcome to Road to Revival where players can have fun while also learning about ecological crises. 
                    We face challenges such as climate change, loss of biodiversity, pollution and many others every day. 
                    Therefore, it is important to raise awareness and encourage people to make a change and a positive impact.</p>

                <a href="https://devpost.com/software/road-to-revival" target="_blank" class = "button">Learn More!</a>
            </div>
            
        </div>


        <div className = "oddQueen">
            <img src={`${process.env.PUBLIC_URL}/images/queen.png`}  alt="Odd Queen Logo" className="queenImg"/>

            <div className='queenDes'>
                <h2 className="queenTitle">Where's the Queen? &nbsp;&nbsp; <span style={{fontSize:"15px", fontWeight: 'bold', color: "#E3242B"}}>Python</span></h2>
                <p>This program allows you to play the classic card game Old Maid without the hassle of a deck of cards or the 
                    need for an Internet connection. The game is played using the Python console, where the user can read the 
                    events that are happening in the game and pick one of the opponent's cards when it is their turn. </p>

                <a href="https://devpost.com/software/where-s-the-queen" target="_blank" class = "button">Learn More!</a>
            </div>
            
        </div>

        <div className = "val">
            <img src={`${process.env.PUBLIC_URL}/images/val_website.png`} alt="Personal Website thumbnail" className="valImg"/>

            <div className='valDes'>
                <h2 className="valTitle">Personal Website &nbsp;&nbsp; <span style={{fontSize:"15px", fontWeight: 'bold', color: "#E3242B"}}>React, HTML, CSS, Git</span></h2> 
                <p>It is the website that you are currently on. This is my <span style={{fontWeight: 'bold'}}>first</span> ever website built using React!
                    Feel free to keep browsing or contact me for any questions. Scroll to the footer 
                    for my contact info or click the button below to find me on LinkedIn.
                </p>

                <a href="https://www.linkedin.com/in/yi-yau-wong/" target="_blank" className = "button">My LinkedIn!</a>
            </div>
            
        </div>
  
        <Footer/>
  
    </div>
      
    );
  }
  
  export default Projects;