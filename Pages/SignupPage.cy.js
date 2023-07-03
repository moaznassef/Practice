// import HomePage1 from "./Homepage.cy"

// class signUpPage1 {
    
    
// get Username(){ 
// return cy.get('#sign-username')}


// get Password(){ 
// return cy.get('#sign-password')
// }

// get Submitbutton(){ 
//  return cy.get('[onclick="register()"]')

// }

// get Signuplabel(){ 

//     return cy.get('#signInModalLabel')
// }

// Signup1(name,pass){ 

//     this.Username.type(name)
//     this.Password.type(pass)
//     this.Submitbutton.click()
//      return new HomePage1
// } 


//     checklabel(){ 
//         this.Signuplabel.should('not.be.visible')
//          return this 
//     } 
// }

// export default signUpPage1



import HomePage1 from "./Homepage.cy"

class signUpPage1 {
  get Username() { 
    return cy.get('#sign-username')
  }

  get Password() { 
    return cy.get('#sign-password')
  }

  get Submitbutton() { 
    return cy.get('[onclick="register()"]')
  }

  get Signuplabel() { 
    return cy.get('#signInModalLabel')
  }

  Signup1(name, pass) { 
    this.Username.type(name)
    this.Password.type(pass)
    this.Submitbutton.click()
    return new HomePage1()
  } 

  checklabel() { 
    this.Signuplabel.should('be.visible')
    return this 
  } 
}

export default signUpPage1