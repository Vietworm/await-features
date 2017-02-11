import axios from 'axios'
import git from '../../git'

// Nếu 1 hàm đã là promise thì có thể then n lần để có thể sử dụng kết quả trước đó cho việc tính toán về sau.

axios.get(git.user_orgs).then(response => {
    console.log('1')
}).then(result2 => {
    console.log('2')
}).then(result3 => {
    console.log('3')
}).then(result4 => {
    console.log('4')
}).then(x => {
    console.log('...')
}).then(n => {
    console.log('..n')
}).catch(error => {
    console.log(error)
})