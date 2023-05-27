const petsArray = [
    {
        name: "Whiskers",
        breed: "loaf",
        age: "young boi",
    }, 
    {
        name: "Bubsy",
        breed: "floof normal",
        age: "regular",
    }, 
    {
        name: "Petty",
        breed: "floof goblin",
        age: "your age",
    }, 
    {
        name: "Queen",
        breed: "fluffy chonk",
        age: "you\'re afraid to ask",
    }, 
    {
        name: "No",
        breed: "no",
        age: "none",
    }, 
    {
        name: "Chonky Boi",
        breed: "cat? cat!",
        age: "99.99 years",
    }
];



function makePetDiv() {

    for (pet in petsArray) {
        const card = document.createElement("div");
        const paragraph2 = document.createElement("p2");
        const span = document.createElement("span");
        let petName = document.createTextNode(`Name: ${petsArray[pet]["name"]}`);
        let petBreed = document.createTextNode(`Breed: ${petsArray[pet]["breed"]}`);
        let petAge = document.createTextNode(`Age: ${petsArray[pet]["age"]}`);

        
        newCard = document.querySelector("section").appendChild(card);
        newP2 = newCard.appendChild(paragraph2);
        newSpan = newCard.appendChild(span);
        newP2.appendChild(petName);
        newSpan.appendChild(petBreed);
        newSpan.appendChild(petAge);

        
    }
};

makePetDiv();