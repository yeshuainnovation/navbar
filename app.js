const toggleButton = Document.GetElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')

    sidebar.getElementsByClassName('show')
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul=>{
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}

function toggleSubMenue(button){
    button.nextElementSiblings.ClassList.toggle('show')
button.classList.toggle('rotate')


if(sidebar.classList.contains('close'))
  sidebar.classList.toggleButton('close')
toggleButton.classList.toggle('rotate')  
}