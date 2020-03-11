import React, { Component } from 'react'

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
                    <p>Âge de 24ans, voilà 5 années que je navigue entre l'IT et le Digital. <br></br>
                        Geek invétéré, j'ai commencé mes études supérieures par un DUT Informatique pour ensuite développer une double compétence en école de commerce. <br></br>
                        Fraîchement diplômé d'un Master en Marketing Digital, j'aspire désormais à "revenir aux sources" en me recentrant sur le développement Web.</p>
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
                    <h3>Développement Web </h3>
                    <p style={{textAlign:"justify"}}>Acquises lors de mon DUT informatique et mises en pratiques lors de mon apprentissage en tant que Responsable Web d'un site E-Commerce, je rafraîchis et améliore mes compétences quotidiennement de manière auto-didacte depuis Décembre 2019.</p>
                    <p style={{marginBottom:0, textAlign:"left"}}><b>Technologies :</b></p>
                        <ul style={{ margin: "left", paddingLeft: "7%"}}>
                            <li style={{ textAlign:"left" }}>HTML</li>
                            <li style={{ textAlign:"left" }}>CSS</li>
                            <li style={{ textAlign:"left" }}> WordPress </li>
                            <li style={{ textAlign:"left" }}>Javascript</li>
                                <ul>
                                    <li style={{ textAlign:"left" }}> React </li>
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
                    <p style={{textAlign:"justify", marginBottom:0}}>En tant que responsable Web en apprentissage pendant casiment 2 années lors de mon Master, j'ai créé (via Wordpress) et déveloper la boutique E-commerce de la marque et gérer sa communauté sur les réseaux sociaux.</p>
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
                    <p style={{textAlign:"justify", marginBottom:0}}>En tant que consultant en transformation digitale pendant 8 mois chez CGI, j'ai pratiqué et assimilé des compétences en conseil.</p>
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
