let products = [
    {
        img: "3d.webp",
        title: "wall art",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo totam accusantium perspiciatis commodi dolorem quibusdam veritatis doloremque enim odit, quidem, consequuntur minus beatae provident eaque amet quae? Vel recusandae nemo iusto mollitia sit reiciendis nostrum illum ullam provident dolores, eum iste? Autem recusandae doloru",
        price:"500$"
        
    },
    {
        img: "BACKGROUND IMAGE.png",
        title: "Decor art",
        description: "Antiviral medications such as oseltamivir (Tamiflu) and zanamivir (Relenza) can be prescribed to reduce the severity and duration of influenza symptoms if taken early in the course of the illness.",
        price:"500$"
        
    },
    {
        img: "Wall Vibrant.webp",
        title: "Shelf art",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo totam accusantium perspiciatis commodi dolorem quibusdam veritatis doloremque enim odit, quidem, consequuntur minus beatae provident eaque amet quae? Vel recusandae",
        price:"500$"
        
    },
    {
        img: "Wall Vibrant.webp",
        title: "Shelf art",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo totam accusantium perspiciatis commodi dolorem quibusdam veritatis doloremque enim odit, quidem, consequuntur minus beatae provident eaque amet quae? Vel recusandae",
        price:"500$"
        
    },
]

let cardcontainer = document.getElementById('container');
for(let i=0; i<products.length; i++){
    cardcontainer.innerHTML+= `
    <div class="card" style="width: 18rem;">
    <img src="${products[i].img}" class="card-img-top" alt="..." height="200px" width="200px">
    <div class="card-body">
      <h5 class="card-title">${products[i].title}</h5>
      <p class="card-text">${products[i].description}</p>
      <a href="detail.html?id=${i}" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `
}