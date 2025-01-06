function findRoute(){
    const pickup=document.getElementById('home-form-input-pickup').value
    const drop=document.getElementById('home-form-input-drop').value
    const googleMapUrl=`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(pickup)}&destination=${encodeURIComponent(drop)}&travelmode=driving`;
    window.open(googleMapUrl,'_balnk')
}
function gMap(){
    const location='Kanyakumari, Tamil Nadu, India'
    const mapURL=`https://www.google.com/maps?q=${encodeURIComponent(location)}`
    window.open(mapURL,'_blank')
}
function callTaxi(){
    const taxi="https://www.google.com/search?client=firefox-b-d&q=call+taxi+in+nagercoil"
    window.open(taxi,'_blank')
}
function Show(){
    const details=document.getElementById('details')
    const btn=document.getElementById('service-showMore-btn')
    if(details.style.display==='none' || details.style.display===''){
        details.style.display='block'
        details.style.display='Show Less'
    }else{
        details.style.display='none'
        btn.textContent='Show More'
    }
}
async function showLoginForm(){
    await new Promise(resolve => setTimeout(resolve,2000))
    const loginForm = document.getElementById('login-card')
    const Blurr=document.getElementById('blurr')
    loginForm.style.display='block'
    Blurr.style.filter='blur(3px)'
}
document.addEventListener('DOMContentLoaded',()=>{
    showLoginForm()
})




function validateForm(){
    const name=document.getElementById('name').value.trim()
    const pass=document.getElementById('pass').value.trim()
    const email=document.getElementById('email').value.trim()
    if(name==="" || name.length<5 || !/^[A-Z]/.test(name)){
        alert('Enter Name')
        return
    }
    if(pass==="" || pass.length<8){
        alert('Enter Password')
        return
    }
    if(email==="" || pass.length<8){
        alert('Enter Email')
        return
    }
    alert('Success!')
}
function removeLoginForm(){
    const loginform=document.getElementById('login-card')
    const Blurr=document.getElementById('blurr')
    if(loginform){
        loginform.remove()
        Blurr.style.filter='none'

    }
}