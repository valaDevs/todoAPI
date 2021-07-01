let url = "https://jsonplaceholder.typicode.com/todos"
let app = document.querySelector(".cont")
async function getTodo(){
    let response = await fetch(url)
    let data = await response.json()

    data = data.slice(0,30)
    data.forEach(todo => {
        app.innerHTML += `
        <div class="app">
        <h3>${todo.title}</h3>
        <p>${todo.id}</p>
        <span>is done : ${todo.completed}</span>
        </div>
        `        
    })
    
}
getTodo()