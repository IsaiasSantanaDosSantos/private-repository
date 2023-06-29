import { HomeContainer } from './styled'
import gitHubImg from '../../assets/img/github-img.png'
import { AnimationGitHubContent } from '../elements/AnimationGitHub/styled'

function Home() {
  return (
    <HomeContainer>
      <div>
        <h1>Private repository</h1>
        <p>Unable to see this repository as it is private. <br /><span>Thank you for understanding</span></p>
        <img src={gitHubImg} alt="GitHub image" />
        <AnimationGitHubContent/>
      </div>
    </HomeContainer>
  )
}

export default Home