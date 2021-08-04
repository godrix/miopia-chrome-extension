

function reddenPage() {
  const hostname = window.location.hostname;

  function addCss(css) {
    document.head.insertAdjacentHTML('beforeend', `
    ${css}
    `);
  }

  switch (hostname) {
    case 'web.whatsapp.com':
      addCss(`<style>
      .copyable-text, ._3m_Xw, img{
        filter: blur(4px);
      }
      
      .copyable-text:hover, ._3m_Xw:hover, img:hover{
        filter: blur(0px);
      }
      </style>`);
      break;
    case 'mail.google.com':
      addCss(`<style>
      tr, img{
        filter: blur(4px);
      }
      
      tr:hover, img:hover{
        filter: blur(0px);
      }
      </style>`);
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


