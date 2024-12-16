import './style.css'
import config from '../config.js' 
import hlsLoader from './hlsLoader.js'


document.querySelector('#app').innerHTML = `
  <video id="video" controls></video>
`
hlsLoader(document.querySelector('#video'), config.hlsSource)
document.querySelector('title').textContent = config.pageTitle