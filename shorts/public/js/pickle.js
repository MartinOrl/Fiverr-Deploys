document.querySelector('#arrow-up').addEventListener('click', () => {
    let target = document.querySelector('#count')
    if(target.innerHTML >= 1){
        let count = parseInt(target.innerHTML) + 1
        target.innerHTML = count
        document.querySelector('#price').innerHTML = `${count*0.01} ETH`
    }
})

document.querySelector('#arrow-down').addEventListener('click', () => {
    let target = document.querySelector('#count')
    if(target.innerHTML > 1){
        let count = parseInt(target.innerHTML) - 1
        target.innerHTML = count
        document.querySelector('#price').innerHTML = `${count*0.01} ETH`
    }
})