(function ($, Drupal) {

  'use strict';

  /**
   * Initialise the miscellaneous JS functionality.
   */
  Drupal.behaviors.menu = {
    attach: function (context, settings) {
      $('.messages .close').click(function() {
        $(this).closest('.messages').addClass('hidden');
      });
    }
  };
})(jQuery, Drupal);
