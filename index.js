console.log("helllo from index.js")

// iterate like a merry go round
//start at turn or iteration 0
for(let i = 0; i < 4; i++){
    // debugger
    console.log("i is ", i)
}

//go through cards starting at first myHand[0] until the end myHand[4]
let myHand = [7,8,3,9,2]

//keep track of the highest number as the first card
let highestNumber = myHand[0]
for (let index = 0; index < myHand.length; index++) {
    let card = myHand[index];
    console.log(`myHand[${index}]`, "is: ", card)
    //comparing this card to the highest number
    if(myHand[index] > highestNumber){
        //keep the highest card
        console.log(myHand[index], "was bigger than", highestNumber)
        highestNumber = myHand[index]
    }
    
}

console.log("Highest number is ", highestNumber)

//calculate some expenses
let total = 0
let groceries = [1.99, 12.29, 5.99, 1.00, 3.49]
//somethign we knew
for (let index = 0; index < groceries.length; index++) {
    let g = groceries[index];
    console.log(`groceries[${index}]`, "is: ", g)
    //somethine else we knew namely math
    total = total + g
    console.log("current total", total)
}
console.log("you spent a total of $", total)

//now solve with complex card object
//go through cards starting at first myHand[0] until the end myHand[4]
let myHandComplex = [
    {number: 7, suit: "clubs"},
    {number: 8, suit: "spades"},
    {number: 3, suit: "spades"},
    {number: 9, suit: "hearts"},
    {number: 2, suit: "hearts"}
]

//keep track of the highest number as the first card
let highestCard = myHandComplex[0]
for (let index = 0; index < myHandComplex.length; index++) {
    let card = myHandComplex[index];
    console.log(`myHandComplex[${index}]`, "is: ", card)
    //comparing this card to the highest number
    //JS doesn't know how to compare objects, grab off the properties
    if(myHandComplex[index].number > highestCard.number){
        //keep the highest card
        console.log(myHandComplex[index], "was bigger than", highestCard)
        highestCard = myHandComplex[index]
    }
    
}

console.log("Highest card is ", highestCard)
console.log("Highest suit is ", highestCard.suit)