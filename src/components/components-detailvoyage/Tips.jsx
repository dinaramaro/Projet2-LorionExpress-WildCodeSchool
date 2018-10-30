import React, { Component } from 'react';
import './Tips.css';
import {
    Row, Col, Container
} from 'reactstrap';

class Tips extends Component {
    render() {
        return (
            <Container>
                <Row className="align-items-center">
                    <Col xs="12" md="7">
                        <div className="description">
                            <img className="icon" src="http://image.noelshack.com/fichiers/2018/42/3/1539797156-noun-quote.png" alt="icon" /><p>{this.props.description}</p>
                        </div>
                    </Col>
                    <Col xs="12" md="5" className='pr-0'>
                        <div className="tips">
                            <h3>Nos recommandations</h3>
                            <ul>
                                <li>{this.props.astuces}</li>
                            </ul>
                        </div>
                    </Col>

                </Row>
            </Container>
        )

    }
}

export default Tips;