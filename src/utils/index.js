import {
  createStaticNavigation,
  useNavigationContainerRef,
} from '@react-navigation/native';
import React from 'react';

export const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`
