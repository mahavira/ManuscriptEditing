import React, {PropTypes} from 'react'
import style from './App.css'
import Header from './Header'
const App = ({children}) =>
  <div className={style.normal}>
    <Header/>
    {children}
  </div>
App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
