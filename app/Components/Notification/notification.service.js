(function () {
    "use strict";
   
    angular.module('mp.components.notification')
        .factory('mpNotification', mpNotification);


    function mpNotification($window) {
        var exports = {};

        

        /**
          * Module implementing a notification service.
           * Displays a data grid.
           *
           * @module mpNotification
           * @example
       
           Using the mpNotification:
           mpNotification.notify
           message - {string}. the notify message
           type - {string}. the notify type 'success','info','warning','danger'
           title - {string}. the notify type
           settings - {json}.  all notify settings.          
          **/
        exports.notify = function (message, type, title, settings) {
            
            var notifyOptions = {};

            var notifySettings = {
                element: 'body',
                position: null,
                type: "info",
                allow_dismiss: true,
                newest_on_top: false,
                showProgressbar: false,
                placement: {
                    from: "top",
                    align: "center"
                },
                offset: 20,
                spacing: 10,
                z_index: 1031,
                delay: 5000,
                timer: 1000,
                url_target: '_blank',
                mouse_over: null,
                animate: {
                    enter: 'animated fadeInDown',
                    exit: 'animated fadeOutUp'
                },
                onShow: null,
                onShown: null,
                onClose: null,
                onClosed: null,
                icon_type: 'class',
                template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                    '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                    '<span data-notify="icon"></span> ' +
                    '<span data-notify="title">{1}</span> ' +
                    '<span data-notify="message">{2}</span>' +
                    '<div class="progress" data-notify="progressbar">' +
                        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                    '</div>' +
                    '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
            };

            if (message)
                notifyOptions.message = message;

            if (title)
                notifyOptions.title = title;

            if (type)
                notifySettings.type = type;

            if (settings)
                notifySettings = _.extend(notifySettings, options);

            $.notify(notifyOptions, notifySettings);
        };

        return exports;
    }

})();