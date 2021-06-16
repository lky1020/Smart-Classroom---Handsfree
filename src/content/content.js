const handsfree = new Handsfree({
  isClient: true,
  hands: {
    enabled: true,
    maxNumHands: 1,
    minDetectionConfidence: 0.85,
    minTrackingConfidence: 0.5
  }
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
    image: null,
    net: null,
    canvas: null,
    backgroundImage: null,
    backgroundSrc: null,
    gameIsOn: true,
    maskingFrameCounter: 0,
    maskCache: null,
};

//Points for finger
const fingerJoints = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20],
};

const left_deviation =  {
    x: [230.669742, 219.801723, 201.463273, 183.3696517, 180.9756267, 210.4777548, 198.9889152, 191.2660526, 184.867725, 227.045465, 217.5762433, 
        215.2701552,213.7340115, 239.9403986, 234.9524839, 237.6094636, 238.5510363, 249.8898322, 250.7591419, 255.2299962, 258.5984535],

    y: [-222.172246, -209.9497304, -185.6502878, -174.9155134, -177.6707399, -149.6083701,-135.3207188, -131.941493, -133.4844497, -148.4339446,
        -122.3589817, -116.925061, -108.7374331, -155.3590486, -127.8043412, -119.5259269, -107.3444485, -163.8445047, -149.4853784, -145.4639185,-143.4947074],
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

        // const videos = Array.from(document.querySelectorAll('video'))
        //     .filter(video => video.readyState != 0)
        //     .filter(video => video.disablePictureInPicture == false)
        //     .sort((v1, v2) => {
                
        //         const v1Rect = v1.getClientRects()[0]||{width:0,height:0};
        //         const v2Rect = v2.getClientRects()[0]||{width:0,height:0};

        //         return ((v2Rect.width * v2Rect.height) - (v1Rect.width * v1Rect.height));
        //     });

        // console.log(videos);
        
        // if (videos.length === 0) {
        //     return;
        // }

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

        // segmentBodyInRealTime();
        handPoseInRealTime();
    };

    //Set Width and Height
    // state.video.width = state.video.videoWidth;
    // state.video.height = state.video.videoHeight;
    // state.canvas.width = state.video.width;
    // state.canvas.height = state.video.height;

    // state.video.play();

    // segmentBodyInRealTime();
    // handPoseInRealTime();
}

async function start() {
    await loadState();
    overrideGetUserMedia();
}

async function loadState() {
    //gameIsOn - On / Off function
    state.gameIsOn = (await browser.storage.sync.get(["gameIsOn"])).gameIsOn;
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

        if(Object.keys(handsfree.data).length !== 0){
            
            if(handsfree.data.hands.multiHandLandmarks !== undefined && handsfree.data.hands.multiHandedness != undefined){
                console.log(handsfree);
                // console.log(handsfree.data.hands.multiHandedness[0].score);
                var hands = handsfree.data.hands.multiHandLandmarks[0];
                var landmarks = new Array();

                for(let i = 0; i < 21; i++){
                    
                    var deviation;
                    var x_axis;
                    var y_axis;

                    // Left Hand == Right Handness (Video Not flip in this case)
                    if(handsfree.data.hands.multiHandedness[0].label === "Right"){
                        deviation = left_deviation;

                        //Change x, y, point to 3 digit value 
                        /*
                            (Remember Bring it out)
                        */
                        x_axis  = hands[i].x  * 1000 + deviation.x[i];
                        y_axis = hands[i].y * 1000 + deviation.y[i];

                    }else{
                        //Change x, y, point to 3 digit value
                        x_axis  = hands[i].x  * 1000;
                        y_axis = hands[i].y * 1000;

                    }

                    // const  x_axis  = hands[i].x  * 1000;
                    // const y_axis = hands[i].y * 1000;

                    var landmark = {x: x_axis, y: y_axis};
                        
                    landmarks.push(landmark);

                }
                
                // console.log(landmarks);
                // console.log('Done');

                // Loop through fingers (connect the point)
                for(let i = 0; i < Object.keys(fingerJoints).length; i++){
                        
                    let finger = Object.keys(fingerJoints)[i];
    
                    //Loop through pairs of joints
                    for(let j = 0; j < fingerJoints[finger].length - 1; j++){
                        
                        //Get pairs of joints
                        const firstJointIndex = fingerJoints[finger][j];
                        const secondJointIndex = fingerJoints[finger][j + 1];

                        // Draw path
                        ctx.beginPath();
                        ctx.moveTo(
                            landmarks[firstJointIndex].x,
                            landmarks[firstJointIndex].y
                        );
                        ctx.lineTo(
                            landmarks[secondJointIndex].x,
                            landmarks[secondJointIndex].y
                        );
                        ctx.strokeStyle = "plum";
                        ctx.lineWidth = 4;
                        ctx.stroke();
                    }

                    //Draw the hand landmarks point
                    for(let i = 0; i < landmarks.length; i++){
                       
                        //Get x point
                        const x = landmarks[i].x;
        
                        //Get y point
                        const y = landmarks[i].y;
        
                        //Start drawing
                        ctx.beginPath();
                        ctx.arc(x, y, 5, 0, 3 * Math.PI);
        
                        //Set Line Color
                        ctx.fillStyle = "indigo";
                        ctx.fill();
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

        //Refresh
        requestAnimationFrame(handPoseFrame);
    }

    handPoseFrame();
}

start();