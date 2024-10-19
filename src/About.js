function About() {
  return (

    <div>

    <div className = 'header'>
      <div class='titleLine'>
          <header>
            <h1><span style={{color: "#E3242B"}}>About</span> Me </h1>
          </header>
      </div>

      <div class='titleLine'>
      <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Projects">Projects</a></li>
          </ul>
      </nav>

    </div>

    </div>
   

    <div className = "p1">

      <div class = "pic1">
        <img src="/images/japan.jpg" alt="Japan"></img>
        </div>

      <div class = "intro">
        <p>I’m Yi Yau Wong, but I go by Valarie! I am currently a <span style={{fontWeight: 'bold'}}>4th-year Computer Science student</span> at the University of Ottawa.
          Born in Hong Kong, I moved to Toronto in 2019, and two years later, I relocated to Ottawa for post-secondary 
          studies. Living alone for the first time was challenging, but meeting incredible peers—now my best friends—made the journey more than worth it. 
          I’m trilingual, <span style={{fontWeight: 'bold'}}>fluent in English, Cantonese, and Mandarin </span>, and currently learning French and Korean. J'apprends le français maintenant! </p>
      </div>

    </div>

     <div className = "p2">

      <div class = "vol1">
        <p>I’m passionate about <span style={{fontWeight: 'bold'}}>volunteering for various organizations</span>, and each role has contributed to honing my leadership and communication skills. 
          As VP of Events for the University of Ottawa Hong Kong Cultural Association and a Mentor at PennyDrops, I’ve gained invaluable experience in leadership,
          coordinating events and mentoring others. On the technical side, I serve as a volunteer Website Developer for Inspired 2 Uplift, where I’m 
          responsible for rebuilding their current webpage using WIX. </p>
      </div>

      <div class = "pic2">
        <img src="/images/vol1.jpg" alt="101 week guide"></img>
      </div>

    </div>

    
     <div className = "p3">

     <div class = "pic3">
        <img src="/images/about_intro.jpg" alt="Club Fair HtH"></img>
        
      </div>

      <div class = "vol2">
        <p>My most memorable volunteer role is as a Free Store volunteer on the University of Ottawa campus. This store encourages waste reduction by 
          allowing students to donate unneeded items, which others can pick up for free. My primary duties include greeting customers and sorting through 
          donations. This role has taught me a lot about the importance of recycling; I was initially shocked to see the volume of donations in the school’s 
          basement. I’ve become more mindful of my role as a consumer, and I’m committed to reducing waste while working with my team to make an impact.</p>
      </div>

    </div>

    <div className = "p4">

      <div class = "hobby">
        <p>Outdoors, I enjoy <span style={{fontWeight: 'bold'}}>traveling</span> (I miss it so badly), <span style={{fontWeight: 'bold'}}>badminton, going to the gym, swimming, and running</span>; I’m currently training for a half marathon, with my personal best at 10 km in 
          52 minutes. I recently tried rock climbing and can already see it becoming a favourite! Indoors, I love listening to music and gaming (usually getting 
          carried by friends). My favourite artists are Ian Chan and Shiga Lin, and there’s nothing like baking to their mellow songs—it’s my idea of a perfect 
          evening!</p>
      </div>

      <div class = "pic4">
        <img src="/images/hobby.jpg" alt="Hiking"></img>
      </div>

    </div>

    </div>
    
  );
}

export default About;