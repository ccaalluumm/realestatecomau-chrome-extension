const filterExactResults = () => {
	var exactResults = document.getElementsByClassName("tiered-results--exact");

	if (exactResults[0]) {
		Array.from(exactResults[0].children).forEach((child) => {
			var innerText = child.innerText.toLowerCase();
			if (innerText.includes('leased')) {
				child.innerHTML = null;
			}
		});
	}
}

var exactResults = document.getElementsByClassName("tiered-results--exact");
if (exactResults) {
	filterExactResults();
}

// V1
function handleDomUpdate(mutations) {
	mutations.forEach((mutation) => {
		if (mutation.target.classList.contains("tiered-results--exact")) {
			filterExactResults();
		}
	})
}
const exactResultsNode = document.querySelector('.tiered-results--exact');
const exactResultsObserver = new MutationObserver(handleDomUpdate);
const config = { attributes: true, childList: true, subtree: true };
if (exactResultsNode) {
	exactResultsObserver.observe(exactResultsNode, config);
} else {
	console.log("surroundingResultsNode not found");
}