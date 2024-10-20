import Footer from './Footer';

function Projects() {
    return (
  
    <div>
  
        <div className = 'header'>
            <div class='titleLine'>
                <header><h1>Past <span style={{color: "#E3242B"}}>Projects</span></h1></header>
            </div>

            <div class='titleLine'>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                </ul>
            </nav>
        </div>
        </div>


        <div className = 'subheader'>
            <p>Click to view all the details of projects I have worked on so far!</p>
        </div>

        <div className = "opti">
            <img src="/images/optiflow.png" alt="OptiflowAI thumbnail" className="optiImg"></img>

            <div className='optiDes'>
                <h2 className="optiTitle">Optiflow AI &nbsp;&nbsp; <span style={{fontSize:"15px", fontWeight: 'bold', color: "#E3242B"}}>AI, Canva</span></h2>
                <p>Optiflow AI is a pitch idea me and my team had for Discover TechNATA Hacks. This AI model adjusts lighting and HVAC according to 
                    room occupancy. It also uses past data to predict when people will use the room. It also connects to the 
                    building's window shades and calendar to further reduce energy consumption and enhancing users' experience.  </p>

                <a href="https://drive.google.com/file/d/1gRRwZJlZ9FgIf7vvAaOPTb6OjnnSagTc/view?usp=drive_link" target="_blank" class = "button">Learn More!</a>
            </div>
            
        </div>

        <div className = "RtR">
            <img src="/images/RtR.png" alt="Road to Revival" className="rtrImg"></img>

            <div className='rtrDes'>
                <h2 className="rtrTitle">Road to Revival &nbsp;&nbsp; <span style={{fontSize:"15px", fontWeight: 'bold', color: "#E3242B"}}>3D Printing, Laser Cutting</span></h2>
                <p>Welcome to Road to Revival where players can have fun while also learning about ecological crises. 
                    We face challenges such as climate change, loss of biodiversity, pollution and many others every day. 
                    Therefore, it is important to raise awareness and encourage people to make a change and a positive impact. 
                    This board game is designed to educate and encourage individuals in an enjoyable and entertaining way. </p>

                <a href="https://devpost.com/software/road-to-revival" target="_blank" class = "button">Learn More!</a>
            </div>
            
        </div>


        <div className = "oddQueen">
            <img src="/images/queen.png" alt="Odd Queen Logo" className="queenImg"></img>

            <div className='queenDes'>
                <h2 className="queenTitle">Where's the Queen? &nbsp;&nbsp; <span style={{fontSize:"15px", fontWeight: 'bold', color: "#E3242B"}}>Python</span></h2>
                <p>This program allows you to play the classic card game Old Maid without the hassle of a deck of cards or the 
                    need for an Internet connection. The game is played using the Python console, where the user can read the 
                    events that are happening in the game and pick one of the opponent's cards when it is their turn. </p>

                <a href="https://devpost.com/software/where-s-the-queen" target="_blank" class = "button">Learn More!</a>
            </div>
            
        </div>

        <div className = "val">
            <img src="/images/val_website.png" alt="Personal Website thumbnail" className="valImg"></img>

            <div className='valDes'>
                <h2 className="valTitle">Personal Website &nbsp;&nbsp; <span style={{fontSize:"15px", fontWeight: 'bold', color: "#E3242B"}}>React, HTML, CSS, Git</span></h2> 
                <p>It is the website that you are currently on. Feel free to keep browsing or contact me for any questions! Scroll to the footer 
                    for my contact info or click the button below to find me on LinkedIn.
                </p>

                <a href="https://www.linkedin.com/in/yi-yau-wong/" target="_blank" class = "button">My LinkedIn!</a>
            </div>
            
        </div>
  
        <Footer/>
  
    </div>
      
    );
  }
  
  export default Projects;