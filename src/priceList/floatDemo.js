import React from 'react';
import styled from 'styled-components';
import data from "./data";

const Container = styled.div`
  background: lightblue;
  max-width: 1100px;
  margin: 0 auto;
  font-family: Inconsolata,cursive;
  
  &  * + *{
    //margin-top: 1em;
  }
`

const Main = styled.div`
  background: navajowhite;
  padding: 0 1.5em;
  border-radius: .5em;
  overflow: auto;

  & > div > :nth-child(odd){
    border: thick solid red;
    float: left;
  }
  
  & > div > :nth-child(even){
    border: thick solid blue;
    float: right;
  }
  
`
const Head = styled.div`
  padding: 1em 1.5em;
  background: darkslateblue;
  color: navajowhite;
  border-radius: .5em;
`
const Media = styled.div`
  background: lightblue;
  border-radius: .5em;
  width: 50%;
  overflow: auto;
`

const MediaImg = styled.img`
  width: 100px;
  height: 100px;
  background: coral;
  float: left;
`
const MediaBody = styled.div`

`

function MediaCard({mediaTitle, mediaBody}) {
    return (
        <Media>
            <MediaImg/>
            <MediaBody>
                <h4>{ mediaTitle }</h4>
                {
                    mediaBody.map(i => <p>{ i.serviceTitle }</p>)
                }
            </MediaBody>
        </Media>
    );
}

const Float = () => {
    return (

        <Container>
            <Head>
                <h1>Francklin Running club</h1>
            </Head>

            <Main>

                <h2>Running tips</h2>

                <div>
                    {

                        data.map( i => <MediaCard
                            mediaBody={  i.list }
                            mediaTitle={ i.title }/> )
                    }
                </div>

            </Main>
        </Container>
    );
};

export default Float;
