// https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true


function migratoryBirds(arr) {
    let len = Infinity
    let value =0
    const cache = arr.reduce((acc,cur)=>{
        if(!acc[cur]){
            acc[cur]=0
        }
        acc[cur] +=1

        if(acc[cur] > value){
            len = cur
            value = acc[cur]
        }else if(acc[cur] === value && cur < len){
            len = cur
        }

        return acc
    },{})    
    return len
    
}
migratoryBirds([1,2,3,5,4,4,3,2,1,3,4])