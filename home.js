function input(name){
    return name;
}

function greet(fun){
    var greetings = "Hello " + name;
    document.getElementById('someText').innerHTML = greetings;
}

name = prompt("Enter your name? ");
greet(input(name));


const getInitials = (firstName, lastName) => {
    return firstName[0] + lastName[0];
}

document.getElementById('someOtherText').innerHTML = getInitials("Roger", "Water");
