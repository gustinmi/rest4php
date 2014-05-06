// global namespace application object
window.html5app = {
    "log":{},
    "fn":{},
    "settings":{
        "logEnabled":"true"   //clear value for disable
    },
    "ui":{},
    "i18n":{}
};

/**
 * Extension of build-in object
 * sprintf replacement
 * @see http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
 */
(function () {
    if (!String.prototype.format) {
        String.prototype.format = function() {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function(match, number) {
                return typeof args[number] != 'undefined'
                    ? args[number]
                    : match
                    ;
            });
        };
    }
})();

(function () {

    // API urls
    html5app.settings.api = {
        'FOLDERS_URL' : 'http://localhost/restapi/api/get/folder/',
        'FOLDERS_ADS_URL':'http://localhost/restapi/api/q/folder/{0}/ad',
        'AD_URL' : 'http://localhost/restapi/api/get/ad/{0}',
        'SAVE_AD' : 'http://localhost/restapi/api/set/ad/'
    };

    // translations i18n strings
    html5app.settings.i18n = {
        "en" : {
            "info":"This is demo application.",
            "details":"To add another language simply add new object to this array."
        }
    };

    html5app.StringBuilder = function (e) {
        this.strings = new Array("");
        this.append(e);
    }
    html5app.StringBuilder.prototype.append = function (e) {
        if (e) {
            this.strings.push(e)
        }
    };
    html5app.StringBuilder.prototype.clear = function () {
        this.strings.length = 1
    };
    html5app.StringBuilder.prototype.toString = function () {
        return this.strings.join("")
    };

})();
