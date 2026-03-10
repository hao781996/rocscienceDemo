import { expect, test} from '@playwright/test'
import { HomePage } from '../page_objects/HomePage'
import { LoginPage } from '../page_objects/LoginPage'


test('should navigate from homepage to RocPortal login and validate elements', async ({ page }) => {
    const homePage = new HomePage(page)
    await homePage.gotoHomePage()
    await homePage.acceptCookiePolicy()
    await homePage.navigateToLoginPage()

    // Validate URL contains the login path
    const destinationURL = page.url()
    expect(destinationURL.includes('auth'))

    // Validate Login page elements are visible 
    const loginPage = new LoginPage(page)
    await expect(loginPage.textbox_email).toBeVisible()
    await expect(loginPage.textbox_Password).toBeVisible()
    await expect(loginPage.button_Continue).toBeVisible()

    // Validate the continue button is enabled
    await expect(loginPage.button_Continue).toBeEnabled()
  })

 test('Verify API returns 401 for invalid credentials', async ({ page,request }) => {    
  // 1. Send the POST request to the assumed endpoint
  const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
    data: {
      "user":
        {
          "email":"testing@gmail.com",
          "password":"wrongpassword"
        }
    }
  });

  // 2. Assert the status code is 403 Unauthorized
  expect(response.status()).toBe(403);

  // 3. Assert the error message in the response body
  const responseBody = await response.json();
  expect(responseBody.errors['email or password']).toContain('is invalid');
  
  //expect(responseBody.error).toBe('Invalid username or password');

  // 4. Assert that no authentication token is returned
  expect(responseBody.token).toBeUndefined();
});