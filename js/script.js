
const themeBtn=document.getElementById('theme-btn');
const themeColor=document.querySelector('.bg-white');
   
const Colors=[
    'bg-orange-400',
    'bg-yellow-50',
    'bg-lime-300',
    'bg-teal-400',
    'bg-indigo-800',
    'bg-purple-900',
    'bg-pink-900',
    'bg-white'
]
themeBtn.addEventListener('click',(event)=>{
    changColor();
})



function changColor(){
    for(let color of Colors){
         themeColor.classList.remove(color);
    }
    const randomColor=Colors[Math.floor(Math.random()*Colors.length)];

    themeColor.classList.add(randomColor);
}


