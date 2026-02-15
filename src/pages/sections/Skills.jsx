import React, { Fragment, useContext } from "react";
import data from "../../content/skills";
import { WidthContext } from "../../contexts";
import ExpandSection from "../../components/ExpandSection";
import { IconLookupFromName } from "../../components/IconManager";
import { Row, Col, Typography, Progress, Tooltip } from "antd";

const { Text, Title } = Typography;

const SkillTile = (props) => {
  const { name, percent, icon, hover, id } = props;

  return (
    <Fragment>
      <div style={{ width: 150, margin: "0 auto" }} id={id}>
        <Tooltip title={hover}>
          <div style={{ fontSize: "50px" }}>{IconLookupFromName[icon]}</div>
          <div style={{ fontSize: "var(--fs-xl)" }}>
            <Text type="secondary">{name}</Text>
          </div>
          <Progress
            type="line"
            percent={percent}
            size="small"
            showInfo={false}
            trailColor="var(--color-bg-alt)"
            status="active"
          />
        </Tooltip>
      </div>
    </Fragment>
  );
};

const SectionSkills = () => {
  const width = useContext(WidthContext);

  return (
    <React.Fragment>
      <Title level={3}>Skills</Title>

      <br />

      <ExpandSection
        insertBreak={true}
        style={{ paddingLeft: "12px", paddingRight: "12px" }}
        generator={(expand) => {
          const skillsCopy = data.slice();

          const tileSize = 250;
          const totalSpace = tileSize * skillsCopy.length;
          let rows = Math.ceil(totalSpace / (width * 0.8));
          if (rows < 2) rows = 2;
          const items = Math.ceil(Math.floor(totalSpace / rows) / tileSize);
          let span = Math.floor(24 / items);
          if (span < 1) span = 1;

          let newData = new Array(rows).fill().map(() => skillsCopy.splice(0, items));

          const shouldCollapse = newData.length > 2;
          if (shouldCollapse && !expand) {
            newData = newData.splice(0, 2);
          }

          return {
            shouldCollapse,
            children: newData.map((row, idx) => (
              <Row gutter={[24, 24]} justify="center" key={idx}>
                {row.map((entry, idx) => (
                  <Col span={span} key={idx}>
                    <SkillTile
                      id={entry.id}
                      name={entry.name}
                      percent={entry.percent}
                      icon={entry.icon}
                      hover={entry.hover}
                    />
                  </Col>
                ))}
              </Row>
            ))
          };
        }}
      />
    </React.Fragment>
  );
};

export default SectionSkills;
