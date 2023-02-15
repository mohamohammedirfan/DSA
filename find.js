let n=false;
let find="Nanda";
let output="";
for(let i=0; i<array_student_obj.length; i++){
    if(find==array_student_obj[i].name){
        n=true
        break;
    }
}
if(n=true){
    console.log(find+"is found")
}
if(n=false){
    console.log(find+"  is not found")
}