/* eslint-disable react/prop-types */
// import {  useEffect } from 'react';

import { AnimationGitHubContent } from "./styled";
import animationGitVideo from '../../../assets/video/github-mundo-gif.gif'
import gitHubLogo from '../../../assets/img/github-img.png'

export const Success = () => {

    const isVideoSupported = ()=>{
        const videoElement = document.createElement('video')
        return Boolean(videoElement.canPlayType)
    }
    console.log("oi")
    
  
  
    // useEffect(() => {
    //       const timer = setTimeout(() => {
    //         setIsVisiblePopup(false);
    //       }, 15000);

    //     return () => {
    //         clearTimeout(timer);
    //       };
    // }, []);

    return(
        <AnimationGitHubContent>
            <div className="successConteiner">
                <div className="successIconBox">
                {isVideoSupported() ? (
                <video autoPlay loop muted>
                    <source src={animationGitVideo} type='video/mp4' />
                    {/* {t ('not_support_video')} */}
                </video>
                ) : (
                    <img src={gitHubLogo} alt="Sending email image" />
                )}
                </div>
            </div>
        </AnimationGitHubContent>
    );
};