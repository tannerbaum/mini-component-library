import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const SelectOverlay = styled.div`
  /* To click through the padding  */
  pointer-events: none;

  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 52px 12px 16px;
  border: none;
  border-radius: 8px;

  ${NativeSelect}:focus + &{
    /* ? Unsure how I am supposed to get the browser default color here, firefox claims initial is invalid */
    outline: 2px solid;
  }

  ${NativeSelect}:hover + &{
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  width: ${({size}) => size + "px"};
  height: ${({size}) => size + "px"};;

  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const size = 24;

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <SelectOverlay>
        {displayedValue}
        <IconWrapper size={size}>
          <Icon id="chevron-down" size={size} />
        </IconWrapper>
      </SelectOverlay>
    </Wrapper>
  );
};

export default Select;
