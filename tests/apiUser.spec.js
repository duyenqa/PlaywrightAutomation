import { expect, test } from "@playwright/test";

const id = "eae65be7-53ce-4268-a1d4-44eed6083ee8";

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
            "name": "Nguyễn Văn An",
            "email": "an.nguyen@example.com",
            "age": 28,
            "job": "Kỹ sư phần mềm",
            "address": {
            "city": "Hà Nội",
            "street": "123 Trần Duy Hưng"
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
    
    // console.log(response.status());
    expect(response.status()).toBe(204);
})

test("Verify update one user", async({request}) => {
    const response = await request.patch(`/rest/v1/user?id=eq.${id}`, {
        data:{
            "age": 26,
            "job": "Luật sư",
            "address": { 
                "city": "TP. Hồ Chí Minh", 
                "street": "Nguyễn Trãi" 
            }
        },
        headers:{
            apikey: process.env.SUPABASE_ANON_KEY,
            Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY}`, 
            'Content-Type': 'application/json',
        }
    });
    
    // console.log(response.status());
    expect(response.status()).toBe(204);
})