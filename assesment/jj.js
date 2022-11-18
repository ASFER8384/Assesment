    let a=[1,2,3,4,5,2,4]
let b={}
let res=a.map((x)=>{
    b[x]=b[x]+1 ||1
})
// console.log(b)
let key=Object.keys(b)
// console.log(key)
let value=Object.values(b)
// console.log(value)
let final=[]
for(var index of value){
    if(index == 1){
        final.push(index)
    }
}
console.log(final)
let ress= key.findIndex((x)=>{
    return x == final[2]
})
console.log(key[ress])