// version avec choisir la taille
// function gmdp() {
// var length = parseInt(document.getElementById("exampleInputPassword1").value);
// var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890<>,?;.:/!§*µù%$£¤¨+=})]à@ç^_`è|-[({'#é~&0";
// var password ="";
// for( var i= 0; i < length; i++){
//     var random = Math.floor(Math.random() * charset.length);
//     password += charset.charAt(random);
// }
// document.getElementById("mdp").value = password;

// }
function gmdp() {
    var length = 12; // Longueur du mot de passe
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890<>,?;.:/!§*µù%$£¤¨+=})]à@ç^_`è|-[({'#é~&0"; // Caractères disponibles pour le mot de passe
    var password = "";
    
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
    }

    eyeIcon.classList.remove('show-password');
    document.getElementById("mdp").value = password;
}
const eyeIcon = document.getElementById('eye-icon');
const pass = document.getElementById("mdp");

// Fonction pour basculer l'icône de l'œil
function toggleEyeIcon() {
  if (pass.type=== 'password') {
    pass.type = 'text';
    eyeIcon.classList.add('fa-eye-slash');
  }else{
    pass.type = 'password';
    eyeIcon.classList.remove('fa-eye-slash');
  }
  
}
pass.addEventListener('input',function() {
  if (pass.value.trim() === '') {
    eyeIcon.classList.add('show-password');
  }else{
    eyeIcon.classList.remove('show-password');
  }

});

if (pass.value.trim() !== '') {
      eyeIcon.classList.remove('show-password');
    }



pass.addEventListener('focus', function() {
  if (pass.value.trim() !== '') {
    eyeIcon.classList.remove('show-password');
  }
});

eyeIcon.addEventListener('click', toggleEyeIcon);