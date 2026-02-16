import { expect, test } from "@playwright/test";

test("Verify get all users", async({request}) => {
    const response = await request.get("/rest/v1/user", {
        headers:{
            apikey: process.env.SUPABASE_ANON_KEY,
            Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY}`, 
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json();
    console.log(result);
    expect(response.status()).toBe(200);
})
