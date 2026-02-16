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

test.only("Verify create one user", async({request}) => {
    const response = await request.post("/rest/v1/user", {
        data:{
            "name": "Hoàng Thị Thu",
            "email": "thu.hoang@example.com",
            "age": 27,
            "job": "Nhân viên ngân hàng",
            "address": {
                "city": "Hà Nội",
                "street": "78 Láng Hạ"
            }
        },
        headers:{
            apikey: process.env.SUPABASE_ANON_KEY,
            Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY}`, 
            'Content-Type': 'application/json'
        }
    });
    const data = await response?.text();
    if(data) console.log(result); 
    expect(response.status()).toBe(201);
})