//LOOP written to console log the numbers 1 to 12
let counting = 1;
while (counting < 13) {
    console.log(counting);
    counting++;
}

//LOOP outputs the 7 times table
let multiples = 1;
while (multiples < 13) {
    console.log(`${multiples} x 7 = ${multiples * 7}`);
    multiples = multiples + 1;
}
//Output should be the 7 times table written out as calculations. 
//Adapt the code by changing the * rule for other tables.

//LOOP inside a LOOP to produce all the times table 1 to 12
let timesTable = 1;
while (timesTable < 13) {
    let multiples = 1;
    while (multiples < 13) {
        console.log(`${multiples} x ${timesTable} = ${multiples * timesTable}`);
        multiples++;
    }
    timesTable++;
}

//ARRAYS - using an array []
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]*7);
    }

//ARRAYS - TASK2 - Favourite foods
const favFoods = ['Pizza', 'Pasta', 'Ice Cream', 'Sushi', 'Burgers'];
    console.log(favFoods[0]);
    console.log(favFoods[1]);
    console.log(favFoods[2]);
    console.log(favFoods[3]);
    console.log(favFoods[4]);
    //print to console log each meal item.
        favFoods.push('Chocolate'); // Adding a new food to the array
        favFoods[2] = 'Ice Lolly'; // Changing the 3rd item
    console.log(favFoods[2]); // Output the changed item
    console.log(favFoods); // Output the entire array to see changes

    //for of LOOPS - Iterating over the array
    for (const foods of favFoods) {
        console.log(foods);
    }
    for (let i = 0; i < favFoods.length; i++) {
        console.log(favFoods[i]);
    }

//OBJECTS - Creating and using objects - TASK 4
const recipe = {
    title: 'How to make pizza',
    servings: 4,
    ingredients: ['pizza base', 'tomato sauce', 'cheese', 'pepperoni'],
    directions: ['Preheat oven to 220C.', 'Spread sauce on base.', 'Add toppings.', 'Bake for 15 minutes.']
};
        console.log(recipe.title);
        console.log(recipe.servings);
        console.log(recipe.ingredients);
        console.log(recipe.directions);
        for (const ingredient of recipe.ingredients) {
            console.log(`- ${ingredient}`);
        }
        for (const direction of recipe.directions) {
            console.log(`- ${direction}`);
        }
    //Task 5 - Also first takeaway task
    function letsCook() {
        console.log(`I'm hungry lets cook ${recipe.title}`);
    }
    letsCook();