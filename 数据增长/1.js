// const counters =document.querySelectorAll('.counter')
// //定时器
// counters.forEach(counter => {
//     const target = counter.getAttribute('data-target')
//     // console.log(target)
//     // for(let i =0; i < target;i++){
//     //     counter.textContent = i
//     // }

//     let i = 0
//     const timer = setInterval(()=>{
//         i++
//         const increment = parseInt(target/50)
//         i += increment
//         counter.textContent = i
//         if(i >= Number(target)){
//             clearInterval(timer)
//             counter.textContent = target
//         }
//     },17)
// })



//requestAnimationFrame

const counters =document.querySelectorAll('.counter')


counters.forEach(counter => {
    const target = counter.getAttribute('data-target')
    const increment = parseInt(target / 50)

    let i = 0

    const counterPlus = () => {
        i += increment
        counter.textContent = i

        if(i<target){
    requestAnimationFrame(counterPlus)

        }else{
            counter.textContent = target
        }
    

    }
    requestAnimationFrame(counterPlus)
})