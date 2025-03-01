const completeBtn=document.querySelectorAll('.complete-btn')
const incrementPoint=document.getElementById('increment-point').innerText;
const decrementPoint=document.getElementById('dec-point').innerText;
let incrementNumber=parseInt(incrementPoint)
let decrementNumber=parseInt(decrementPoint)

const mainList=document.getElementById('list-complete')

let clickCount = 0;
completeBtn.forEach(button => {
    button.addEventListener('click',function(){
         clickCount++
        console.log(incrementPoint,decrementPoint);


        incrementNumber++
        document.getElementById('increment-point').innerText = incrementNumber;

        decrementNumber--
        document.getElementById('dec-point').innerText=decrementNumber;

        // button disible
        button.disabled=true;
        button.classList.remove('bg-[#3752FD]','hover:bg-[#3752FD]','text-white')
        button.classList.add("bg-[#3752FD]", "opacity-30");

        alert('added board')

        if (clickCount === 6) {
            alert("This is your 6th click!");
          }

        //   append Chld
         const p=document.createElement('p')
         p.classList.add('bg-[#F4F7FF]','p-2','rounded-md','my-2')

         p.innerText=`You have Complete The Task Add Dark Mode at 12:48:15 PM`

         mainList.appendChild(p)

    })
});

document.getElementById('clear-btn').addEventListener('click',function(){
    mainList.innerHTML=``
})

