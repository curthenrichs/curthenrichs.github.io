import React from 'react';

import PublicationCard from '../../components/PublicationCard';

import data from '../../content/publications';

import { Typography } from 'antd';
const { Title } = Typography;


const SectionPublications = (props) => {
  return (
    <div>
      <Title>Publications</Title>
      <br/>
      <br/>

      {data.map((entry, i) => (
        <PublicationCard
          key={i}
          title={entry.title}
          reference={entry.reference}
          link={entry.link}
          status={entry.status}
          style={{
            paddingBottom: '1em',
            maxWidth: '1200px',
            margin: 'auto'
          }}
        />
      ))}

    </div>
  );
};


export default SectionPublications;
