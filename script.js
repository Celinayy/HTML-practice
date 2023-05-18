const ulLista = document.querySelector("#ulLista")

const emberek = 
    [
        {
            "name": "Jenő",
            "age": 16
        },
        {
            "name": "Laci",
            "age": 21
        },
        {
            "name": "Peti",
            "age": "32"
        },
        {
            "name": "Celi",
            "age": 23
        },
        {
            "name": "Zoli",
            "age": 89
        },
        {
            "name": "Erik",
            "age": "24"
        },
        {
            "name": "Patrik",
            "age": 53
        },
        {
            "name": "Robi",
            "age": 89
        },
        {
            "name": "Enikő",
            "age": 73
        },
        {
            "name": "Sára",
            "age": 32
        }
    ]


for (const ember of emberek) {
    const listaElem = document.createElement('li')
    const aLink = document.createElement('a')
    aLink.innerText = ember.name
    listaElem.classList.add("dropdown-item")
    listaElem.appendChild(aLink)
    ulLista.appendChild(listaElem)
}