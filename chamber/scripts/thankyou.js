// Function to get query parameters
function getQueryParams() {
    let params = {};
    let queryString = window.location.search.substring(1);
    let queryArray = queryString.split("&");
    for (let i = 0; i < queryArray.length; i++) {
        let pair = queryArray[i].split("=");
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return params;
}

// Store query parameters in responseValues
let responseValues = getQueryParams();

// Display the form data on the thank you page
window.onload = function() {
    let responseList = document.getElementById("response-list");
    for (let key in responseValues) {
        if (responseValues.hasOwnProperty(key)) {
            let listItem = document.createElement("li");
            listItem.textContent = `${key}: ${responseValues[key]}`;
            responseList.appendChild(listItem);
        }
    }
}
