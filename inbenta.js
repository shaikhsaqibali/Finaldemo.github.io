(function()
{
  var ENV = 1; // Prod=1, Stg=1, Local=2
  var url = window.location.href;

  if (url.indexOf('ticketbis_avatar') > 0) {
    ENV = 2;
  }

  if (url.indexOf('staging') > 0) {
    ENV = 0; // stg
  }

  var params = [];
  var paramScript = '';
  var aux = '';
  Object.keys(params).forEach(function(key) {
    aux = key + '=' + params[key] + '&';
    paramScript = paramScript + aux;
  });
  paramScript = paramScript.substring(0, paramScript.length - 1);

  // Add conf JS
  var INB_JS_SDK = document.createElement("script");

  if (ENV === 0) {
    INB_JS_SDK.src = 'https://e03.inbenta.com/ticketbis_avatar_staging/conf/inbenta-conf.js?' + paramScript;
  }else if (ENV === 1) {
    INB_JS_SDK.src = '//ticketbis.inbenta.com/conf/inbenta-conf.js?' + paramScript;
  }else if (ENV === 2) {
    INB_JS_SDK.src = '../conf/inbenta-conf.js?' + paramScript;
  }
  INB_JS_SDK.id = 'inbenta-conf';
  document.head.appendChild(INB_JS_SDK);

  // Remove static widget
  var element =  document.getElementsByClassName('virtual-assistant-container')
  if (typeof(element[0]) !== 'undefined' && element[0] != null) {
      element[0].remove();
  }

})();
