


import React from "react";

import {Row , Col, Card} from 'react-bootstrap'

const Resenas = (props) => { 

    return <div>
        {
            props.resenas.map((curso) => {
                return <Row>
                    <Col>
                    <Card>
                        
                    </Card>
                    </Col>
                </Row>
            })
        }
    </div>
}