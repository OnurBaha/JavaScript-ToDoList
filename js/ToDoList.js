let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener('submit', formHandler)
let btnDOM = document.querySelector("#btn")
let defaultLi = document.getElementsByTagName("li");



//VARSAYILAN LİSTEYE "X" BUTONU EKLEME 

for (let index = 0; index < defaultLi.length; index++) {
    if (defaultLi[index].className == "button") {
        console.log("hatalı")
    } else {
        defaultLi[index].append(deleteElement())
    }
}



//  TOAST BİLDİRİMLERİNİ YAZDIRMA...

function formHandler(event){
    event.preventDefault()
    const TASK_DOM = document.querySelector("#task")

    if (TASK_DOM.value.trim() != "" && TASK_DOM.value.trim() != " "){
        addItem(TASK_DOM.value)
        TASK_DOM.value = ""
        $('.success').toast("show")
    } else{
        TASK_DOM.value = ""
        $('.error').toast("show")
    }
}



// LİSTEYE ELEMENT EKLEMEYİ SAĞLAYAN FAT ARROW FONKSİYONU

let userListDOM = document.querySelector('#userList')
const addItem = (task) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${task}`
    userListDOM.append(liDOM)
    liDOM.append(deleteElement())
}



// LİSTEYE "X" BUTONU EKLEYİP LİSTEDEN ELEMENTLERİ SİLMEYİ SAĞLAYAN FONKSİYON

function deleteElement(){
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"
    deleteBtn.className = "button"

    deleteBtn.addEventListener('click', (e) =>{
        const item = e.target.parentElement.remove()
        liDOM.removeChild(item)
    }
    )
    return deleteBtn;
}



// LİSTEDE Kİ GÖREVLER TAMAMLANMIŞSA YAPILDI İŞARETLEMESİNİ SAĞLAYAN FONKSİYONU

userListDOM.addEventListener("click", missionCompleted)

function missionCompleted(e) {
    e.target.classList.toggle("checked")

}
