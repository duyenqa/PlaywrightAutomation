import { test } from "@playwright/test";

test.beforeAll((async() => {
    console.log('Chạy trước tất cả test');
}))

test.beforeEach((async() => {
    console.log('Chạy beforeEach');
}))

test.afterEach((async() => {
    console.log('Chạy afterEach');
}))

test.describe.only('Group 1', () => {
    test('TC1: Smoke', async ({ page }) => {
        console.log("Log In");
    })
})

test.describe('Group 2', () => {
    test('TC2: Feature 1', async ({ page }) => {
        console.log("Add new post");
    })
})

test.afterAll((async() => {
    console.log('Chạy sau tất cả test');
}))

/*Kết quả chạy chương trình:
Chạy trước tất cả test
Chạy beforeEach
Log In
Chạy afterEach
Chạy sau tất cả test
*/