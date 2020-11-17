function dontGiveMeFive(start, end)
{
    var count = 0;
    for(;start <= end; start++){
        let strRep = start.toString();
        let foundFive = false;
        for(let c of strRep){
            if(c === "5"){
                foundFive = true;
                break;
            }
        }
        if(!foundFive){
            count++;
        }
    }
    return count;
}

console.log(dontGiveMeFive(1,9));
console.log(dontGiveMeFive(4,17));