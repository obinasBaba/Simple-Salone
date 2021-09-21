import React, {useEffect, useRef} from 'react';
import styled, {css} from "styled-components";
import {titles} from "./data";
import BackGroundLetters from "./components/BackgroundLetters";
import GridItem from "./components/GridItem";
import gsap from "gsap";

const GalleryContainer = styled.section`
  --color-bg: #DCDCDC;
  background-color: var(--color-bg);
  position: relative;
  min-height: 100vh;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  align-items: center;
  //border: thick solid orangered;
`

const GridWrapper = styled.div`
  position: absolute;
  width: 120%;
  height: 120%;
  top: -10%;
  left: -10%;
  display: grid;
  grid-template-columns: repeat(50, 2%);
  grid-template-rows: repeat(50, 2%);
  perspective: 1000px;

  .pos-1 {
    --grid-row: 8;
    --grid-column: 1;
  }

  .pos-2 {
    --grid-row: 1;
    --grid-column: 18;
  }

  .pos-3 {
    --grid-row: 1;
    --grid-column: 29;
  }

  .pos-4 {
    --grid-row: 15;
    --grid-column: 12;
  }

  .pos-5 {
    --grid-row: 17;
    --grid-column: 25;
  }

  .pos-6 {
    --grid-row: 20;
    --grid-column: 43;
  }

  .pos-7 {
    --grid-row: 35;
    --grid-column: 5;
  }

  .pos-8 {
    --grid-row: 40;
    --grid-column: 14;
  }

  .pos-9 {
    --grid-row: 37;
    --grid-column: 29;
  }

  .pos-10 {
    --grid-row: 35;
    --grid-column: 42;
  }

  .pos-11 {
    --grid-row: 1;
    --grid-column: 44;
  }

  .pos-12 {
    --grid-row: 32;
    --grid-column: 20;
  }

  .pos-13 {
    --grid-row: 22;
    --grid-column: 2;
  }

  .pos-14 {
    --grid-row: 9;
    --grid-column: 38;
  }

  .pos-15 {
    --grid-row: 4;
    --grid-column: 7;
  }

  .pos-16 {
    --grid-row: 28;
    --grid-column: 36;
  }

`


const Gallery = () => {

    const items = useRef([]);
    const gridRef = useRef(null);


    useEffect(() => {
        items.current = [...gridRef.current.querySelectorAll('.grid__item')]
        show(items.current)

    }, [])

    const show = (elements) => {
        gsap.timeline()
            .addLabel('start', 0)
            .set(elements, {scale: 1.5, opacity: 0}, 0)
            .to(elements, {
                duration: 1.2,
                ease: 'expo',
                scale: 1,
                stagger: {amount: 0.4, grid: 'auto', from: 'center'}
            }, 'start')
            .to(elements, {
                duration: 1.2,
                ease: 'power1',
                opacity: 1,
                stagger: {amount: 0.4, grid: 'auto', from: 'center'}
            }, 'start')
    }

    return (
        <GalleryContainer>
            <BackGroundLetters/>
            <GridWrapper ref={gridRef}>
                {
                    titles.map((t, i) =>
                        <GridItem key={t} title={t} index={i}/>
                    )
                }
            </GridWrapper>
        </GalleryContainer>
    );
};

export default Gallery;
