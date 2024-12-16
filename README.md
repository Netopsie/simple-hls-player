# Simple HLS Player
A minimalistic single-page video player that uses **HLS.js** to stream video from a given source. Built with **Vite** for quickly generating small production builds.  

## **How to use:**
### **1. Clone this repository**  
```bash
git clone https://github.com/Netopsie/simple-hls-player
cd simple-hls-player
````
  
### **2. Configure the player to your liking**  
Open `config.js` in the root of the app to set the video source and page title:
```javascript
export default {
    pageTitle       :   'This will be the title of the page',
    hlsSource       :   'http://your-hls-source.m3u8',
}
```
Also feel free to change `public/fav.svg` to something fitting   
  
### **3. Install dependemcies and build**

with [Node.js](https://nodejs.org/en/download/prebuilt-installer) and npm installed run:  
```bash
npm install  
npm run build
```
> tested with Node 22.8.0 and npm 10.9.0  
  
### **4. Done 🎉**  
You can now copy the contents of `dist` to some hosting solution of your choosing (Nginx, Apache, ...) or run a preview of the build with `npm run preview`
