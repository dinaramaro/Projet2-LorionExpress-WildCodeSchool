import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container} from 'reactstrap';
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
                <p>{this.props.detail}</p>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}

export default Programme;