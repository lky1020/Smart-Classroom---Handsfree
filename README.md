# 💥💥💥 This project is a Chrome Extension that developed for Google Meet that implemented [Mediapipe repo](https://google.github.io/mediapipe/solutions/hands), [Fingerpose repo](https://github.com/andypotato/fingerpose) and [Handsfree.js repo](https://github.com/midiblocks/handsfree) for Hand Landmark Detection and Hand Gesture Recognition 💥💥💥

<br>

# The Smart Classroom Extension

> 🚧🐞 This project is useable but not officially released and still buggy 🐞🚧<br>
> Reference: Mediapipe, andypotato/fingerpose, MIDIBlocks/handsfree <br>
> Author: Tunku Abdul Rahman University College Kuala Lumpur, Malaysia (Lim Kah Yee, Joan Hau, tew Yiqi)

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

- Chrome: Install as an unpacked chrome extension. Visit `chrome://extensions` and enable <kbd>Developer Mode</kbd> on the top right, then click <kbd>Load unpacked</kbd> and select this project's root folder

![](https://i.imgur.com/jXmhYnb.png)

<br>

# Acknowledgements
- [MIDIBlocks/handsfree](https://github.com/MIDIBlocks/handsfree) for the original Handsfree for Chrome Extension
