// console.log(global)

// setTimeout(()=>{


// console.log("time out")
// clearInterval(int)

// },3000)


// const int  = setInterval(()=>{
// console.log('interval')
// },1000)

const welcome = (name) =>{
    console.log('hello',name)
}


const people = ["rami",'younes','youcef','lady gaga']
const ages = [20,21,20,45]


pips = new Set()
for (i in people){
   pips.add({name : people[i],age: ages[i]})
}



module.exports= pips