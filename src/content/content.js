const handsfree = new Handsfree({
    isClient: true,
    hands: {
        enabled: true,
        maxNumHands: 1,
        minDetectionConfidence: 0.85,
        minTrackingConfidence: 0.5
    }
})

const state = {
    video: null,
    canvas: null,
    statusBox: null,
    handModuleIsOn: true,
    handGesture: null,
    handStatusDrawing: null,
    previousGesture: null // used to prevent gesture perfrom too many time
};

const numberGestureArr = ["One", "Two", "Three", "Four", "Five"];
const signGestureArr = ["Help", "Thank_You", "Nice,I'm_Good", "No_Question", "Webcam_Microphone", "Stick_Captions"];

document.onkeydown = keydown;

function keydown(evt) {
    if (!evt) {
        evt = event;
    }

    // Only available for number && sign (Mouse eexcluded)
    if (evt.ctrlKey && evt.shiftKey && evt.keyCode == 49) { // CTRL + Shift + 1
        if (state.handStatusDrawing === 'start') {

            state.handGesture = "number";
            chrome.storage.sync.set({ "handGesture": "number" });

        } else {

            alert("Please start the model first!");

        }
    }
    else if (evt.ctrlKey && evt.shiftKey && evt.keyCode == 50) { // CTRL + Shift + 2
        if (state.handStatusDrawing === 'start') {

            state.handGesture = "sign";
            chrome.storage.sync.set({ "handGesture": "sign" });

        } else {

            alert("Please start the model first!");

        }
    }
}

document.body.onkeypress = function (e) {
    console.log(e);
}

function number_gesture() {
    // One
    handsfree.useGesture({
        "name": "One",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": "8.5",
        "description": [
            [
                "addCurl",
                "Thumb",
                "HalfCurl",
                1
            ],
            [
                "addCurl",
                "Thumb",
                "NoCurl",
                0.8125
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpRight",
                0.6428571428571429
            ],
            [
                "addDirection",
                "Thumb",
                "VerticalUp",
                0.42857142857142855
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpLeft",
                1
            ],
            [
                "addCurl",
                "Index",
                "NoCurl",
                1
            ],
            [
                "addCurl",
                "Index",
                "HalfCurl",
                0.03571428571428571
            ],
            [
                "addDirection",
                "Index",
                "VerticalUp",
                1
            ],
            [
                "addCurl",
                "Middle",
                "FullCurl",
                1
            ],
            [
                "addDirection",
                "Middle",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpLeft",
                0.7058823529411765
            ],
            [
                "addCurl",
                "Ring",
                "FullCurl",
                1
            ],
            [
                "addDirection",
                "Ring",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpLeft",
                0.2608695652173913
            ],
            [
                "addCurl",
                "Pinky",
                "FullCurl",
                1
            ],
            [
                "addCurl",
                "Pinky",
                "HalfCurl",
                0.03571428571428571
            ],
            [
                "addDirection",
                "Pinky",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpRight",
                0.125
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpLeft",
                0.6875
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpLeft",
                0.6428571428571429
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpRight",
                0.7058823529411765
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpRight",
                0.2608695652173913
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpLeft",
                0.125
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpRight",
                0.6875
            ],
            [
                "setWeight",
                "Index",
                2
            ]
        ],
        "enabled": true
    })

    // Two
    handsfree.useGesture({
        "name": "Two",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": "8.5",
        "description": [
            [
                "addCurl",
                "Thumb",
                "NoCurl",
                1
            ],
            [
                "addCurl",
                "Thumb",
                "HalfCurl",
                0.6875
            ],
            [
                "addCurl",
                "Thumb",
                "FullCurl",
                0.0625
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Thumb",
                "VerticalUp",
                0.05555555555555555
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpLeft",
                0.5
            ],
            [
                "addCurl",
                "Index",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Index",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Index",
                "DiagonalUpLeft",
                0.037037037037037035
            ],
            [
                "addCurl",
                "Middle",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Middle",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpLeft",
                0.4
            ],
            [
                "addCurl",
                "Ring",
                "FullCurl",
                1
            ],
            [
                "addDirection",
                "Ring",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpLeft",
                0.3333333333333333
            ],
            [
                "addCurl",
                "Pinky",
                "FullCurl",
                1
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Pinky",
                "VerticalUp",
                0.125
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpLeft",
                0.625
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpLeft",
                1
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpRight",
                0.5
            ],
            [
                "addDirection",
                "Index",
                "DiagonalUpRight",
                0.037037037037037035
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpRight",
                0.4
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpRight",
                0.3333333333333333
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpLeft",
                1
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpRight",
                0.625
            ],
            [
                "setWeight",
                "Index",
                2
            ],
            [
                "setWeight",
                "Middle",
                2
            ]
        ],
        "enabled": true
    })

    // Three
    handsfree.useGesture({
        "name": "Three",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": "8.5",
        "description": [
            [
                "addCurl",
                "Thumb",
                "NoCurl",
                1
            ],
            [
                "addCurl",
                "Thumb",
                "HalfCurl",
                0.42857142857142855
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Thumb",
                "VerticalUp",
                0.35
            ],
            [
                "addDirection",
                "Thumb",
                "HorizontalRight",
                0.15
            ],
            [
                "addCurl",
                "Index",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Index",
                "VerticalUp",
                0.42857142857142855
            ],
            [
                "addDirection",
                "Index",
                "DiagonalUpLeft",
                1
            ],
            [
                "addCurl",
                "Middle",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Middle",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpLeft",
                0.034482758620689655
            ],
            [
                "addCurl",
                "Ring",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Ring",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpRight",
                0.2
            ],
            [
                "addCurl",
                "Pinky",
                "HalfCurl",
                0.1111111111111111
            ],
            [
                "addCurl",
                "Pinky",
                "FullCurl",
                1
            ],
            [
                "addDirection",
                "Pinky",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpLeft",
                0.7272727272727273
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpLeft",
                1
            ],
            [
                "addDirection",
                "Thumb",
                "HorizontalLeft",
                0.15
            ],
            [
                "addDirection",
                "Index",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpRight",
                0.034482758620689655
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpLeft",
                0.2
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpRight",
                0.7272727272727273
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpLeft",
                1
            ],
            [
                "setWeight",
                "Index",
                2
            ],
            [
                "setWeight",
                "Middle",
                2
            ],
            [
                "setWeight",
                "Ring",
                2
            ]
        ],
        "enabled": true
    })

    // Four
    handsfree.useGesture({
        "name": "Four",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": "8.5",
        "description": [
            [
                "addCurl",
                "Thumb",
                "HalfCurl",
                1
            ],
            [
                "addCurl",
                "Thumb",
                "FullCurl",
                0.875
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Thumb",
                "VerticalUp",
                0.4
            ],
            [
                "addCurl",
                "Index",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Index",
                "DiagonalUpLeft",
                1
            ],
            [
                "addDirection",
                "Index",
                "VerticalUp",
                0.6666666666666666
            ],
            [
                "addCurl",
                "Middle",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Middle",
                "VerticalUp",
                0.9090909090909091
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpRight",
                0.8181818181818182
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpLeft",
                1
            ],
            [
                "addCurl",
                "Ring",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Ring",
                "VerticalUp",
                0.9166666666666666
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpLeft",
                0.5833333333333334
            ],
            [
                "addCurl",
                "Pinky",
                "NoCurl",
                1
            ],
            [
                "addCurl",
                "Pinky",
                "FullCurl",
                0.2857142857142857
            ],
            [
                "addCurl",
                "Pinky",
                "HalfCurl",
                0.14285714285714285
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Pinky",
                "VerticalUp",
                0.5
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpLeft",
                1
            ],
            [
                "addDirection",
                "Index",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpLeft",
                0.8181818181818182
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpLeft",
                1
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpRight",
                0.5833333333333334
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpLeft",
                1
            ],
            [
                "setWeight",
                "Index",
                2
            ],
            [
                "setWeight",
                "Middle",
                2
            ],
            [
                "setWeight",
                "Ring",
                2
            ],
            [
                "setWeight",
                "Pinky",
                2
            ]
        ],
        "enabled": true
    })

    // Five
    handsfree.useGesture({
        "name": "Five",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": "8.5",
        "description": [
            [
                "addCurl",
                "Thumb",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpLeft",
                1
            ],
            [
                "addDirection",
                "Thumb",
                "VerticalUp",
                0.2631578947368421
            ],
            [
                "addDirection",
                "Thumb",
                "HorizontalLeft",
                0.3157894736842105
            ],
            [
                "addCurl",
                "Index",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Index",
                "DiagonalUpLeft",
                1
            ],
            [
                "addDirection",
                "Index",
                "VerticalUp",
                0.5789473684210527
            ],
            [
                "addCurl",
                "Middle",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Middle",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpRight",
                0.42857142857142855
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpLeft",
                0.7142857142857143
            ],
            [
                "addCurl",
                "Ring",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Ring",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpRight",
                0.8461538461538461
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpLeft",
                0.46153846153846156
            ],
            [
                "addCurl",
                "Pinky",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Pinky",
                "VerticalUp",
                0.5
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Thumb",
                "HorizontalRight",
                0.3157894736842105
            ],
            [
                "addDirection",
                "Index",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpLeft",
                0.42857142857142855
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpRight",
                0.7142857142857143
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpLeft",
                0.8461538461538461
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpRight",
                0.46153846153846156
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpLeft",
                1
            ],
            [
                "setWeight",
                "Thumb",
                2
            ],
            [
                "setWeight",
                "Index",
                2
            ],
            [
                "setWeight",
                "Middle",
                2
            ],
            [
                "setWeight",
                "Ring",
                2
            ],
            [
                "setWeight",
                "Pinky",
                2
            ]
        ],
        "enabled": true
    })
}

function sign_gesture() {
    // Help
    handsfree.useGesture({
        "name": "Help",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": "8.5",
        "description": [
            [
                "addCurl",
                "Thumb",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Thumb",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpLeft",
                0.42857142857142855
            ],
            [
                "addCurl",
                "Index",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Index",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Index",
                "DiagonalUpLeft",
                0.25
            ],
            [
                "addCurl",
                "Middle",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Middle",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpRight",
                0.14285714285714285
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpLeft",
                0.2857142857142857
            ],
            [
                "addCurl",
                "Ring",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Ring",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpRight",
                0.23809523809523808
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpLeft",
                0.19047619047619047
            ],
            [
                "addCurl",
                "Pinky",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Pinky",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpRight",
                0.20833333333333334
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpLeft",
                0.041666666666666664
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpRight",
                0.42857142857142855
            ],
            [
                "addDirection",
                "Index",
                "DiagonalUpRight",
                0.25
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpLeft",
                0.14285714285714285
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpRight",
                0.2857142857142857
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpLeft",
                0.23809523809523808
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpRight",
                0.19047619047619047
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpLeft",
                0.20833333333333334
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpRight",
                0.041666666666666664
            ],
            [
                "setWeight",
                "Thumb",
                2
            ],
            [
                "setWeight",
                "Index",
                2
            ],
            [
                "setWeight",
                "Middle",
                2
            ],
            [
                "setWeight",
                "Ring",
                2
            ],
            [
                "setWeight",
                "Pinky",
                2
            ]
        ],
        "enabled": true
    })

    // Thank_You
    handsfree.useGesture({
        "name": "Thank_You",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": "8.5",
        "description": [
            [
                "addCurl",
                "Thumb",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpLeft",
                1
            ],
            [
                "addDirection",
                "Thumb",
                "VerticalUp",
                0.1111111111111111
            ],
            [
                "addCurl",
                "Index",
                "FullCurl",
                1
            ],
            [
                "addDirection",
                "Index",
                "DiagonalUpLeft",
                1
            ],
            [
                "addDirection",
                "Index",
                "HorizontalLeft",
                1
            ],
            [
                "addCurl",
                "Middle",
                "FullCurl",
                1
            ],
            [
                "addDirection",
                "Middle",
                "HorizontalLeft",
                1
            ],
            [
                "addCurl",
                "Ring",
                "FullCurl",
                1
            ],
            [
                "addDirection",
                "Ring",
                "HorizontalLeft",
                1
            ],
            [
                "addCurl",
                "Pinky",
                "FullCurl",
                1
            ],
            [
                "addDirection",
                "Pinky",
                "HorizontalLeft",
                1
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Index",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Index",
                "HorizontalRight",
                1
            ],
            [
                "addDirection",
                "Middle",
                "HorizontalRight",
                1
            ],
            [
                "addDirection",
                "Ring",
                "HorizontalRight",
                1
            ],
            [
                "addDirection",
                "Pinky",
                "HorizontalRight",
                1
            ],
            [
                "setWeight",
                "Thumb",
                2
            ]
        ],
        "enabled": true
    })

    // Nice,I'm_Good
    handsfree.useGesture({
        "name": "Nice,I'm_Good",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": "8.5",
        "description": [
            [
                "addCurl",
                "Thumb",
                "NoCurl",
                1
            ],
            [
                "addCurl",
                "Thumb",
                "HalfCurl",
                0.6111111111111112
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Thumb",
                "VerticalUp",
                0.16
            ],
            [
                "addCurl",
                "Index",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Index",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Index",
                "DiagonalUpLeft",
                0.5263157894736842
            ],
            [
                "addCurl",
                "Middle",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Middle",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpRight",
                0.5625
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpLeft",
                0.25
            ],
            [
                "addCurl",
                "Ring",
                "FullCurl",
                1
            ],
            [
                "addDirection",
                "Ring",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpRight",
                0.38095238095238093
            ],
            [
                "addCurl",
                "Pinky",
                "FullCurl",
                1
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Pinky",
                "VerticalUp",
                0.45
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpLeft",
                1
            ],
            [
                "addDirection",
                "Index",
                "DiagonalUpRight",
                0.5263157894736842
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpLeft",
                0.5625
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpRight",
                0.25
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpLeft",
                0.38095238095238093
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpLeft",
                1
            ],
            [
                "setWeight",
                "Index",
                2
            ],
            [
                "setWeight",
                "Middle",
                2
            ]
        ],
        "enabled": true
    })

    // No_Question
    handsfree.useGesture({
        "name": "No_Question",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": "8.5",
        "description": [
            [
                "addCurl",
                "Thumb",
                "HalfCurl",
                1
            ],
            [
                "addCurl",
                "Thumb",
                "FullCurl",
                0.30434782608695654
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Thumb",
                "VerticalUp",
                0.6666666666666666
            ],
            [
                "addCurl",
                "Index",
                "FullCurl",
                1
            ],
            [
                "addDirection",
                "Index",
                "DiagonalUpLeft",
                1
            ],
            [
                "addDirection",
                "Index",
                "VerticalUp",
                0.36363636363636365
            ],
            [
                "addCurl",
                "Middle",
                "FullCurl",
                1
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpLeft",
                0.5789473684210527
            ],
            [
                "addDirection",
                "Middle",
                "VerticalUp",
                1
            ],
            [
                "addCurl",
                "Ring",
                "FullCurl",
                1
            ],
            [
                "addDirection",
                "Ring",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpRight",
                0.08
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpLeft",
                0.12
            ],
            [
                "addCurl",
                "Pinky",
                "FullCurl",
                1
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Pinky",
                "VerticalUp",
                0.25
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpLeft",
                1
            ],
            [
                "addDirection",
                "Index",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpRight",
                0.5789473684210527
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpLeft",
                0.08
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpRight",
                0.12
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpLeft",
                1
            ]
        ],
        "enabled": true
    })

    // Webcam_Microphone
    handsfree.useGesture({
        "name": "Webcam_Microphone",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": "8.5",
        "description": [
            [
                "addCurl",
                "Thumb",
                "HalfCurl",
                1
            ],
            [
                "addDirection",
                "Thumb",
                "VerticalUp",
                0.2631578947368421
            ],
            [
                "addCurl",
                "Index",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Index",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Index",
                "DiagonalUpLeft",
                0.3333333333333333
            ],
            [
                "addCurl",
                "Middle",
                "FullCurl",
                1
            ],
            [
                "addDirection",
                "Middle",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpLeft",
                0.3333333333333333
            ],
            [
                "addCurl",
                "Ring",
                "FullCurl",
                1
            ],
            [
                "addDirection",
                "Ring",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpLeft",
                0.2
            ],
            [
                "addCurl",
                "Pinky",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Pinky",
                "VerticalUp",
                0.5
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpLeft",
                1
            ],
            [
                "addDirection",
                "Index",
                "DiagonalUpRight",
                0.3333333333333333
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpRight",
                0.3333333333333333
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpRight",
                0.2
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpLeft",
                1
            ],
            [
                "setWeight",
                "Index",
                2
            ],
            [
                "setWeight",
                "Pinky",
                2
            ]
        ],
        "enabled": true
    })

    // Stick_Captions
    handsfree.useGesture({
        "name": "Stick_Captions",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": "8.5",
        "description": [
            [
                "addCurl",
                "Thumb",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpLeft",
                1
            ],
            [
                "addCurl",
                "Index",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Index",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Index",
                "DiagonalUpLeft",
                0.5
            ],
            [
                "addCurl",
                "Middle",
                "FullCurl",
                1
            ],
            [
                "addDirection",
                "Middle",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpLeft",
                0.36363636363636365
            ],
            [
                "addCurl",
                "Ring",
                "FullCurl",
                1
            ],
            [
                "addDirection",
                "Ring",
                "VerticalUp",
                1
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpLeft",
                0.07142857142857142
            ],
            [
                "addCurl",
                "Pinky",
                "NoCurl",
                1
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Pinky",
                "VerticalUp",
                0.6666666666666666
            ],
            [
                "addDirection",
                "Thumb",
                "DiagonalUpRight",
                1
            ],
            [
                "addDirection",
                "Index",
                "DiagonalUpRight",
                0.5
            ],
            [
                "addDirection",
                "Middle",
                "DiagonalUpRight",
                0.36363636363636365
            ],
            [
                "addDirection",
                "Ring",
                "DiagonalUpRight",
                0.07142857142857142
            ],
            [
                "addDirection",
                "Pinky",
                "DiagonalUpLeft",
                1
            ],
            [
                "setWeight",
                "Thumb",
                2
            ],
            [
                "setWeight",
                "Index",
                2
            ],
            [
                "setWeight",
                "Pinky",
                2
            ]
        ],
        "enabled": true
    })
}

// /**
//  * Handle messages from background script
//  */
chrome.runtime.onMessage.addListener(function (message) {
    switch (message.action) {
        case 'handsfree-data':
            handsfree.runPlugins(message.data)
            break

        case 'handsfree-debug':
            console.log(message.data)
            break
    }
})

async function overrideGetUserMedia() {
    //Create canvas use for replace the Google Meet Video
    var canvas = document.createElement("canvas");
    canvas.setAttribute("id", "sourceCanvas");
    canvas.setAttribute("style", "display:none");
    document.documentElement.appendChild(canvas);
    state.canvas = canvas;

    //Create status box for display message
    var statusBox = document.createElement("div");
    statusBox.setAttribute("id", "statusBox");
    statusBox.setAttribute("style",
        "width: 175px; height: 25px; color: white; position: absolute; z-index: 999; padding: 5px 5px 0px 5px");
    document.body.appendChild(statusBox);
    state.statusBox = statusBox;

    //Get user video for replace the video in Google Meet
    injectMediaSourceSwap();

    // set up the mutation observer
    var observer = new MutationObserver(function (mutations, me) {
        // `mutations` is an array of mutations that occurred
        // `me` is the MutationObserver instance

        var canvas = document.getElementById("realVideo");
        if (canvas) {
            // console.log('I\'m In!');
            realVideoAdded(canvas);
            me.disconnect(); // stop observing
            return;
        }
    });

    // start observing
    observer.observe(document, {
        childList: true,
        subtree: true,
    });
}

function realVideoAdded(video) {
    state.video = video;
    // console.log(video);

    video.onloadedmetadata = function () {
        //Set Width and Height
        state.video.width = state.video.videoWidth;
        state.video.height = state.video.videoHeight;
        state.canvas.width = state.video.width;
        state.canvas.height = state.video.height;

        state.video.play();

        handPoseInRealTime();
    };

}

async function start() {
    await loadState();
    loadHandGesture();
    overrideGetUserMedia();
}

async function loadState() {
    state.handModuleIsOn = (await browser.storage.sync.get(["handModuleIsOn"])).handModuleIsOn;
    state.handGesture = (await browser.storage.sync.get(["handGesture"])).handGesture;
    state.handStatusDrawing = (await browser.storage.sync.get(["handStatusDrawing"])).handStatusDrawing;
}

// Listen to any changes on the storage
chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (key in changes) {
        var storageChange = changes[key];

        if (key === "handModuleIsOn") {
            state.handModuleIsOn = storageChange.newValue;

        } else if (key === "handGesture") {
            state.handGesture = storageChange.newValue;

        } else if (key === "handStatusDrawing") {
            state.handStatusDrawing = storageChange.newValue;
        }
    }
});

function loadHandGesture() {
    number_gesture();
    sign_gesture();

    if (state.handGesture === 'mouse') {
        handsfree.use('pinchClick', ({ hands }) => {
            if (!hands.multiHandLandmarks) return

            handsfree.enablePlugins('browser');

            hands.pointer.forEach((pointer, hand) => {
                if (pointer.isVisible && hands.pinchState[hand][0] === 'start') {
                    const $el = document.elementFromPoint(pointer.x, pointer.y)
                    if ($el) {
                        $el.dispatchEvent(
                            new MouseEvent('click', {
                                bubbles: true,
                                cancelable: true,
                                clientX: pointer.x,
                                clientY: pointer.y
                            })
                        )

                        // Focus
                        if (['INPUT', 'TEXTAREA', 'BUTTON', 'A'].includes($el.nodeName))
                            $el.focus()
                    }
                }
            })
        })
    } else {
        handsfree.disablePlugins('browser');
    }
}

function handGestureAction(gestureName) {

    if (gestureName !== state.previousGesture) {

        state.previousGesture = gestureName;

        // Index 2 == meet chatbox
        var chatbox = document.querySelectorAll('[jsname="A5il2e"]');

        if (chatbox.length != 0) {

            if (chatbox[2].ariaPressed === "false") {
                chatbox[2].click();

                // Wait for Google Meet to open the Chat Box
                var delayInMilliseconds = 500; //0.5 second

                setTimeout(function () {
                    var textarea = document.getElementsByTagName("textarea");;

                    if (textarea != null) {
                        console.log(textarea[0]);
                        textarea[0].click();
                        textarea[0].value = 'ChatBot: ' + gestureName;
                        var chatBtn = document.querySelector('[jsname="ksKsZd"]');
                        // console.log(chatBtn);
                        // Maybe consider directly keydown Enter key
                        if (chatBtn !== null) {
                            chatBtn.click();
                        }

                        // chatbox[2].click();
                    }
                }, delayInMilliseconds);

            }
        }

        if (state.handGesture === 'number') {

            // Delay first

        } else if (state.handGesture === 'sign') {

            switch (gestureName) {
                case "Help":
                    var help = document.querySelector('[jsname="SqzZRd"]');
                    if (help != null) {
                        help.click();
                    }
                    return

                case "Thank_You":
                    return

                case "Nice,I'm_Good":
                    return

                case "No_Question":
                    return

                case "Webcam_Microphone":
                    var webcam_microphone = document.querySelectorAll('[jsname="BOHaEe"]');
                    webcam_microphone[0].click();
                    webcam_microphone[1].click();

                    return

                case "Stick_Captions":
                    var cap = document.querySelector('[jsname="r8qRAd"]');
                    if (cap !== null) {
                        cap.click();
                    }

                    return
            }
        }
    }

}

function injectMediaSourceSwap() {
    // from https://stackoverflow.com/questions/9515704/insert-code-into-the-page-context-using-a-content-script
    var script = document.createElement("script");
    script.src = browser.runtime.getURL("src/content/mediaSourceSwap.js");
    script.onload = function () {
        script.remove();
    };
    (document.head || document.documentElement).appendChild(script);
}

function handPoseInRealTime() {
    async function handPoseFrame() {

        var ctx = state.canvas.getContext("2d");
        ctx.clearRect(0, 0, state.canvas.width, state.canvas.height);
        ctx.drawImage(state.video, 0, 0);

        if (state.handModuleIsOn) {

            // Change Gesture without refresh page 
            if (state.handGesture === "number") {

                // Number
                for (let i = 0; i < numberGestureArr.length; i++) {
                    handsfree.gesture[numberGestureArr[i]].enable()
                }

                // Sign
                for (let i = 0; i < signGestureArr.length; i++) {
                    handsfree.gesture[signGestureArr[i]].disable()
                }

            } else if (state.handGesture === "sign") {

                // Number
                for (let i = 0; i < numberGestureArr.length; i++) {
                    handsfree.gesture[numberGestureArr[i]].disable()
                }

                // Sign
                for (let i = 0; i < signGestureArr.length; i++) {
                    handsfree.gesture[signGestureArr[i]].enable()
                }
            }

            if (Object.keys(handsfree.data).length !== 0) {

                if (state.handStatusDrawing === 'start') {
                    if (handsfree.data.hands.multiHandLandmarks !== undefined && handsfree.data.hands.multiHandedness != undefined) {

                        const gesture = handsfree.model.hands.getGesture();

                        var handGesture;

                        if (gesture[0] != null) {
                            handGesture = gesture[0];

                        } else {
                            handGesture = gesture[1];

                        }

                        if (state.handGesture !== 'mouse') {
                            if (handGesture.name !== "") {

                                handGestureAction(handGesture.name);
                                state.statusBox.innerHTML = "Gesture: " + handGesture.name;

                            } else {
                                state.previousGesture = "undefined";
                                state.statusBox.innerHTML = "Gesture: Undefined";

                            }
                        }

                        if (handsfree.data.hands.multiHandLandmarks) {
                            for (const landmarks of handsfree.data.hands.multiHandLandmarks) {

                                drawConnectors(ctx, landmarks, HAND_CONNECTIONS, {
                                    color: '#00FF00',
                                    lineWidth: 5
                                });

                                drawLandmarks(ctx, landmarks, {
                                    color: '#FF0000',
                                    lineWidth: 2
                                });
                            }
                        }

                    } else {
                        state.statusBox.innerHTML = "Finding Hands...";
                    }
                }
            }
        }

        if (state.handGesture === 'mouse') {
            ctx.beginPath();
            ctx.save();

            ctx.rect(100, 100, 1100, 550);
            ctx.stroke();
            ctx.restore();
        }

        //Refresh
        requestAnimationFrame(handPoseFrame);
    }

    handPoseFrame();
}

start();