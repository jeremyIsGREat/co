//basic hash function
let array=10
const hash=(key,arrayLen)=>{
    let total=0
    let prime=31
    for(let i=0;i<Math.min(key.length,100);i++){
        let char=key[i]
        let value=char.charCodeAt(0)-96
        total=(total*prime+value)% arrayLen;

    }
    return (total)

}
