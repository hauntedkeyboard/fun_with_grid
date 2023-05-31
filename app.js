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
        const paragraph = document.createElement("p");
        // const span = document.createElement("span");
        let petName = document.createTextNode(` Name: ${petsArray[pet]["name"]} `);
        let petBreed = document.createTextNode(` Breed: ${petsArray[pet]["breed"]} `);
        let petAge = document.createTextNode(` Age: ${petsArray[pet]["age"]}`);

        
        newCard = document.querySelector("article").appendChild(card);
        newP = newCard.appendChild(paragraph);
        // newSpan = newCard.appendChild(span);
        newP.appendChild(petName);
        newP.appendChild(petBreed);
        newP.appendChild(petAge);

        
    }
};

makePetDiv();