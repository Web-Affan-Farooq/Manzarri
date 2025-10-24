import { test, expect } from '@playwright/test';
import { urls } from '@/constants';

  const errorMessages = [
    "Username is required",
    "Name must contain minimum 10 characters",
    "Name can contain a maximum of 30 characters",
    "Email with correct format is required",
    "Invalid email address",
    "Please enter password",
    "Password must be at least 8 characters long",
    "Password must be shorter than 20 characters",
    "Password must include lowercase characters",
    "Password must include uppercase characters",
    "Password must include digits",
    "Password must include special characters"
  ];
  const placeholderData = {
    name:"Aqib ali khan",
    email:"aqiba.li82@gmail.com",
    password:'egd#$%29SDF'
  }
  
  const routes = {
    signup:urls.dev + "/signup",
    login:urls.dev + "/login",
    profile:urls.dev + "/profile",
  }
test.describe('Signup Flow', () => {
  test('should successfully sign up a new user', async ({ page }) => {
    // Navigate to signup page
    await page.goto(`${urls.dev}/signup`);

    // Verify page title and content
    await expect(page.locator('h1')).toContainText('Create Account');
    await expect(page.locator('p').filter({ hasText: 'Start your journey with luxury jewelry' })).toBeVisible();

    // Fill out the signup form
    await page.fill('input[id="name"]', placeholderData.name);
    await page.fill('input[id="email"]', placeholderData.email);
    await page.fill('input[id="password"]', placeholderData.password);

    // Check terms checkbox
    await page.check('input[id="terms"]');

    // Submit the form
    await page.click('button[type="submit"]');

    // Wait for navigation to profile page
    await page.waitForURL('/profile');

    // Verify successful signup
    await expect(page).toHaveURL('/profile');
  });

  test('should show validation errors for invalid input', async ({ page }) => {
    await page.goto(`${urls.dev}/signup`);
    // Try to submit empty form
    await page.click('button[type="submit"]');

    // Check for validation errors on name field
    await expect(page.locator('text=Username is required')).toBeVisible();

    // Check for validation errors on email field
    await expect(page.locator('text=Email with correct format is required')).toBeVisible();

    // Check for validation errors on password field
    await expect(page.locator('text=Please enter password')).toBeVisible();
  });

  test('should show name validation errors', async ({ page }) => {
    await page.goto(`${urls.dev}/signup`);
    // Test minimum length
    await page.fill('input[id="name"]', 'Short');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Name must contain minimum 10 characters')).toBeVisible();

    // Test maximum length
    await page.fill('input[id="name"]', 'This is a very long name that exceeds thirty characters');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Name can contain a maximum of 30 characters')).toBeVisible();
  });

  test('should show email validation errors', async ({ page }) => {
    await page.goto(`${urls.dev}/signup`);
    // Test invalid email format
    await page.fill('input[id="email"]', 'invalid-email');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Invalid email address')).toBeVisible();
  });

  test('should show password validation errors', async ({ page }) => {
    await page.goto(`${urls.dev}/signup`);
    // Test minimum length
    await page.fill('input[id="password"]', 'Short1!');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Password must be at least 8 characters long')).toBeVisible();

    // Test maximum length
    await page.fill('input[id="password"]', 'ThisIsAVeryLongPasswordThatExceedsTwentyCharacters123!');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Password must be shorter than 20 characters')).toBeVisible();

    // Test missing lowercase
    await page.fill('input[id="password"]', 'PASSWORD123!');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Password must include lowercase characters')).toBeVisible();

    // Test missing uppercase
    await page.fill('input[id="password"]', 'password123!');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Password must include uppercase characters')).toBeVisible();

    // Test missing digits
    await page.fill('input[id="password"]', 'Password!');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Password must include digits')).toBeVisible();

    // Test missing special characters
    await page.fill('input[id="password"]', 'Password123');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Password must include special characters')).toBeVisible();
  });

  test('should show error for existing email', async ({ page }) => {
    await page.goto(`${urls.dev}/signup`);
    // Fill form with existing email
    await page.fill('input[id="name"]', 'Existing User');
    await page.fill('input[id="email"]', 'existing@example.com');
    await page.fill('input[id="password"]', 'StrongPassword123!');
    await page.check('input[id="terms"]');

    await page.click('button[type="submit"]');

    // Check for error message
    await expect(page.locator('text=Account already exists')).toBeVisible();
  });

  test('should toggle password visibility', async ({ page }) => {
    await page.goto(`${urls.dev}/signup`);
    const passwordInput = page.locator('input[id="password"]');
    const toggleButton = page.locator('button').filter({ has: page.locator('svg') }).first();

    // Initially password should be hidden
    await expect(passwordInput).toHaveAttribute('type', 'password');

    // Click toggle button
    await toggleButton.click();

    // Password should now be visible
    await expect(passwordInput).toHaveAttribute('type', 'text');

    // Click again to hide
    await toggleButton.click();
    await expect(passwordInput).toHaveAttribute('type', 'password');
  });

  test('should navigate to login page', async ({ page }) => {
    await page.goto(`${urls.dev}/signup`);
    // Click sign in link
    await page.click('text=Sign in here');

    // Should navigate to login page
    await expect(page).toHaveURL('/login');
  });

  test('should have proper form accessibility', async ({ page }) => {
    await page.goto(`${urls.dev}/signup`);
    // Check form labels
    await expect(page.locator('label[for="name"]')).toContainText('Full Name');
    await expect(page.locator('label[for="email"]')).toContainText('Email Address');
    await expect(page.locator('label[for="password"]')).toContainText('Password');

    // Check form inputs have proper attributes
    await expect(page.locator('input[id="name"]')).toHaveAttribute('placeholder', 'Enter your full name');
    await expect(page.locator('input[id="email"]')).toHaveAttribute('type', 'email');
    await expect(page.locator('input[id="password"]')).toHaveAttribute('type', 'password');
  });
});
