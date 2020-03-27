const {search, complexSearch, getInstructions, getIngredients, getEquipment, getPrice} = require('../data/APIUtil');

//RETRIEVERS******************************************************************************************
function sendSearch(item)
{
    search(item).then(val => console.log(val));
}

function sendComplexSearch(item)
{
    complexSearch(item).then(val => console.log(val));
}

function sendInstructions(id)
{
    getInstructions(id).then(val => {
        for(var i = 0; i < val.length; i++)
        {
            console.log(val[i]);
        }
        });
    //getInstructions(id).then(val => console.log(val));
}

function sendIngredients(id)
{
    getIngredients(id).then(val => {
        for(var i = 0; i < val.length; i++)
        {
            console.log(val[i]);
        }
        });
    //getIngredients(id).then(val => console.log(val));
}

function sendEquipment(id)
{
    getEquipment(id).then(val => {
        for(var i = 0; i < val.length; i++)
        {
            console.log(val[i]);
        }
        });
    //getEquipment(id).then(val => console.log(val));
}

function sendPrice(id)
{
    getPrice(id).then(val => console.log(`$${val}`));
}

//TESTS*******************************************************************************************************

function testSendSearch(item)
{
    sendSearch(item);
}

function testSendComplexSearch(item)
{
    sendComplexSearch(item);
}

function testSendInstructions(id)
{
    sendInstructions(id);
}

function testSendIngredients(id)
{
    sendIngredients(id);
}

function testSendEquipment(id)
{
    sendEquipment(id);
}

function testSendPrice(id)
{
    sendPrice(id);
}

//MAIN********************************************************************************************************

function main() 
{
    var id = 521510
    var item = "chicken";

    testSendSearch(item);

    testSendComplexSearch(item);

    testSendInstructions(id);

    testSendIngredients(id);

    testSendEquipment(id);

    testSendPrice(id);
}

main();