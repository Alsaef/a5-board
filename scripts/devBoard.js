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

        alert('Board Uploded Successfully')


        
       
        const taskTitle = button.closest(".rounded-lg")?.querySelector(".Title")?.innerText;
        console.log(taskTitle);
      //   append Chld
        const p=document.createElement('p')
       p.classList.add('bg-[#F4F7FF]','p-2','rounded-md','my-2')

       p.innerText=`You have Complete ${taskTitle} at ${new Date().toLocaleTimeString()}`

       mainList.appendChild(p)

        if (clickCount === 6) {
            alert("Congrats You Have Completed All Task!");
          }



    })
});

document.getElementById('clear-btn').addEventListener('click',function(){
    mainList.innerHTML=``
})

document.getElementById('blog-page-id').addEventListener('click',function(){
  window.location.href='blog.html'
})