// Function to create and append a paragraph element to the body
function createElement(data) {
    var paragraph = document.createElement('p');
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

// Function to query Wikipedia and call the provided callback with the extract
function queryWikipedia(callback) {
    var xhr = new XMLHttpRequest();
    var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var pages = response.query.pages;
            var extract;
            for (var pageId in pages) {
                if (pages.hasOwnProperty(pageId)) {
                    extract = pages[pageId].extract;
                    break;
                }
            }
            callback(extract);
        }
    };
    xhr.send();
}

// Calling queryWikipedia with createElement as the callback
queryWikipedia(createElement);
