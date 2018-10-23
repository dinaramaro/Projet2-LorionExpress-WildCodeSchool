import React, {Component} from 'react';
import  { Button,Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import BtnNav from './BtnNav';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, 
  } from 'reactstrap';
 

import './Admin.css';


const card = [{
    cardtitle: "Paris", 
    cardsubtitle: "Du 10 au 13 Novembre 2018",
    photo: "https://objects.airfrance.com/FR/common/common/img/tbaf/destinations/PAR/slideshow/PAR-4-16_9-1920x1080.jpg", 
    cardtext: "La Tour Eiffel, le quartier Montmartre, le musée du Louvre... Découvrez tout le patrimoine historique et culturel d'une ville au mille facettes.", 
    prix: "379€",
  }, {
    cardtitle: "Barcelone", 
    cardsubtitle: "Du 03 au 06 Mars 2019", 
    photo: "https://www.mhapartments.com/assets/img/offerspages/barcelona-spain-12.jpg", 
    cardtext: "La Sagrada Familia, La Pedrera, le Parc Güell... Un circuit sur la route des majestueuses réalisations de l'architecte Antoni Gaudi.", 
    prix: "429€",
  }, {
    cardtitle: "Venise",
    cardsubtitle: "Du 15 au 19 février 2019",
    photo: "https://i.ytimg.com/vi/xplFCLKGArQ/maxresdefault.jpg",
    cardtext: "Un circuit à la découverte de Venise et ses gondoles, ses canaux, ses ruelles... une ville magique sur l'eau qui ne laissera personne de marbre. ",
    prix: "530€",
  }, {
    cardtitle: "Thaïlande",
    cardsubtitle: "Du 05 au 20 février 2019",
    photo: "https://dak95nwic4sny.cloudfront.net/73/chiang-mai-and-chiang-rai-40160900-1481624149-ImageGalleryLightboxLarge.jpg",
    cardtext: "La Thaïlande regorge de lieux merveilleux, découvrez le pays du nord au sud, de Chiang Mai à l'île de Koh Phangan, en passant par Bangkok.",
    prix: "1249€",
  }, {
    cardtitle: "Maroc",
    cardsubtitle: "Du 20 au 27 avril 2019",
    photo: "https://www.luxair.lu/sites/default/files/styles/slide_images/public/2018-07/Djemma-El-Fna-Marrakech--iStock-496667645_web_0.jpg?itok=FfVS1VK4",
    cardtext: "Découvrez le Maroc, ses medinas et ses souks animés au parfum d'épices, ses merveilleux palais, son hospitalité... circuit de Casablanca à Marrakech.",
    prix: "649€",
  }, {
    cardtitle: "Croatie",
    cardsubtitle: "Du 10 au 18 Mai 2019",
    photo: "https://www.luxair.lu/sites/default/files/styles/slide_images/public/2018-06/Dubrovnik%2C-Croatia--iStock-171352601_web.jpg?itok=eT5vL82V",
    cardtext: "Un superbe circuit de Split à Dubrovnik, à travers les îles de la Dalmatie, pour découvrir un pays au patrimoine naturel et historique riche.",
    prix: "760€"
  }
  ]



class Admin extends Component {
    render () {
        return (
            <div>
                <div className="text-center">
                    <BtnNav />
                    <h2>Voyages</h2>
                    <Link to="/admincreation-voyage"><Button color="secondary" size="lg">Ajouter un voyage</Button></Link>
                </div>


                <Container className="cardsDes-box">
                    <Row>
                        <Col xs="12" md="6" lg="4" className="pt-2 pb-2" >
                        <Card className="text-center">
                            <CardTitle>Paris</CardTitle>
                            <CardSubtitle>Du 10 au 13 Novembre 2018</CardSubtitle>
                            
                                <div className="image">
                                <CardImg width="100%" src="https://objects.airfrance.com/FR/common/common/img/tbaf/destinations/PAR/slideshow/PAR-4-16_9-1920x1080.jpg" alt="Paris" className="image-zoom" />
                                </div>
                            
                            <CardBody h-100>
                                <CardText className="text-left">"La Tour Eiffel, le quartier Montmartre, le musée du Louvre... Découvrez tout le patrimoine historique et culturel d'une ville au mille facettes."</CardText>
                                <div className="align-items-center"><Button className="button">Modifier</Button> <Button color="danger" className="button">Supprimer</Button> <p className="prix">{card.prix}</p></div>
                            </CardBody>
                            </Card>
                        </Col>

                        <Col xs="12" md="6" lg="4" className="pt-2 pb-2" >
                        <Card className="text-center">
                            <CardTitle>Barcelone</CardTitle>
                            <CardSubtitle>Du 10 au 13 Novembre 2018</CardSubtitle>
                            
                                <div className="image">
                                <CardImg width="100%" src="https://www.mhapartments.com/assets/img/offerspages/barcelona-spain-12.jpg" alt="Paris" className="image-zoom" />
                                </div>
                            
                            <CardBody h-100>
                                <CardText className="text-left">La Sagrada Familia, La Pedrera, le Parc Güell... Un circuit sur la route des majestueuses réalisations de l'architecte Antoni Gaudi.</CardText>
                                <div className="align-items-center"><Button className="button">Modifier</Button> <Button color="danger" className="button">Supprimer</Button><p className="prix">{card.prix}</p></div>
                            </CardBody>
                            </Card>
                        </Col>

                        <Col xs="12" md="6" lg="4" className="pt-2 pb-2" >
                        <Card className="text-center">
                            <CardTitle>Venise</CardTitle>
                            <CardSubtitle>Du 10 au 13 Novembre 2018</CardSubtitle>
                            
                                <div className="image">
                                <CardImg width="100%" src="https://i.ytimg.com/vi/xplFCLKGArQ/maxresdefault.jpg" alt="Paris" className="image-zoom" />
                                </div>
                            
                            <CardBody h-100>
                                <CardText className="text-left">Un circuit à la découverte de Venise et ses gondoles, ses canaux, ses ruelles... une ville magique sur l'eau qui ne laissera personne de marbre.</CardText>
                                <div className="align-items-center"><Button className="button">Modifier</Button><Button color="danger" className="button">Supprimer</Button> <p className="prix">{card.prix}</p></div>
                            </CardBody>
                            </Card>
                        </Col>

                        <Col xs="12" md="6" lg="4" className="pt-2 pb-2" >
                        <Card className="text-center">
                            <CardTitle>Thaïlande</CardTitle>
                            <CardSubtitle>Du 10 au 13 Novembre 2018</CardSubtitle>
                            
                                <div className="image">
                                <CardImg width="100%" src="https://dak95nwic4sny.cloudfront.net/73/chiang-mai-and-chiang-rai-40160900-1481624149-ImageGalleryLightboxLarge.jpg" alt="Paris" className="image-zoom" />
                                </div>
                            
                            <CardBody h-100>
                                <CardText className="text-left">La Thaïlande regorge de lieux merveilleux, découvrez le pays du nord au sud, de Chiang Mai à l'île de Koh Phangan, en passant par Bangkok</CardText>
                                <div className="align-items-center"><Button className="button">Modifier</Button><Button color="danger" className="button">Supprimer</Button> <p className="prix">{card.prix}</p></div>
                            </CardBody>
                            </Card>
                        </Col>
                       
                    </Row>
                </Container>


            </div>
        )
    }
}

export default Admin;
