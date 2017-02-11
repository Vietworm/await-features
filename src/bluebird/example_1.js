import axios from 'axios'
import git from '../git'

axios.get(git.user_orgs).then(response => {
    console.log('1')
    return response
}).then(result2 => {
    console.log('2')
    return result2
}).then(result3 => {
    console.log('3')
    return result3
}).then(result4 => {
    console.log('4')
    return result4
}).then(x => {
    console.log('...')
    return x
}).then(n => {
    console.log('..n')
    console.log(n.data)
}).catch(error => {
    console.log(error)
})