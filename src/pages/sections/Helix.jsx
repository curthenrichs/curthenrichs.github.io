import React, { Fragment, useState } from "react";
import ItemModalContent from "../../components/ItemModalContent";
import HelixMarkdown from "../../content/markdown/Helix.md";
import CenteredActionButton from "../../components/CenteredActionButton";
import ItemModalTemplate from "../../components/ItemModalTemplate";

const SectionHelix = () => {

    const [visible, setVisible] = useState(false);

    return (
        <Fragment>
            <CenteredActionButton 
                text="Read my skill building philosophy : Triple Helix Model"
                callback={() => { setVisible(true); }}
            />
            <ItemModalTemplate 
                title="Skill Philosophy : Triple Helix Model"
                visible={visible}
                closeCallback={() => { setVisible(false); }}
            >
                <ItemModalContent markdownPath={HelixMarkdown} />
            </ItemModalTemplate>
            <br />
            <br />
        </Fragment>
    );
};

export default SectionHelix;