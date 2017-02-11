import Promise from 'bluebird'
import axios from 'axios'
import git from '../git'

Promise.all([
    axios.get(git.user_info + 'vietworm').then(user => {
        return user.data
    }),
    axios.get(git.user_info + 'trquoccuong').then(user => {
        return user.data
    }),
    axios.get(git.user_info + 'kimthangatm').then(user => {
        return user.data
    })])
    .then(([result1, result2, result3]) => {
        console.log(result1)
        console.log(result3)
    })
    .catch(error => {
        console.log(error)
    })

