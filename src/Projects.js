function Projects() {
    return (
  
    <div>
  
        <div className = 'header'>
            <div class='titleLine'>
                <header><h1>Projects </h1></header>
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

        

        <div className = "oddQueen">
            <img src="/images/queen.png" alt="Odd Queen Logo" className="queenImg"></img>

            <div className='queenDes'>
                <h2 className="queenTitle">Where's the Queen?</h2>
                <p>This program allows you to play the classic card game Old Maid without the hassle of a deck of cards or the 
                    need for an Internet connection. The game is played using the Python console, where the user can read the 
                    events that are happening in the game and pick one of the opponent's cards when it is their turn. </p>

                <a href="https://devpost.com/software/where-s-the-queen" class = "button">Learn More!</a>
            </div>
            
        </div>

        
  
  
        

    </div>
      
    );
  }
  
  export default Projects;