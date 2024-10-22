   //mmodule for creating the menu page


   const createMenuPage=()=>{ 
    
    const content=document.querySelector('#content')


const pageContent=document.createElement("div")
pageContent.classList.add('page-content')

const heading=document.createElement('h1')
heading.innerHTML='Our Menu'

pageContent.appendChild(heading)

const menuList=document.createElement('ul')

const menuItem1=document.createElement('li')
menuItem1.textContent="Pomodoro"
const menuItem2=document.createElement('li')
menuItem2.textContent='Bolognesa'
const menuItem3=document.createElement('li')
menuItem3.textContent='Alfredo'


menuList.appendChild(menuItem1)
menuList.appendChild(menuItem2)
menuList.appendChild(menuItem3)

content.appendChild(pageContent)
pageContent.appendChild(menuList)



   }


   export default createMenuPage