const handsfree = new Handsfree({
  isClient: true,
  hands: {
    enabled: true,
    maxNumHands: 1,
    minDetectionConfidence: 0.85,
    minTrackingConfidence: 0.5
  }
})

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
        0.5555555555555556
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
        0.36363636363636365
      ],
      [
        "addDirection",
        "Thumb",
        "HorizontalLeft",
        0.2727272727272727
      ],
      [
        "addDirection",
        "Thumb",
        "DiagonalUpLeft",
        0.9090909090909091
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
        0.4
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
        "addCurl",
        "Ring",
        "NoCurl",
        1
      ],
      [
        "addDirection",
        "Ring",
        "DiagonalUpRight",
        0.9090909090909091
      ],
      [
        "addDirection",
        "Ring",
        "VerticalUp",
        0.6363636363636364
      ],
      [
        "addDirection",
        "Ring",
        "DiagonalUpLeft",
        1
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
        0.037037037037037035
      ],
      [
        "addDirection",
        "Pinky",
        "DiagonalUpRight",
        0.625
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
        "VerticalUp",
        0.125
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
        "HorizontalRight",
        0.2727272727272727
      ],
      [
        "addDirection",
        "Thumb",
        "DiagonalUpRight",
        0.9090909090909091
      ],
      [
        "addDirection",
        "Index",
        "DiagonalUpRight",
        0.4
      ],
      [
        "addDirection",
        "Ring",
        "DiagonalUpLeft",
        0.9090909090909091
      ],
      [
        "addDirection",
        "Ring",
        "DiagonalUpRight",
        1
      ],
      [
        "addDirection",
        "Pinky",
        "DiagonalUpLeft",
        0.625
      ],
      [
        "addDirection",
        "Pinky",
        "DiagonalUpRight",
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

  handsfree.useGesture({
    "name": "Four",
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
        0.9230769230769231
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
        0.07142857142857142
      ],
      [
        "addDirection",
        "Thumb",
        "DiagonalUpLeft",
        0.7142857142857143
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
        0.42857142857142855
      ],
      [
        "addDirection",
        "Index",
        "DiagonalUpRight",
        0.35714285714285715
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
        "DiagonalUpLeft",
        0.47058823529411764
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
        0.07142857142857142
      ],
      [
        "addDirection",
        "Pinky",
        "DiagonalUpLeft",
        0.7142857142857143
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
        0.7142857142857143
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
        "DiagonalUpLeft",
        0.35714285714285715
      ],
      [
        "addDirection",
        "Ring",
        "DiagonalUpRight",
        0.47058823529411764
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
        0.7142857142857143
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
        0.125
      ],
      [
        "addDirection",
        "Thumb",
        "DiagonalUpRight",
        0.1875
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
        0.5
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
        "DiagonalUpLeft",
        0.16666666666666666
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
        "DiagonalUpLeft",
        0.25
      ],
      [
        "addDirection",
        "Pinky",
        "VerticalUp",
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
        "DiagonalUpLeft",
        0.1875
      ],
      [
        "addDirection",
        "Index",
        "DiagonalUpRight",
        1
      ],
      [
        "addDirection",
        "Ring",
        "DiagonalUpRight",
        0.16666666666666666
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
        0.25
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


// /**
//  * Handle messages from background script
//  */
chrome.runtime.onMessage.addListener(function(message) {
  switch (message.action) {
    case 'handsfree-data':
      handsfree.runPlugins(message.data)
    break

    case 'handsfree-debug':
      console.log(message.data)
    break
  }
})

const state = {
    video: null,
    canvas: null,
    handModuleIsOn: true,
};

async function overrideGetUserMedia() {
    //Create canvas use for replace the Google Meet Video
    var canvas = document.createElement("canvas");
    canvas.setAttribute("id", "sourceCanvas");
    canvas.setAttribute("style", "display:none");
    document.documentElement.appendChild(canvas);
    state.canvas = canvas;

    //Get user video for replace the video in Google Meet
    injectMediaSourceSwap();

    // set up the mutation observer
    var observer = new MutationObserver(function (mutations, me) {
        // `mutations` is an array of mutations that occurred
        // `me` is the MutationObserver instance

        var canvas = document.getElementById("realVideo");
        if (canvas) {
            console.log('I\'m In!');
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
    console.log(video);

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
    overrideGetUserMedia();
}

async function loadState() {
    state.handModuleIsOn = (await browser.storage.sync.get(["handModuleIsOn"])).handModuleIsOn;
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

        if(state.handModuleIsOn){
            if(Object.keys(handsfree.data).length !== 0){
            
                if(handsfree.data.hands.multiHandLandmarks !== undefined && handsfree.data.hands.multiHandedness != undefined){
                    // console.log(handsfree);
                    // console.log(handsfree.data.hands.multiHandedness[0].score);
                    var hands = handsfree.data.hands.multiHandLandmarks[0];
                    var landmarks = new Array();
    
                    const gesture = handsfree.model.hands.getGesture();
    
                    var handGesture;
    
                    if(gesture[0] != null){
                        handGesture = gesture[0];
    
                    }else {
                        handGesture = gesture[1];
    
                    }
    
                    if(handGesture.name !== ""){
                        ctx.beginPath();
                        ctx.save();
    
                        ctx.font = "30px Arial";
                        ctx.fillStyle = "green";
                        ctx.translate(1250, 100);
                        ctx.scale(-1, 1);
                        ctx.fillText("Gesture: " + handGesture.name, 0, 0);
                        ctx.restore();
    
                    }else{
                        ctx.beginPath();
                        ctx.save();
    
                        ctx.font = "30px Arial";
                        ctx.fillStyle = "red";
                        ctx.translate(1250, 100);
                        ctx.scale(-1, 1);
                        ctx.fillText("Gesture: Undefined", 0, 0);
                        ctx.restore();
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
                    
                    ctx.beginPath();
                    ctx.save();
    
                    ctx.font = "30px Arial";
                    ctx.fillStyle = "green";
                    ctx.translate(1250, 50);
                    ctx.scale(-1, 1);
                    ctx.fillText("Hand Detected!", 0, 0);
                    ctx.restore();
    
                }else{
                    ctx.beginPath();
                    ctx.save();
    
                    ctx.font = "30px Arial";
                    ctx.fillStyle = "red";
                    ctx.translate(1250, 50);
                    ctx.scale(-1, 1);
                    ctx.fillText("Finding Hands...", 0, 0);
                    ctx.restore();
                }
            }
        }else{
            console.log('hihi');
        }

        //Refresh
        requestAnimationFrame(handPoseFrame);
    }

    handPoseFrame();
}

start();