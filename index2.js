const radius = [3,1,2,4]; // high order function

const area = function(radius) {
    return Math.PI * radius * radius;
};

const circumference = function(radius) {
    return 2 * Math.PI * radius;
}

const calculate = function(radius, logic) {
    const output = [];

    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }

    return output;
}

const areas = calculate(radius, area);
const circumferences = calculate(radius, circumference);