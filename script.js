
let findBtn = document.getElementById('findBtn');

let data = fetch('data.js');

data.then((response)=>{
    response.json().then((data)=>{
        data.map((data)=>{
            let fulldate = data.start;
            let date = fulldate.split(" ");
            console.log(date);
        });
    });
})

console.log(findBtn);

findBtn.addEventListener('click',()=>{
    console.log("Button clicked");
});