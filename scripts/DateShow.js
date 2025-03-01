function updateDate() {
    const week=document.getElementById('week')
    const currentDates=document.getElementById('current-date')
    const currentDate = new Date();
    const weekDay = currentDate.toLocaleDateString("en-US", { weekday: "short" });
    const month = currentDate.toLocaleDateString("en-US", { month: "short" });
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    week.innerText=weekDay
    currentDates.innerHTML=`<p>${month} ${day} ${year}</p>`,
    console.log(weekDay,month,day,year);
}
updateDate();
