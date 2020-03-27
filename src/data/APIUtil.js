const unirest = require('unirest');

var CONFIG = require('../../config.json');
//var CONFIG = require('../../econfig.json'); //if you do not have keyS or keyN add a key to this config file

var main = "https://api.spoonacular.com/";
var key = CONFIG.keyS;
//var key = CONFIG.key; //if you do not have keyS or keyN, use this key

var url;
var headers;

var data;
var status;
var price = 0;
var instructions= [];
var ingredients= [];
var equipment= [];

//SEARCH**********************************************************************************************************
//searches for recipes based on food context
async function search(item)
{
    //var data;

    url = `${main}recipes/search?apiKey=${key}&query=${item}&instructionsRequired=true`;
    headers = 
    {
        "Content-Type": "application/json"
    };
    try 
    {
        result = await unirest.get(url).headers(headers);

        status = result.status;
        console.log(status);
        
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
        console.log(status);
        
        data = result.body['results'];

        //console.log(data);
        return data;

    } 
    catch (error) 
    {
        
    }
}
//INSTRUCTIONS******************************************************************************************************
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
        console.log(status);
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

//INGREDIENTS**************************************************************************************
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
        console.log(status);

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

//EQUIPMENT**************************************************************************************
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
        console.log(status);

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
    try 
    {
        result = await unirest.get(url).headers(headers);

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
        var myPrice = parseFloat(price).toFixed(2);
        
        return myPrice;
    } 
    catch (error) 
    {
        console.log(error); 
    }
}

module.exports = { search, complexSearch, getInstructions, getIngredients, getEquipment, getPrice };