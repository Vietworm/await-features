import Promise from 'bluebird'
import axios from 'axios'
import git from '../git' //https://developer.github.com/v3/#rate-limiting

const users = ['chiphuyen', 'evilsocket', 'petehouston', 'vietworm', 'trquoccuong', 'kimthangatm', 'hidroh']

function now(txt) {
    console.log(new Date().toLocaleTimeString().replace(/T/, ' ').replace(/\..+/, '')+' '+txt);
}

// Loop qua từng phần tử trong mảng, hàm này giống như việc sủ dụng .push + Promise.all vậy.
Promise.map(users, (user) => {

    // Thằng axios thực ra nó đã là 1 promise rồi nhé.
    return axios.get(git.user_info + user).then(response => {
        now(user)
        return {
            user: user,
            name: response.data.name,
            repositories: response.data.public_repos
        }
    })
}).then(result => {
    console.log(result)
    console.log('done')
})

/**
 * Sự khác biệt giữa Promise.map và Promise.all là:
 * + Promise.map: Nhận vào một mảng bình thường, có thêm tham số concurrency
 * + Promise.all: Nhận vào 1 mảng các promise
 */

let promises = []
for (let i = 0; i< users.length; i++) {
    let x = axios.get(git.user_info + users[i]).then(response => {
        now(users[i])
        return {
            user: users[i],
            name: response.data.name,
            repositories: response.data.public_repos
        }
    });
    promises.push(x)
}

Promise.all(promises).then(result => {
    console.log(result)
    console.log('done')
})

/*

Promise.map

3:39:53 PM kimthangatm
3:39:53 PM vietworm
3:39:53 PM petehouston
3:39:53 PM hidroh
3:39:53 PM trquoccuong
3:39:53 PM evilsocket
3:39:53 PM chiphuyen
    [ { user: 'chiphuyen', name: 'Chip Huyen', repositories: 3 },
    { user: 'evilsocket', name: 'Simone Margaritelli', repositories: 73 },
    { user: 'petehouston', name: 'Pete Houston', repositories: 209 },
    { user: 'vietworm', name: 'Machine', repositories: 92 },
    { user: 'trquoccuong', name: 'Trần Quốc Cường', repositories: 44 },
    { user: 'kimthangatm', name: 'ZaiChi', repositories: 21 },
    { user: 'hidroh', name: 'Ha Duy Trung', repositories: 21 } ]
done

Promise.all

3:40:43 PM kimthangatm
3:40:43 PM vietworm
3:40:43 PM hidroh
3:40:43 PM trquoccuong
3:40:43 PM evilsocket
3:40:43 PM chiphuyen
3:40:43 PM petehouston
    [ { user: 'chiphuyen', name: 'Chip Huyen', repositories: 3 },
    { user: 'evilsocket', name: 'Simone Margaritelli', repositories: 73 },
    { user: 'petehouston', name: 'Pete Houston', repositories: 209 },
    { user: 'vietworm', name: 'Machine', repositories: 92 },
    { user: 'trquoccuong', name: 'Trần Quốc Cường', repositories: 44 },
    { user: 'kimthangatm', name: 'ZaiChi', repositories: 21 },
    { user: 'hidroh', name: 'Ha Duy Trung', repositories: 21 } ]
done

*/