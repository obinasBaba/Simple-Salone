import React from 'react';
import styled from "styled-components";

const LettersContainer = styled.div`
  --color-title: #d3d3d3;
  font-size: 12vw;
  font-weight: bolder;
  margin: 0;
  line-height: 1.2;
  position: relative;
  color: var(--color-title);
  text-transform: uppercase;
  pointer-events: none;

  .content__title-line {
    display: block;
    position: relative;
    overflow: hidden;
    line-height: 1;
  }

  .content__title-line--1 {
    margin-left: -5vw;
  }

  .content__title-line--2 {
    margin-right: -5vw;
  }
`

const BackGroundLetters = () => {
    return (
        <LettersContainer>
            <span className="content__title-line content__title-line--1"
                  data-splitting>July/</span>

            <span className="content__title-line content__title-line--2"
                  data-splitting>August</span>
        </LettersContainer>
    );
};

export default BackGroundLetters;
