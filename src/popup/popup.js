const $el = {
    start: document.querySelector('#handsfree-start'),
    stop: document.querySelector('#handsfree-stop'),
    status: document.querySelector('#status'),
    ckHand: document.querySelector('#ckHand')
}

chrome.storage.sync.get(['handModuleIsOn'], (result) => {
    $el.ckHand.checked = result.handModuleIsOn;
});

$el.ckHand.addEventListener('click', () => {
    chrome.storage.sync.set({ "handModuleIsOn": $el.ckHand.checked });
    if ($el.ckHand.checked == true) {
        chrome.storage.sync.set({ "handModuleIsOn": $el.ckHand.checked = true });
    }
    else {
        chrome.storage.sync.set({ "handModuleIsOn": $el.ckHand.checked = false });
    }
})

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
