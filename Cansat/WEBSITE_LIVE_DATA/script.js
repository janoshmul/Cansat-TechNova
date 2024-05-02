const tempOverTimeCSV = 'data/testdata.csv';
const pressionOverTimeCSV = 'data/testdata.csv';
const anglediff = 'data/testdata.csv';

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
        const Ydata = row[1];
        ys.push(Ydata);
    });
    return { xs, ys };
}
async function tempOverTime() {
    var data = await getdatacsv(tempOverTimeCSV);
    const ctx = document.getElementById('tempovertime');
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
async function pressionOverTime() {
    var data = await getdatacsv(pressionOverTimeCSV);
    const ctx = document.getElementById('pressionOverTime');
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
async function angleDifference() {
    var data = await getdatacsv(anglediff);
    const ctx = document.getElementById('anglediff');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.xs,
            datasets: [
                {
                    label: 'Temparature over time in C',
                    data: data.ys,
                },
                {
                    label: "AREWEREALLYTESTING?",
                    data: data.ys,
                    type: 'bar'
                },
                {
                    label: "test?",
                    data: data.ys,
                    type: 'line'
                }
            ]
        },
    });
}


tempOverTime();
angleDifference();
pressionOverTime();