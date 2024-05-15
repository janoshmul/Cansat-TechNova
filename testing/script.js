// Const for data
const tempOverTimeCSV = 'testing/testdata.csv';


async function getdatacsv(CSVDATA) {
    var xs = [];
    var ys = [];
    const response = await fetch('testdata.csv');
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


async function ISTHISTHECHART() {
    var data = await getdatacsv();
    var ctx = document.getElementById("angleChart");
    var angleChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["test1", "test2", "test3"],
            datasets: [
                {
                    label: "MEGATEST?",
                    data: [1, 2, 3],
                    backgroundColor: [
                        'rgba(0,255,0, .5)',
                    ],
                    borderWidth: 0
                },
                {
                    label: "ISTHISTHEREALMEGATEST?",
                    data: [5, 4, 2],
                    backgroundColor: [
                        'rgba(255,255,255)',
                    ],
                    borderColor: 'rgb(75, 192, 192)',
                    type: 'line'
                },
                {
                    label: "ISTHISTHEREALMEGATEST2?",
                    data: [6, 2, 4],
                    backgroundColor: [
                        'rgba(255,255,255)',
                    ],
                    borderColor: 'rgb(75, 192, 192)',
                    type: 'line'
                },
            ]
        }
    })
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
console.log(getdatacsv());
ISTHISTHECHART();
getdatacsv(tempOverTimeCSV);