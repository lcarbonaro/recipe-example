// assuming this came fom a previous fetch
var data = {
    "results": [
        {
            "id": 782585,
            "title": "Cannellini Bean and Asparagus Salad with Mushrooms",
            "image": "https://spoonacular.com/recipeImages/782585-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 716426,
            "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
            "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 716406,
            "title": "Asparagus and Pea Soup: Real Convenience Food",
            "image": "https://spoonacular.com/recipeImages/716406-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 644387,
            "title": "Garlicky Kale",
            "image": "https://spoonacular.com/recipeImages/644387-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 782601,
            "title": "Red Kidney Bean Jambalaya",
            "image": "https://spoonacular.com/recipeImages/782601-312x231.jpg",
            "imageType": "jpg"
        }
    ],
    "offset": 0,
    "number": 5,
    "totalResults": 689
};

const myList = document.querySelector('#recipeList');
//const myList2 = document.getElementById('recipeList');

console.log(myList);

let myResultsArray = data.results;

// js array methods: map, filter, forEach, 
// conventional for-loop

myResultsArray.forEach( (r) => {
    let li = document.createElement('li');
    
    
    let img = document.createElement('img');
    let p = document.createElement('p');
    img.src = r.image;
    p.textContent = r.title;
    img.addEventListener('click', async () => {
        //console.log(you clicked on id ${r.id});
        await getRecipe(r.id);
    });

    li.append(img);
    li.append(p);
    myList.append(li);
});






