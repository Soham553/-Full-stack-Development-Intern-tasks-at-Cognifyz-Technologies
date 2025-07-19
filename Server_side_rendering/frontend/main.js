console.log("hello this is just starting");

let subBtn = document.getElementById('form');


subBtn.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fromData = new FormData(subBtn);
    const userName = fromData.get('userName');
    const email = fromData.get('email');
    const phone_No = fromData.get('phone_NO');
    const data = Object.fromEntries(fromData);

    try {
        const resp = await fetch('http://localhost:3000/submit', {
                        method : "POST",
                        headers : {
                            "Content-Type": "application/json"
                        },
                        body : JSON.stringify(data)
                    })
        
        
    } catch (error) {
        console.log(error);
    }
})


