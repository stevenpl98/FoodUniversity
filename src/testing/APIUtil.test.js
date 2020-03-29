const {search, complexSearch, searchByCuisine, getInstructions, getIngredients, getIngredientImages, getIngredientsWithImage, getEquipment, getPrice, getServings, getReadyTime, getRecipeTitle, getRecipeImage} = require('../data/APIUtil');

function test_search(item)
{
    let expected = [
        {
          id: 485365,
          title: 'Chicken Spinoccoli – Breaded Stuffed Chicken Breast With Spinach, Broccoli and Cheese',
          readyInMinutes: 65,
          servings: 4,
          image: 'chicken-spinoccoli-breaded-stuffed-chicken-breast-with-spinach-broccoli-and-cheese-485365.jpg',
          imageUrls: [
            'chicken-spinoccoli-breaded-stuffed-chicken-breast-with-spinach-broccoli-and-cheese-485365.jpg'
          ]
        },
        {
          id: 74172,
          title: 'Imperial Chicken',
          readyInMinutes: 45,
          servings: 12,
          image: 'imperial-chicken-74172.jpg',
          imageUrls: [ 'imperial-chicken-74172.jpg' ]
        },
        {
          id: 74202,
          title: 'Chicken with Piquillos',
          readyInMinutes: 135,
          servings: 4,
          image: 'chicken-with-piquillos-74202.jpg',
          imageUrls: [ 'chicken-with-piquillos-74202.jpg' ]
        },
        {
          id: 94640,
          title: 'Chicken Cassoulet',
          readyInMinutes: 40,
          servings: 8,
          image: 'chicken-cassoulet-94640.jpg',
          imageUrls: [ 'chicken-cassoulet-94640.jpg' ]
        },
        {
          id: 107878,
          title: 'Garlic Chicken',
          readyInMinutes: 45,
          servings: 4,
          image: 'garlic-chicken-2-107878.png',
          imageUrls: [ 'garlic-chicken-2-107878.png', 'garlic_chicken-107878.jpg' ]
        },
        {
          id: 169923,
          title: 'Chicken-in-a-Skillet',
          readyInMinutes: 30,
          servings: 4,
          image: 'chicken-in-a-skillet-169923.jpg',
          imageUrls: [ 'chicken-in-a-skillet-169923.jpg' ]
        },
        {
          id: 206986,
          title: 'Garlic Chicken',
          readyInMinutes: 45,
          servings: 5,
          image: 'garlic-chicken-206986.jpg',
          imageUrls: [ 'garlic-chicken-206986.jpg' ]
        },
        {
          id: 248884,
          title: 'Chicken Saltimbocca',
          readyInMinutes: 25,
          servings: 4,
          image: 'Chicken-Saltimbocca-248884.jpg',
          imageUrls: [ 'Chicken-Saltimbocca-248884.jpg' ]
        },
        {
          id: 249036,
          title: 'Chicken Slavinks',
          readyInMinutes: 45,
          servings: 6,
          image: 'Chicken-Slavinks-249036.jpg',
          imageUrls: [ 'Chicken-Slavinks-249036.jpg' ]
        },
        {
          id: 312363,
          title: 'Chicken Quenelles',
          readyInMinutes: 55,
          servings: 10,
          image: 'chicken-quenelles-312363.jpeg',
          imageUrls: [ 'chicken-quenelles-312363.jpeg' ]
        }
    ];
    test('Search results', () => {
        return search(item).then(data => {
          expect(data).toMatchObject(expected);
        });
    });
}

function test_complexSearch(item)
{
    let expected = [
        {
          vegetarian: false,
          vegan: false,
          glutenFree: false,
          dairyFree: false,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 18,
          gaps: 'no',
          lowFodmap: false,
          preparationMinutes: 15,
          cookingMinutes: 15,
          sourceUrl: 'http://www.foodnetwork.com/recipes/mario-batali/chicken-saltimbocca-saltimbocca-di-pollo-recipe.html',
          spoonacularSourceUrl: 'https://spoonacular.com/chicken-296687',
          aggregateLikes: 2,
          spoonacularScore: 77,
          healthScore: 39,
          creditsText: 'Foodnetwork',
          sourceName: 'Foodnetwork',
          pricePerServing: 625.3,
          id: 296687,
          title: 'Chicken',
          readyInMinutes: 30,
          servings: 4,
          image: 'https://spoonacular.com/recipeImages/296687-312x231.jpeg',
          imageType: 'jpeg',
          summary: `Chicken might be just the main course you are searching for. One portion of this dish contains roughly <b>56g of protein</b>, <b>26g of fat</b>, and a total of <b>696 calories</b>. This recipe serves 4. For <b>$5.73 per serving</b>, this recipe <b>covers 33%</b> of your daily requirements of vitamins and minerals. A mixture of all purpose flour, butter, oyster mushrooms, and a handful of other ingredients are all it takes to make this recipe so yummy. This recipe is liked by 2 foodies and cooks. From preparation to the plate, this recipe takes about <b>30 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 74%</b>. This score is solid. Try <a href="https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-310658">I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>, <a href="https://spoonacular.com/recipes/the-best-shredded-chicken-for-your-chicken-dishes-+-homemade-chicken-broth-528123">The Best Shredded Chicken For Your Chicken Dishes + Homemade Chicken Broth</a>, and <a href="https://spoonacular.com/recipes/popeye-tsos-chicken-general-tsos-chicken-made-with-popeyes-chicken-nuggets-196521">Popeye Tso's Chicken (General Tso's Chicken Made with Popeye's Chicken Nuggets)</a> for similar recipes.`,
          cuisines: [],
          dishTypes: [ 'lunch', 'main course', 'main dish', 'dinner' ],
          diets: [],
          occasions: [],
          winePairing: {},
          analyzedInstructions: [ [Object] ],
          usedIngredientCount: 0,
          missedIngredientCount: 9,
          missedIngredients: [
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object]
          ],
          likes: 0,
          usedIngredients: [],
          unusedIngredients: []
        },
        {
          vegetarian: false,
          vegan: false,
          glutenFree: false,
          dairyFree: true,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 8,
          gaps: 'no',
          lowFodmap: false,
          preparationMinutes: 20,
          cookingMinutes: 25,
          sourceUrl: 'http://www.foodnetwork.com/recipes/chicken-club-salad-recipe.html',
          spoonacularSourceUrl: 'https://spoonacular.com/chicken-379523',
          aggregateLikes: 0,
          spoonacularScore: 70,
          healthScore: 35,
          creditsText: 'Foodnetwork',
          sourceName: 'Foodnetwork',
          pricePerServing: 297.77,
          id: 379523,
          title: 'Chicken',
          readyInMinutes: 45,
          servings: 6,
          image: 'https://spoonacular.com/recipeImages/379523-312x231.jpeg',
          imageType: 'jpeg',
          summary: `Chicken is a <b>dairy free</b> main course. For <b>$2.93 per serving</b>, this recipe <b>covers 28%</b> of your daily requirements of vitamins and minerals. This recipe makes 6 servings with <b>376 calories</b>, <b>51g of protein</b>, and <b>13g of fat</b> each. 1 person has made this recipe and would make it again. Head to the store and pick up bacon, cubes bread, chicken breasts, and a few other things to make it today. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 73%</b>. This score is good. Try <a href="https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-310658">I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>, <a href="https://spoonacular.com/recipes/the-best-shredded-chicken-for-your-chicken-dishes-+-homemade-chicken-broth-528123">The Best Shredded Chicken For Your Chicken Dishes + Homemade Chicken Broth</a>, and <a href="https://spoonacular.com/recipes/popeye-tsos-chicken-general-tsos-chicken-made-with-popeyes-chicken-nuggets-196521">Popeye Tso's Chicken (General Tso's Chicken Made with Popeye's Chicken Nuggets)</a> for similar recipes.`,
          cuisines: [],
          dishTypes: [ 'lunch', 'main course', 'main dish', 'dinner' ],
          diets: [ 'dairy free' ],
          occasions: [],
          winePairing: {},
          analyzedInstructions: [ [Object], [Object] ],
          usedIngredientCount: 0,
          missedIngredientCount: 6,
          missedIngredients: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
          likes: 0,
          usedIngredients: [],
          unusedIngredients: []
        },
        {
          vegetarian: false,
          vegan: false,
          glutenFree: false,
          dairyFree: false,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 9,
          gaps: 'no',
          lowFodmap: false,
          preparationMinutes: 30,
          cookingMinutes: 20,
          sourceUrl: 'https://ikneadtoeat.com/chicken-65-recipe/',
          spoonacularSourceUrl: 'https://spoonacular.com/chicken-65-1224783',
          aggregateLikes: 0,
          spoonacularScore: 60,
          healthScore: 18,
          creditsText: 'I Knead to Eat',
          sourceName: 'I Knead to Eat',
          pricePerServing: 167.38,
          id: 1224783,
          title: 'Chicken 65',
          readyInMinutes: 50,
          servings: 4,
          image: 'https://spoonacular.com/recipeImages/1224783-312x231.jpg',
          imageType: 'jpg',
          summary: `Chicken 65 requires about <b>50 minutes</b> from start to finish. One serving contains <b>322 calories</b>, <b>15g of protein</b>, and <b>23g of fat</b>. This recipe serves 4. For <b>$1.67 per serving</b>, this recipe <b>covers 20%</b> of your daily requirements of vitamins and minerals. Only a few people really liked this hor d'oeuvre. This recipe from I Knead to Eat has 1 fans. If you have curry leaves, a few drops of orange food colouring optional, chilli powder, and a few other ingredients on hand, you can make it. With a spoonacular <b>score of 0%</b>, this dish is improvable. Similar recipes include <a href="https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-1224321">I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>, <a href="https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-1189507">I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>, and <a href="https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-310658">I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>.`,
          cuisines: [],
          dishTypes: [
            'antipasti',
            'starter',
            'snack',
            'appetizer',
            'antipasto',
            "hor d'oeuvre"
          ],
          diets: [],
          occasions: [],
          winePairing: {
            pairedWines: [Array],
            pairingText: "Sparkling Wine and Sparkling rosé are my top picks for Chicken 65. If you're serving a selection of appetizers, you can't go wrong with these. Both are very food friendly and complement a variety of flavors. One wine you could try is Piper-Heidsieck Brut Cuvee. It has 4.4 out of 5 stars and a bottle costs about 40 dollars.",
            productMatches: [Array]
          },
          analyzedInstructions: [ [Object] ],
          usedIngredientCount: 0,
          missedIngredientCount: 15,
          missedIngredients: [
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object]
          ],
          likes: 0,
          usedIngredients: [],
          unusedIngredients: []
        },
        {
          vegetarian: false,
          vegan: false,
          glutenFree: true,
          dairyFree: false,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 1,
          gaps: 'no',
          lowFodmap: false,
          sourceUrl: 'http://www.foodista.com/recipe/G4XPLKBW/chicken-65-chicken-marinaded-in-traditional-indian-spices-and-deep-fried',
          spoonacularSourceUrl: 'https://spoonacular.com/chicken-65-637876',
          aggregateLikes: 6,
          spoonacularScore: 36,
          healthScore: 5,
          creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
          license: 'CC BY 3.0',
          sourceName: 'Foodista',
          pricePerServing: 103.22,
          id: 637876,
          title: 'Chicken 65',
          readyInMinutes: 45,
          servings: 6,
          image: 'https://spoonacular.com/recipeImages/637876-312x231.jpg',
          imageType: 'jpg',
          summary: `Need a <b>gluten free hor d'oeuvre</b>? Chicken 65 could be a super recipe to try. This recipe makes 6 servings with <b>113 calories</b>, <b>18g of protein</b>, and <b>3g of fat</b> each. For <b>$1.03 per serving</b>, this recipe <b>covers 10%</b> of your daily requirements of vitamins and minerals. Only a few people made this recipe, and 5 would say it hit the spot. Head to the store and pick up yogurt, chili powder, salt, and a few other things to make it today. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 40%</b>. This score is solid. Try <a href="https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-310658">I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>, <a href="https://spoonacular.com/recipes/the-best-shredded-chicken-for-your-chicken-dishes-+-homemade-chicken-broth-528123">The Best Shredded Chicken For Your Chicken Dishes + Homemade Chicken Broth</a>, and <a href="https://spoonacular.com/recipes/popeye-tsos-chicken-general-tsos-chicken-made-with-popeyes-chicken-nuggets-196521">Popeye Tso's Chicken (General Tso's Chicken Made with Popeye's Chicken Nuggets)</a> for similar recipes.`,
          cuisines: [],
          dishTypes: [ 'lunch', 'main course', 'main dish', 'dinner' ],
          diets: [ 'gluten free' ],
          occasions: [],
          winePairing: {},
          analyzedInstructions: [ [Object] ],
          usedIngredientCount: 0,
          missedIngredientCount: 5,
          missedIngredients: [ [Object], [Object], [Object], [Object], [Object] ],
          likes: 0,
          usedIngredients: [],
          unusedIngredients: []
        },
        {
          vegetarian: false,
          vegan: false,
          glutenFree: false,
          dairyFree: false,
          veryHealthy: false,
          cheap: false,
          veryPopular: true,
          sustainable: false,
          weightWatcherSmartPoints: 13,
          gaps: 'no',
          lowFodmap: false,
          preparationMinutes: 5,
          cookingMinutes: 50,
          sourceUrl: 'http://www.foodnetwork.com/recipes/trisha-yearwood/chicken-pie-recipe.html',
          spoonacularSourceUrl: 'https://spoonacular.com/chicken-pie-737543',
          aggregateLikes: 21686,
          spoonacularScore: 51,
          healthScore: 4,
          creditsText: 'Foodnetwork',
          sourceName: 'Foodnetwork',
          pricePerServing: 108.18,
          id: 737543,
          title: 'Chicken Pie',
          readyInMinutes: 55,
          servings: 6,
          image: 'https://spoonacular.com/recipeImages/737543-312x231.jpeg',
          imageType: 'jpeg',
          summary: 'Chicken Pie might be just the main course you are searching for. For <b>$1.01 per serving</b>, this recipe <b>covers 11%</b> of your daily requirements of vitamins and minerals. One serving contains <b>386 calories</b>, <b>21g of protein</b>, and <b>25g of fat</b>. 21686 people were impressed by this recipe. From preparation to the plate, this recipe takes about <b>55 minutes</b>. Head to the store and pick up butter, buttermilk, chicken broth, and a few other things to make it today. To use up the pepper you could follow this main course with the <a href="https://spoonacular.com/recipes/dr-pepper-cake-with-flour-cooked-frosting-539165">Dr. Pepper Cake with Flour Cooked Frosting</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 53%</b>. This score is good. Try <a href="https://spoonacular.com/recipes/chicken-pot-pie-pockets-908274">Chicken Pot Pie Pockets</a>, <a href="https://spoonacular.com/recipes/homemade-chicken-pot-pie-soup-922614">Homemade Chicken Pot Pie Soup</a>, and <a href="https://spoonacular.com/recipes/slow-cooker-chicken-tamale-pie-923917">Slow Cooker Chicken Tamale Pie</a> for similar recipes.',
          cuisines: [],
          dishTypes: [ 'lunch', 'main course', 'main dish', 'dinner' ],
          diets: [],
          occasions: [],
          winePairing: {},
          analyzedInstructions: [ [Object] ],
          usedIngredientCount: 0,
          missedIngredientCount: 5,
          missedIngredients: [ [Object], [Object], [Object], [Object], [Object] ],
          likes: 0,
          usedIngredients: [],
          unusedIngredients: []
        },
        {
          vegetarian: false,
          vegan: false,
          glutenFree: true,
          dairyFree: false,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 8,
          gaps: 'no',
          lowFodmap: false,
          preparationMinutes: 5,
          cookingMinutes: 20,
          sourceUrl: 'http://www.mccormick.com/Recipes/Main-Dish/Chicken-Ole.aspx',
          spoonacularSourceUrl: 'https://spoonacular.com/chicken-ol-74194',
          aggregateLikes: 24,
          spoonacularScore: 54,
          healthScore: 9,
          pricePerServing: 142.08,
          id: 74194,
          title: 'Chicken Olé',
          readyInMinutes: 25,
          servings: 8,
          image: 'https://spoonacular.com/recipeImages/74194-312x231.jpg',
          imageType: 'jpg',
          summary: `Chicken Olé might be just the main course you are searching for. This recipe serves 8. One serving contains <b>282 calories</b>, <b>22g of protein</b>, and <b>12g of fat</b>. For <b>$1.42 per serving</b>, this recipe <b>covers 15%</b> of your daily requirements of vitamins and minerals. 24 people were impressed by this recipe. It is a good option if you're following a <b>gluten free</b> diet. A mixture of green onions, cheddar cheese, chili powder, and a handful of other ingredients are all it takes to make this recipe so scrumptious. To use up the vegetable oil you could follow this main course with the <a href="https://spoonacular.com/recipes/blueberry-coffee-cake-sundaysupper-511062">Blueberry Coffee Cake #SundaySupper</a> as a dessert. From preparation to the plate, this recipe takes approximately <b>25 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 59%</b>. This score is good. Similar recipes include <a href="https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-310658">I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>, <a href="https://spoonacular.com/recipes/the-best-shredded-chicken-for-your-chicken-dishes-+-homemade-chicken-broth-528123">The Best Shredded Chicken For Your Chicken Dishes + Homemade Chicken Broth</a>, and <a href="https://spoonacular.com/recipes/popeye-tsos-chicken-general-tsos-chicken-made-with-popeyes-chicken-nuggets-196521">Popeye Tso's Chicken (General Tso's Chicken Made with Popeye's Chicken Nuggets)</a>.`,
          cuisines: [],
          dishTypes: [ 'lunch', 'main course', 'main dish', 'dinner' ],
          diets: [ 'gluten free' ],
          occasions: [],
          winePairing: {},
          analyzedInstructions: [],
          sourceName: null,
          creditsText: null,
          usedIngredientCount: 0,
          missedIngredientCount: 9,
          missedIngredients: [
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object]
          ],
          likes: 0,
          usedIngredients: [],
          unusedIngredients: []
        },
        {
          vegetarian: false,
          vegan: false,
          glutenFree: true,
          dairyFree: true,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 10,
          gaps: 'no',
          lowFodmap: true,
          sourceUrl: 'http://www.katheats.com/flufferbun',
          spoonacularSourceUrl: 'https://spoonacular.com/chicken-bbq-42569',
          aggregateLikes: 2,
          spoonacularScore: 69,
          healthScore: 26,
          creditsText: 'Kath Eats Real Food',
          sourceName: 'Kath Eats Real Food',
          pricePerServing: 328.42,
          id: 42569,
          title: 'Chicken Bbq',
          readyInMinutes: 60,
          servings: 3,
          image: 'https://spoonacular.com/recipeImages/42569-312x231.jpg',
          imageType: 'jpg',
          summary: `The recipe Chicken Bbq could satisfy your American craving in about <b>1 hour</b>. This recipe serves 3 and costs $3.28 per serving. One portion of this dish contains roughly <b>66g of protein</b>, <b>8g of fat</b>, and a total of <b>471 calories</b>. Only a few people really liked this main course. 2 people have tried and liked this recipe. It is a good option if you're following a <b>gluten free, dairy free, and fodmap friendly</b> diet. Head to the store and pick up mustard, horseradish, ketchup, and a few other things to make it today. To use up the water you could follow this main course with the <a href="https://spoonacular.com/recipes/watermelon-peach-slushies-507207">Watermelon-Peach Slushies</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 73%</b>. This score is good. Similar recipes include <a href="https://spoonacular.com/recipes/the-best-bbq-chicken-marinade-908666">The BEST BBQ Chicken Marinade</a>, <a href="https://spoonacular.com/recipes/bbq-cheddar-chicken-925478">BBQ Cheddar Chicken</a>, and <a href="https://spoonacular.com/recipes/oven-baked-bbq-chicken-911220">Oven Baked BBQ Chicken</a>.`,
          cuisines: [],
          dishTypes: [ 'lunch', 'main course', 'main dish', 'dinner' ],
          diets: [ 'gluten free', 'dairy free', 'fodmap friendly' ],
          occasions: [],
          winePairing: {},
          analyzedInstructions: [],
          usedIngredientCount: 0,
          missedIngredientCount: 7,
          missedIngredients: [
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object]
          ],
          likes: 0,
          usedIngredients: [],
          unusedIngredients: []
        },
        {
          vegetarian: false,
          vegan: false,
          glutenFree: false,
          dairyFree: true,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 28,
          gaps: 'no',
          lowFodmap: false,
          preparationMinutes: 50,
          cookingMinutes: 80,
          sourceUrl: 'http://www.foodnetwork.com/recipes/anne-burrell/chicken-pho.html',
          spoonacularSourceUrl: 'https://spoonacular.com/chicken-pho-737537',
          aggregateLikes: 152,
          spoonacularScore: 93,
          healthScore: 44,
          creditsText: 'Foodnetwork',
          sourceName: 'Foodnetwork',
          pricePerServing: 593.43,
          id: 737537,
          title: 'Chicken Pho',
          readyInMinutes: 130,
          servings: 4,
          image: 'https://spoonacular.com/recipeImages/737537-312x231.jpeg',
          imageType: 'jpeg',
          summary: `The recipe Chicken Pho could satisfy your Vietnamese craving in around <b>2 hours and 10 minutes</b>. For <b>$5.93 per serving</b>, this recipe <b>covers 43%</b> of your daily requirements of vitamins and minerals. This main course has <b>910 calories</b>, <b>53g of protein</b>, and <b>37g of fat</b> per serving. A mixture of ginger, rice stick noodles, rice wine vinegar, and a handful of other ingredients are all it takes to make this recipe so scrumptious. To use up the ginger you could follow this main course with the <a href="https://spoonacular.com/recipes/ginger-cake-with-crystallized-ginger-frosting-189279">Ginger Cake with Crystallized Ginger Frosting</a> as a dessert. It is a good option if you're following a <b>dairy free</b> diet. 152 people have made this recipe and would make it again. All things considered, we decided this recipe <b>deserves a spoonacular score of 93%</b>. This score is outstanding. Try <a href="https://spoonacular.com/recipes/vietnamese-beef-noodle-salad-pho-tron-914853">Vietnamese Beef Noodle Salad: Pho Tron</a>, <a href="https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-310658">I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>, and <a href="https://spoonacular.com/recipes/the-best-shredded-chicken-for-your-chicken-dishes-+-homemade-chicken-broth-528123">The Best Shredded Chicken For Your Chicken Dishes + Homemade Chicken Broth</a> for similar recipes.`,
          cuisines: [ 'Indian', 'Vietnamese', 'Asian' ],
          dishTypes: [ 'lunch', 'main course', 'main dish', 'dinner' ],
          diets: [ 'dairy free' ],
          occasions: [],
          winePairing: {
            pairedWines: [Array],
            pairingText: 'Asian works really well with Riesling, Gewurztraminer, and Chenin Blanc. The best wine for Asian food depends on the cuisine and dish - of course - but these acidic whites pair with a number of traditional meals, spicy or not. The Pacific Rim Riesling with a 4.2 out of 5 star rating seems like a good match. It costs about 12 dollars per bottle.',
            productMatches: [Array]
          },
          analyzedInstructions: [ [Object], [Object] ],
          usedIngredientCount: 0,
          missedIngredientCount: 17,
          missedIngredients: [
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object]
          ],
          likes: 0,
          usedIngredients: [],
          unusedIngredients: []
        },
        {
          vegetarian: false,
          vegan: false,
          glutenFree: false,
          dairyFree: true,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 12,
          gaps: 'no',
          lowFodmap: false,
          preparationMinutes: 10,
          cookingMinutes: 15,
          sourceUrl: 'http://www.kraftrecipes.com/recipes/chicken-mac-60135.aspx',
          spoonacularSourceUrl: 'https://spoonacular.com/chicken-mac-279390',
          aggregateLikes: 0,
          spoonacularScore: 63,
          healthScore: 25,
          creditsText: 'Kraft Recipes',
          sourceName: 'Kraft Recipes',
          pricePerServing: 217.41,
          id: 279390,
          title: 'Chicken Mac',
          readyInMinutes: 25,
          servings: 4,
          image: 'https://spoonacular.com/recipeImages/279390-312x231.jpg',
          imageType: 'jpg',
          summary: `You can never have too many main course recipes, so give Chicken Mac a try. One serving contains <b>535 calories</b>, <b>36g of protein</b>, and <b>19g of fat</b>. This recipe serves 4. For <b>$2.17 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. This recipe is liked by 1 foodies and cooks. Head to the store and pick up chicken thighs, parsley, green onions, and a few other things to make it today. It is a good option if you're following a <b>dairy free</b> diet. From preparation to the plate, this recipe takes approximately <b>25 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 67%</b>. This score is good. Try <a href="https://spoonacular.com/recipes/the-best-vegan-mac-n-cheese-918277">The BEST Vegan Mac n’ Cheese</a>, <a href="https://spoonacular.com/recipes/vegan-mac-and-cheese-908366">Vegan Mac and Cheese</a>, and <a href="https://spoonacular.com/recipes/bacon-and-egg-mac-and-cheese-921885">Bacon and Egg Mac and Cheese</a> for similar recipes.`,
          cuisines: [],
          dishTypes: [ 'lunch', 'main course', 'main dish', 'dinner' ],
          diets: [ 'dairy free' ],
          occasions: [],
          winePairing: {},
          analyzedInstructions: [ [Object] ],
          usedIngredientCount: 0,
          missedIngredientCount: 5,
          missedIngredients: [ [Object], [Object], [Object], [Object], [Object] ],
          likes: 0,
          usedIngredients: [],
          unusedIngredients: []
        },
        {
          vegetarian: false,
          vegan: false,
          glutenFree: false,
          dairyFree: true,
          veryHealthy: true,
          cheap: false,
          veryPopular: true,
          sustainable: false,
          weightWatcherSmartPoints: 26,
          gaps: 'no',
          lowFodmap: false,
          preparationMinutes: 20,
          cookingMinutes: 120,
          sourceUrl: 'http://kitchenconfidante.com/le-creuset-dutch-oven-giveaway-chicken-pho-recipe',
          spoonacularSourceUrl: 'https://spoonacular.com/chicken-pho-496844',
          aggregateLikes: 553,
          spoonacularScore: 98,
          healthScore: 70,
          creditsText: 'Kitchen Confidante',
          sourceName: 'Kitchen Confidante',
          pricePerServing: 315.03,
          id: 496844,
          title: 'Chicken Pho',
          readyInMinutes: 240,
          servings: 6,
          image: 'https://spoonacular.com/recipeImages/496844-312x231.jpg',
          imageType: 'jpg',
          summary: `Chicken Pho might be just the main course you are searching for. For <b>$4.09 per serving</b>, this recipe <b>covers 53%</b> of your daily requirements of vitamins and minerals. This recipe makes 6 servings with <b>1387 calories</b>, <b>99g of protein</b>, and <b>59g of fat</b> each. 553 people have tried and liked this recipe. A mixture of jalapeños, pepper, chicken, and a handful of other ingredients are all it takes to make this recipe so flavorful. To use up the sugar you could follow this main course with the <a href="https://spoonacular.com/recipes/whole-wheat-refined-sugar-free-sugar-cookies-557184">Whole Wheat Refined Sugar Free Sugar Cookies</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 97%</b>. This score is great. Try <a href="https://spoonacular.com/recipes/vietnamese-beef-noodle-salad-pho-tron-914853">Vietnamese Beef Noodle Salad: Pho Tron</a>, <a href="https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-310658">I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>, and <a href="https://spoonacular.com/recipes/the-best-shredded-chicken-for-your-chicken-dishes-+-homemade-chicken-broth-528123">The Best Shredded Chicken For Your Chicken Dishes + Homemade Chicken Broth</a> for similar recipes.`,
          cuisines: [ 'Indian', 'Vietnamese', 'Asian' ],
          dishTypes: [ 'lunch', 'main course', 'main dish', 'dinner' ],
          diets: [ 'dairy free' ],
          occasions: [],
          winePairing: {
            pairedWines: [Array],
            pairingText: 'Asian can be paired with Riesling, Gewurztraminer, and Chenin Blanc. The best wine for Asian food depends on the cuisine and dish - of course - but these acidic whites pair with a number of traditional meals, spicy or not. You could try Georg Albrecht Schneider Niersteiner Paterberg Riesling Kabinett. Reviewers quite like it with a 4.2 out of 5 star rating and a price of about 14 dollars per bottle.',
            productMatches: [Array]
          },
          analyzedInstructions: [ [Object] ],
          usedIngredientCount: 0,
          missedIngredientCount: 13,
          missedIngredients: [
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object]
          ],
          likes: 0,
          usedIngredients: [],
          unusedIngredients: []
        }
    ];
    test('Complex Search results', () => {
        return complexSearch(item).then(data => {
          expect(data).toMatchObject(expected);
        });
    });
}

function test_searchByCuisine(cuisine)
{
    let expected = [
        {
          id: 262825,
          title: 'African Kale & Yam Soup',
          readyInMinutes: 20,
          servings: 2,
          image: 'African-Kale---Yam-Soup-262825.jpg',
          imageUrls: [ 'African-Kale---Yam-Soup-262825.jpg' ]
        },
        {
          id: 570458,
          title: 'African Potato and Cauliflower Stew',
          readyInMinutes: 40,
          servings: 6,
          image: 'African-Potato-and-Cauliflower-Stew-570458.jpg',
          imageUrls: [ 'African-Potato-and-Cauliflower-Stew-570458.jpg' ]
        },
        {
          id: 697214,
          title: 'Grilled Salmon with North African Flavors',
          readyInMinutes: 45,
          servings: 4,
          image: 'grilled-salmon-with-north-african-flavors-697214.jpg',
          imageUrls: [ 'grilled-salmon-with-north-african-flavors-697214.jpg' ]
        },
        {
          id: 208194,
          title: 'Healthy & Delicious: West African Vegetable Stew',
          readyInMinutes: 45,
          servings: 6,
          image: 'Healthy---Delicious--West-African-Vegetable-Stew-208194.jpg',
          imageUrls: [ 'Healthy---Delicious--West-African-Vegetable-Stew-208194.jpg' ]
        },
        {
          id: 580663,
          title: 'West African Peanut Soup',
          readyInMinutes: 45,
          servings: 4,
          image: 'West-African-Peanut-Soup-580663.jpg',
          imageUrls: [ 'West-African-Peanut-Soup-580663.jpg' ]
        },
        {
          id: 618715,
          title: 'African Pumpkin and Bean Soup',
          readyInMinutes: 25,
          servings: 6,
          image: 'African-Pumpkin-and-Bean-Soup-618715.jpg',
          imageUrls: [ 'African-Pumpkin-and-Bean-Soup-618715.jpg' ]
        },
        {
          id: 575018,
          title: 'Quick and Easy African Pork Peanut Stew, by Pork Passion Pursuit Winner Devon Delaney (Sponsored)',
          readyInMinutes: 40,
          servings: 6,
          image: 'Quick-and-Easy-African-Pork-Peanut-Stew--by-Pork-Passion-Pursuit-Winner-Devon-Delaney-(Sponsored)-575018.jpg',
          imageUrls: [
            'Quick-and-Easy-African-Pork-Peanut-Stew--by-Pork-Passion-Pursuit-Winner-Devon-Delaney-(Sponsored)-575018.jpg'
          ]
        },
        {
          id: 245461,
          title: 'African Chicken Peanut Stew',
          readyInMinutes: 120,
          servings: 6,
          image: 'African-Chicken-Peanut-Stew-245461.jpg',
          imageUrls: [ 'African-Chicken-Peanut-Stew-245461.jpg' ]
        },
        {
          id: 728651,
          title: 'Jollof Rice with Chicken from Ghana',
          readyInMinutes: 60,
          servings: 6,
          image: 'jollof-rice-with-chicken-from-ghana-728651.jpg',
          imageUrls: [ 'jollof-rice-with-chicken-from-ghana-728651.jpg' ]
        },
        {
          id: 925381,
          title: 'West African Peanut Soup',
          readyInMinutes: 45,
          servings: 4,
          image: 'west-african-peanut-soup-925381.jpg',
          imageUrls: [ 'west-african-peanut-soup-925381.jpg' ]
        }
    ];
    test('Search by cuisine results', () => {
        return searchByCuisine(cuisine).then(data => {
          expect(data).toMatchObject(expected);
        });
    });
}

function test_getInstructions(id)
{
    let expected = [
        '1. Place the beef cubes in a bowl.',
        '2. Add the minced garlic, pepper and 3 tbsps. of olive oil.',
        '3. Mix well. Cover and keep in the fridge for a couple of hours.',
        '4. Heat the butter and olive oil in a wide shallow pan — wide enough to contain the beef cubes in a single layer. The heat should be very high.',
        '5. Place the beef in a plastic freezer bag.',
        '6. Add the flour. Shake to coat each piece of meat with flour. It is the flour that will thicken the sauce later and make it stick well to the beef.When the olive oil and butter are hot, add the floured beef, spreading the pieces so that every piece touches the oil. Do not stir for a minute or so to allow the underside to brown. Keep the heat very high. Stir and cook for a few minutes, with occasional stirring, until the beef changes color and a light crust forms.',
        '7. Pour in the Worcestershire sauce and liquid seasoning. Stir briskly; the sauce should thicken quite fast.',
        '8. Add the mushrooms, cook just until heated, stirring occasionally.The actual cooking should take no more than five minutes. If you overcook the beef, the meat will turn tough and dry.',
        '9. Transfer the beef salpicao to a serving platter, sprinkle with toasted garlic bits and finely sliced onion leaves.',
        '10. Serve hot with rice.'
    ];
    test('Instructions', () => {
        return getInstructions(id).then(data => {
          expect(data).toMatchObject(expected);
        });
    });
}

function test_getIngredients(id)
{
    let expected = [
        'beef tenderloin',
        'butter',
        'flour',
        'garlic',
        'garlic',
        'ground pepper',
        'mushrooms',
        'olive oil',
        'onion leaves',
        'seasoning',
        'worcestershire sauce'
    ];
    test('Ingredients', () => {
        return getIngredients(id).then(data => {
          expect(data).toMatchObject(expected);
        });
    });
}

function test_getIngredientImages(id)
{
    let expected = [
        'https://spoonacular.com/cdn/ingredients_100x100/beef-tenderloin.png',
        'https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg',
        'https://spoonacular.com/cdn/ingredients_100x100/flour.png',
        'https://spoonacular.com/cdn/ingredients_100x100/garlic.png',
        'https://spoonacular.com/cdn/ingredients_100x100/garlic.png',
        'https://spoonacular.com/cdn/ingredients_100x100/pepper.jpg',
        'https://spoonacular.com/cdn/ingredients_100x100/mushrooms-white.jpg',
        'https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg',
        'https://spoonacular.com/cdn/ingredients_100x100/spring-onions.jpg',
        'https://spoonacular.com/cdn/ingredients_100x100/seasoning.png',
        'https://spoonacular.com/cdn/ingredients_100x100/dark-sauce.jpg'
    ];
    test('Ingredients Images', () => {
        return getIngredientImages(id).then(data => {
          expect(data).toMatchObject(expected);
        });
    });
}

function test_getIngredientsWithImage(id)
{
    let expected = [
        {
          ingredient: 'beef tenderloin',
          image: 'https://spoonacular.com/cdn/ingredients_100x100/beef-tenderloin.png'
        },
        {
          ingredient: 'butter',
          image: 'https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg'
        },
        {
          ingredient: 'flour',
          image: 'https://spoonacular.com/cdn/ingredients_100x100/flour.png'
        },
        {
          ingredient: 'garlic',
          image: 'https://spoonacular.com/cdn/ingredients_100x100/garlic.png'
        },
        {
          ingredient: 'garlic',
          image: 'https://spoonacular.com/cdn/ingredients_100x100/garlic.png'
        },
        {
          ingredient: 'ground pepper',
          image: 'https://spoonacular.com/cdn/ingredients_100x100/pepper.jpg'
        },
        {
          ingredient: 'mushrooms',
          image: 'https://spoonacular.com/cdn/ingredients_100x100/mushrooms-white.jpg'
        },
        {
          ingredient: 'olive oil',
          image: 'https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg'
        },
        {
          ingredient: 'onion leaves',
          image: 'https://spoonacular.com/cdn/ingredients_100x100/spring-onions.jpg'
        },
        {
          ingredient: 'seasoning',
          image: 'https://spoonacular.com/cdn/ingredients_100x100/seasoning.png'
        },
        {
          ingredient: 'worcestershire sauce',
          image: 'https://spoonacular.com/cdn/ingredients_100x100/dark-sauce.jpg'
        }
    ];
    test('Ingredients with image', () => {
        return getIngredientsWithImage(id).then(data => {
          expect(data).toMatchObject(expected);
        });
    });
}

function test_getEquipment(id)
{
    let expected = [
        'bowl', 
        'frying pan'
    ];
    test('Equipment', () => {
        return getEquipment(id).then(data => {
          expect(data).toMatchObject(expected);
        });
    });
}

function test_getPrice(id)
{
    let expected = 4.61;
    test('Price Per Serving', () => {
        return getPrice(id).then(data => {
          expect(data).toBe(expected);
        });
    });
}

function test_getServings(id)
{
    let expected = 5;
    test('Servings', () => {
        return getServings(id).then(data => {
          expect(data).toBe(expected);
        });
    });
}

function test_getReadyTime(id)
{
    let expected = 45;
    test('Ready Time', () => {
        return getReadyTime(id).then(data => {
          expect(data).toBe(expected);
        });
    });
}

function test_getRecipeTitle(id)
{
    let expected = 'Beef salpicao';
    test('Recipe title', () => {
        return getRecipeTitle(id).then(data => {
          expect(data).toBe(expected);
        });
    });
}

function test_getRecipeImage(id)
{
    let expected = 'https://spoonacular.com/recipeImages/521510-636x393.jpg'
    test('Recipe image', () => {
        expect(getRecipeImage(id)).toBe(expected)
    })
}
//MAIN********************************************************************************************************

function runTests() 
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

    var id = 521510
    var item = "chicken";
    var cuisine = cuisines[0];

    test_search(item);

    //test_complexSearch(item); //test will fail because of its nature

    test_searchByCuisine(cuisine);

    test_getInstructions(id);

    test_getIngredients(id);

    test_getIngredientImages(id);

    test_getIngredientsWithImage(id);

    test_getEquipment(id);

    test_getPrice(id);

    test_getServings(id);
    
    test_getReadyTime(id);

    test_getRecipeTitle(id);

    test_getRecipeImage(id)
}

runTests();