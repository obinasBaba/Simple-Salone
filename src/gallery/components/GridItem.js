import React, {useEffect, useRef} from 'react';
import styled, {css} from "styled-components";
import gsap from "gsap";
import {calcWinsize, getMousePos, getRandomNumber, getTranslateValues, lerp, map} from "../utils";
import {MagneticFx} from "../magneticFx";

const GridItemContainer = styled.div`
  position: relative;
  will-change: transform;
  grid-area: var(--grid-row) / var(--grid-column) / span 12 / span 5;
`

const GridItemImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 10px;
  will-change: transform;
  //background-color: black;

  ${({url}) => url && css`
    background-image: url(${url});
  `};
`

const GridItem = ({index, title}) => {

    // Calculate the viewport size
    let winsize = calcWinsize();

    // Track the mouse position
    let mousepos = {x: winsize.width / 2, y: winsize.height / 2};

    const itemRef = useRef(null);
    const itemImgRef = useRef(null);

    const translationVals = {x: 0, y: 0};
    const rotationVals = {x: 0, y: 0};

    let xstart = getRandomNumber(70, 100);
    let ystart = getRandomNumber(40, 65);

    let requestId;
    let magneticFx;
    let rxstart = 5;
    let rystart = 10;
    let hoverTimeout;
    let timelineHoverOut;

    let isLeft;
    let isTop;
    let rY
    let rX
    let tZ;

    useEffect(() => {
        let winSizeCb = () => winsize = calcWinsize()
        let mousePosCb = ev => mousepos = getMousePos(ev)

        window.addEventListener('resize', winSizeCb);
        window.addEventListener('mousemove', mousePosCb);

        magneticFx = new MagneticFx(itemImgRef.current);

        layout(itemRef.current)
        loopTransformAnimation()

        return() => {
            window.removeEventListener('resize', winSizeCb)
            window.removeEventListener('mousemove', mousePosCb)
            stopTransformAnimation();
        }

    }, []);


    const layout = (el) => {
        const rect = el.getBoundingClientRect();

        // check if the element is position on the left/top side of the viewport
        isLeft = rect.left + rect.width / 2 < winsize.width / 2;
        isTop = rect.top + rect.height / 2 < winsize.height / 2;

        rY = isLeft ?
            map(rect.left + rect.width / 2, 0, winsize.width / 2, rystart, 0) :
            map(rect.left + rect.width / 2, winsize.width / 2, winsize.width, 0, -rystart);
        rX = isTop ?
            map(rect.top + rect.height / 2, 0, winsize.height / 2, -rxstart, 0) :
            map(rect.top + rect.height / 2, winsize.height / 2, winsize.height, 0, rxstart);
        tZ = isLeft ?
            map(rect.left + rect.width / 2, 0, winsize.width / 2, -200, -600) :
            map(rect.left + rect.width / 2, winsize.width / 2, winsize.width, -600, -200);

        gsap.set(el, {
            rotationX: rX,
            rotationY: rY,
            z: tZ
        });
    }

    const onMouseEnter = () => {
        hoverTimeout = setTimeout(() => {

            if (timelineHoverOut)
                timelineHoverOut.kill()

            timelineHoverOut = gsap.timeline()
                .addLabel('start', 0)
                .to(itemImgRef.current, {
                    duration: 0.8,
                    ease: 'expo',
                    scale: 1.3
                }, 'start')

        }, 10)
    }

    const onMouseLeave = () => {
        if (hoverTimeout)
            clearTimeout(hoverTimeout)

        if (timelineHoverOut)
            timelineHoverOut.kill()

        timelineHoverOut = gsap.timeline()
            .to(itemImgRef.current, {
                duration: 1,
                ease: 'power4',
                x: 0,
                y: 0,
                scale: 1
            });
    }

    const loopTransformAnimation = () => {
        if (!requestId) {
            requestId = requestAnimationFrame(() => move());
        }
    }

    // stop the render loop animation (rAF)
    const stopTransformAnimation = () => {
        if (requestId) {
            window.cancelAnimationFrame(this.requestId);
            requestId = undefined;
        }
    }

    const move = () => {
        requestId = undefined;

        // Calculate the amount to move.
        // Using linear interpolation to smooth things out.
        // Translation values will be in the range of [-start, start] for a cursor movement from 0 to the window's width/height
        translationVals.x =
            lerp(
                translationVals.x,
                map(mousepos.x, 0, winsize.width, -xstart, xstart),
                0.04
            );

        translationVals.y =
            lerp(
                translationVals.y,
                map(mousepos.y, 0, winsize.height, -ystart, ystart),
                0.04
            );

        // same for the rotations
        rotationVals.x = isTop ?
            lerp(
                rotationVals.x,
                map(mousepos.y, 0, winsize.height / 2, rxstart, 0),
                0.04
            )

            : lerp(
                rotationVals.x,
                map(mousepos.y, winsize.height / 2, winsize.height, 0, -rxstart),
                0.04
            );

        rotationVals.y = isLeft ?
            lerp(rotationVals.y, map(mousepos.x, 0, winsize.width / 2, -rystart, 0), 0.04)
            : lerp(rotationVals.y, map(mousepos.x, winsize.width / 2, winsize.width, 0, rystart), 0.04);

        gsap.set(itemRef.current, {
            x: -translationVals.x,
            y: -translationVals.y,
            rotationX: -rX - rotationVals.x,
            rotationY: -rY - rotationVals.y
        });

        loopTransformAnimation();
    }


    return (
        <GridItemContainer className={`grid__item pos-${index + 1}`}
                           ref={itemRef}
                           data-title={title}
                           onMouseEnter={onMouseEnter}
                           onMouseLeave={onMouseLeave}

        >

            <GridItemImg className='grid__item-img'
                         ref={itemImgRef}
                         url={`img/thumbs/${index + 1}.jpg`}/>

        </GridItemContainer>
    );
};

export default GridItem;
