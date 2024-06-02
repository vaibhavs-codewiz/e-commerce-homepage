let product = [
  {
    name: "wooden chair",
    image:
      "https://plus.unsplash.com/premium_photo-1668073439372-2ceafa1222b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoYWlyc3xlbnwwfHwwfHx8MA%3D%3D",
    price: "2500",
    headline: "interior decor, white curtains",
  },
  {
    name: "college chairs",
    image:
      "https://images.unsplash.com/photo-1554752191-343d87d6c28f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJzfGVufDB8fDB8fHww",
    price: "450",
    headline: "auditorium , college campus",
  },
  {
    name: "bus seats",
    image:
      "https://plus.unsplash.com/premium_photo-1674823610129-64e6c712fbe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoYWlyc3xlbnwwfHwwfHx8MA%3D%3D",
    price: "500",
    headline: "bus seats, comfort.",
  },
];
let popular = [
  {
    name: "wooden chair",
    image:
      "https://plus.unsplash.com/premium_photo-1668073439372-2ceafa1222b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoYWlyc3xlbnwwfHwwfHx8MA%3D%3D",
    price: "2500",
    headline: "interior decor, white curtains",
  },
  {
    name: "college chairs",
    image:
      "https://images.unsplash.com/photo-1554752191-343d87d6c28f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJzfGVufDB8fDB8fHww",
    price: "450",
    headline: "auditorium , college campus",
  },
  {
    name: "bus seats",
    image:
      "https://plus.unsplash.com/premium_photo-1674823610129-64e6c712fbe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoYWlyc3xlbnwwfHwwfHx8MA%3D%3D",
    price: "500",
    headline: "bus seats, comfort.",
  },
];


function fun1() {
  let clutter = "";
  product.forEach(function (obj,index) {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                <img src="${obj.image}" class="h-full w-full object-cover"/>
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${obj.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${obj.headline}</h3>
                            <h4 class="font-semibold mt-2">&#8377;${obj.price}</h4>
                        </div>
                        <button data-index=${index} class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index=${index} class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
            //data-index=some_value in html tag added index will going to have values as 0,1,2
  });
  document.querySelector(".products").innerHTML = clutter; // Corrected innerHTML capitalization
}



function fun2(){
    let clutter = "";
    popular.forEach(obj =>{
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${obj.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${obj.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${obj.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${obj.price}</h4>
                    </div>
                </div>`;
    })
    document.querySelector(".populars").innerHTML = clutter;
}

let cart = [];

function fun3() {
  document.querySelector(".products").addEventListener("click", (details) => {
    if(details.target.classList.contains('add'))
        {
            cart.push(product[details.target.dataset.index]);
        }

  });
}

function showcart()
{
   document.querySelector(".carticon")
   .addEventListener("click",function(){
    document.querySelector(".cartexpnd").style.display = "block";

    let clutter = "";
    cart.forEach((prod,index) => {
        clutter += 
        `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${prod.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h3 class="font-semibold">${prod.name}</h3>
                    </div>
                </div>`;
            document.querySelector(".cartexpnd").innerHTML = clutter;
    });
   })
}




fun1();//product display
fun2();//popular display
fun3();//added item in cart
showcart();//showing cart items
