export function save(todos){
    localStorage.setItem("todos",JSON.stringify(todos));
}
export function load(){
    return JSON.parse(localStorage.getItem("todos")) || [];
}