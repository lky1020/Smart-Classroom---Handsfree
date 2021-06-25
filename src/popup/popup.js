const $el = {
    start: document.querySelector('#handsfree-start'),
    stop: document.querySelector('#handsfree-stop'),
    status: document.querySelector('#status'),
    ckHand: document.querySelector('#ckHand'),
    ddlHandGesture: document.querySelector('#ddlHandGesture')
}

let previousCK;
let previousddl;
var txtInfo = document.getElementById("txtInfo");

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
        txtInfo.innerHTML = 'Please refresh Meet to apply change!';
    }else{
        txtInfo.innerHTML = '';
    }
    
})

chrome.storage.sync.get(['handGesture'], (result) => {
    var handGesture = document.getElementById("ddlHandGesture");
    
    // Load previous selected hand gesture
    for(let i = 0; i < handGesture.options.length; i++){
        if(handGesture.options[i].value === result.handGesture){
            handGesture.selectedIndex = i;
            previousddl = result.handGesture;
        }
    }
});

$el.ddlHandGesture.addEventListener('change', (event) => {
    chrome.storage.sync.set({ "handGesture": event.target.value});

    // Remove text when swicth go the previous one
    if ($el.ddlHandGesture.value != previousddl) {
        txtInfo.innerHTML = 'Please refresh Meet to apply change!';
    }else{
        txtInfo.innerHTML = '';
    }
});

/**
 * Start the webcam
 * - If the user hasn't approved permissions yet, then visit the options page first
 */
$el.start.addEventListener('click', () => {
    chrome.storage.local.get(['hasCapturedStream'], (data) => {
        if (data.hasCapturedStream) {
            chrome.runtime.sendMessage({ action: 'handsfreeStart' })
            setHandsfreeState(true)
        } else {
            chrome.runtime.openOptionsPage()
        }
        window.close()
    })
})

/**
 * Stop the webcam
 */
$el.stop.addEventListener('click', () => {
    setHandsfreeState(false)
    chrome.runtime.sendMessage({ action: 'handsfreeStop' })
    window.close()
})

/**
 * Sets the button class
 */
function setHandsfreeState(isStarted) {
    if (isStarted) {
        $el.start.classList.add('d-none')
        $el.stop.classList.remove('d-none')

        $el.status.classList.add('label-success');
        $el.status.classList.remove('label-error');
        $el.status.innerHTML = 'Started';

    } else {
        $el.start.classList.remove('d-none')
        $el.stop.classList.add('d-none')

        $el.status.classList.remove('label-success');
        $el.status.classList.add('label-error');
        $el.status.innerHTML = 'Uninitialized';
    }
}
chrome.storage.local.get(['isHandsfreeStarted'], function (data) {
    setHandsfreeState(data.isHandsfreeStarted)
})
