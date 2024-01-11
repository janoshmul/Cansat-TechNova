function getdata(){
    const url = 'http://127.0.0.1:5000/data'
    fetch(url)
    .then(response => response.json()) 
    .then(json => {
        console.log(json);
        document.getElementById("demo").innerHTML = JSON.stringify(json);

    })
}
