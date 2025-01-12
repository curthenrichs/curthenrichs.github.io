import React, { Fragment } from "react";
import { Button, Typography, Row, Col, Card } from "antd";
import contractingData from "../../content/contracting";

const { Text, Title } = Typography;

const HeaderSubsection = (props) => {

    const { availableFullTime, availableContract } = props;

    let availabilityText = null;
    if (availableFullTime && availableContract) {
        availabilityText = (<Text>Available for Full-Time Employment, Consulting, or Contract Work</Text>);
    } else if (availableFullTime) {
        availabilityText = (<Text>Seeking Full-Time Employment</Text>);
    } else if (availableContract) {
        availabilityText = (<Text>Available for Consulting and Contract Work</Text>);
    } else {
        availabilityText = (<Text>Currently employed Full-Time; reach out to discuss new opportunities</Text>);
    }

    return (
        <Fragment>
            <Title level={3}>Empowering Your Embedded Systems with Precision and Performance</Title>

            {availabilityText}

            <br/>

            <div>
                {(availableFullTime || availableContract) && (<br/>) }
                {availableFullTime && (<Button>Hire for Full-Time</Button>)}
                {availableContract && (<Button>Consult on a Project</Button>)}
            </div>
            
            {/* Add Call to Action buttons here (and have interchangable content above) */}
        </Fragment>
    );
};

const ServiceCard = (props) => {

    const { title, description } = props;

    return (
        <Card
            style={{minHeight: "200px"}}
        >
            <Title level={5}>{title}</Title>
            <Text>{description}</Text>
        </Card>
    );
};

const ServicesSubsection = (props) => {

    const { availableFullTime, availableContract } = props;

    return (
        <Fragment>
            <Title level={3}>Services Offered</Title>

            <br/>

            <Row>
                <Col span={1}></Col>
                <Col span={7}>
                    <ServiceCard 
                        title={"Full-Time Roles"} 
                        description={"Dedicated long-term contributions as a full-time Embedded Systems Engineer, focusing on end-to-end product development, firmware optimization, and hardware/software integration."} 
                    />
                </Col>
                <Col span={1}></Col>
                <Col span={7}>
                    <ServiceCard
                        title={"Contracting Work"} 
                        description={"Short-term contracts to support your project at critical phases, helping you meet deadlines with confidence."} 
                    />
                </Col>
                <Col span={1}></Col>
                <Col span={7}>
                    <ServiceCard
                        title={"Consulting"} 
                        description={"Expert consulting for system design reviews, debugging, and optimization; guiding your team to build efficient, scalable solutions."} 
                    />
                </Col>
                <Col span={1}></Col>
            </Row>

            {availableFullTime}

            {availableContract}

            <br />


        </Fragment>
    );
};

const CollaborateSubsection = () => {
    return (
        <Fragment>
            <Title level={3}>Let&apos;s Collaborate</Title>
            <Text>Currently open for new opportunities, send me a message to discuss</Text>
        </Fragment>
    );
};

const SectionContracting = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ maxWidth: "1200px", width: "100%", padding: "20px" }}>
                <HeaderSubsection 
                    availableFullTime={contractingData.renderFulltime}
                    availableContract={contractingData.renderConsulting}
                />

                <br/><br/>

                <ServicesSubsection 
                    availableFullTime={contractingData.renderFulltime}
                    availableContract={contractingData.renderConsulting}
                />

                <br/><br/>

                <CollaborateSubsection />
            </div>
        </div>
    );
};

/*


            {!contractingData.available && (<MarkdownContent markdownPath={contractingData.unavailableText} />)}

            {contractingData.available && contractingData.renderFulltime && (<MarkdownContent markdownPath={contractingData.fulltimeText} />)}

            {contractingData.available && contractingData.renderConsulting && (<MarkdownContent markdownPath={contractingData.consultingText} />)}

*/

export default SectionContracting;