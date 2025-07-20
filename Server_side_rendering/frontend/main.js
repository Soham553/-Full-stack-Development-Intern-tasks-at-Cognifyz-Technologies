console.log("hello this is just starting");

let subBtn = document.getElementById('form');

subBtn.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fromData = new FormData(subBtn);
    const userName = fromData.get('userName');
    const email = fromData.get('email');
    const phone_No = fromData.get('phone_No');

    const data = Object.fromEntries(fromData);

    if (!userName || !email || !phone_No) {
        alert("Fill all the information");
        return;
    }

    try {
        const resp = await fetch('http://localhost:3000', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await resp.text();
        let newdiv = document.createElement('div');
        newdiv.append(result);
        subBtn.style.display = 'none';
        document.body.appendChild(newdiv);
        newdiv.style.display = "flex";
        newdiv.style.alignItems = "center";
        newdiv.style.justifyContent = "left-50vh";
        newdiv.style.color = "green";

    } catch (error) {
        console.log("Fetch error:", error);
    }
});
