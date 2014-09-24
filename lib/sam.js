/* globals require */
(function( global, $, undefined ) {
  'use strict';

  var sam = function( selector ) {
    return $( selector );
  };

  sam.version = '0.0.1';

  global.sam = sam;

}( window, require('../bower_components/jquery/dist/jquery') ));
