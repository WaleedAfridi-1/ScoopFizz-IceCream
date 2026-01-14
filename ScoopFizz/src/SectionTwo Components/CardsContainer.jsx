import React from 'react'
import Card from './Card.jsx'


const iceCreamFlavors = [
  {
    img: "https://i.pinimg.com/1200x/1a/1c/d5/1a1cd52ef5fc6e3b3f41e9dfcd458b10.jpg",
    name: "Strawberry Dreams",
    desc: "Fresh strawberries blended into creamy vanilla ice cream.",
    price: "$5.50"
  },
  {
    img: "https://i.pinimg.com/736x/15/10/f0/1510f09138a58339a2978220fde54741.jpg",
    name: "Classic Vanilla",
    desc: "Smooth and rich vanilla ice cream made with real vanilla beans.",
    price: "$4.75"
  },
  {
    img: "https://i.pinimg.com/736x/49/a9/d0/49a9d01bb7ef98eaa8490913811e68ed.jpg",
    name: "Chocolate Fudge",
    desc: "Deep chocolate ice cream layered with thick fudge sauce.",
    price: "$6.00"
  },
  {
    img: "https://i.pinimg.com/736x/bc/49/94/bc4994ef2d930505a4059ec9d2cd086d.jpg",
    name: "Mint Choco Chip",
    desc: "Cool mint ice cream with crunchy chocolate chips.",
    price: "$5.25"
  },
  {
    img: "https://i.pinimg.com/736x/ab/2f/35/ab2f3585774c590135c73614fe98165b.jpg",
    name: "Salted Caramel",
    desc: "Caramel ice cream with a perfect balance of sweet and salt.",
    price: "$5.75"
  },
  {
    img: "https://i.pinimg.com/1200x/41/6f/fe/416ffec65cf51fde3124adab7ae82e9a.jpg",
    name: "Cookies & Cream",
    desc: "Creamy vanilla base loaded with crushed chocolate cookies.",
    price: "$5.25"
  },
  {
    img: "https://i.pinimg.com/1200x/2d/5d/97/2d5d97d8409bb558f51ed7f8ec4337fc.jpg",
    name: "Mango Sorbet",
    desc: "Refreshing dairy-free mango sorbet made from ripe mangoes.",
    price: "$4.95"
  },
  {
    img: "https://i.pinimg.com/736x/22/38/3c/22383cea7b2b40754e073d5bef603373.jpg",
    name: "Pistachio Delight",
    desc: "Premium pistachio ice cream with real nut flavor.",
    price: "$6.25"
  },
  {
    img: "https://i.pinimg.com/1200x/e0/fb/dc/e0fbdc752ce4166faa942c41d0509130.jpg",
    name: "Blueberry Cheesecake",
    desc: "Cheesecake ice cream swirled with blueberry compote.",
    price: "$6.50"
  },
  {
    img: "https://i.pinimg.com/1200x/29/7d/69/297d692b18a450d95d345efe5ebd5efa.jpg",
    name: "Coffee Mocha",
    desc: "Coffee-flavored ice cream blended with rich chocolate mocha.",
    price: "$5.95"
  }
];


const CardsContainer = () => {

  return (
    
    <div className='w-full h-auto flex flex-col gap-32 lg:gap-x-6 lg:justify-center-safe   px-6 py-4 mt-20  lg:flex-row  lg:gap-y-30 justify-start lg:px-20 flex-wrap'>
      
      {iceCreamFlavors.map((element) => {
        return (
          <Card url={element.img} name={element.name} desc={element.desc} price={element.price} />
        )
      })}
          </div>
  )
}

export default CardsContainer
