function x() {
    console.log("page ready");
    alert("page ready");
}

function a() {
    setTimeout(function () { x(); }, 2000);
}

document.onload = a();
