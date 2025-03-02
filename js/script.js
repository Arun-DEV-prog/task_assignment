
const themeBtn = document.getElementById('theme-btn');
const themeColor = document.querySelector('.bg-white');


// const history=document.querySelector('.history');

// history.classList.remove('hidden');    


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
let index=0;
const BtnComplete = document.querySelectorAll('.btn');

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
    
     
const clearBtn=document.getElementById("clearBtn");
clearBtn.addEventListener('click',(event)=>{
    // 
    event.preventDefault();
    const gaybulHawa=document.querySelectorAll('.gaybulHawa');
      for(let gay of gaybulHawa){
         gay.classList.add('hidden');
      }
  
})



         if(index<cardTitle.length){
             const titleText=cardTitle[index].textContent;
             const historyDiv=document.createElement('div');
                   historyDiv.className='gaybulHawa';

            
                    
             historyDiv.innerHTML=`
             <div class="p-1" id="hty" >
              <div class="bg-white w-[400] p-3 rounded-md shadow-sm">
                <p id="text">You have complete the task ${titleText}at ${ampm(new Date)}</span></p>
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

function ampm(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  
  
   const discoverDiv=document.getElementById('discoverDiv');
   discoverDiv.addEventListener('click',(event)=>{
     event.preventDefault();
       window.location.href='blog.html';
   })



// function dynamicgetTitle(id){
//      const titles=document.getElementById(id).innerText;
//       return titles;
// }




