document.addEventListener('DOMContentLoaded', function() {
    let luoNappi = document.querySelector('button');
    let taulukko = document.querySelector('table');

    luoNappi.addEventListener('click', generateJokerRow);

    function generateJokerRow() {
        let newRow = document.createElement('tr');
        for (let i = 0; i < 7; i++) {
            let randomNumber = Math.floor(Math.random() * 10);
            let newCell = document.createElement('td');
            newCell.textContent = randomNumber;
            newRow.appendChild(newCell);
        }
        taulukko.appendChild(newRow);
    }
});
