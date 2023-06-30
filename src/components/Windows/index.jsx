import GifPlayer from 'react-gif-player';
import { useTranslation } from 'react-i18next';

import { WindowsContainer } from './styled'
import { AnimationGitHubContent } from '../elements/AnimationGitHub/styled'
import gitHubImg from '../../assets/img/github-img.png'
import IsaiasPhoto from '../../../public/Isaias-circle.png'
import GitHubGif from '../../assets/video/github-mundo-gif.gif'
import { LanguageButtons } from '../elements/LanguageButtons';

function Windows() {
  const { t } = useTranslation()
  
  return (
    <WindowsContainer>
      <div className='windowsContainer'>
        <h1>{t ('title_page')}</h1>
        <p>{t ('texte_one')}<br />{t ('texte_two')}</p>
        <div className="gifBox">
          <GifPlayer gif={GitHubGif} autoplay={true}  className="gitHibGif"/>
          <div className="gifBoxBar"></div>
        </div>
        <p>{t ('texte_three')}</p>
        <div className="imageBox">
          <a href="https://github.com/IsaiasSantanaDosSantos"><img className='logoImage' src={gitHubImg} alt="GitHub image" />GitHub</a>
          <a href="https://isaiassantana.com.br/"><img className='logoImage' src={IsaiasPhoto} alt="Isaias photo" />Site</a>
          <div className="imageBoxBar"></div>
          
        </div>
        <AnimationGitHubContent/>
      </div>
      <LanguageButtons/>
    </WindowsContainer>
  )
}

export default Windows