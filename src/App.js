import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">

<div class="text">
<section class="wrapper">
  <div class="top">Team FoFoFo</div>
  <div class="bottom" aria-hidden="true">Team FoFoFo</div>
</section>
  
</div>
      <header className="text-center my-5">
      
  
  <p className="lead">Welcome to our CSCE 436 portfolio</p>

      </header>

      <main className="container-lg">
        <section className="section my-5" id="intro">
          <h2 className="hr-lines">Introduction and Motivation</h2>
          <p>uniAccess is a crowd-sourced website fueled by self-reported data from students or individuals on campus to provide clarity on accessibility features available in each building on campus. This will allow users to easily identify challenges they may face traversing campus and plan for these situations accordingly. The purpose of the app is to raise awareness to the fact that some individuals need differing accommodations depending on their condition. Our group aims to be a small part of the solution by helping individuals with disabilities at A&M have an easier time navigating through the buildings. </p>
          
          <p>As students, we constantly experience individuals encountering roadblocks when maneuvering around campus whether it be a lack of a ramp for a wheelchair user, a quiet place to study for an individual with autism, and more. As we started development, one of our team member’s tore his ACL and had trouble finding information on the accessibility features available in each building, this made his day to day very inconvenient leading to frustration and wasted time. This further fueled our team’s mission to provide transparency on the ins and outs of campus so that no individual has to experience this type of inconvenience. </p>
        </section>

        <section className="section my-5" id="video">
    <h2 className="hr-lines">YouTube Promotion Video</h2>
   
    <div className="embed-responsive embed-responsive-16by9">
        <iframe
            width="850" height="503"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    </div>
</section>


        <section className="section my-5" id="slides">
          <h2 className="display-4">Presentation Slides</h2>
          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSLlnq4AtmNNqMJkUr2N1BJlDoxVeO-Iq9iHPn48lxCED27-xfvyLxrsWzDIedBt3Jr3agMAGodRV_z/embed?start=false&loop=false&delayms=30000" title="Google Slides Presentation" rameborder="0" width="850" height="503" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </section>

        <section className="section my-5" id="feedback">
          <div class="container">
          <h2 className="display-4">Key Insights from Peer Feedback</h2>
              <p>During the presentation of our prototype, the team did an excellent job of showcasing its features and functionalities. The clarity and precision with which we demonstrated the application's capabilities allowed the audience to grasp the value and potential impact of our solution. Here are some things we did well and some features we could have improved upon:</p>
              <blockquote>
                "Colors do not contrast as much as promised"
                <br></br>
                
                "Gray and black meshes in the prototype"
              </blockquote>

              <p>The user interface of our application requires further refinement. Currently, there are several colors that do not harmonize well and negatively impact the overall design. Focusing on enhancing the color scheme, by selecting complementary or contrasting colors, will greatly improve the visual appeal and user experience. This will also promote greater accessibility within our app.</p>
              
              <blockquote>
                "I think the project idea is very useful. I think they made good design choices for their prototype. I think the idea of
making all the information crowd sourced would build a sense of community and make not only disabled, but abled
people also be more aware of the accessibility of campus buildings."
              </blockquote>
              <p>Our application effectively tackles the issue of insufficient accessibility across A&M's buildings. By providing a platform that identifies and addresses these concerns, we contribute to the ongoing effort to make the campus more inclusive and user-friendly for everyone.</p>


              <blockquote>"Scope of the project is right and the solution addressed the main concern. Overall, the product was presented well."</blockquote>
              <p>The scope of our project was well-defined, and our solution effectively addressed the primary concern. Throughout the presentation of our prototype, the team adeptly highlighted its features and functionalities. The audience was able to appreciate the potential impact and value of our solution, thanks to the clear and precise demonstration of the application's capabilities.</p>
          </div>

        </section>

        <section className="section my-5" id="conclusion">
          <h2 className="display-4">Conclusion and Future Work</h2>
          <p>Your content goes here...</p>
        </section>

        <div class="">
  <div class="">
    <svg xmlns="http://www.w3.org/2000/svg">
      <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
       </filter>
    </svg>
    <span  >Kieran Beirne</span>
  </div>

  <div class="">
    <svg xmlns="http://www.w3.org/2000/svg">
      <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
       </filter>
    </svg>
    <span  >James Evans</span>
  </div>
</div>

<div class="">
  <div class="">
    <svg xmlns="http://www.w3.org/2000/svg">
      <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
       </filter>
    </svg>
    <span  >Adidev Mohaptra</span>
  </div>

  <div class="">
    <svg xmlns="http://www.w3.org/2000/svg">
      <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
        
      </filter>
    </svg>
    <span  >Sean Kelly</span>
  </div>
</div>

<div class="">
  <div class="">
    <svg xmlns="http://www.w3.org/2000/svg">
    </svg>
    <span  >Hunter Zacha</span>
  </div>

  <div class="">
    <svg xmlns="http://www.w3.org/2000/svg">
      <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
       </filter>
    </svg>
    <span>Keegan Choudary</span>
  </div>
  <footer>
    <br></br>
  </footer>
</div>

<br></br>
      </main>
    </div>
  );
}

export default App;
