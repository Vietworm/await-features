import Promise from 'bluebird'

const f1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('f1')
        }, 3000)
    })
}

const f2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('f2')
        }, 3000)
    })
}

const f3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('f3')
        }, 3000)
    })
}

f1().then(r1 => {
    console.log('r1')
    console.log(r1)
    return r1
}).then(sprate => {
    console.log('##################')
    return sprate
}).then(r2 => {
    console.log('r2')
    console.log(r2)
    console.log("\n##################\n")
    f2().then(p1 => {
        console.log('p1: ' + p1)
        return p1
    }).then(p2 => {
        f3().then(s1 => {
            console.log('Output: ' + p2 + ' - ' + s1)
        })
    })
})