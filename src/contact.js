


const createContactPage=()=>{

const content=document.querySelector("#content")
const pageContent=document.createElement('div')


const form=document.createElement('form')


const heading=document.createElement('input')
heading.setAttribute("placeholder","heading")


const address=document.createElement('input')
address.setAttribute("placeholder","address")
const phone=document.createElement('input')
phone.setAttribute("placeholder","phone")

const submit=document.createElement('input')
submit.setAttribute("type","submit")
submit.textContent="Submit"
// submit.classList.add


form.appendChild(heading)
form.appendChild(address)
form.appendChild(phone)
form.appendChild(submit)
content.appendChild(pageContent)
pageContent.appendChild(form)
}


export default createContactPage