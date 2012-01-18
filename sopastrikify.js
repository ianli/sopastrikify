/*!
 * SOPAStrikify.js
 * http://github.com/ianli/sopastrikify/
 *
 * Copyright 2012 Ian Li, http://ianli.com
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 */

(function (undefined) {
  var url = 'http://sopastrike.com/strike',
      d = new Date(),
      day = d.getDate(),
      month = d.getMonth(),
      year = d.getFullYear(),
      hour = d.getHours() + d.getTimezoneOffset() / 60,
      
      // Non-jQuery version of SOPAStrikify.
      sopaStrikify = function () {
        // Create the IFrame.
        var iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.style.cssText = 'position:absolute;top:0;width:100%;height:100%;z-index:1000000000;border:none;';

        // Append it to the body.
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(iframe);

        // Disable scrolling on the HTML.
        body.style.cssText = 'overflow:hidden';
      },
      
      // jQuery version of SOPAStrikify.
      sopaStrikifyJQuery = function () {
        // Create the IFrame.
        $('<iframe></iframe>')
          .attr('src', url)
          .css({
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            zIndex: '1000000000',
            border: 'none'
          })

          // Prepend it to the body.
          .prependTo('body');

        // Disable scrolling on the HTML.
        $('body').css({
          overflow: 'hidden'
        });
      };
  
  if (18 == day && 0 == month && 2012 == year && 13 <= hour && 24 >= hour) {
  
    if (typeof jQuery === 'undefined') {
      
      window.onload = function () {
        sopaStrikify();
      };
    
    } else {
      
      $(function () {
        sopaStrikifyJQuery();
      });
      
    }
    
  }
})();