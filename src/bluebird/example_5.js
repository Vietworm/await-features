import Promise from 'bluebird'

const f = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Unauthorized!!')
        }, 3000)
    })
}

f().then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})