import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                {/*<span className="heading-meta">highlights</span>*/}
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Formation développeur Java full stack <span> Diginamic Montpellier / 2020 </span></h2>
                        <p>Cette formation pratique vise à compléter et concrétiser les connaissances nécessaires pour la conception, le
                        développement et la maintenance des applications JAVA Fullstack, associée à l’ensemble des technologies et
                        Frameworks utilisés en entreprise, coté back-end ainsi que front-end. L’industrialisation des développements, la gestion
                        des tests et de l'intégration continue, ainsi que les pratiques de gestion de projet agile dans un contexte Scrum sont également abordés.</p>
                        <p style={{ marginBottom: 0 }}> <strong>Réalisations :</strong>  </p>
                        <ul>
                          <li><a href="https://afanou-jefferson.github.io/JS-Training/"> Calculatrice basique en JS </a>  ( JavaScript / HTML / CSS ) </li>
                          <li><a href="https://afanou-jefferson.github.io/Bootstrap-Training/">Site de voyage en Bootstrap</a>  ( HTML / CSS / Bootstrap ) </li>
                          <li><a href="https://github.com/afanou-jefferson/JPA-OpenFoodFacts">App Java de traitement de fichier</a>  ( Java / JPA / Hibernate / MySQL )</li>
                        </ul>
                        <p style={{ textAlign: "right" }}><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1XGQFyvsKrR7uRYWwfjjIBT5u3BQ9GT8u/view?usp=sharing" target="_blank" rel="noopener noreferrer">Plus d'informations <i className="icon-download4" /></a></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Certifications FreeCodeCamp <span> FreeCodeCamp.com / 2020 </span></h2>
                        <p style={{ marginBottom: 0 }}>Auto-didactie pendant 4 mois en s'appuyant principalement sur <a href="https://www.freecodecamp.org"> freeCodeCamp.com </a> ( <a href="https://www.linkedin.com/school/free-code-camp/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a> ). <br></br> Cette démarche à ainsi permis de valider 2 certifications:</p>
                        <ul>
                          <li>Responsive Web Design : HTML/CSS Responsive </li>
                          <li>JavaScript Algorithms and Data Structures : Javascript (ES6)</li>
                        </ul>
                        <p> Bien que n'ayant pas encore pris le temps de valider la certification "Front-End Librairies", j'ai eu l'occasion d'étudier <b>React </b> &amp; <b> Bootstrap</b> qui m'ont permis de réaliser ce portfolio</p>
                        <p style={{ marginBottom: 0 }}> <strong>Réalisations :</strong>  </p>
                        <ul>
                          <li><a href="https://afanou-jefferson.github.io/">Portfolio React</a> (que vous lisez actuellement) </li>
                          <li><a href="https://afanou-jefferson.github.io/Projet-Survey/"> Form FreeCodeCamp </a> ( HTML / CSS / Bootstrap )</li>
                        </ul>
                        <p style={{ textAlign: "right" }}><a className="btn btn-primary btn-learn" href="https://www.freecodecamp.org/exost" target="_blank" rel="noopener noreferrer">Plus d'informations <i className="icon-download4" /></a></p>
                      </div>
                    </div>
                  </article>
                  {/*<article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Licence en management des Sciences et Technologies <span> IAE de Montpellier / 2016-2017</span></h2>
                        <p>La licence management en Sciences et Technologies est une formation généraliste et professionnalisante. Elle vise à former de futurs managers dans le domaine du Management des Technologies.</p>
                        <p style={{textAlign:"right"}}><a className="btn btn-primary btn-learn" href="https://drive.google.com/open?id=1JApiwoetnARpMmAW6asFqaJwx_w2vNd-" target="_blank" rel="noopener noreferrer">Plus d'informations <i className="icon-download4" /></a></p>
                      </div>
                    </div>
                  </article> */ }
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Master en marketing digital et management de projets Web <span>IAE de Montpellier / 2017-2019 </span></h2>
                        <p>Ce Master propose une double compétence permettant de lier expertise en technologies de l’information et marketing. Venant de cursus à fort contenu informatique et/ou avec une culture TIC, les étudiants apprennent les enjeux et l’utilisation de ces technologies au service du marketing.</p>
                        <p style={{ marginBottom: 0 }}> <strong>Réalisation :</strong>  </p>
                        <ul>
                          <li><a href="https://www.matahijuice.com/">www.matahijuice.com</a> (réalisé sous Wordpress) </li>
                        </ul>
                        <p style={{ textAlign: "right" }}><a className="btn btn-primary btn-learn" href="https://drive.google.com/open?id=1jNt6-vUFc2H6TQT3zlg959XbZrThsUI1" target="_blank" rel="noopener noreferrer">Plus d'informations <i className="icon-download4" /></a></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Diplôme Universitaire Technologique en Informatique <span>IUT de Montpellier / 2014-2016</span></h2>
                        <p style={{ marginBottom: 0 }}>Les étudiants sont préparés à des fonctions d’encadrement technique en informatique correspondant aux besoins des entreprises. <br></br> Cet enseignement vise à rendre les étudiants :</p>
                        <ul>
                          <li>Opérationnels pour des activités d’analyse, de programmation et d’exploitation des ordinateurs</li>
                          <li>Capables de s’adapter à l’évolution rapide des techniques et de l’environnement</li>
                        </ul>
                        <p style={{ textAlign: "right" }}><a className="btn btn-primary btn-learn" href="https://drive.google.com/open?id=1PgUPMPajst8f624-BvlRMcA_xnRWC65F" target="_blank" rel="noopener noreferrer">Plus d'informations <i className="icon-download4" /></a></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
