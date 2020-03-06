const unirest = require('unirest');

var CONFIG = require('../../config.json');

var main = "https://api.spoonacular.com/";
var key = CONFIG.keyS;

var url;
var headers;

var data;
var status;
var price = 0;
var instructions= [];
var ingredients= [];

//REQUESTS*******************************************************************************************************
//calls api to get recipes
function get()
{
    return unirest.get(url)
    .headers(headers)
}

//posts (prob not needed)
function post()
{
    return unirest.post(url)
    .headers(headers)
    .end(result => 
    {
        console.log(result.body);
    });
}

//SEARCH**********************************************************************************************************
//searches for recipes based on food context
function search(item)
{
    //var data;

    url = `${main}recipes/search?apiKey=${key}&query=${item}&instructionsRequired=true`;
    headers = 
    {
        "Content-Type": "application/json"
    };
    get().then(result => 
    {
        status = result.status;
        console.log(status);
        data = result.body['results'];
        console.log(data);
    }).catch(err => {
        console.log(err)
    })
}

function complexSearch(item)
{
    url = `${main}recipes/complexSearch?apiKey=${key}&query=${item}&addRecipeInformation=true&fillIngredients=true`;
    headers = 
    {
        "Content-Type": "application/json"
    };
    get().then(result => 
    {
        status = result.status;
        console.log(status);
        data = result.body['results'].missedIngredients;
        var n = result.body['results']['missedIngredientCount'];

        console.log(data);
    }).catch(err => {
        console.log(err)
    })
}
//INSTRUCTIONS******************************************************************************************************
function getInstructions(id)
{
    //var data;
    
    url = `${main}recipes/${id}/analyzedInstructions?apiKey=${key}&stepBreakdown=true`;
    headers = 
    {
        "Content-Type": "application/json"
    }; 

    get().then(result => 
    {
        status = result.status;
        console.log(status);
        body = result['raw_body'];
        var parsedBody = JSON.parse(body);
        var steps = parsedBody[0]['steps'];

        for(var step = 0; step < steps.length; step++)
        {
            instructions[step]= `${step+1}. ` + steps[step]['step'];
            //console.log(steps[step]['step']);
        }
        sendInstructions(instructions);
    }).catch(err => {
        console.log(err)
    })
}

function sendInstructions(instructions)
{
    setTimeout(function()
    {
        for(var step = 0; step < instructions.length; step++)
        {
            console.log(instructions[step]);
        }
    },500);
}

//INGREDIENTS**************************************************************************************
function getIngredients(id)
{
    url = `${main}recipes/${id}/information?apiKey=${key}`;
    headers = 
    {
        "Content-Type": "application/json"
    }; 

    get().then(result => 
    {
        status = result.status;
        console.log(status);
        data = result.body['extendedIngredients'];

        for(var i = 0; i < data.length; i++)
        {
            ingredients[i] = data[i]['name'];
            console.log(ingredients[i]);
        }
        //console.log(data);
        
    }).catch(err => {
        console.log(err)
    })
}

//PRICE PER SERVING********************************************************************************
async function getPrice(id)
{
    //var data;
    //var price = 0;

    url = `${main}recipes/${id}/information?apiKey=${key}&includeNutrition=false`;
    headers = 
    {
        "Content-Type": "application/json"
    }; 
    get().then(result => 
    {
        status = result.status;
        console.log(status);
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
        setPrice(price);
        
        return price;
        
    }).catch(err => {
        console.log(err)
    })
}

var myPrice = 0;
function setPrice(result)
{ 
    myPrice = parseFloat(result).toFixed(2);
}

function sendPrice(id)
{
    getPrice(id);
    setTimeout(function(){console.log(myPrice)},500);
}

//MAIN*************************************************************************************************

var id = 521510
var item = "chicken";

//search(item);
//complexSearch(item);
//getInstructions(id);
getIngredients(id);
//sendPrice(id);