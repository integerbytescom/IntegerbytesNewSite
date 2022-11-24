import React from 'react';

const BgImages = () => {
    return (
        <>
            {/*eslint-disable-next-line*/}
            <img
                src="/images-dev/bgs/waves.svg"
                alt="waves"
                className={"waves-bg animate__animated animate__fadeIn"}
                style={{bottom:"-20%"}}
            />
            {/*eslint-disable-next-line*/}
            <img
                src="/images-dev/bgs/circle-purple.png"
                alt="circle"
                className={"circle-big animate__animated animate__fadeIn animate__delay-1s"}
                style={{right:"-30%"}}
            />
            {/*eslint-disable-next-line*/}
            <img
                src="/images-dev/bgs/circle-purple-small.png"
                alt="circle-small"
                className={"circle-small animate__animated animate__fadeInRight"}
                style={{top:"-10%", right:"-5%"}}
            />
            {/*eslint-disable-next-line*/}
            <img
                src="/images-dev/bgs/circle-purple-small.png"
                alt="circle-small"
                className={"circle-small animate__animated animate__fadeInLeft"}
                style={{bottom:"-10%", left:"-5%"}}
            />
        </>
    );
};

export default BgImages;
