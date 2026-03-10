import { Locator, Page } from "@playwright/test"

export class LoginPage{
    //
    readonly page: Page
    readonly textbox_email: Locator
    readonly textbox_Password: Locator
    readonly button_Continue: Locator

    constructor (page:Page){
        this.page = page
        this.textbox_email = page.locator('#username')
        this.textbox_Password = page.locator('#password')
        this.button_Continue = page.getByRole('button',{name:'Continue',exact:true})
    }

    async goto() {
        await this.page.goto('https://www.rocscience.com')
    }

}