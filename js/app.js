'use strict'

function Flowers(name, choosenimage, season) {
    this.name = name;
    this.choosenImage = choosenimage;
    this.season = season;
    Flowers.all.push(this)
}
Flowers.all = [];

function getData() {
    let name = document.getElementById('flowerName').value;
    let season = document.getElementById('flowerSeason').value;
    let image = document.getElementById('flowerImage');
    let choosenImage = image.options[image.selectedIndex].text;
    new Flowers(name, choosenImage, season);

}

document.getElementById('save').addEventListener('click', function (event) {
    event.preventDefault();
    header();
    getData();
    render();
    localStorage.setItem('flowers', JSON.stringify(Flowers.all));
});

document.getElementById('clear').addEventListener('click', function (event) {
    event.preventDefault();
    clear();
});



let tabel = document.getElementById('flowerTable');
function header() {
    let trElement = document.createElement('tr');
    tabel.appendChild(trElement);

    let th1Element = document.createElement('th');
    th1Element.textContent = '#';
    trElement.appendChild(th1Element);

    let th2Element = document.createElement('th');
    th2Element.textContent = 'Image';
    trElement.appendChild(th2Element);

    let th3Element = document.createElement('th');
    th3Element.textContent = 'Name';
    trElement.appendChild(th3Element);

    let th4Element = document.createElement('th');
    th4Element.textContent = 'Season';
    trElement.appendChild(th4Element);
}
function render() {
    tabel.innerHTML = '';
    for (let i in Flowers.all) {
        let trElement = document.createElement('tr');
        tabel.appendChild(trElement);

        let td1Element = document.createElement('td');
        td1Element.textContent = 'X';
        trElement.appendChild(td1Element);

        let td2Element = document.createElement('td');
        trElement.appendChild(td2Element);
        let imgElement = document.createElement('img');
        imgElement.style.width = '50px';
        imgElement.style.height = '50px';
        imgElement.src = `/img/${Flowers.all[i].choosenImage}.jpeg`;
        td2Element.appendChild(imgElement);

        let td3Element = document.createElement('td');
        td3Element.textContent = Flowers.all[i].name;
        trElement.appendChild(td3Element);

        let td4Element = document.createElement('td');
        td4Element.textContent = Flowers.all[i].season;
        trElement.appendChild(td4Element);
    }
}

function clear() {
    tabel.innerHTML = "";
    Flowers.all = []
    localStorage.setItem('flowers', JSON.stringify(Flowers.all));
}


function getLocalStorege() {
    let data = JSON.parse(localStorage.getItem('flowers'));
    if (data) {
        Flowers.all = data;
    }
    render();
}
getLocalStorege();