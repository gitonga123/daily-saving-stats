const moment = require('moment');
const {
    getAuthToken,
    getSpreadSheet,
    getSpreadSheetValues
} = require('./googleSheetsService.js');

const spreadsheetId = "1Z9aYBmobv1XaNEdrn9GCFNPYV8k7JoHN9kDCco7eS-Q";
const sheetName = "OCT";

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
        });
        const values = response?.data?.values;
        const header = values.shift();
        const headers = [];
        header.shift();
        header.map(item => {
            if (item.toLowerCase() == 'juliet') {
                headers.push({
                    id: 1
                });
            }
            if (item.toLowerCase() == 'daniel') {
                headers.push({
                    id: 2
                });
            }
            if (item.toLowerCase() == 'gitonga') {
                headers.push({
                    id: 3
                });
            }
            if (item.toLowerCase() == 'gladys') {
                headers.push({
                    id: 4
                });
            }
            if (item.toLowerCase() == 'rhoda') {
                headers.push({
                    id: 5
                });
            }
            if (item.toLowerCase() == 'timothy') {
                headers.push({
                    id: 6
                });
            }
            if (item.toLowerCase() == 'joseph') {
                headers.push({
                    id: 7
                });
            }
            if (item.toLowerCase() == 'carol') {
                headers.push({
                    id: 8
                });
            }
            if (item.toLowerCase() == 'dorothy') {
                headers.push({
                    id: 9
                });
            }
            if (item.toLowerCase() == 'javan') {
                headers.push({
                    id: 10
                });
            }
            if (item.toLowerCase() == 'mercy') {
                headers.push({
                    id: 11
                });
            }
            if (item.toLowerCase() == 'fridah') {
                headers.push({
                    id: 12
                });
            }
            if (item.toLowerCase() == 'cate') {
                headers.push({
                    id: 13
                });
            }
            if (item.toLowerCase() == 'wambui') {
                headers.push({
                    id: 14
                });
            }
            if (item.toLowerCase() == 'mama safi') {
                headers.push({
                    id: 15
                });
            }
            if (item.toLowerCase() == 'nyogesa') {
                headers.push({
                    id: 16
                });
            }
            if (item.toLowerCase() == 'ken') {
                headers.push({
                    id: 17
                });
            }
            if (item.toLowerCase() == 'maxwell') {
                headers.push({
                    id: 18
                });
            }
        })
        values.shift();

        values.map(item => {
            const date = item.shift();
            const nDate = moment(date, 'DD-MMM-yyyy').format("yyyy-MM-DD");
            item.pop();
            item.map((v, index) => {
                if (v) {
                    console.log(`INSERT INTO contributions(amount, date_send, member_id) VALUES(${v}, '${nDate}', ${headers[index].id});`);
                }
            });
        });
        //console.log('output for getSpreadSheetValues', JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.log(error.message, error.stack);
    }
}

function main() {
    //testGetSpreadSheet();
    testGetSpreadSheetValues();
}

main()