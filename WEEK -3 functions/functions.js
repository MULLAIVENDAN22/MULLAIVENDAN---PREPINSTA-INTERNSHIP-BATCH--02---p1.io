/* Task-1
        Why spend money on a fortune teller when you can create your own
        destiny? Write a JavaScript function called tellFortune with the following
        specifications:
            i)  It should take four arguments: the number of children you'll have, the
                name of your future partner, the place you'll live in, and your future job
                title.
            ii) The function should display your fortune on the screen in the following
                format: "You will be a [job title] in [location], and married to [partner's
                name] with [number of children] kids."
        To complete the task, call the tellFortune function three times, each time
        with different values for the arguments to see different fortune predictions. 
*/


function tellFortune(child_no,p_name,place,job) {
    console.log(`You will be a ${job} in ${place}, and married to ${p_name} with ${child_no} kids.`)         
}

tellFortune(2,"Rahul","Delhi","Software Engineer");
tellFortune(3,"Kumar","pune","Tesing Engineer");
tellFortune(4,"Deepak","kerla","Networking Engineer");



/* Task-2
    "The Pet Age Calculator"
    Ever wondered how old your cat is in human years? Let's calculate it!
    Create a JavaScript function called calculatePetAge with the following
    specifications:
            i) It should take one argument: your pet's age.
            ii) Calculate your pet's age based on the conversion rate of 1 human year to 7 pet
                years (for example, for a cat).
            iii) Display the result on the screen in the format: "Your kitty is NN years old in
                 cat years!"
        To make it more interesting, let's consider a bonus feature:
        Bonus: Add an additional argument to the function that allows you to specify the
        conversion rate of human years to pet years, accommodating different types of
        animals.
    Now, call the calculatePetAge function three times with various pet ages and
    conversion rates to see the pet's age in different contexts. 
*/


function calculatePetAge(petAge, conversionRate = 7) {
    const petYears = petAge * conversionRate;
    console.log(`Your kitty is ${petYears} years old in cat years!`);
}


calculatePetAge(3); 
calculatePetAge(5, 5); 
calculatePetAge(2, 10); 


 /*   Task-3
    “The Rectangler”

    Create 2 functions that calculate properties of a rectangle, using the
    definitions here.
    i) Create a function called calcPerimeter:
    Pass the length and width of the rectangle to the function.
    Calculate the perimeter of the rectangle based on its length and
    width, and output "The perimeter is NN".
    ii) Create a function called calcArea:
    Pass the length and width of the rectangle to the function.
    Calculate the area of the rectangle based on its length and width,
    and output "The area is NN”.
*/


function calcPerimeter(l,b) {
    const perimeter = 2*(l+b);
    console.log(`The perimeter is ${perimeter}`);
}

function calcArea(l,b) {
    const Area = l*b;
    console.log(`The Area is ${Area}`);
}


calcPerimeter(20, 30);
calcArea(20, 30);



/*  Task-4
    "The Coffee Consumption Estimator”
    Are you curious about how much coffee you'll need to last you through
    your coffee-drinking years? Let's create a function to estimate that!
        Write a function named calculateCoffeeSupply that:
            Takes 2 arguments: age and cups per day.
            Calculates the total number of cups of coffee you'll consume for the rest of
            your life (based on a constant max age).
            Outputs the result to the screen as: "You will need NN cups of coffee to keep
            you awake until the age of X."
            Call that function three times, passing in different values each time to
            estimate your coffee consumption.
        Bonus: Accept floating-point values for cups per day, and round the result
        to the nearest whole number."
*/


function calculateCoffeeSupply(age,cups) {
    const max_age= 100;
    const left_age= (100-age)*365*(Math.round(cups));
    console.log(`You will need ${left_age} cups of coffee to keep you awake until the age of ${max_age}`);
}


calculateCoffeeSupply(27,10);
calculateCoffeeSupply(40,8.782);
calculateCoffeeSupply(19,4.8347);


/* Task-5
        "The Distance Converter”

        Let's create a converter for converting distances between different units.
        Follow these steps:
            Create a function called metersToFeet:
                Store a distance in meters into a variable.
                Convert it to feet (1 meter = 3.281 feet) and output "NN meters is equal to
                NN feet."
            Create a function called feetToMeters:
                Store a distance in feet into a variable.
                Convert it to meters (1 foot = 0.3048 meters) and output "NN feet is equal
                to NN meters."
            Call both functions, passing in different distance values each time, to
            convert between meters and feet."
*/


function metersToFeet(meter) {
    const feet= meter*(3.281);
    console.log(`${meter} meters is equal to ${feet} feet`)         
}

function feetToMeters(feet) {
    const meter= feet*(0.3048);
    console.log(`${feet} feet is equal to ${meter} meters.`)         
}



metersToFeet(200)
feetToMeters(656.2)