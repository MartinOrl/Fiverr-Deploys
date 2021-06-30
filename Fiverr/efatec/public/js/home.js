const homeData = [
    {
        id:'mitganger',
        description: 'Elektrische Ziehhilfe zum ziehen und heben. Wir liefern Ziehhilfe fur Lasten bis 60 to. Hier finden Sie eine Grosse Auswahl and Produkten fur Ihre Anforderungen.',
        imgUrl: 'https://assets-global.website-files.com/600852f253d66f6e33dcb116/6008605a5c4692ada16f9142_Jack-6-Lager%201000x700-p-800.jpeg'
    },
    {
        id:'fahrzeuge',
        description: 'Standfahrzeuge für Personen und Kommissionier Aufgaben',
        imgUrl: 'https://assets-global.website-files.com/600852f253d66f6e33dcb116/602d1e51f72a96e4e0c17504_Mover-Airport_1000-p-800.jpeg'
    },
    {
        id:'anhanger',
        description: 'Passende Anhänger und Adapteriösungen für verschiedene Anforderungen',
        imgUrl: 'https://assets-global.website-files.com/600852f253d66f6e33dcb116/602d26f18c10e716a2036627_Betriebsgel%C3%A4nde_1000.jpg'
    }
]

document.querySelectorAll('.category-link').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.active-link').classList.toggle('active-link')
        item.classList.toggle('active-link')
        document.querySelector('#description-target').innerHTML = homeData.filter(data => data.id === item.id)[0].description
        document.querySelector('#image-target').src = homeData.filter(data => data.id === item.id)[0].imgUrl
    })
})

