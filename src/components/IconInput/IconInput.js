import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const BaseInput = styled.input`
  appearance: none;
  border: none; 
  width: 100%;
  padding-bottom: 5px;
  
  color: ${COLORS.gray700};

  &::placeholder {
    color: ${COLORS.gray500};
  }

  &:focus{
    outline-offset: 2px;
    border-radius: 2px;
  }

  &:hover{
    font-weight: 700;

    &::placeholder {
    font-weight: 400;
  }
  }
`;
const SmallInput = styled(BaseInput)`
  font-size: 14px;
  border-bottom: 1px solid #000000;
  padding-left: 25px;
`;
const LargeInput = styled(BaseInput)`
  font-size: 18px;
  border-bottom: 2px solid #000000;
  padding-left: 40px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: ${({width}) => width + 'px'};

  &:hover svg {
    stroke-width: 2px; 
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
`

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  let Component;
  if (size === "small") {
    Component = SmallInput;
  } else if (size === "large") {
    Component = LargeInput;
  } else {
    throw new Error(`Unrecognized Input size: ${size}`);
  }

  return <>
    <VisuallyHidden>
      <label>{label}</label>
    </VisuallyHidden>
    <InputWrapper width={width}>
      <IconWrapper>
        <Icon id={icon} size={size === "large" ? 20 : 14}   />
      </IconWrapper>
      <Component placeholder={placeholder} />
    </InputWrapper>
    </>;
};

export default IconInput;
