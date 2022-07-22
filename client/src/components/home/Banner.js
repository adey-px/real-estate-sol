import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Button, Carousel } from 'antd';


// Array of data to display on page
const items = [
    {
        key: "1",
        title: "Buy or sell properties",
        content: "It is a long established fact that a reader will be distracted by the readable content",
    },
    {
        key: "2",
        title: "Buy or sell land",
        content: "It is a long established fact that a reader will be distracted by the readable content",
    },
    {
        key: "3",
        title: "Buy or sell land",
        content: "It is a long established fact that a reader will be distracted by the readable content",
    },
]


// Define Banner function component
function Banner() {
    return (
        <div>
            <div id="banner" className="banner-section">

                <Carousel>
                    {items.map((item) => {
                        return (
                            <div key={item.key} className="fluid-container">
                                <div className="content">
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                    <div className="btn-group">

                                        <Button type="primary" size="large">
                                            Learn More
                                        </Button>

                                        <Button icon={<SearchOutlined/>} size="large">
                                            Search
                                        </Button>

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Carousel>

            </div>
        </div>
    );
}

export default Banner;
