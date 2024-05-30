TrackJS.track('Testing TrackJS!');


class ValidationError extends Error {
	constructor(message) {
		super(message);
		this.name = "ValidationError";
	}
}

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
		console.count('count label');
	});
	// Console Warn
	error_buttons[i++].addEventListener('click', (event) => {
		console.warn(data);
	});
	// Console Assert
	error_buttons[i++].addEventListener('click', (event) => {
		const errorMsg = "the # is not even";
		for (let number = 2; number <= 3; number++) {
			console.log(`the # is ${number}`);
			console.assert(number % 2 === 0, "%o", { number, errorMsg });
		}
	});
	// Console Clear
	error_buttons[i++].addEventListener('click', (event) => {
		console.clear();
	});
	// Console Dir
	error_buttons[i++].addEventListener('click', (event) => {
		console.dir(data);
	});
	// Console dirxml
	error_buttons[i++].addEventListener('click', (event) => {
		console.dirxml(document.body);
	});
	// Console Group Start
	error_buttons[i++].addEventListener('click', (event) => {
		console.group('group label');
		console.log('inside group');
	});
	// Console Group End
	error_buttons[i++].addEventListener('click', (event) => {
		console.groupEnd();
	});
	// Console Table
	error_buttons[i++].addEventListener('click', (event) => {
		console.table([
			{ name: "software engineering", number: 110 },
			{ name: "programming languages", number: 130 },
            { name: "advanced software enginnering", number: 112 }
		]);
	});
	// Start Timer
	error_buttons[i++].addEventListener('click', (event) => {
		console.time('timer label');
	});
	// End Timer
	error_buttons[i++].addEventListener('click', (event) => {
		console.timeEnd('timer label');
	});
	// Console Trace
	error_buttons[i++].addEventListener('click', (event) => {
		console.trace('trace');
	});

	// Global Error
	error_buttons[i++].addEventListener('click', (event) => {
		boom("This function exists trust me");
	});
	// Custom Error
	error_buttons[i++].addEventListener('click', (event) => {
		try {
			// Get wrong element
			const main = document.querySelector('section');
			// Find the element to be commented out
			const paragraph = document.querySelector('p');

			// Comment out the paragraph node
			const comment = document.createComment(paragraph.outerHTML);

			// This code will fail!
			main.replaceChild(comment, paragraph);
			if (true) {
			}
		} catch (error) {
			console.error('JS very cool, wow:', error);
			throw new ValidationError("Error!");
		} finally {
			console.info('inside finally block!');
		}
	});
}

function init() {
	setup_buttons();
}

document.addEventListener('DOMContentLoaded', init);

const reportError = function (errorMessage, url, lineNumber) {
	console.log({errorMessage,url,lineNumber});
	alert(`${errorMessage}\n${url}\n${lineNumber}`);
}

const registerErrorHandler = function () {
	if (window.onerror) // then one exists
	{
		let oldError = window.onerror;
		let newErrorHandler = function (errorMessage, url, lineNumber) {
			reportError(errorMessage, url, lineNumber);
			oldError(errorMessage, url, lineNumber);
		}
		window.onerror = newErrorHandler;
	}
	else
		window.onerror = reportError;
}

registerErrorHandler();
