import signUpPage1 from "./SignupPage.cy"

class HomePage1{ 

    Website(){
        cy.visit('https://www.demoblaze.com') 
        
        return this
    }

get SignupButton (){ 
return cy.get('#signin2')}


ClickOnSignupButton(){ 
this.SignupButton.click().wait(800)
return new signUpPage1
}



}


export default HomePage1