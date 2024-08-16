import { auth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut, onAuthStateChanged} from "./firebase-config.js"
const signUpForm = document.getElementById('signUpForm');
if (signUpForm) {
    signUpForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value;
        const password = document.getElementById('password').value;
        const confirmpassword = document.getElementById("confirmPassword").value ;
       
        if (password !== confirmpassword) {
            alert("do not match password")
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log('userCredential',user);
          alert("Successfully Signup")
          window.location.href = 'index.html';
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(error, errorCode, error,errorMessage)
          // ..
        });



    })
}


const signInForm = document.getElementById('signInForm');
if (signInForm) {
    signInForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("userCredential", user);
    alert("Succesfully Login")
    window.location.href = 'dashboard.html';
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Please Signup a create account", error.errorCode, error.errorMessage)
  });


    })}


    const logOutbutton = document.getElementById('logout');
    if (logOutbutton) {
        logOutbutton.addEventListener("click", () =>{
            signOut(auth).then(() =>{
                alert("Successfully Logout")
                window.location.href = "index.html";
               })
               .catch((error) =>{
                alert(error.message)
               })
        })
    }