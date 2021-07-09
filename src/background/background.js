var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://apis.google.com/js/client.js?onload=onGAPILoad";
head.appendChild(script);

chrome.identity.getAuthToken({ interactive: true }, function (token) {
    console.log('got the token', token);
})

const API_KEY = 'AIzaSyADyoalWfI5ZIDSjvXE7lyZunZNPdIka1s';
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
const SPREADSHEET_ID = '1uzCzvLpFu9xeDTvPsot8AS-UmbaabsO4pf6sGDqsP-k';
const SPREADSHEET_TAB_NAME = 'main';

function onGAPILoad() {
    gapi.client.init({
        // Don't pass client nor scope as these will init auth2, which we don't want
        apiKey: API_KEY,
        discoveryDocs: DISCOVERY_DOCS,

    }).then(function () {
        console.log('gapi initialized')

        chrome.identity.getAuthToken({ interactive: true }, function (token) {

            gapi.auth.setToken({
                'access_token': token,
            });

            gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: SPREADSHEET_ID,
                range: SPREADSHEET_TAB_NAME,
            }).then(function (response) {

                console.log(`Got ${response.result.values.length} rows back`)

            });
        })

    }, function (error) {
        console.log('error', error)

    });
}

chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        // Get the token
        chrome.identity.getAuthToken({ interactive: true }, function (token) {
            // Set GAPI auth token
            gapi.auth.setToken({
                'access_token': token,
            });

            // To prevent model start also append to Google Sheet
            if (request.name !== undefined && request.gesture !== undefined) {
                const body = {
                    values: [[
                        request.name,
                        request.gesture,
                        new Date() // Timestamp
                    ]]
                };
                
                // Append values to the spreadsheet
                gapi.client.sheets.spreadsheets.values.append({
                    spreadsheetId: SPREADSHEET_ID,
                    range: SPREADSHEET_TAB_NAME,
                    valueInputOption: 'USER_ENTERED',
                    resource: body
                }).then((response) => {
                    // On success
                    console.log(`${response.result.updates.updatedCells} cells appended.`)
                    sendResponse({ success: true });
                }, function(error) {
                    var status = error.result.error.status;
                    alert('Error occur in Google SpreadSheet: ' + status + '\nPlease contact TARUC Management');
                });
            }
        })

        // Wait for response
        return true;
    }
);
