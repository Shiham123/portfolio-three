import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaDatabase, FaNode } from 'react-icons/fa';
import { SiNextdotjs, SiWebauthn } from 'react-icons/si';

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <FaDatabase key="database" />,
          <FaNode key="nodejs" />,
          <SiNextdotjs key="nextjs" />,
          <FaWordpress key="wordpress" />,
          <SiWebauthn key="SiWebauthn" />,
        ],
      },
    ],
  },
];

export default aboutData;
