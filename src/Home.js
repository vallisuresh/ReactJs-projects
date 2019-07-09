import React from 'react';
import img1 from './public/img1.jpg';
import img2 from './public/img2.jpg';
import img3 from './public/img3.jpg';
import img4 from './public/img4.png';
import img5 from  './public/img5.jpg';



const Home = () => {
    return(
<main className="gridcontainer">
<div className="item4"></div>
    <div className="item1">
<div id="myCarousel" className="carousel slide" data-ride="carousel">
  
        <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
            <li data-target="#myCarousel" data-slide-to="4"></li>
            <li data-target="#myCarousel" data-slide-to="5"></li>
         </ol>

  
  <div className="carousel-inner">

    <div className="item active">
      <img src={img1} alt="Community"  width={700} height={50}/>
      <div className="carousel-caption">
        <h3>Community Living</h3>
        <p>Be there for each other!</p>
      </div>
    </div>

    <div className="item">
      <img src={img2} alt="Health care" width={600} height={40} />
      <div className="carousel-caption">
        <h3>Prevention</h3>
        <p>Prevention is ALWAYS better than Cure!</p>
      </div>
    </div>

    <div className="item">
      <img src={img3} alt="Early education"  width={600} height={40}/>
      <div className="carousel-caption">
        <h3>Awareness</h3>
        <p>Early Education is a must !</p>
      </div>
     </div>

     <div className="item">
      <img src={img4} alt="Extended Family"  width={600} height={100}/>
      <div className="carousel-caption">
        <h3>Support</h3>
        <p>Lend a hand</p>
      </div>
     </div>

     <div className="item">
      <img src={img5} alt="Family"  width={600} height={100}/>
      <div className="carousel-caption">
        <h3>Family Health</h3>
        <p>Healthy Kids form a major part 
          of Family's happiness</p>
      </div>
     </div>

  </div>

  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#myCarousel" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right"></span>
    <span className="sr-only">Next</span>
  </a>
  </div>
</div>

<div className="item2">
      <blockquote className="blockquote-reverse">
      <p> Families are the back bone of  society. <br /> Develop, Nurture and Help them flourish.  </p>
      <footer>quote by UnKnown</footer>
      </blockquote>
     
   </div>
   </main>

    );
}

export default Home;