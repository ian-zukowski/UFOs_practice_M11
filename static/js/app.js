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