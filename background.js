

function reddenPage() {
  const hostname = window.location.hostname;

  function addCss(css) {
    const element = document.querySelector('#style-inject');
    if (!element) {
      document.head.insertAdjacentHTML('beforeend', `
        ${css}
        `);
    } else {
      document.head.removeChild(element);
    }
  }

  switch (hostname) {
    case 'web.whatsapp.com':
      addCss(`<style id="style-inject>
      .copyable-text, ._3m_Xw, img{
        filter: blur(4px);
      }
      
      .copyable-text:hover, ._3m_Xw:hover, img:hover{
        filter: blur(0px);
      }
      </style>`);
      break;
    case 'mail.google.com':
      addCss(`<style id="style-inject">
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


