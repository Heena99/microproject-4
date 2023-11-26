let exp = "";

function handleclick(ele) {
    document.querySelector('.screen').innerHTML += ele.innerHTML;
    exp += ele.innerHTML;    
}

function handleoperator(ele){
    const check=checkLast()
    if(!check){
        if(ele.innerHTML=="x"){
            document.querySelector('.screen').innerHTML += "x";
            exp += "*";
        }
        else{
            document.querySelector('.screen').innerHTML += ele.innerHTML;
            exp += ele.innerHTML;
        }
    }
    else{
        alert("Please enter valid expression")
    }
}

function handlezero(ele) {
    document.querySelector('.screen').innerHTML += ele.innerHTML;
    exp += ele.innerHTML;
}

function reset(){
    document.querySelector('.screen').innerHTML = "";
    exp="";
}

function del(){
    exp = exp.slice(0, -1);
    document.querySelector('.screen').innerHTML = exp;
}

function handledot(ele) {
    const check=checkLast()
    const multidot = hasmultiplepoint();
    if(!check && !multidot){
        document.querySelector('.screen').innerHTML += ele.innerHTML;
        exp += ele.innerHTML;
    }
    else{
        alert("Please enter valid expression")
    }
}

function equal(){
    const check=checkLast()
    if(!check){
        document.querySelector('.screen').innerHTML = eval(exp);
        exp=eval(exp);
    }
    else{
        alert("Please enter valid expression")
    }
}

const checkLast = () => {
    let len = exp.length;
    if (
        len == 0 ||
        exp[len-1] == "+" ||
        exp[len-1] == "-" ||
        exp[len-1] == "*" ||
        exp[len-1] == "/" ||
        exp[len-1] == "."
    ) {
        return true;
    }
    return false;
};

const hasmultiplepoint = () =>{
    let i = exp.length;
    while(exp[i-1]!=="*" && exp[i-1]!=="+" && exp[i-1]!=="/" && exp[i-1]!=="-" && i>=1){
        if(exp[i-1]=="."){
            return true;
        }
        i--;
    }
    return false;
}
