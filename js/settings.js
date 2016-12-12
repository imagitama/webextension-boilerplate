(function() {
    var browser = chrome;


    function saveOptions(e) {
        browser.storage.local.set({
            my_setting: document.querySelector("#my_setting").value
        });
    }


    function restoreOptions() {
        function setCurrentChoice(result) {
            document.querySelector("#my_setting").value = result.my_setting || "";
        }

        function onError(error) {
            console.log(`Error: ${error}`);
        }

        var getting = browser.storage.local.get(["my_setting"], setCurrentChoice);
    }


    document.addEventListener("DOMContentLoaded", restoreOptions);
    document.querySelector("form").addEventListener("submit", saveOptions);
}());