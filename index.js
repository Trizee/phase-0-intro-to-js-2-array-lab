// Write your solution here!
const cats = ["Milo" , "Otis", "Garfield"]
function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(){
    const cat = [...cats];
    cat.push("Broom")
    return cat;
}
function prependCat(){
    const cat = [...cats];
    cat.unshift("Arnold");
    return cat;
}
function removeLastCat(){
    const cat = [...cats];
    cat.pop();
    return cat;
}
function removeFirstCat(){
    const cat = [...cats];
    cat.shift();
    return cat;
}
