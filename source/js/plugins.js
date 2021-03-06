/**
 * {{name}}
 * Plugins JS
 *
 * version: {{version}}
 * file:    {{file}}
 * author:  Squiz Australia
 * modified: {{date}}
 * @preserve
 */

/*
 * Table of Contents
 *
 * - Global
 * - Modules
{{toc}}
 */

/*
--------------------
Global
--------------------
*/

// Fallback for inadvertant console statements
if (!window.console) {
    window.console = {
        log:   function(){},
        warn:  function(){},
        error: function(){}
    };
}

/*eslint no-unused-vars: 0*/
// Source: http://davidwalsh.name/javascript-debounce-function
function debounce(func, wait) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            func.apply(context, args);
        }, wait);
    };
}


/* Mega menu appears on rollover */
/*
 *  Bootstrap Dropdown Hover - v1.0.4
 *  Open dropdown menus on mouse hover, the proper way.
 *  http://www.virtuosoft.eu/code/bootstrap-dropdown-hover/
 *
 *  Made by István Ujj-Mészáros
 *  Under Apache License v2.0 License
 */
!function(a,b,c,d){function e(b,c){this.element=a(b),this.settings=a.extend({},j,c),this._defaults=j,this._name=i,this.init()}function f(b){a("body").one("touchstart.dropdownhover",function(){l=!0}),a("body").one("mouseenter.dropdownhover",function(){l||(m=!0)}),a(".dropdown-toggle, .dropdown-menu",b.element.parent()).on("mouseenter.dropdownhover",function(){m&&!a(this).is(":hover")&&(m=!1),m&&(clearTimeout(h),b.element.parent().hasClass("open")||(k=!1,b.element.dropdown("toggle")))}),a(".dropdown-toggle, .dropdown-menu",b.element.parent()).on("mouseleave.dropdownhover",function(){m&&(k||(h=setTimeout(function(){b.element.parent().hasClass("open")&&b.element.dropdown("toggle")},b.settings.hideTimeout)))}),b.element.on("click.dropdownhover",function(a){if(m)switch(b.settings.clickBehavior){case"default":return;case"disable":a.preventDefault(),a.stopImmediatePropagation();break;case"sticky":return void(k?k=!1:(k=!0,b.element.parent().hasClass("open")&&(a.stopImmediatePropagation(),a.preventDefault())))}})}function g(b){a(".dropdown-toggle, .dropdown-menu",b.element.parent()).off(".dropdownhover"),a(".dropdown-toggle, .dropdown-menu",b.element.parent()).off(".dropdown"),b.element.off(".dropdownhover"),a("body").off(".dropdownhover")}var h,i="bootstrapDropdownHover",j={clickBehavior:"sticky",hideTimeout:200},k=!1,l=!1,m=!1;e.prototype={init:function(){return this.setClickBehavior(this.settings.clickBehavior),this.setHideTimeout(this.settings.hideTimeout),f(this),this.element},setClickBehavior:function(a){return this.settings.clickBehavior=a,this.element},setHideTimeout:function(a){return this.settings.hideTimeout=a,this.element},destroy:function(){return clearTimeout(h),g(this),this.element.data("plugin_"+i,null),this.element}},a.fn[i]=function(b){var f=arguments;if(b===d||"object"==typeof b)return a.contains(c,a(this)[0])||a('[data-toggle="dropdown"]').each(function(c,d){a(d).bootstrapDropdownHover(b)}),this.each(function(){a(this).hasClass("dropdown-toggle")&&"dropdown"===a(this).data("toggle")?a.data(this,"plugin_"+i)||a.data(this,"plugin_"+i,new e(this,b)):a('[data-toggle="dropdown"]',this).each(function(c,d){a(d).bootstrapDropdownHover(b)})});if("string"==typeof b&&"_"!==b[0]&&"init"!==b){var g;return this.each(function(){var c=a.data(this,"plugin_"+i);c instanceof e&&"function"==typeof c[b]&&(g=c[b].apply(c,Array.prototype.slice.call(f,1)))}),g!==d?g:this}}}(jQuery,window,document);




/*
--------------------
Modules
--------------------
*/
