let pipBtn = document.getElementById('pip');

var host = document.getElementById('host');
var domain;
(function(){
  console.log(host);
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    console.log(tabs[0]);
    url = tabs[0].url;
    domain = extractHostname(url);
    switch (domain) {
      case "www.youtube.com": domain = "youtube";
                              break;
      case "www.twitch.tv":   domain = "twitch";
                              break;
      default:                domain = "gimy";
                              break;

    }
  });
})();
pipBtn.onclick = function(element) {
  let color = element.target.value;

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: `scripts/${domain}_pip.js`});
  });
};
function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    host.innerText = hostname;
    return hostname;
}
