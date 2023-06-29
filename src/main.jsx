import React from 'react'
import ReactDOM from 'react-dom/client'

import { MainContainer } from './styled';
import  Home  from '../src/components/Home/index.jsx'

function Main() {
  return (
    <React.StrictMode>
      <MainContainer>
        <Home />
      </MainContainer>
    </React.StrictMode>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
export default Main;