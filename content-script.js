const filterValues = ['leased', 'deposit taken', 'depsoit taken', 'contact agent']
const exactResultsClassName = "tiered-results--exact";
const surroundingResultsClassName = "tiered-results--surrounding";

const filterResults = (className) => {
	var results = document.getElementsByClassName(className);

	if (results[0]) {
		Array.from(results[0].children).forEach((child) => {
			var innerText = child.innerText.toLowerCase();
			if (filterValues.some(filteredValue => innerText.includes(filteredValue))) {
				child.innerHTML = null;
			}
		});
	}
}

var exactResults = document.getElementsByClassName(exactResultsClassName);
if (exactResults) {
	filterResults(exactResultsClassName);
}

var surroundingResults = document.getElementsByClassName(surroundingResultsClassName);
if (surroundingResults) {
	filterResults(surroundingResultsClassName);
}

function handleExactResultsDomUpdate(mutations) {
	mutations.forEach((mutation) => {
		if (mutation.target.classList.contains(exactResultsClassName)) {
			filterResults(exactResultsClassName);
		}
	})
}
const exactResultsNode = document.querySelector(`.${exactResultsClassName}`);
const exactResultsObserver = new MutationObserver(handleExactResultsDomUpdate);
const config = { attributes: true, childList: true, subtree: true };
if (exactResultsNode) {
	exactResultsObserver.observe(exactResultsNode, config);
} 


function handleSurroundingResultsDomUpdate(mutations) {
	mutations.forEach((mutation) => {
		if (mutation.target.classList.contains(surroundingResultsClassName)) {
			filterResults(surroundingResultsClassName);
		}
	})
}
const surroundingResultsNode = document.querySelector(`.${surroundingResultsClassName}`);
const surroundingResultsObserver = new MutationObserver(handleSurroundingResultsDomUpdate);
if (surroundingResultsNode) {
	surroundingResultsObserver.observe(surroundingResultsNode, config);
} 