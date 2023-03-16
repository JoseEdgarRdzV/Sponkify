const cardTop = document.querySelector('#cardTop').content
const contenido = document.querySelector('#contenido')
const fragment = document.createDocumentFragment()
const btnBuscar = document.getElementById('buscador')
const imgMX = document.getElementById('MX')
const imgUSA = document.getElementById('USA')
const imgJP = document.getElementById('JP')
const imgAR = document.getElementById('AR')
const imgAT = document.getElementById('AT')
const imgAU = document.getElementById('AU')
const inputAlbum = document.getElementById('inputAlbum')
const btnBuscarAlbum = document.getElementById('btnBuscar')
const canciones = document.getElementById('canciones')
const album = document.getElementById('album').content
const disco = document.getElementById('disco').content
let topTwoHundred = []

document.addEventListener('DOMContentLoaded', () => {
    loadMusicData()
})

imgMX.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '83f689b8e4mshd99d4a5a431d224p10c8c4jsn2b1ca4343ee7',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=MX', options)
        .then(response => response.json())
        .then(response => {
            topTwoHundred = []
            topTwoHundred = response
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err));
})

imgJP.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '83f689b8e4mshd99d4a5a431d224p10c8c4jsn2b1ca4343ee7',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=JP', options)
        .then(response => response.json())
        .then(response => {
            topTwoHundred = []
            topTwoHundred = response
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err));
})

imgUSA.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '83f689b8e4mshd99d4a5a431d224p10c8c4jsn2b1ca4343ee7',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=US', options)
        .then(response => response.json())
        .then(response => {
            topTwoHundred = []
            topTwoHundred = response
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err));
})

imgAR.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '83f689b8e4mshd99d4a5a431d224p10c8c4jsn2b1ca4343ee7',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=AR', options)
        .then(response => response.json())
        .then(response => {
            topTwoHundred = []
            topTwoHundred = response
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err));
})

imgAT.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '83f689b8e4mshd99d4a5a431d224p10c8c4jsn2b1ca4343ee7',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=AT', options)
        .then(response => response.json())
        .then(response => {
            topTwoHundred = []
            topTwoHundred = response
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err));
})

imgAU.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '83f689b8e4mshd99d4a5a431d224p10c8c4jsn2b1ca4343ee7',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=AU', options)
        .then(response => response.json())
        .then(response => {
            topTwoHundred = []
            topTwoHundred = response
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err));
})

const loadMusicData = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '83f689b8e4mshd99d4a5a431d224p10c8c4jsn2b1ca4343ee7',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks', options)
        .then(response => response.json())
        .then(response => {
            topTwoHundred = response
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err));
}

const creaCards = (musica) => {
    contenido.innerHTML = ''
    musica.forEach((song) => {
        cardTop.querySelector('img').setAttribute('src', song.trackMetadata.displayImageUri)
        cardTop.querySelector('.songname').textContent = song.trackMetadata.trackName
        let artists = ''
        let size = song.trackMetadata.artists.length
        song.trackMetadata.artists.forEach((item, index) => {
            //console.log (index, size)
            if (index === size - 1) {
                artists += item.name
            } else {
                artists += item.name + ' / '
            }
        })
        cardTop.querySelector('.artistname').textContent = artists

        const clone = cardTop.cloneNode(true)
        fragment.appendChild(clone)
    })
    contenido.appendChild(fragment)
}

btnBuscar.addEventListener('keyup', () => {
    console.log('tecla', btnBuscar.value)
    let temp = []
    temp = topTwoHundred.filter((item) => item. trackMetadata.trackName.includes(btnBuscar.value))
    creaCards(temp)
})

btnBuscarAlbum.addEventListener('click', () => {
    const request = inputAlbum.value.toLowerCase()
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8111058307mshbfa8a2d236e4295p1c0742jsn8fcbf12ac466',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch(`https://spotify81.p.rapidapi.com/search?q=${request}&type=multi&offset=0&limit=10&numberOfTopResults=5`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response.albums.items)
            pintaNombre(response.albums.items)
        })
        .catch(err => console.error(err));
})

const pintaNombre = (songs) => {
    canciones.innerHTML = ''
    songs.forEach((item) => {
        album.querySelector('li').textContent = item.data.name
        let tmp = item.data.uri.split(':')
        //album.querySelector('p').textContent = tmp[2]
        album.querySelector('button').dataset.id = tmp[2]

        const clone = album.cloneNode(true)
        fragment.appendChild(clone)
    })
    canciones.appendChild(fragment)
}

canciones.addEventListener('click', e => {
    if( e.target.className == 'btn' ) {
        //aqui va el api para traer la info del album
        obtenerAlbum(e.target.dataset.id)
    }
    e.preventDefault()
})

const obtenerAlbum = (id) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8111058307mshbfa8a2d236e4295p1c0742jsn8fcbf12ac466',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch(`https://spotify81.p.rapidapi.com/albums?ids=${id}`, options)
        .then(response => response.json())
        .then(response => {
            dibujaDisco(response)
        })
        .catch(err => console.error(err));
}

const dibujaDisco = (album) => {
    contenido.innerHTML = ''
    disco.querySelector('img').setAttribute('src', album.albums[0].images[0].url)
    disco.querySelectorAll('p')[0].textContent = album.albums[0].name
    disco.querySelectorAll('p')[1].textContent = album.albums[0].popularity

    const clone = disco.cloneNode(true)
    fragment.appendChild(clone)
    contenido.appendChild(fragment)
}