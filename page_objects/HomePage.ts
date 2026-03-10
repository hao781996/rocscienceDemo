import { Locator, Page } from "@playwright/test"

export class HomePage{
    //
    readonly page: Page
    readonly button_portalAccount: Locator
    readonly link_logInToRocPortal: Locator
    readonly button_AcceptAll: Locator

    constructor (page:Page){
        this.page = page
        this.button_portalAccount = page.getByRole('button', { name: /user|profile|account/i }).first()
        this.link_logInToRocPortal = page.getByRole('link', { name: 'Log in to RocPortal' })
        this.button_AcceptAll = page.getByRole('button',{name:'Accept all'})
    }

    async gotoHomePage() {
        await this.page.goto('https://www.rocscience.com')
    }
    async navigateToLoginPage(){
        await this.button_portalAccount.click()
        await this.link_logInToRocPortal.click()
    }
    async acceptCookiePolicy(){
        await this.button_AcceptAll.click()
    }
}