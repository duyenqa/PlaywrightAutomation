import { expect, test } from "@playwright/test";

const id = "27478f4f-bc9d-4724-8ce3-1efddfb767bd";

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

test("Verify create one user", async({request}) => {
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


test("Verify delete one user", async({request}) => {
    const response = await request.delete(`/rest/v1/user?id=eq.${id}`, {
        headers:{
            apikey: process.env.SUPABASE_ANON_KEY,
            Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY}`, 
            'Content-Type': 'application/json'
        }
    });
    
    console.log(response.status());
    
    expect(response.status()).toBe(204);
})