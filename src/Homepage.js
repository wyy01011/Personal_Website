import WordChanger from './WordChanger';
import Footer from './Footer';
import MouseFollower from './MouseFollower';
import PixelCat from './PixelCat'

function Homepage() {
  return (
    <div >

        <MouseFollower/>

        <div className='topLeft'>
            <a href="/"><img src={`${process.env.PUBLIC_URL}/images/icon.png`} alt='Website Icon' className='websiteIcon' /></a>
            <a href="/" className='nameTopLeft'>Valarie Wong</a>
            <PixelCat/>
        </div>

        <div className = 'header'>
            <div class='titleLine'>
                <header><h1>Valarie Wong</h1></header>
            </div>

            <div class='titleLine'>
                <nav>
                    <ul>
                        <li><a href="/About">About</a></li>
                        <li><a href="/Projects">Projects</a></li>
                        <li><a href="https://shorturl.at/Axm39" target="_blank">Resume</a></li>
                    </ul>
                </nav>

            </div>

        </div>


        <div className = 'bigImgAndWordChangeContainer'>
            <div className = 'imgAndWordChangeContainer'>

                <div class = "homepageMePicResumeContainer">
                    <img src="/images/Homepage_me.jpg" alt="Picture of me" class="imageMe"></img>

                    <div class = "middle">
                        <a href="https://shorturl.at/Axm39" target="_blank"><div class="resume">Click for my resume</div></a>
                    </div>
                </div>

            </div>

            <div className='iAmWord'>
                    <h2 style={{ fontSize: '70px', width: '5000px', display: 'inline' }}><span style={{fontSize:'40px', marginBottom:'20px'}}>Hello World! </span><br/> I am <span class="wordChange"><WordChanger /></span> </h2>
            </div>
        </div>

        <section className="sectionSkilledAt"><h2><span style={{color: "#E3242B"}}>Skilled</span> At...</h2></section>

        <div className = 'skills'>
            <img src={`${process.env.PUBLIC_URL}/images/python.png`} alt="Python" />
            <img src={`${process.env.PUBLIC_URL}/images/java.png`} alt="Java" />
            <img src={`${process.env.PUBLIC_URL}/images/C++.png`} alt="C++" />
            <img src={`${process.env.PUBLIC_URL}/images/html.png`} alt="HTML" />
            <img src={`${process.env.PUBLIC_URL}/images/css.png`} alt="CSS" />
            <img src={`${process.env.PUBLIC_URL}/images/js.png`} alt="JavaScript" />
            <img src={`${process.env.PUBLIC_URL}/images/R.png`} alt="R" />
            <img src={`${process.env.PUBLIC_URL}/images/Go.png`} alt="Go" />
            <img src={`${process.env.PUBLIC_URL}/images/react.png`} alt="React" />
            <img src={`${process.env.PUBLIC_URL}/images/sql.png`} alt="SQL" />
            <img src={`${process.env.PUBLIC_URL}/images/pytorch.png`} alt="PyTorch" />
            <img src={`${process.env.PUBLIC_URL}/images/ai.png`} alt="AI" />
            <img src={`${process.env.PUBLIC_URL}/images/wp.png`} alt="WordPress" />
            <img src={`${process.env.PUBLIC_URL}/images/shopify.png`} alt="Shopify" />
            <img src={`${process.env.PUBLIC_URL}/images/blender.png`} alt="Blender" />
            <img src={`${process.env.PUBLIC_URL}/images/canva.png`} alt="Canva" />
            <img src={`${process.env.PUBLIC_URL}/images/adobe.png`} alt="Adobe Suite" />
            <img src={`${process.env.PUBLIC_URL}/images/microsoft.png`} alt="Microsoft Suite" />

        </div>

        <section className="sectionWork"><h2>From <span style={{color: "#E3242B"}}>Working</span> With...</h2></section>

        <div className = 'work'>
            <img src="/images/hodlnaut.png" alt="Hodlnaut" />
            <img src="/images/toyeast.png" alt="Toyeast" />
            <img src="/images/uottawa.png" alt="UOttawa" />
            <img src="/images/hth.png" alt="Hack the Hill" />
            
            <img src="/images/prime.png" alt="Prime Concepts Limited" width={250} />
            <img src="/images/kumon.png" alt="Kumon" width={400} />
            <img src="/images/lukadvisor.png" alt="LukAdvisor" width={250} />
            
        </div>

        <Footer/>

    </div>    
    
  );
}

export default Homepage;