import React from 'react';
import { Button, Collapse } from 'antd';


const {Panel} = Collapse

// Define Faqs function component
function Faqs() {
    return (
        <div id="faq" className="block faq-block">
            <div className="fluid-container">
                <div className="title-section">
                    <h2>Frequently Asked Questions</h2>
                    <p>
                        What are the most frequently asked Questions
                        of all time?
                    </p>
                </div>

                <Collapse defaultActiveKey={["1"]}>
                    <Panel header="How do I find the right Prperty?">
                        <p>
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        </p>
                    </Panel>
                    <Panel header="How do I know I can trust your agent?">
                        <p>
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        </p>
                    </Panel>
                    <Panel header="Who are your major clients?">
                        <p>
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        </p>
                    </Panel>
                    <Panel header="How do I get in touch?">
                        <p>
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        </p>
                    </Panel>
                </Collapse>

                <div className="quick-support">
                    <h3>Want expedited support?</h3>
                    <p>
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum     
                    </p>

                    <Button type="primary" size="large">
                        <i className="fas fa-envelope"></i>
                        Email your question!
                    </Button>

                </div>
            </div>

        </div>
    );
}

export default Faqs;
