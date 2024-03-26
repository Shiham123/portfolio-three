import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaDatabase, FaNodeJs, FaNode } from 'react-icons/fa';
import { SiNextdotjs, SiWebauthn } from 'react-icons/si';

import recommendation from '../public/recommendationPng.png';

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
  {
    title: 'Recommendation',
    info: [
      {
        title: '',
        img: recommendation,
      },
    ],
  },
];

export default aboutData;
