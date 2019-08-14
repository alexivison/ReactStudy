export const baseObject = `
const post = {
    id: 1,
    title: "Hoge"
    body: "Hoge hage"
    profile: {
        id: 1,
        name: "Hogeman"
    }
}
`

export const objectDestructuring = `
// 平成
console.log("Id: " + post.id, "Title: " + post.title)

// 令和
const { id, title } = post
console.log("Id: " + id, "Title: " + title)
`

export const objectRenaming = `
// 平成
const identifier = post.id

// 令和
const { id: identifier, title } = post
`

export const multilayerObjects = `
const { profile: { id, name } } = post
`

export const restObject = `
const { title, ...rest } = post
// rest = { id, body, profile }
`

export const baseArray = `
const array = ["hoge", "hage", "hige"]
`

export const arrayDestructuring = `
const [first, second] = array // first = "hoge", second = "hage"
`

export const restArray = `
const [first, ...rest] = array
// rest = ["hage", "hige"]
`

export const asyncFunction = `
const asyncHoge = async () => {
    return 42
}

asyncHoge.then(alert) // 42
`

export const awaitFunction = `
const asyncHoge = async () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("完了！！"), 1000)
    })

    const result = await promise // ここで promise が完了するまで一旦待つ
  
    alert(result) // "完了！"
    }
}
`

export const promiseAllFunction = `
const asyncHoge = async () => {
    await Promise.all([promise1(), promise2()])

    return "完了！"
}
`