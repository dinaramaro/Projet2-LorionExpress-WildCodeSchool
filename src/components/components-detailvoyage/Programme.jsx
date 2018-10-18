import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
import './Programme.css';

class Programme extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <Container>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }} style={{fontWeight: 'bold'}} 
            >
              Activités
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="tablecontent">
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h5><span className="jour">JOUR 1 /</span><span className="descriptif">San Marco</span></h5>
                <p>Arrivée à Venise en fin de matinée. Découvrez le quartier San Marco, son église, et une vue éblouissante depuis le Campanile.
                    Visite du palais des Doges et du célèbre pont des Soupirs.
                </p>
                <h5><span className="jour">JOUR 2 /</span><span className="descriptif">Rialto</span></h5>
                <p> Visite d'un atelier de confection de masques.
                    Découverte du pont du Rialto et son quartier.
                </p>
                <h5><span className="jour">JOUR 3 /</span><span className="descriptif">Murano, Burano, Torcello</span></h5>
                <p> Journée sur les îles de la Lagune, Murano et ses ateliers de souffleur de verre, Burano et ses maisons colorées, Torcello.
                </p>
                <h5><span className="jour">JOUR 4 /</span><span className="descriptif">Le Dorsoduro</span></h5>
                <p> Visite du musée Guggenheim puis découverte de la basilique Santa Maria della Salute.
                    Départ de Venise en fin d'après-midi.
                </p>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}

export default Programme;