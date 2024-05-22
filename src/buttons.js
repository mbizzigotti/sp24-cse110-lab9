
function setup_buttons() {
    const error_buttons = Array.from(document.querySelectorAll('#error-btns > button'));
    const data = "data";

    let i = 0;
    // Console Log
    error_buttons[i++].addEventListener('click', (event) => {
        console.log(data);
    });
    // Console Error
    error_buttons[i++].addEventListener('click', (event) => {
        console.error(data);
    });
    // Console Count
    error_buttons[i++].addEventListener('click', (event) => {
        console.count(data);
    });
    // Console Warn
    error_buttons[i++].addEventListener('click', (event) => {
        console.warn(data);
    });
    // Console Assert
    error_buttons[i++].addEventListener('click', (event) => {
        console.assert(data);
    });
    // Console Clear
    error_buttons[i++].addEventListener('click', (event) => {
        console.clear();
    });
    // Console Dir
    error_buttons[i++].addEventListener('click', (event) => {
        console.dir(data)
    });
    // Console dirxml
    error_buttons[i++].addEventListener('click', (event) => {
        console.dirxml(data);
    });
    // Console Group Start
    error_buttons[i++].addEventListener('click', (event) => {
        console.group(data);
    });
    // Console Group End
    error_buttons[i++].addEventListener('click', (event) => {
        console.groupEnd(data);
    });
    // Console Table
    error_buttons[i++].addEventListener('click', (event) => {
        console.table(data);
    });
    // Start Timer
    error_buttons[i++].addEventListener('click', (event) => {
        console.time(data);
    });
    // End Timer
    error_buttons[i++].addEventListener('click', (event) => {
        console.timeEnd(data);
    });
    // Console Trace
    error_buttons[i++].addEventListener('click', (event) => {
        console.trace(data);
    });
}

function init() {
    setup_buttons();
}

document.addEventListener('DOMContentLoaded', init);