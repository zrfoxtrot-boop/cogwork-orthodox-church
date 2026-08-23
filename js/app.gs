/*
 * Cogwork Orthodox Church
 * Frontend Application
 *
 * The Google Apps Script API will be connected here later.
 */

const COGWORK = {
    apiUrl: "",
    version: "0.1.0"
};


/*
 * Future API initialization.
 */

function initializeSystem() {
    console.log(
        `Cogwork Orthodox Church interface initialized. Version ${COGWORK.version}`
    );
}


/*
 * Initialize when the page loads.
 */

document.addEventListener("DOMContentLoaded", () => {
    initializeSystem();
});
