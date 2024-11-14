function Footer() {
    return (
        <div className="Footer">

            <h1 className="title">Feel Free to <span style={{color: "#E3242B"}}>Contact</span> Me!</h1>

            <div className='icons'>
                <a href="mailto:valarie.email@gmail.com" target="_blank"><img src={`${process.env.PUBLIC_URL}/images/gmail.png`} alt="Gmail" className="gmail"/></a>
                <a href="https://github.com/wyy01011" target="_blank"><img src={`${process.env.PUBLIC_URL}/images/github.png`} alt="Github" className="github"/></a>
                <a href="https://www.linkedin.com/in/yi-yau-wong/" target="_blank"><img src={`${process.env.PUBLIC_URL}/images/linkedin.png`} alt="Linkedin" className="linkedin"/></a>
            </div>
      
        </div>
      
    );
  }
  
  export default Footer;