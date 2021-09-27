export default function jsonToHtml(json) {
    let data
    if (typeof json !== 'object') {
        data = JSON.parse(json)
    } else {
        data = json
    }
    let root = ''
    for (let key in data) {
        let td
        let th = `<th>${key}</th>`
        if (Array.isArray(data[key])) {
            td = itemToDom(data[key])
        } else if (typeof data[key] === 'object') {
            td = dictToDom(data[key])
        } else {
            td= `<td>${data[key]}</td>`
        }
        root += `<tr>${th}${td}</tr>`
    }
    let html = `
    <div  class="show_table">
        <table>
            <tbody>
                ${root}
            </tbody>
        </table>
    </div>`
     
    return `${html}`
}

function itemToDom(data) {
    let dom = ''
    data.forEach(item => {
        dom += jsonToHtml(item)
    })
    return  `<td class="item">${dom}</td>`
}

function dictToDom(data) {
    let dom = jsonToHtml(data)
    return  `<td class="item">${dom}</td>`
}
