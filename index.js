const cats =["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name)
    return cats;
}
function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats;
}
function destructivelyRemoveLastCat(){
    cats.pop()
    return cats;
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    var name_2= [...cats,name];
    return name_2;
  }
  function prependCat(name){
    var name_4=[name,...cats]
    return name_4 ;
  }
  function removeLastCat(){
    var cat_5=cats.slice(0,cats.length-1);
    return cat_5;
  }
  function removeFirstCat(){
    var cat_6=cats.slice(1);
    return cat_6;
  }