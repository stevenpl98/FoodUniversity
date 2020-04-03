const {search, complexSearch, searchByCuisine, getIdsByItem, getIdsByCuisine, getInstructions, getIngredients, getIngredientImages, getIngredientsWithImage, getEquipment, getPrice, getServings, getReadyTime, getRecipeTitle, getRecipeImage} = require('./APIUtil');

function sendSearch(item)
{
    search(item).then(val => console.log(val));
}

function sendComplexSearch(item)
{
    complexSearch(item).then(val => console.log(val));
}

function sendSearchByCuisine(cuisine)
{
    searchByCuisine(cuisine).then(val => console.log(val));
}

function sendIdsByItem(item, offset)
{
    getIdsByItem(item, offset).then(val => {
        for(var i = 0; i < val.length; i++)
        {
            console.log(val[i]);
        }
    });
    getIdsByItem(item, offset).then(val => console.log(val));
}

function sendIdsByCuisine(cuisine, offset)
{
    getIdsByCuisine(cuisine, offset).then(val => {
        for(var i = 0; i < val.length; i++)
        {
            console.log(val[i]);
        }
    });
    getIdsByCuisine(cuisine, offset).then(val => console.log(val));
}

function sendInstructions(id)
{
    getInstructions(id).then(val => {
        for(var i = 0; i < val.length; i++)
        {
            console.log(val[i]);
        }
    });
    getInstructions(id).then(val => console.log(val));
}

function sendIngredients(id)
{
    getIngredients(id).then(val => {
        for(var i = 0; i < val.length; i++)
        {
            console.log(val[i]);
        }
    });
    getIngredients(id).then(val => console.log(val));
}

function sendIngredientImages(id)
{
    getIngredientImages(id).then(val => {
        for(var i = 0; i < val.length; i++)
        {
            console.log(val[i]);
        }
    });
    getIngredientImages(id).then(val => console.log(val));
}

function sendIngredientsWithImage(id)
{
    getIngredientsWithImage(id).then(val => {
        for(var i = 0; i < val.length; i++)
        {
            console.log(val[i]['ingredient']);
            console.log(val[i]['image']);
        }
    });
    getIngredientsWithImage(id).then(val => console.log(val));
}

function sendEquipment(id)
{
    getEquipment(id).then(val => {
        for(var i = 0; i < val.length; i++)
        {
            console.log(val[i]);
        }
    });
    getEquipment(id).then(val => console.log(val));
}

function sendPrice(id)
{
    getPrice(id).then(val => {
        console.log(`$${val}`)
    });
}

function sendServings(id)
{
    getServings(id).then(val => {
        console.log(val)
    });
}

function sendReadyTime(id)
{
    getReadyTime(id).then(val => {
        console.log(val)
    });
}

function sendRecipeTitle(id)
{
    getRecipeTitle(id).then(val => {
        console.log(val)
    });
}

function sendRecipeImage(id)
{
    console.log(getRecipeImage(id));
}

//MAIN**********************************************************************************************

function main() 
{
    var cuisines= [
        'African',
        'American',
        'British',
        'Cajun',
        'Caribbean',
        'Chinese',
        'Eastern European',
        'European',
        'French',
        'German',
        'Greek',
        'Indian',
        'Irish',
        'Italian',
        'Japanese',
        'Jewish',
        'Korean',
        'Latin American',
        'Mediterranean',
        'Mexican',
        'Middle Eastern',
        'Nordic',
        'Southern',
        'Spanish',
        'Thai',
        'Vietnamese'
    ];

    var offset = Math.floor((Math.random() * 990));
    var id = 521510
    var item = "chicken";
    var cuisine = cuisines[0];

    //sendSearch(item);

    //sendComplexSearch(item);

    //sendSearchByCuisine(cuisine);

    //sendIdsByItem(item, offset);

    //sendIdsByCuisine(cuisine, 0);

    //sendInstructions(id);

    //sendIngredients(id);

    //sendIngredientImages(id)

    //sendIngredientsWithImage(id);

    //sendEquipment(id);

    //sendPrice(id);

    //sendServings(id);

    //sendReadyTime(id);

    //sendRecipeTitle(id)

    sendRecipeImage(id)
}

main();