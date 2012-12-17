/* ==========================================================================
  custom scripts
   ========================================================================== */

YUI().use('node', function (Y) {

     // Y.all('p').addClass('intro');

    var boom = Y.all('p');

    Y.log("I'm all working YO DIGGA!");

    if (boom) { // might be null
        // adds "bar" to the first paragraph descendant of #demo
        boom.addClass('intro');
    }

});



// YUI().use('node', function (Y) {
//     // Access DOM nodes.
//     var oneElementById     = Y.one('#foo'),
//         oneElementByName   = Y.one('body'),
//         allElementsByClass = Y.all('.bar');

//     // Create DOM nodes.
//     var contentNode = Y.Node.create('<div>'),
//         listNode    = Y.Node.create('<ul>'),
//         footerNode  = Y.Node.create('<footer>');

//     contentNode.setHTML('<p>Node makes it easy to add content.</p>');
//     listNode.insert('<li>Buy milk</li>');
//     footerNode.prepend('<h2>Footer Content</h2>');

//     // Manipulate DOM nodes.
//     Y.all('.important').addClass('highlight');

//     Y.one('#close-button').on('click', function () {
//         contentNode.hide();
//     });
// });




/* ==========================================================================
   FitWeird  **** USED FOR DEVELOPMENT ****
   ========================================================================== */

/*
 * A window monitor
 * Super handy for responsive design development.
 * Calculator is located in bottom right of viewport
 * More info - https://github.com/davatron5000/fitWeird
 *           - https://github.com/jhermsmeier/fitWeird
 */

(function( win, doc ){

  'use strict';

  if( !doc.getElementById( 'fitweird' ) ) {

    var div      = doc.createElement( 'div' );
    var style    = div.style;
    var fontSize = parseFloat( getComputedStyle( doc.body ).fontSize );
    var w, h;

    style.bottom          = 0;
    style.right           = 0;
    style.position        = 'fixed';
    style.backgroundColor = 'rgba(58, 58, 58, 0.8)';
    style.padding         = '0.4em 1em';
    style.color           = '#00CC00';
    style.fontFamily      = 'monospace';

    div.id = 'fitweird';
    doc.body.appendChild( div );

    var update = function() {

      w = win.innerWidth;
      h = win.innerHeight;

      div.innerHTML =
        w + 'px &times; ' + h + 'px :: ' +
        w / fontSize + 'em &times; ' + h / fontSize + 'em';

    };

    addEventListener( 'resize', update );
    update();

  }

})( this, document );