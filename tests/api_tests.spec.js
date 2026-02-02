import { test, expect } from "@playwright/test";

test("API GET Request", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users/2", {
    headers: {
      "x-api-key": "reqres_5a5f0a639ac84ac8b6b04053f17ed37f",
      Accept: "application/json",
    },
  });

  expect(response.status()).toBe(200);

  const text = await response.text();
  expect(text).toContain("Janet");

  console.log(await response.json());
});



test("API POST Request", async ({ request }) => {
  const response = await request.post("https://jsonplaceholder.typicode.com/posts", {
        data: {
            "userID": "1",
            "id": "1"
        }
  });

  expect(response.status()).toBe(201);

  const text = await response.text();
  expect(text).toContain("1");

  console.log(await response.json());

});


test("API PUT Request", async ({ request }) => {
  const response = await request.put("https://jsonplaceholder.typicode.com/posts/1", {
        data: {
            "userID": "1",
            "id": "1"
        }
  });

  expect(response.status()).toBe(200);

  const text = await response.text();
  expect(text).toContain("1");

  console.log(await response.json());

});



test('API DELETE Request', async ({ request }) => {

    const response = await request.delete("https://jsonplaceholder.typicode.com/posts/1")
    expect(response.status()).toBe(204);
})