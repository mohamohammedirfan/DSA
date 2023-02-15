let a = [5,80,4,8,12,3]

let x = 12;

let output_str = "";

let found = false;

for(let i = 1; i < a.length; i++){

    if(x== a[i]){

        found = true;

        break;
    }
}
if(found){
        
    output_str = x  + "is found in the array"
}else{

    output_str = x + "is NOT found in the array"
}

console.log(output_str);