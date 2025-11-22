import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//შემოგვაქვს Provider და ჩვენი store
import { Provider } from 'react-redux'
import {store} from './redux/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/*ვფუთავთ მთლიან აპლიკაციას Provider-ში */}
    <App />
    </Provider>
  </StrictMode>,
)
