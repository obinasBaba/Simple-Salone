import React from 'react';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Box as MuiBox, IconButton} from "@material-ui/core";

const StyledDiv = styled.div`
  height: 80vh;
  display: flex;
`;

const StyledImg = styled.img`
  object-fit: cover;
  max-width: 100%;
  width: 100%;
  height: 100%;
`;

const Box = styled(MuiBox)`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Dot = styled.span`
  width: 10px;
  height: 10px;
  background: #12141B;
  border-radius: 100%;
  margin: .7rem;
`


export const StyledSlider = props => {
    return (
        <StyledDiv>
            <StyledImg src={props.imgSrc}/>
        </StyledDiv>
    );
}


const Pagination = (props) => {
    return (
        <Box>
            <IconButton>
                <ArrowBackIcon/>
            </IconButton>

            {
                props.dots.map(i => <Dot/>)
            }

            <IconButton>
                <ArrowForwardIcon/>
            </IconButton>
        </Box>
    );
};

export default Pagination;
