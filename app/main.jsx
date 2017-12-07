// 'use strict'
// import React from 'react'
// import {render} from 'react-dom'
// import { Provider } from 'react-redux'

// import store from './store'
// import Root from './components/Root'

// render (
//   <Provider store={store}>
//     <Root/>
//   </Provider>,
//   document.getElementById('main')
// )



//REACT VERSION//
'use strict'
import React from 'react'
import ReactDOM, {render} from 'react-dom'


import Root from './components/Root'

render (
  //<Provider store={store}>
    <Root/>,
  //</Provider>,
  document.getElementById('main')
)
