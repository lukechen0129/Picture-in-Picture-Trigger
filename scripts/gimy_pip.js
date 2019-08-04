(async function(){
  let video = document.querySelector('video');
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
