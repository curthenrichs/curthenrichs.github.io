import React, { useContext, useMemo } from "react";
import { Row, Col, Card, Tag, Typography } from "antd";
import { WidthContext } from "../../../contexts";
import { BP_CARD_HORIZONTAL } from "../../../breakpoints";
import { IconLookupFromName } from "../../../components/IconManager";
import { domains, CATEGORY_COLORS } from "../../../content/domains";
import skillsData from "../../../content/skills";

const { Title, Paragraph } = Typography;

const DomainCards = () => {
  const width = useContext(WidthContext);
  const colSpan = width >= BP_CARD_HORIZONTAL ? 12 : 24;

  const skillsById = useMemo(() => {
    const map = {};
    skillsData.forEach((s) => {
      map[s.id] = s;
    });
    return map;
  }, []);

  return (
    <div style={{ padding: "0 5%" }}>
      <Row gutter={[24, 24]}>
        {domains.map((domain) => (
          <Col span={colSpan} key={domain.key}>
            <Card className="type-c" style={{ height: "100%" }}>
              <div style={{ fontSize: 36, marginBottom: 8 }}>
                {IconLookupFromName[domain.icon]}
              </div>
              <Title level={5} style={{ marginTop: 0 }}>
                {domain.title}
              </Title>
              <Paragraph
                type="secondary"
                style={{ fontSize: "var(--fs-md)" }}
              >
                {domain.description}
              </Paragraph>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {domain.skillIds.map((sid) => {
                  const skill = skillsById[sid];
                  if (!skill) return null;
                  return (
                    <Tag
                      key={sid}
                      color={CATEGORY_COLORS[skill.category]}
                      style={{ margin: 0, display: "inline-flex", alignItems: "center" }}
                    >
                      <span style={{ marginRight: 6, display: "inline-flex" }}>
                        {IconLookupFromName[skill.icon]}
                      </span>
                      {skill.name}
                    </Tag>
                  );
                })}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DomainCards;
