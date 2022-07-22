import React from 'react'
import { Button, Card, List } from 'antd'
import { ChromeOutlined, HomeOutlined, TeamOutlined } from '@ant-design/icons';



// Array of data to display on page
const data = [
    {
        title: "Buy a Property",
        content: [
            {
                icon: <HomeOutlined />,
                description: "Find your place with an immersive photo experience",
            },
        ],
    },
    {
        title: "Sell a Property",
        content: [
            {
                icon: <ChromeOutlined />,
                description: "Wherever you are, all you need is your browser to get started",
            },
        ],
    },
    {
        title: "Rent a Property",
        content: [
            {
                icon: <TeamOutlined />,
                description: "We are creating a seamless online experience to aid you in renting out your properties",
            },
        ],
    },
];


// Define Options function component
function Options() {
    return (
        <div id="options" className="block options-block grey-bg">
            <div className="title-section">
                <h2>Choose an option that fits your needs</h2>
                <p>
                    It is a long established fact that a reader will be distracted
                </p>
            </div>

            <List 
                grid={{gutter: 16, xs:1, sm:1, md:3, lg:3, xl:3, xxl:3}}
                dataSource={data} 
                renderItem={(item) => (
                    <List.Item>
                        <Card title={item.title}>
                            <p className="large">{item.content[0].icon}</p>
                            <p>{item.content[0].description}</p>
                            <Button type="primary" size="large">
                                <i className="fab fa-telegram-plane"></i>
                                {" "}
                                Get Started
                            </Button>
                        </Card>
                    </List.Item>
                )}
            />
            
        </div>
    )
}

export default Options