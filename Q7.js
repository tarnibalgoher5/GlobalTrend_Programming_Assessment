function fibonacciSeries(limit){
    let ans  = [];
    if(limit == 0){
        return 0;
    }
    else if(limit == 1){
        return 1;
    }
    let term1 = 0;
    let term2 = 1; 
    //storing answers in an array
    ans.push(term1);
    ans.push(term2);

    for(let i=2; i<=limit; i++){
        let next = term1 + term2; 
        term1 = term2;
        term2 = next;
        ans.push(next);
    }  
    return ans;
}

let limit = 10;
let answer = fibonacciSeries(limit);
for(let i=0; i<limit; i++){
    console.log(answer[i]);
}
