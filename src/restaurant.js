//homepage
//appending image headline


//dynamically creating the homepage through the js rather than the good old html file this is the key here okay mate les get into the whole saga of the 


//constant is declared craterestaunrant homepage this is teh one that crreates the dom content rijgt thsi itbshi thie one that creates the dommmmy boi right   
const createRestaurantHomePage=()=>{
  const content=document.querySelector('#content')
  const pageContent=document.createElement('div')
  pageContent.classList.add('page-content')





  ///creat and append image element 
  const image=document.createElement('img')
  image.src='https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  image.height='300'
  pageContent.appendChild(image)


  //create and append headline element 
  const headline =document.createElement('h1')
  headline.textContent='Welcome to our restaurant!'
  pageContent.appendChild(headline)


  // create and append copy element 
  const copy=document.createElement('p')
  copy.textContent='We serve the best food in town , Come and taste it! '
pageContent.appendChild(copy)

  content.appendChild(pageContent)

}


export default createRestaurantHomePage