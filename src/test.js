const {
    getAuthToken,
    getSpreadSheet,
    getSpreadSheetValues
} = require('./googleSheetsService.js');

const spreadsheetId = "1Z9aYBmobv1XaNEdrn9GCFNPYV8k7JoHN9kDCco7eS";
const sheetName = "Savings";

async function testGetSpreadSheet() {
    try {
        const auth = await getAuthToken();
        const response = await getSpreadSheet({
            spreadsheetId,
            auth
        })
        console.log('output for getSpreadSheet', JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.log(error.message, error.stack);
    }
}

async function testGetSpreadSheetValues() {
    try {
        const auth = await getAuthToken();
        const response = await getSpreadSheetValues({
            spreadsheetId,
            sheetName,
            auth
        })
        console.log('output for getSpreadSheetValues', JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.log(error.message, error.stack);
    }
}

function main() {
    testGetSpreadSheet();
    testGetSpreadSheetValues();
}

main()