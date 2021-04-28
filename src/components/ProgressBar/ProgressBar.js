/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--height": "8px",
    "--padding": "none"
  },
  medium: {
    "--height": "12px",
    "--padding": "none"
  },
  large: {
    "--height": "24px",
    "--padding": "4px"
  }
};

const Bar = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-sizing: border-box;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px; 
  
  width: 370px;
  height: var(--height);
  padding: var(--padding);
  
  position: relative;
  overflow: hidden;

  &:after{
    content: '';
    display: block;
    background-color: ${COLORS.primary};
    
    height: 100%;
    width: ${({value}) => value + "%"};
    border-radius: ${({value}) => value === 100 ? "4px" : "4px 0px 0px 4px;"};
  }
`;

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return <Bar style={styles} value={value} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"><VisuallyHidden>{value}</VisuallyHidden></Bar>;
};

export default ProgressBar;
