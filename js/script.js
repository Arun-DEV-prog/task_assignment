
const themeBtn = document.getElementById('theme-btn');
const themeColor = document.querySelector('.bg-white');




const Colors = [
    'bg-orange-400',
    'bg-yellow-50',
    'bg-lime-300',
    'bg-teal-400',
    'bg-indigo-800',
    'bg-purple-900',
    'bg-pink-900',
    'bg-white',
    'bg-neutral-50',
    'bg-stone-600'
]
themeBtn.addEventListener('click', (event) => {
    changColor();
})



function changColor() {
    for (let color of Colors) {
        themeColor.classList.remove(color);
    }
    const randomColor = Colors[Math.floor(Math.random() * Colors.length)];

    themeColor.classList.add(randomColor);
}


// Button

const BtnComplete = document.querySelectorAll('.btn');
let index=0;
for (let btn of BtnComplete) {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Board Update Sucessfully');
        const taskCompelete = convertNumber('taskCompelete');
       const headerTask=convertNumber('header-task');

        const dis = 1;
        const sub = taskCompelete - dis;
        const sum=headerTask+dis;
        document.getElementById('header-task').innerText=sum;
        document.getElementById('taskCompelete').innerText = sub;

      
     
      
      const cardTitle=document.querySelectorAll('#title');
      const main_histoyDiv=document.getElementById('main_histoyDiv');
         if(index<cardTitle.length){
             const titleText=cardTitle[index].textContent;
             const historyDiv=document.createElement('div');
             historyDiv.innerHTML=`
             <div class="p-4" >
              <div class="bg-white w-[400] p-3 rounded-md shadow-sm">
                <p id="text">You have complete the task ${titleText}</span></p>
              </div>
            </div>
             `
              
             main_histoyDiv.appendChild(historyDiv);
             index++;
         }
        

        btn.setAttribute('disabled', true);

        


    })
}

// 
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d= new Date();
let month=months[d.getMonth()];
let Day=weekday[d.getDay()];

document.getElementById('day').innerText=Day;
document.getElementById('month').innerText=month;
document.getElementById('date').innerText=d.getDate();
document.getElementById('year').innerText=d.getFullYear();


// function converted parseInt

function convertNumber(id) {
    const convertId = document.getElementById(id).innerText;
    const convertNumber = parseInt(convertId);
    return convertNumber;
}

// function dynamicgetTitle(id){
//      const titles=document.getElementById(id).innerText;
//       return titles;
// }




