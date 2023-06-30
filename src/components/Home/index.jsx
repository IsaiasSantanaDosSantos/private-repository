import { useEffect, useState } from 'react';

import { HomeContainer } from './styled'
import  Windows  from '../Windows/index'
import thumbGitHub from '../../assets/img/thumb_github.png'
import thumbGitHub835 from '../../assets/img/thumb_github-835px.png'
import thumbGitHub520 from '../../assets/img/thumb_github-520px.png'


function Home(){
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    let backgroundImage;

    useEffect(() => {
        const handleResize = () => {
          setWindowSize(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      function handleBackground(){
          if(windowSize < 576) {
            backgroundImage = thumbGitHub520
          } else if (windowSize < 768) {
            backgroundImage = thumbGitHub835
          } else  {
            backgroundImage = thumbGitHub
          } 
      }
      handleBackground();

    return(
        <HomeContainer>
            <div className="allContent" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            <Windows/>
        </HomeContainer>
    );
}
export default Home;