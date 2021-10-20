# 💥💥💥 This project is a Chrome Extension that developed for Google Meet that implemented [Mediapipe repo](https://google.github.io/mediapipe/solutions/hands), [Fingerpose repo](https://github.com/andypotato/fingerpose) and [Handsfree.js repo](https://github.com/MIDIBlocks/handsfree-chrome) for Hand Landmark Detection and Hand Gesture Recognition 💥💥💥

<br>

# The Smart Classroom Extension

> 🚧🐞 This project is useable but not officially released and still buggy 🐞🚧<br>
> Reference: Mediapipe, andypotato/fingerpose, MIDIBlocks/handsfree <br>
> Author: Tunku Abdul Rahman University College Kuala Lumpur, Malaysia (Lim Kah Yee, Joan Hau, Tew Yiqi)

This project is designed to allow Google Meet's user able to interact with each other with Hand Gesture. Besides, Handsfree's mouse function also been implemented in this chrome extension to allow user able to use their hand to control the Google Meet and also other Webpage. 🖐👀🖐

<br>

# Development Guide

## Folder structure

Each of the files are located in their respective context folders in `/src/`. Handsfree.js specific scripts are named `handsfree.js` and the Mozilla WebXR specific ones are labeled `webxr.js`. Other than organizing the files the WebXR code is mostly untouched.

## How it works (Reference: [Handsfree.js repo](https://github.com/midiblocks/handsfree))

![](https://i.imgur.com/VKFeZpB.jpg)

- When you first install the extension, `/src/background/handsfree.js` checks if you've approved the webcam. If not, then it'll open the options page in `src/options/stream-capture.html`
- The popup panel has a "Start/Stop Webcam" button that communicates with the background script to start the webcam: `/src/popup/index.html`
- The background page is where the models are stored and run. This keeps everything isolated and only asks for webcam permission once (vs on every domain): `/src/background/handsfree.js`
- The background page also uses the "Picture in Picture" API to "pop the webcam" out of the browser. It renders the webcam feed and debug canvases into a single canvas, and uses that as the `srcObject` to a separate video element which is the PiP'ed

> Remark: Handsfree's "Picture in Picture" API will be disable in this Chrome Extension

## How to install (Reference: [Handsfree.js repo](https://github.com/midiblocks/handsfree))
> Remark: Test Account: smartclassroomfyp2021@gmail.com, Password: smartclassroom2021


- Chrome: Install as an unpacked chrome extension. 
1. Visit `chrome://extensions`
2. Enable <kbd>Developer Mode</kbd> on the top right 
3. Click <kbd>Load unpacked</kbd> and select this project's root folder

![](https://i.imgur.com/7oLGfeI.png)

## How to use in Google Meet
1. Open popup.js by clicking the extension
2. Get <kbd>Sheet Code</kbd> and Enter the Sheet Code
3. Start Model

![](https://i.imgur.com/Ld7fhCQ.png)

## How to shutdown chrome extension
> Remark: Directly refresh Chrome Extension in `chrome://extensions` will cause last time sheetCode auto fill in and input tag read-only. In order to solve this, just start the model and stop the model to update the sheetCode to empty string. 
1. Open popup.js by clicking the extension
2. Click <kbd>Stop Model</kbd> to shutdown chrome extension

![](https://i.imgur.com/rYLFEPG.png)

## Available Gesture
> Remark: The chrome extension provided 2 Gesture (Number and Sign) and 1 Mouse Function.

- Number (Shorcut key: LCtrl + LShift + 1)  <br>
> Remark: All of the number will activate ChatBot by pressing **SpaceBar** to send Message In Google's Meet Chatbox (E.g. [Your Name] chosen [Gesture] options.)

| ![](https://i.imgur.com/Y2q03M9.png) | ![](https://i.imgur.com/p7qOy0K.png) | ![](https://i.imgur.com/9MumRsG.png) | ![](https://i.imgur.com/aTNlNMk.png) | ![](https://i.imgur.com/crST21p.png) |
|--|--|--|--|--|
| One | Two | Three | Four | Five |

<br>
<br>

- Sign (Shorcut key: LCtrl + LShift + 2) <br>
> Remark: Some of the Sign (Nice, I'm Good, Thank You, No Question) will activate ChatBot by pressing **SpaceBar** to send Message In Google's Meet Chatbox (E.g. [Your Name] [Gesture])

| ![](https://i.imgur.com/3seNAWn.png) | ![](https://i.imgur.com/xohVi2a.png) | ![](https://i.imgur.com/v9doTEX.png?6) | ![](https://i.imgur.com/p7qOy0K.png) | ![](https://i.imgur.com/HJy827t.png) | ![](https://i.imgur.com/hWhOiGT.png) |
|--|--|--|--|--|--|
| Help | Stick Caption | WebCam_Microphone | Nice, I'm Good | Thank You | No Question |

<br>
<br>

- Mouse (No Shorcut Key Available) <br>
> Remark: Required to refresh Website 

  Please refer to developer website [Handsfree's Palm Pointer](https://handsfree.dev/plugin/palmpointers/)

<br>

## Sample Result
https://user-images.githubusercontent.com/57024183/137918644-977b2db3-66db-49e7-9735-81faea563330.mp4

<br>

## Full Project (Face + Hand)
> Remark: Still in progress (Private Mode), will be released before December 31, 2021

Link to Full Project: [Smart Classroom](https://github.com/Joan0018/SmartClassroom)

<br>

## Website About Project (ICDXA)
> Remark: Still in progress, will be released before December 31, 2021. 

<br>

## Documentation of the System
> Remark: Still in progress, will be released before December 31, 2021

Link to FYP Documentation: [FYP Documentation](https://drive.google.com/drive/folders/17zTlNLnDFaBgAy1wboPPRlFuYOxo4Gvy?usp=sharing)

<br>

# Acknowledgements
- [MIDIBlocks/handsfree](https://github.com/midiblocks/handsfree) for the original Handsfree
- [MIDIBlocks/handsfree-chrome](https://github.com/MIDIBlocks/handsfree-chrome) for the original Handsfree for Chrome Extension
