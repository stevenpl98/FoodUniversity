const unirest = require('unirest');

var CONFIG = require('../../config.json');

var main = "https://api.spoonacular.com/";
var key = CONFIG.keyN;

var url;
var headers;

var data;
var status;
var price = 0;

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
        data = result.body['results'];
        status = result.status;
        console.log(status);
    }).catch(err => {
        console.log(err)
    })
}

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
        body = result['raw_body'];
        var parsedBody = JSON.parse(body);
        var steps = parsedBody[0]['steps'];
        status = result.status;
        console.log(status);

        for(var step = 0; step < steps.length; step++)
        {
            console.log(steps[step]['step']);
        }

    }).catch(err => {
        console.log(err)
    })
}

//callback function
function getPrice(id)
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
        data = result.body['summary'];
        status = result.status;
        console.log(status);

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
    setTimeout(function(){console.log(myPrice)},2000);
}

//getInstructions(521510);
//search("beef");

sendPrice(521510);