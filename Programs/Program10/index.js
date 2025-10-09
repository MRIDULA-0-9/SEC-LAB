const myData=[
    {
        name:"Python",
        image:"https://www.i2tutorials.com/wp-content/media/2020/05/Coding-Styles-of-Python-Programming-Language-i2tutorials.jpg"
    },
    {
        name:"Java",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG2s-a6IKiKkv3TpCIxfExRAavtWW-wJ0OzA&s"
    },
    {
        name:"JavaScript",
        image:"https://media.istockphoto.com/id/1284271878/photo/javascript-inscription-against-laptop-and-code-background-learn-javascript-programming.jpg?s=612x612&w=0&k=20&c=H9FI5X3ZBQIyEijvhJc-jv5McwCh-BxqQPxee9Aoa08="
    },

]

const con = document.getElementById('container');
for(let i=0;i<myData.length;i++)
{
    con.innerHTML+=`
    <div class='card'>
    <img src=${myData[i].image} height="100px" />
    <p>${myData[i].name}</p>
    </div>
    `
}

fetch('https://fakestoreapi.com/products')
.then(res=>
   res.json()//converts json to js object
)
.then((data)=>{
    for(let i=0;i<data.length;i++)
{
    con.innerHTML+=`
    <div class='card'>
    <img src=${data[i].image} height="100px" />
    </div>
    `
}    
})

.catch((err)=>{
    alert("error occured")
})





