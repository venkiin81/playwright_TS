import {test,expect, Locator} from '@playwright/test'


test('signup',async ({page})=>{

    await page.goto("https://www.way2automation.com/MediShopWebApp/login.html")
    const signupLoc:Locator=page.getByText('Register your clinic')

    const signupPagehead:Locator = page.getByTestId("signup_heading")
    const fullName:Locator=page.getByRole("textbox",{name:"name"})
    const email:Locator=page.getByRole("textbox",{name:"email"})
    const mobile:Locator=page.getByRole("textbox",{name:"mobile"})
    const options = page.getByTestId("signup_clinic_select")
    const password:Locator=page.getByTestId("signup_password_input")
    const renterPassword:Locator = page.getByPlaceholder("Re-enter your password")
    const termsBox:Locator = page.getByRole("checkbox",{name:"terms"})

    await signupLoc.click()
    const pagetitle:string = await signupPagehead.innerText()
    console.log(pagetitle)

    const Pwd:string = "venkiin77"
    await fullName.fill("Venkatesh")
    await email.fill("venki77@ymail.com")
    await mobile.fill("7878909078")
    await options.selectOption("Retail pharmacy")
    await password.fill(Pwd)
    await renterPassword.fill(Pwd)
    await termsBox.check()








})