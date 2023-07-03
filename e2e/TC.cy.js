import HomePage1 from "../Pages/Homepage.cy"
import signUpPage1 from "../Pages/SignupPage.cy"


it('es soll erfolgreich einloggen', ()=>{ 

new HomePage1()

.Website()
.ClickOnSignupButton()
.Signup1('Mezoo12','111111')

new signUpPage1()
.checklabel()

})

