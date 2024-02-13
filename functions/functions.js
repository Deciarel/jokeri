document.addEventListener('DOMContentLoaded', function() {
    let luoNappi = document.querySelector('button');
    let taulukko = document.querySelector('table');

    luoNappi.addEventListener('click', generateJokerRow);

    function generateJokerRow() {
        let uusiRivi = document.createElement('tr');
        for (let i = 0; i < 7; i++) {
            let randoomiNum = Math.floor(Math.random() * 10);
            let Celli = document.createElement('td');
            Celli.textContent = randoomiNum;
            uusiRivi.appendChild(Celli);
        }
        taulukko.appendChild(uusiRivi);
    }
});
