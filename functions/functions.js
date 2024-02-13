document.addEventListener('DOMContentLoaded', function() {
    const luoNappi = document.querySelector('button');
    const taulukko = document.querySelector('table');

    luoNappi.addEventListener('click', generateJokerRow);

    function generateJokerRow() {
        const newRow = document.createElement('tr');
        for (let i = 0; i < 7; i++) {
            const randomNumber = Math.floor(Math.random() * 10);
            const newCell = document.createElement('td');
            newCell.textContent = randomNumber;
            newRow.appendChild(newCell);
        }
        taulukko.appendChild(newRow);
    }
});
