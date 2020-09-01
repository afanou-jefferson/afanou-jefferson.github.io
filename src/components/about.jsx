import React, { Component } from 'react'
import {BsArrowBarRight} from 'react-icons/bs'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">À mon propos ...</span>
                    <h2 className="colorlib-heading">Qui suis-je ?</h2>
                    <p>Âgé de 24ans, voilà maintenant 5 années que je navigue entre l'IT et le Digital. <br></br>
                        Autant geek que technophile, j'ai commencé mes études supérieures par un DUT Informatique pour ensuite développer une double compétence en école de commerce. <br></br>
                        Fraîchement diplômé d'un Master en Marketing Digital, j'aimerais désormais "revenir aux sources" en me recentrant sur l'IT.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                {/*<span className="heading-meta">Qu'est ce que je sais faire ?</span>*/}
                <h2 className="colorlib-heading">Mon champs de compétences</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Développement</h3>
                    <p style={{textAlign:"justify"}}>Initialement acquises lors du DUT informatique, j'oeuvre au quotidien pour réactiver et améliorer ces compétences de manière auto-didacte depuis de Décembre 2019. Cette démarche m'a alors poussée à rejoindre un cursus de formation chez Diginamic en Juin 2020.</p>
                    <p style={{marginBottom:0, textAlign:"left"}}><b>Technologies :</b></p>
                        <ul style={{ margin: "left", paddingLeft: "7%"}}>
                            <li style={{ textAlign:"left" }}>HTML / CSS </li>
                            <ul>
                                    <li style={{ textAlign:"left" }}>Bootstrap </li>
                                    <li style={{ textAlign:"left" }}>WordPress </li>
                            </ul>
                            <li style={{ textAlign:"left" }}> SQL </li>
                            <ul>
                                    <li style={{ textAlign:"left" }}>MySQL </li>
                                    <li style={{ textAlign:"left" }}>PostgreSQL </li>
                            </ul>
                            <li style={{ textAlign:"left" }}>Java </li>
                            <ul>
                                    <li style={{ textAlign:"left" }}>Spring </li>

                            </ul>
                            <li style={{ textAlign:"left" }}>Javascript</li>
                                <ul>
                                    <li style={{ textAlign:"left" }}> React </li>
                                    <li style={{ textAlign:"left" }}> Angular </li>
                                    <li style={{ textAlign:"left" }}> NodeJS </li>
                                </ul>
                            
                        </ul>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Web Marketing</h3>
                    <p style={{textAlign:"justify", marginBottom:0}}>En tant que responsable Web en apprentissage pendant 2 années lors de mon Master (en marketing digital), j'ai pu créer et déveloper la boutique E-commerce (sous Wordpress) de la marque et gérer sa communauté sur les réseaux sociaux.</p>
                    <br></br>
                    <p style={{marginBottom:0, textAlign:"left"}}><b>Chiffres clés :</b></p>
                        <ul style={{ margin: "left", paddingLeft: "7%"}}>
                            <li style={{ textAlign:"left" }}>9K€ de CA en 2017 (en partant de 0)</li>
                            <li style={{ textAlign:"left" }}>13K€ de CA en 2018</li>
                            <li style={{ textAlign:"left" }}>7000 abonnés sur Facebook</li>
                            <li style={{ textAlign:"left" }}>3200 abonnés sur Instagram</li>
                        </ul>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Conseil</h3>
                    <p style={{textAlign:"justify", marginBottom:0}}>En tant que consultant en transformation digitale pendant 8 mois chez CGI, j'ai eu l'occasion d'assimiler certaines compétences en conseil.</p>
                    <br></br>
                    <p style={{marginBottom:0, textAlign:"left"}}><b>Compétences :</b></p>
                    <ul style={{ margin: "left", paddingLeft: "6%"}}>     
                        <li style={{ textAlign:"left" }}>Design Thinking</li>
                        <li style={{ textAlign:"left" }}>Receuil de besoin</li>
                        <li style={{ textAlign:"left" }}>Analyse fonctionnelle</li>
                        </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
