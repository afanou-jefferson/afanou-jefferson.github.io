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
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Master en marketing digital et management de projets Web <span>IAE de Montpellier / 2017-20194</span></h2>
                        <p>Ce Master propose une double compétence permettant de lier expertise en technologies de l’information et marketing. Venant de cursus à fort contenu informatique et/ou avec une culture TIC, les étudiants apprennent les enjeux et l’utilisation de ces technologies au service du marketing.</p>
                        <p style={{textAlign:"right"}}><a className="btn btn-primary btn-learn" href="https://drive.google.com/open?id=1jNt6-vUFc2H6TQT3zlg959XbZrThsUI1" target="_blank" rel="noopener noreferrer">Plus d'informations <i className="icon-download4" /></a></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
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
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Diplôme Universitaire Technologique en Informatique <span>IUT de Montpellier / 2014-2016</span></h2>
                        <p style={{marginBottom:0}}>Les étudiants sont préparés à des fonctions d’encadrement technique en informatique correspondant aux besoins des entreprises. Cet enseignement vise à rendre les étudiants :</p>
                        <ul>
                          <li>Opérationnels pour des activités d’analyse, de programmation et d’exploitation des ordinateurs</li>
                          <li>Capables de s’adapter à l’évolution rapide des techniques et de l’environnement</li>
                        </ul> 
                        <p style={{textAlign:"right"}}><a className="btn btn-primary btn-learn" href="https://drive.google.com/open?id=1PgUPMPajst8f624-BvlRMcA_xnRWC65F" target="_blank" rel="noopener noreferrer">Plus d'informations <i className="icon-download4" /></a></p>
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
