function reddenPage() {
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

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: reddenPage
  });
});