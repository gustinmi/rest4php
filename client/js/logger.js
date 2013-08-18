/**
 * Simple logging framwork
 * Supports Chrome Webkit or Firefox Gecko
 * Usage:
 *
 * html5app.log.info('Dropdown value changed to something new!');
 *
 * @author gustinmi@gmail.com
 */

window.html5app ? window.html5app.log =  {} : window.html5app = {"log" : {}};

//create logging functions
(function () {
    var log_enabled = html5app.settings && html5app.settings.logEnabled ? html5app.settings.logEnabled : true;
        assembleOutput = function (stuff, e) {
            var lines = [ stuff ];
            if (e && e.stack) lines.push(e.stack);
            return lines.join('\n');
        };

    //for chrome
    if (window.console && console.log) {
        html5app.log.debug = function (stuff, e) {
            if (log_enabled) console.log(assembleOutput('DEBUG: ' + stuff, e));
        };
        html5app.log.info = function (stuff, e) {
            if (log_enabled) console.log(assembleOutput('INFO: ' + stuff, e));
        };
        html5app.log.error = function (stuff, e) {
            if (log_enabled) console.log(assembleOutput('ERROR: ' + stuff, e));
        };
    }
    else { //for firefox
        html5app.log.debug = function (stuff, e) {
            if (log_enabled) dump(assembleOutput('DEBUG: ' + stuff, e));
        };
        html5app.log.info = function (stuff, e) {
            if (log_enabled) dump(assembleOutput('INFO: ' + stuff, e));
        };
        html5app.log.error = function (stuff, e) {
            if (log_enabled) dump(assembleOutput('ERROR: ' + stuff, e));
        };
    }
})();