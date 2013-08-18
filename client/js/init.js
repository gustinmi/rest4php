// global namespace application object
window.html5app = {
    "log":{},
    "fn":{},
    "settings":{
        "logEnabled":"true"   //clear value for disable
    },
    "ui":{}
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
        'FOLDERS_URL' : 'http://localhost/php2e/api/get/folder/',
        'FOLDERS_ADS_URL':'http://localhost/php2e/api/q/folder/{0}/ad',
        'AD_URL' : 'http://localhost/php2e/api/get/ad/{0}'
    };

    // translations i18n strings
    html5app.settings.info = {
        "table":"Tukaj lahko listate po vaših artiklih. Izberite sekcijo, kategorijo in podkategorijo. Kliknite na vrstico v tabeli za urejanje podrobnosti.",
        "details":"Vnesite osnovne podatke o artiklu. Vnesite kontaktne podatke, če se razlikujejo od vaših podatkov.",
        "upload":"Naložite sliko, ki se bo pokazal na strani. Omejitev je 10 MB. Svetujemo vam, da sliko že prej pomanjšate na vašem računalniku.",
        "suplier_data":"Tukaj vnesete osnovne podatke o vas",
        "supplier_log":"Vnesite logo podjetja"
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

    //gui widgets
    html5app.ui.settings = {}; //podrobnosti dobavitelja
    html5app.ui.details = {};  //podrobnosti artikla

})();