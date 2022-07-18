const videoElement = document.getElementById('video');
const btn = document.getElementById('button')


//prompt to select media stream , pass to video element then play
const captureStream =  async()=> {
 try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia() ;
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata=()=>{
        videoElement.play();
    }

 }catch (err) {//handle errors here
    console.log(error);
 }

}

captureStream();

btn.addEventListener('click',async ()=> {
    btn.disabled = false ;
    await videoElement.requestPictureInPicture();
    btn.disabled = true;
})