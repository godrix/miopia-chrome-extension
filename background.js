function reddenPage() {
  const hostname = window.location.hostname;

  switch (hostname) {
    case 'web.whatsapp.com':
      addCssWhatsapp();
      break;
    case 'mail.google.com':
      addCssGmail();
      break;
  
    default:
      break;
  }

  
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: reddenPage
  });
});


function addCssWhatsapp(){
  document.head.insertAdjacentHTML('beforeend',`
  <style>
  .copyable-text, ._3m_Xw, img{
    filter: blur(4px);
  }
  
  .copyable-text:hover, ._3m_Xw:hover, img:hover{
    filter: blur(0px);
  }
  </style>
  `);
}
function addCssGmail(){
  document.head.insertAdjacentHTML('beforeend',`
  <style>
  tr, img{
    filter: blur(4px);
  }
  
  tr:hover, img:hover{
    filter: blur(0px);
  }
  </style>
  `);
}