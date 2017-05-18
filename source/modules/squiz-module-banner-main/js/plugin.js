/**
 * squiz-module-banner-main jQuery plugin
 * @copyright Squiz
 * @preserve
 */
(function($, window, document, undefined) {
    'use strict';

    var pluginName = "squizModuleBannerMain",
        defaults = {
            propertyName: "value"
        };

    /**
     * squiz-module-banner-main jQuery Plugin
     * @constructor
     * @param  {object} elem    The DOM element
     * @param  {object} options JSON hash of options to apply
     * @return {void}
     */
    function squizModuleBannerMain(elem, options) {
        this.elem = elem;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }//end squizModuleBannerMain constructor

    // Public methods
    squizModuleBannerMain.prototype = {
        /**
         * Plugin initialisation
         * @return {void}
         */
        init: function() {

        },

        /**
         * [yourOtherFunction description]
         * @return {[type]}
         */
        yourOtherFunction: function() {

        }
    };

    // Use the lightweight plugin wrapper to prevent against multiple instantiations.
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new squizModuleBannerMain(this, options));
            }
        });
    };

})(jQuery, window, document);