(async function(){
  let video = document.querySelector("div._5-g_._3qw video");
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
