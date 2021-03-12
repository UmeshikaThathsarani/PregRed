import React from 'react';
import {
  CalculatorFilled,
  HomeFilled,
  MedicineBoxFilled,
  QuestionCircleFilled,
  ProfileFilled
} from '@ant-design/icons';

export const ICONS = {
  home: <HomeFilled />,
  healthcare: <MedicineBoxFilled />,
  calc: <CalculatorFilled />,
  question: <QuestionCircleFilled />,
  profile: <ProfileFilled />
};

export const PAGES = [
  {
    id: 1,
    name: 'Home',
    path: '/',
    icon: ICONS.home,
  },
  {
    id: 2,
    name: 'Prediction',
    path: '/prediction',
    icon: ICONS.question,
  },
  {
    id: 3,
    name: 'BMI Calculator',
    path: '/',
    icon: ICONS.calc,
  },
  {
    id: 4,
    name: 'Healthcare Center',
    path: '/',
    icon: ICONS.healthcare,
  },
  {
    id: 5,
    name: 'Profile',
    path: '/',
    icon: ICONS.profile,
  },
];
