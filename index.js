function logOpenTabs() {
    chrome.windows.getAll({populate: true}, function(winData) {
        var tabs = [];
        for (var i in winData) {
            if (winData[i].focused === true) {
                var winTabs = winData[i].tabs;
                var totTabs = winTabs.length;
                for (var j = 0; j < totTabs; j++) {
                    tabs.push(winTabs[j].url);
                }
            }
        }
        console.log("Opened tabs:", tabs);
    });
}

logOpenTabs();

chrome.tabs.onCreated.addListener(function() {
    logOpenTabs();
});

chrome.tabs.onRemoved.addListener(function() {
    logOpenTabs();
});
