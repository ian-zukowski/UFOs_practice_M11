// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Set up a function to build the table of UFO search results
function buildTable(data) {
    // Clear the table body of any previous filters on the data
    tbody.html("");

    // Set up a loop for each object in the data (full dictionary containing location, type, date, etc.)
    data.forEach((dataRow) => {

        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow dictionary
        Object.values(dataRow).forEach((val) => {

            //  Add each individual dict.value as a table cell (td)
            let cell = row.append("td");
            cell.text(val);
        }
        );
    });
}

function handleClick() {
    
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    // If no date gets entered then filteredData references the entire original data
    let filteredData = tableData;

    // Check to see if a date was entered and filter the data using that date
    if(date) {

        // Apply 'filter' to the table data to only keep the rows where the 'datetime' value matches the filter's value
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    // Rebuild the table using the filtered data
    buildTable(filteredData);
};

// Activate the 'handleClick' function if a HTML element tagged as 'filter-btn' gets clicked
// i.e. "listen" for the form button to be clicked
d3.selectAll("#filter-btn").on("click", handleClick);

// Use 'buildTable' function with the original data to intially populate the webpage
buildTable(tableData);