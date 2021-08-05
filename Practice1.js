const isLongWord = function(word){
   if(typeof word !== "string"){
       return "this is not a word"}
    if(word.length > 3){
    return "is a long word"
}
else{
    return "is a short word"
}

}
const wordcheck = isLongWord("")
console.log(wordcheck)


// i = i + 1
  for(let i = 0; i < 10; i++){
console.log("Hi", i)

  }

  