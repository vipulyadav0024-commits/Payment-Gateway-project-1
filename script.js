let payBtn = document.getElementById("payBtn");
let card = document.getElementById("card");
let success = document.getElementById("success");
let msg = document.getElementById("msg");

payBtn.onclick = function () {

    let name = document.getElementById("name").value;
    let amount = document.getElementById("amt").value;

    if (name === "" || amount === "") {
        alert("Please fill all details");
        return;
    }

    card.style.display = "none";
    success.style.display = "block";

    msg.innerText = name + " paid ₹" + amount + " successfully.";
};

function resetPay() {
    card.style.display = "block";
    success.style.display = "none";

    document.getElementById("name").value = "";
    document.getElementById("upi").value = "";
    document.getElementById("amt").value = "";
}
