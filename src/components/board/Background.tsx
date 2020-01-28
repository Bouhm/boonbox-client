import React from 'react';
import styled from 'styled-components';

type BackgroundProps = {
  bgImgUrl: string
};

const Background = styled.div<BackgroundProps>`
  background-image: ${props => `url(${props.bgImgUrl})`};
  background-size: cover;              
  background-repeat: no-repeat;
  background-position: center center;
`;

export default Background;
