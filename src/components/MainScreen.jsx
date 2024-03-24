import React from 'react';

const Landing = () => {
    return (
        <div className="landing">
            <video autoPlay loop muted playsInline className="back-video">
                <source src="https://p3re.jp/en/resources/img/top/fv_movie2_1aaf21a0de60678450744da0dbaf9ef4.mp4" type="video/mp4" />
            </video>
            <div className="overlay-text">
        <h1>Welcome to <span className='melo'>Ambro</span><span className='pragma'>sía</span> </h1>
        <p>Today, feast your eyes and sweeten</p>
        <p>your soul with...</p>
    </div>
        </div>
    );
};

export default Landing;