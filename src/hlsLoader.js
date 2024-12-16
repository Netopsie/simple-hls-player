// https://nochev.github.io/hls.js/docs/html/

import Hls from 'hls.js'

export default function hlsLoader(videoElement, hlsSource) {
    const video = videoElement
    
    if(Hls.isSupported()) {
      const hls = new Hls()

      hls.loadSource(hlsSource)
      hls.attachMedia(video)

      hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.play()
    })
   }

   // hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.
   // When the browser has built-in HLS support (check using `canPlayType`), we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element throught the `src` property.
   // This is using the built-in support of the plain video element, without using hls.js.

    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsSource
      video.addEventListener('canplay',function() {
        video.play()
      });
    }
}