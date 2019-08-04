(async function(){
  let video = document.getElementsByClassName("video-stream html5-main-video")[0];
  try {
    if (video !== document.pictureInPictureElement) {
      await video.requestPictureInPicture();
    }else{
      await document.exitPictureInPicture();
    }
  } catch(error) {
    log(`> Argh! ${error}`);
  }
})();
