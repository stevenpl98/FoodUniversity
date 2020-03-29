const unirest = require('unirest');

var CONFIG = require('../../config.json');
//var CONFIG = require('../../econfig.json'); //if you do not have keyS or keyN add a key to this config file

var main = "https://api.spoonacular.com/";
var key = CONFIG.keyS;
//var key = CONFIG.key; //if you do not have keyS or keyN, use this key

var url;
var headers;

var data;
var ids= [];
var status;
var price = 0;
var servings = 0;
var readyTime = 0;
var title;
var instructions= [];
var ingredients= [];
var ingredientImgs= [];
var equipment= [];

// TEST SEARCH FUNCTIONS**********************************************************************************************************
//searches for recipes based on food context
async function search(item)
{
    url = `${main}recipes/search?apiKey=${key}&query=${item}&instructionsRequired=true`;
    headers = 
    {
        "Content-Type": "application/json"
    };
    try 
    {
        result = await unirest.get(url).headers(headers);

        status = result.status;
        console.log("Search results status: " + status);
        
        data = result.body['results'];

        //console.log(data);
        return data;

    } 
    catch (error) 
    {
        
    }
}

async function complexSearch(item)
{
    url = `${main}recipes/complexSearch?apiKey=${key}&query=${item}&addRecipeInformation=true&fillIngredients=true`;
    headers = 
    {
        "Content-Type": "application/json"
    };

    try 
    {
        result = await unirest.get(url).headers(headers);

        status = result.status;
        console.log("Complex Search results status: " + status);
        
        data = result.body['results'];

        //console.log(data);
        return data;

    } 
    catch (error) 
    {
        
    }
}

async function searchByCuisine(cuisine)
{
    url = `${main}recipes/search?apiKey=${key}&cuisine=${cuisine}&instructionsRequired=true`;
    headers = 
    {
        "Content-Type": "application/json"
    };

    try 
    {
        result = await unirest.get(url).headers(headers);

        status = result.status;
        console.log("Search by cuisine results status: " + status);
        
        data = result.body['results'];

        //console.log(data);
        return data;

    } 
    catch (error) 
    {
        
    }
}

//GET IDs FROM SEARCH************************************************************************************************************
//Above functions are tested and cover tests for these ID searches
async function getIdsByItem(item, offset)
{
    url = `${main}recipes/search?apiKey=${key}&query=${item}&instructionsRequired=true&number=100&offset=${offset}`;
    headers = 
    {
        "Content-Type": "application/json"
    };
    try 
    {
        result = await unirest.get(url).headers(headers);

        status = result.status;
        console.log("Get ids by item status: " + status);
        
        data = result.body['results'];

        for(var i = 0; i < data.length; i++)
        {
            ids[i] = data[i]['id'];
            //console.log(ids[i]);
        }
        //console.log(data);
        return ids;

    } 
    catch (error) 
    {
        
    }
}

async function getIdsByCuisine(cuisine, offset)
{
    url = `${main}recipes/search?apiKey=${key}&cuisine=${cuisine}&instructionsRequired=true&number=100&offset=${offset}`;
    headers = 
    {
        "Content-Type": "application/json"
    };

    try 
    {
        result = await unirest.get(url).headers(headers);

        status = result.status;
        console.log("Get ids by cuisine status: " + status);
        
        data = result.body['results'];

        for(var i = 0; i < data.length; i++)
        {
            ids[i] = data[i]['id'];
            //console.log(ids[i]);
        }
        //console.log(data);
        return ids;

    } 
    catch (error) 
    {
        
    }
}

//RECIPE INFO*****************************************************************************************************************
async function getInstructions(id)
{
    //var data;
    
    url = `${main}recipes/${id}/analyzedInstructions?apiKey=${key}&stepBreakdown=true`;
    headers = 
    {
        "Content-Type": "application/json"
    }; 
    try 
    {
        result = await unirest.get(url).headers(headers);

        status = result.status;
        console.log("Instructions status: " + status);
        body = result['raw_body'];
        var parsedBody = JSON.parse(body);
        var steps = parsedBody[0]['steps'];

        for(var step = 0; step < steps.length; step++)
        {
            instructions[step]= `${step+1}. ` + steps[step]['step'];
            //console.log(steps[step]['step']);
        }

        return instructions;       
    } 
    catch (error) 
    {
        
    }
}

async function getIngredients(id)
{
    url = `${main}recipes/${id}/information?apiKey=${key}`;
    headers = 
    {
        "Content-Type": "application/json"
    }; 
    try 
    {
        result = await unirest.get(url).headers(headers);

        status = result.status;
        console.log("Ingredients status: " + status);

        data = result.body['extendedIngredients'];

        for(var i = 0; i < data.length; i++)
        {
            ingredients[i] = data[i]['name'];
            //console.log(ingredients[i]);
        }
        //console.log(data);
        return ingredients;
    } 
    catch (error) 
    {
        
    }
}

async function getIngredientImages(id)
{
    url = `${main}recipes/${id}/information?apiKey=${key}`;
    headers = 
    {
        "Content-Type": "application/json"
    }; 
    try 
    {
        result = await unirest.get(url).headers(headers);

        status = result.status;
        console.log("Ingredient images status: " + status);

        data = result.body['extendedIngredients'];

        for(var i = 0; i < data.length; i++)
        {
            ingredientImgs[i] = "https://spoonacular.com/cdn/ingredients_100x100/" + data[i]['image'];
            //console.log(ingredientImgs[i]);
        }
        return ingredientImgs;
    } 
    catch (error) 
    {
        
    }
}

function Ingredient(ingredient, image)
{
    this.ingredient = ingredient;
    this.image = image;
}

async function getIngredientsWithImage(id)
{
    url = `${main}recipes/${id}/information?apiKey=${key}`;
    headers = 
    {
        "Content-Type": "application/json"
    }; 
    try 
    {
        result = await unirest.get(url).headers(headers);

        status = result.status;
        console.log("Ingredients with images status: " + status);

        data = result.body['extendedIngredients'];
        //console.log(data);
        var objects = [];

        for(var i = 0; i < data.length; i++)
        {
            var ingredientObj = new Ingredient(data[i]['name'], "https://spoonacular.com/cdn/ingredients_100x100/" + data[i]['image']);
            objects.push(ingredientObj);           
        }

        var stringified = JSON.stringify(objects);
        ingredients = JSON.parse(stringified);

        return ingredients;
    } 
    catch (error) 
    {
        
    }
}

async function getEquipment(id)
{
    //url = `${main}recipes/${id}/equipmentWidget?apiKey=${key}.json`;
    url = `${main}recipes/${id}/analyzedInstructions?apiKey=${key}&stepBreakdown=true`;
    headers = 
    {
        "Content-Type": "text/html"
    }; 

    try 
    {
        result = await unirest.get(url).headers(headers);

        status = result.status;
        console.log("Equipment status: " + status);

        body = result['raw_body'];
        var parsedBody = JSON.parse(body);
        
        var step;
        var equips;
        var steps = parsedBody[0]['steps'];
        var item = 0;
        for(step = 0; step < steps.length; step++)
        {
            for(equips = 0; equips < 5; equips++)
            {
                try 
                {
                    equipment[item]= steps[step]['equipment'][equips]['name'];
                    //console.log(`${equips + item + 1}. ` + equipment[item]);
                    item = item + 1;
                }
                catch(err) 
                {
                    break;
                }
            }
        }
        return equipment;
    } 
    catch (error) 
    {
        
    }
}

async function getPrice(id)
{
    url = `${main}recipes/${id}/information?apiKey=${key}&includeNutrition=false`;
    headers = 
    {
        "Content-Type": "application/json"
    }; 
    try 
    {
        result = await unirest.get(url).headers(headers);

        status = result.status;
        console.log("Price Per Serving status: " + status);
        data = result.body['summary'];

        var patt1 = /[0-9][.][0-9][0-9]/g;
        var patt2 = /[0-9][0-9][.][0-9][0-9]/g;
        
        if(data.match(patt2) != null)
        {
            price = data.match(patt2);
        }
        else
        {
            price = data.match(patt1);
        }
        var myPrice = parseFloat(price).toFixed(2);
        
        return myPrice * 1.0;
    } 
    catch (error) 
    {
        console.log(error); 
    }
}

async function getServings(id)
{
    url = `${main}recipes/${id}/information?apiKey=${key}&includeNutrition=false`;
    headers = 
    {
        "Content-Type": "application/json"
    }; 
    try 
    {
        result = await unirest.get(url).headers(headers);

        status = result.status;
        console.log("Servings status: " + status);
        servings = result.body['servings'];

        return servings;
    } 
    catch (error) 
    {
        console.log(error); 
    }
}

async function getReadyTime(id)
{
    url = `${main}recipes/${id}/information?apiKey=${key}&includeNutrition=false`;
    headers = 
    {
        "Content-Type": "application/json"
    }; 
    try 
    {
        result = await unirest.get(url).headers(headers);

        status = result.status;
        console.log("Ready Time status: " + status);
        readyTime = result.body['readyInMinutes'];

        return readyTime;
    } 
    catch (error) 
    {
        console.log(error); 
    }
}

async function getRecipeTitle(id)
{
    url = `${main}recipes/${id}/information?apiKey=${key}&includeNutrition=false`;
    headers = 
    {
        "Content-Type": "application/json"
    }; 
    try 
    {
        result = await unirest.get(url).headers(headers);

        status = result.status;
        console.log("Recipe Title status: " + status);
        title = result.body['title'];

        return title;
    } 
    catch (error) 
    {
        console.log(error); 
    }
}

function getRecipeImage(id)
{
    var image = `https://spoonacular.com/recipeImages/${id}-636x393.jpg`;

    return image;
}

module.exports = { search, complexSearch, searchByCuisine, getIdsByItem, getIdsByCuisine, getInstructions, getIngredients, getIngredientImages, getIngredientsWithImage, getEquipment, getPrice, getServings, getReadyTime, getRecipeTitle, getRecipeImage };