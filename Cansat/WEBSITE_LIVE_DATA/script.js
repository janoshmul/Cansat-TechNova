const tempOverTimeCSV = 'testdata.csv';
const pressionOverTimeCSV = 'testdata.csv';
const RSSIpOverTimeCSV = 'testdata.csv';

async function getdatacsv(CSVDATA) {
    var xs = [];
    var ys = [];
    const response = await fetch(CSVDATA);
    const DATA = await response.text();
    const table = DATA.split(/\n/);
    table.forEach(elt => {
        const row = elt.split(',');
        const TIME = row[0];
        xs.push(TIME);
        const TEMP = row[1];
        ys.push(TEMP);
    });
    return { xs, ys };
}
async function THE_CHART() {
    var data = await getdatacsv(tempOverTimeCSV);
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.xs,
            datasets: [{
                fill: true,
                label: 'Temparature over time in C',
                data: data.ys,
            }]
        },
        options: {
            scales: {
                y: {
                    ticks: {
                        callback: function (value, index, ticks) {
                            return value + '°';
                        }
                    }
                }
            }
        }
    });
}
async function CHART3() {
    var data = await getdatacsv(tempOverTimeCSV);
    const ctx = document.getElementById('Chart3');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.xs,
            datasets: [{
                fill: true,
                label: 'Temparature over time in C',
                data: data.ys,
            }]
        },
        options: {
            scales: {
                y: {
                    ticks: {
                        callback: function (value, index, ticks) {
                            return value + '°';
                        }
                    }
                }
            }
        }
    });
}
async function CHART2() {
    var data = await getdatacsv(tempOverTimeCSV);
    const ctx = document.getElementById('Chart2');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.xs,
            datasets: [{
                fill: true,
                label: 'Temparature over time in C',
                data: data.ys,
            }]
        },
        options: {
            scales: {
                y: {
                    ticks: {
                        callback: function (value, index, ticks) {
                            return value + '°';
                        }
                    }
                }
            }
        }
    });
}
THE_CHART();
CHART2();
CHART3();
getdatacsv(tempOverTimeCSV);