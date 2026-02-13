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

test.describe('Group 1', () => {
    test('TC1: Smoke', async ({ page }) => {
        console.log("Log In");
    })
})

test.describe('Group 2', () => {
    test('TC2: Feature 1', async ({ page }) => {
        console.log("Add new post");
    })
    test('TC3: Feature 2', async ({ page }) => {
        console.log("Delete post");
    })
})

//Bỏ qua
test.describe.skip('Group 3', () => {
    test('TC4: Feature 3', async ({ page }) => {
        console.log("Edit post");
    })
})

//Bỏ qua
test.describe.skip('Group 4', () => {
    test('TC5: Feature 4', async ({ page }) => {
        console.log("Log Out");
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

Chạy beforeEach
Add new post
Chạy afterEach

Chạy beforeEach
Delete post
Chạy afterEach

Chạy sau tất cả test
*/