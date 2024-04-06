const cardsArray = [
    {
        name : 'orange',
        Img : 'orange.png'
    },

    {
        name : 'rasberry',
        Img : 'rasberry.png'
    },
    {
        name : 'apple',
        Img : 'apple.png'
    },
    {
        name : 'peach',
        Img : 'peach.png'
    },
    {
        name : 'pomegranate',
        Img : 'pomegranate.png'
    },
    {
        name : 'banana',
        Img : 'banana.png'
    },
    {
        name : 'orange',
        Img : 'orange.png'
    },

    {
        name : 'rasberry',
        Img : 'rasberry.png'
    },
    {
        name : 'apple',
        Img : 'apple.png'
    },
    {
        name : 'peach',
        Img : 'peach.png'
    },
    {
        name : 'pomegranate',
        Img : 'pomegranate.png'
    },
    {
        name : 'banana',
        Img : 'banana.png'
    }
]

const scoreDisplay = document.querySelector('#score')
const detailDisplay = document.querySelector('#detail')
const boxDisplay = document.querySelector('#box')
let cardsChosen = []
let cardsChosenIds = []
const cardswon = []

cardsArray.sort(()=> 0.5 - Math.random())

function createBoard() {
    for(let i = 0; i<cardsArray.length; i++){
    let card = document.createElement('img')
    card.setAttribute('src', 'cover.png')
    card.setAttribute('data-id', i)
    boxDisplay.appendChild(card)
    card.addEventListener('click', flipCard)
    }
}
createBoard()

function checkMatch(){
    console.log('checking for match')
    const cards = document.querySelectorAll('img')
    if(cardsChosen[0] == cardsChosen[1]){
       detailDisplay.innerHTML = 'You Found A Match'
       cards[cardsChosenIds[0]].setAttribute('src', 'black.png')
       cards[cardsChosenIds[1]].setAttribute('src', 'black.png')
       cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
       cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
       cardswon.push(cardsChosen)
       scoreDisplay.innerHTML = cardswon.length
    }
    else{
        cards[cardsChosenIds[0]].setAttribute('src', 'cover.png')
       cards[cardsChosenIds[1]].setAttribute('src', 'cover.png')
       detailDisplay.innerHTML = 'sorry try again'
    }
     cardsChosen = []
    cardsChosenIds = []
    if(cardswon.length == cardsArray.length/2){
       detailDisplay.innerHTML = 'congratulations you have found all of them'
    }
}

function flipCard(){
     const cardId = this.getAttribute('data-id')
    //  console.log(cardId)
    //  console.log(cardsChosen)
    //  console.log(cardsChosenIds)
    //  console.log(cardsArray[cardId].Img)
     cardsChosen.push(cardsArray[cardId].name)
     cardsChosenIds.push(cardId)
     this.setAttribute( 'src', cardsArray[cardId].Img)

     if(cardsChosen.length === 2){
        setTimeout(checkMatch, 400)
     }
}