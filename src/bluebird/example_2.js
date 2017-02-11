import Promise from 'bluebird'

const p = new Promise((resolve, reject) => {
    const r = [324, 5, 4, 334, 6, 35, 634, 5, 4536, 4, 536, 7, 65, 7, 5467, 45, 234, 5, 435, 324, 2, 64, 7, 654, 75]
    let h = r.reduce((total, value) => {
        return total + value
    })
    if (h > 13000) {
        resolve(h)
    } else {
        reject(`h < 13000, h = ${h}`)
    }
})

p.then(result => {
    console.log(result)
}).then(result2 => {
    console.log('2')
}).then(result3 => {
    console.log('3')
}).catch(error => {
    console.log(error)
})