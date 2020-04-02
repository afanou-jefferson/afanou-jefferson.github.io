import React, { Component } from 'react'
import {FaCode} from 'react-icons/fa'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight" style={{overflow: "hidden"}}>
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/photo_JA.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html" style={{marginBottom: "5%"}}>Jefferson Afanou</a></h1>
              <span className="email"><i className="icon-mail" ></i>jefferson.afanou@mail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse" style={{marginTop: "5%"}}>
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Présensation</a></li>
                  {/*<li><a href="#about" data-nav-section="about"></a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Parcours</a></li>
                  <li><a href="#projects" data-nav-section="projects">Réalisations</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/jefferson-afanou/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/afanou-jefferson" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer" style={{position: "absolute", bottom:0}}>
              <p><small>
                  <FaCode/> avec React<br></br> 
                  à partir d'un template(<a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>)
              </small></p>
              <p><small>
                
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
