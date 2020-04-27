function calculate() {
    let first = document.getElementById('first')
    let last = document.getElementById('last')
    let increment = document.getElementById('increment')
    let res = document.getElementById('res')
    // let btn = document.getElementById('btn')

    if ( first.value.length == 0 || last.value.length == 0 || increment.value.length == 0 ) {
        window.alert('FALTAM DADOS')
    } else if(increment.value <= 0) {
        window.alert('INVALID INCREMENT')
        res.innerHTML = 'INVALID INCREMENT'
    } else {
        res.innerHTML = ''
        let f = Number(first.value)
        let l = Number(last.value)
        let i = Number(increment.value)
        // POSITIVE NUMBERS
        if ( f < l) {
            for ( let c = f ; c <= l ; c += i ) {
                res.innerHTML += `👉${c} `
            }
        } else {
        // NEGATIVE NUMBERS
            for ( let c = f ; c >= l ; c -= i) {
                res.innerHTML += `👉${c}`
            }
        }
        res.innerHTML += ` 🏁`
    }
}