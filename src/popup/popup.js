const $el = {
    start: document.querySelector('#handsfree-start'),
    stop: document.querySelector('#handsfree-stop'),
    status: document.querySelector('#status'),
    ckHand: document.querySelector('#ckHand'),
    ddlHandGesture: document.querySelector('#ddlHandGesture'),
    sheetCode: document.querySelector('#sheetCode')
}

let previousCK;
let previousddl;
var txtInfo = document.getElementById("txtInfo");

// Get latest Sheet Code
/*
Remarks: Directly refresh chrome extension will cause system setup sheetCode value (Not Recommended)
Recommended: Stop Model instead of directly refresh
*/
chrome.storage.sync.get(['sheetCodeIsOn'], (result) => {
    if (result.sheetCodeIsOn !== null) {
        
        // To prevent system auto fill when user directly refresh extension instead stop the model
        if(!$el.start.classList.contains('d-none')){
            $el.sheetCode.value = result.sheetCodeIsOn.sheetCode;
            $el.sheetCode.readOnly = true;
        }else{
            $el.sheetCode.value = '';
            $el.sheetCode.readOnly = false;
        }
        
    } else {
        $el.sheetCode.readOnly = false;
    }
});

chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request);

        if (request.name === "sheetCodeIsOn") {
            if (request.sheetCode !== null && request.detail !== null && request.sheetID !== null) {

                // Start Model
                chrome.storage.local.get(['hasCapturedStream'], (data) => {
                    if (data.hasCapturedStream) {
                        chrome.runtime.sendMessage({ action: 'handsfreeStart' })
                        chrome.storage.sync.set({ "handStatusDrawing": "start" });
                        setHandsfreeState(true)
                    } else {
                        chrome.runtime.openOptionsPage()
                    }
                    window.close()
                })
                
                // Let content.js able know the request data
                chrome.storage.sync.set({ "sheetCodeIsOn": request });

                $el.sheetCode.value = request.sheetCode;
                $el.sheetCode.readOnly = true;
                txtInfo.innerHTML = '';

            } else {
                // Let content.js able know the request data
                chrome.storage.sync.set({ "sheetCodeIsOn": null });
                txtInfo.innerHTML = 'Sheet Code not found!';
            }
        }
    }
);

chrome.storage.sync.get(['handModuleIsOn'], (result) => {
    $el.ckHand.checked = result.handModuleIsOn;
    previousCK = result.handModuleIsOn;
});

$el.ckHand.addEventListener('click', () => {
    // Set checked for first time
    chrome.storage.sync.set({ "handModuleIsOn": $el.ckHand.checked });

    // Load previous selected hand gestureW
    if ($el.ckHand.checked == true) {
        chrome.storage.sync.set({ "handModuleIsOn": $el.ckHand.checked = true });
    }
    else {
        chrome.storage.sync.set({ "handModuleIsOn": $el.ckHand.checked = false });
    }

    // Remove text when swicth go the previous one
    if ($el.ckHand.checked != previousCK) {
        txtInfo.innerHTML = 'Please refresh page if error occur!';
    } else {
        txtInfo.innerHTML = '';
    }

})

chrome.storage.sync.get(['handGesture'], (result) => {
    var handGesture = document.getElementById("ddlHandGesture");

    // Load previous selected hand gesture
    for (let i = 0; i < handGesture.options.length; i++) {
        if (handGesture.options[i].value === result.handGesture) {
            handGesture.selectedIndex = i;
            previousddl = result.handGesture;
        }
    }
});

$el.ddlHandGesture.addEventListener('change', (event) => {
    chrome.storage.sync.set({ "handGesture": event.target.value });

    // Remove text when swicth go the previous one
    if ($el.ddlHandGesture.value != previousddl) {
        if ($el.ddlHandGesture.value != "mouse") {
            txtInfo.innerHTML = 'Please refresh page if error occur!';
        } else {
            txtInfo.innerHTML = 'Please refresh page to apply mouse!';
        }

    } else {
        txtInfo.innerHTML = '';
    }
});

// Listen to any changes on the storage
chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (key in changes) {
        var storageChange = changes[key];

        // For the shortcut key (Mouse excluded)
        if (key === "handGesture") {

            var handGesture = document.getElementById("ddlHandGesture");

            // Chnage the options based on the shortcut key
            for (let i = 0; i < handGesture.options.length; i++) {
                if (handGesture.options[i].value === storageChange.newValue) {
                    handGesture.selectedIndex = i;
                    previousddl = storageChange.newValue;
                }
            }
        }
    }
});

/**
 * Start the webcam
 * - If the user hasn't approved permissions yet, then visit the options page first
 */
$el.start.addEventListener('click', () => {
    var sheetID = document.getElementById('sheetCode');
    if (sheetID.value !== "") {

        if (/^\d{6}$/.test(sheetID.value)) {

            txtInfo.innerHTML = 'Connecting...';

            // Sned message to background to check whether sheet code is valid
            var data = {
                name: 'sheetCode',
                code: sheetID.value,
            }
            chrome.runtime.sendMessage(data);

        } else {
            txtInfo.innerHTML = 'Please Enter 6 digit number only!';
        }

    } else {
        txtInfo.innerHTML = 'Please Enter Sheet Code!';
    }

})

/**
 * Stop the webcam
 */
$el.stop.addEventListener('click', () => {
    setHandsfreeState(false)
    chrome.runtime.sendMessage({ action: 'handsfreeStop' })
    chrome.storage.sync.set({ "handStatusDrawing": "stop" });
    chrome.storage.sync.set({ "sheetCodeIsOn": null });
    window.close()
})

/**
 * Sets the button and label class
 */
function setHandsfreeState(isStarted) {
    if (isStarted) {
        $el.start.classList.add('d-none');
        $el.stop.classList.remove('d-none');

        $el.status.classList.add('label-success');
        $el.status.classList.remove('label-error');
        $el.status.innerHTML = 'Started';

    } else {
        $el.start.classList.remove('d-none');
        $el.stop.classList.add('d-none');

        $el.status.classList.remove('label-success');
        $el.status.classList.add('label-error');
        $el.status.innerHTML = 'Uninitialized';
    }
}

chrome.storage.local.get(['isHandsfreeStarted'], function (data) {
    setHandsfreeState(data.isHandsfreeStarted)
})
