import React from "react";
import MarkdownContent from "../../components/MarkdownContent";
import equipmentData from "../../content/equipment";

const SectionEquipment = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ maxWidth: "1000px", width: "100%", padding: "20px" }}>
                <MarkdownContent markdownPath={equipmentData.descriptionText} />
            </div>
        </div>
    );
};

export default SectionEquipment;