(async function(){
  let video = document.querySelector('div.player-video video');
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
