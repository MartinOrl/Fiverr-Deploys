const tokenType = document.getElementById('token-type')
const tokenTypeCap = document.getElementById('token-type-cap')
const tokenDecimals = document.getElementById('token-decimals')
const initialSupply = document.getElementById('initial-supply')
const totalSupply = document.getElementById('total-supply')
const switches = document.getElementsByClassName('check')
const value = document.getElementById('value')
const networkType = document.getElementById('network-type')
const testWarning = document.getElementById('test-warning')


function checkData(){
    if(networkType.value == 'main'){
        testWarning.classList.add('display')
    }
    else{
        testWarning.classList.remove('display')
    }
}

totalSupply.addEventListener('change',(e) => {
    totalSupply.value = e.target.value
})

initialSupply.addEventListener('change', (e) => {
    if(e.target.valueAsNumber > totalSupply.valueAsNumber){
        initialSupply.classList.add('error')
    }
    else{
        initialSupply.classList.remove('error')
    }
})


function setMode(){
    switch (tokenType.value){
        case 'simple':
            switches['copyright'].checked = false;
            initialSupply.disabled = false;
            switches[0].checked = false;
            switches[1].checked = false;
            switches[2].checked = false;
            switches[3].checked = false;
            switches[4].checked = false;
            value.innerHTML = '0.00 ETH'
            return ''
        case 'standard':
            switches['copyright'].checked = true;
            initialSupply.disabled = true;
            switches[0].checked = false;
            switches[1].checked = false;
            switches[2].checked = false;
            switches[3].checked = false;
            switches[4].checked = true;
            value.innerHTML = '0.15 ETH'
            return ''
        case 'common':
            initialSupply.disabled = false;
            switches[0].checked = true;
            switches[1].checked = true;
            switches[2].checked = false;
            switches[3].checked = false;
            switches[4].checked = true;
            switches['copyright'].checked = true;
            value.innerHTML = '0.55 ETH'
            return ''
        case 'powerful':
            initialSupply.disabled = false;
            switches[0].checked = true;
            switches[1].checked = true;
            switches[2].checked = true;
            switches[3].checked = true;
            switches[4].checked = true;
            value.innerHTML = '0.95 ETH'
            return ''

    }
}



window.onload = function(){
    switches[2].disabled = true;
    switches[3].disabled = true;
    switches[4].disabled = true;
    switches['copyright'].disabled = true;
    setMode()
    checkData()
}