document.addEventListener("DOMContentLoaded", function () { //content is loaded
    const btn = document.getElementById("btn");

    fetch('https://icanhazdadjoke.com/', {
    headers: {
        Accept: 'application/json', //makes into json not html
    },
    })
        .then(res => res.json())
        .then(data => {
        let j = document.getElementById("joke");
        console.log(data.joke);
        j.innerHTML = data.joke;
        })
        .catch(error => console.log("Uh Oh!"));

    btn.addEventListener("click", refresh);

    function refresh(){
        location.reload();
    }
});