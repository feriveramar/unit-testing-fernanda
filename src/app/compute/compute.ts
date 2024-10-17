export function compute(x:number){
    var num = 0;
    if(x<0)
        num = 0;

    if (x>0)
        num = x + 1;
    
    return num;
}