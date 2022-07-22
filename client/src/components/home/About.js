import React from 'react'
import { Col, Row } from 'antd'


// Array of data to display on page
const items = [
    {
        key: "1",
        icon: <i className="fas fa-search-location"></i>,
        title: "Simplified Search",
        content: "It is a long established fact that a reader will be distracted by the readable content",
    },
    {
        key: "2",
        icon: <i className="fas fa-database"></i>,
        title: "Lots of Properties",
        content: "It is a long established fact that a reader will be distracted by the readable content",
    },
    {
        key: "3",
        icon: <i className="fas fa-globe-africa"></i>,
        title: "Simplified Search",
        content: "It is a long established fact that a reader will be distracted by the readable content",
    },
];


// Define About function component
function About() {
    return (
        <div id="about" className="block about-section">
            <div className="fluid-container">
                <div className="title-section">
                    <h2>About Us</h2>
                    <p>You will find us very interesting!</p>
                </div>

                <div className="content-section ">
                    <p>
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    </p>
                </div>

                <Row gutter={[16,16]}>
                    {items.map((item) => {
                        return (
                            <Col md={{ span: 8 }} keys={item.key}>
                                <div className="content">
                                    <div className="icon">{item.icon}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>
                            </Col>
                        );
                    }
                    )}
                </Row>  

            </div>
        </div>
    );
}

export default About;
