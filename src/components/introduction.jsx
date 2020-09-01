import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/portfolio_home.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc" style={{marginTop:"30%"}}>
                          <h1 style={{marginBottom:0}}>Bonjour, <br />Je m'appelle Jefferson</h1>
                          <p>(Et la feuille blanche à côté, c'est moi.)</p>
                          <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1W4gNq3qDkiRytN8KlDYgj5exPNK8ck6L/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{marginTop: "5%"}}>Voir mon CV  <i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/portfolio_home.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc" style={{marginTop:"30%"}}>
                          <h1>Vous cherchez du code ?</h1>
                          <p> <a className="btn btn-primary btn-learn" href="https://github.com/afanou-jefferson" target="_blank" rel="noopener noreferrer">Voir mon Github <i className="icon-github"/> </a> </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
