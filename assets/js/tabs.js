'use strict';

(function(){
    $.fn.tabs = function(options){
        var settings = $.extend({
            duration:800,
            color:'gold'
        },options);

        var self = this;

        function setDataAttr(elem, dataType){
            var item = self.find('.'+elem),
                itemLen = item.length;

            for(var i =0;i<item.length;i++) {
                $(item[i]).attr(elem == 'jsTabItem' ? 'id':'data-type', dataType + '-' +itemLen);
                $(item[i]).css('z-index',itemLen);
                itemLen--;
            }
        }

        function showItem(event){
            var et = $(event.target),
                btnData;

            if(et.hasClass('jsTabBtn') && (!et.hasClass('active'))){
                btnData = et.data('type');

                self.find('.jsTabBtn').removeClass('active');
                et.addClass('active');

                self.find('.jsTabItem').hide();
                self.find('#' + btnData).fadeIn(settings.duration);
            }

        }

        setDataAttr('jsTabBtn', 'tabItem');
        setDataAttr('jsTabItem', 'tabItem');

        self.on('click', showItem);

        return this;

    }
})(jQuery);