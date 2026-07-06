const fs = require('fs');

const contentToAdd = `
## Topic 2.4 — HTTP Status Codes: The Server's Mood Ring

At this point, I understood how a request is built.

I knew about:
- Start Line
- Headers
- Body
- HTTP Methods

But another question remained.

🤔

> **How does the server tell the client whether everything went well?**

Imagine ordering food at a restaurant.
You place your order.
The waiter comes back.
Without saying anything...
He simply stares at you.

😂

You'd have no idea whether:
- Your order was accepted.
- The kitchen is busy.
- The food doesn't exist.
- The restaurant is closed.

Servers have the same problem.
After processing a request, they need a quick, standardized way to tell the client what happened.
That's exactly why **HTTP Status Codes** exist.

Think of them as the server's way of saying:

> "Here's how your request went."

---

### What Is an HTTP Status Code?

Every HTTP response begins with something like:

\`\`\`http
HTTP/1.1 200 OK
\`\`\`

Let's break it down.

\`\`\`text
HTTP Version  →  Status Code  →  Reason Phrase
\`\`\`

The most important part is the **status code**.
It tells the client whether the request:
- succeeded
- failed
- needs authentication
- should redirect
- encountered a server error

The browser, mobile app, or frontend uses this information to decide what to do next.

---

### The Five Families

One thing I really liked is that HTTP status codes are grouped into five families.
Instead of memorizing every code...
You only need to remember the meaning of each family.

\`\`\`text
1xx → Information, 2xx → Success, 3xx → Redirection, 4xx → Client Errors, 5xx → Server Errors
\`\`\`

The first digit tells the whole story.

---

### 1xx — Informational

These responses simply mean:

> "I received your request."

The conversation is still in progress.
Examples:

\`\`\`text
100 Continue, 101 Switching Protocols
\`\`\`

As backend developers, we rarely work with these directly.
They exist mostly for lower-level communication.

---

### 2xx — Success

This is everyone's favorite family.
Everything worked.
The request was successful.

#### 200 OK
The most common status code.

\`\`\`http
GET /users  →  200 OK
\`\`\`

Meaning:
> "Everything went well."

The server processed the request and returned the requested data.

#### 201 Created
Used when something new has been created.

\`\`\`http
POST /users  →  201 Created
\`\`\`

Instead of saying "Okay", the server says:
> "I successfully created your new resource."

A small difference... but a meaningful one.

#### 204 No Content
Sometimes the server succeeds... but doesn't need to return anything.

\`\`\`http
DELETE /users/5  →  204 No Content
\`\`\`

The user was deleted successfully.
No JSON needed. No message needed.

---

### 3xx — Redirection

Sometimes the requested resource has moved.
Instead of returning the data... the server tells the client:

> "Go somewhere else."

Examples:

\`\`\`text
301 Moved Permanently, 302 Found, 304 Not Modified
\`\`\`

One interesting example is **304 Not Modified**.
Imagine your browser already has a cached image.
Instead of downloading it again... the server replies:

\`\`\`text
304 Not Modified
\`\`\`

Meaning:
> "Use the version you already have."

Faster. Less bandwidth. Better performance.

---

### 4xx — Client Errors

This is one of the most important families for backend developers.
The request reached the server... but something was wrong with the client's request.
Notice something important. The server itself is working perfectly.
The problem came from the client.

#### 400 Bad Request
The request is malformed.
Missing required fields. Invalid JSON. Incorrect request format.
The server simply can't understand what the client sent.

#### 401 Unauthorized
This one confused me at first.
401 means:
> "I don't know who you are."

Maybe:
- No JWT
- Invalid token
- Expired token

Authentication failed.

#### 403 Forbidden
This is different. The server **knows who you are**.
But... you're not allowed to perform the action.

Example, a normal user tries to access:
\`\`\`http
DELETE /admin/users
\`\`\`
Authentication succeeded. Authorization failed.

#### 404 Not Found
Probably the most famous status code.

\`\`\`http
GET /products/999999  →  404 Not Found
\`\`\`
There is no such product. The resource simply doesn't exist.

---

### 5xx — Server Errors

This family means:
The client did everything correctly.
The problem happened **inside the server.**
This is usually the backend developer's responsibility.

#### 500 Internal Server Error
The most common server error.
Unexpected exception. Database crash. Null pointer. Unhandled error.
Something inside the backend failed.

#### 502 Bad Gateway
Common when using Nginx.
Imagine:
\`\`\`text
Browser → Nginx → Backend
\`\`\`
If Nginx cannot communicate with the backend... it may return:
\`\`\`text
502 Bad Gateway
\`\`\`

#### 503 Service Unavailable
The server is temporarily unavailable.
Maybe:
- Maintenance
- High traffic
- Deployment

The server isn't broken forever. It's simply unavailable right now.

---

### Status Codes Tell a Story

Imagine this login request.

\`\`\`http
POST /login
\`\`\`

Possible outcomes:

\`\`\`text
200  →  Login successful
401  →  Wrong password
404  →  User doesn't exist
500  →  Database crashed
\`\`\`

Same endpoint. Different stories. Different status codes.

---

### Don't Abuse Status Codes

One mistake beginners sometimes make is returning \`200 OK\` for everything. Even errors.

\`\`\`json
{
   "success": false,
   "message": "Password incorrect"
}
\`\`\`

Still returning \`200 OK\`.
Technically possible. But misleading.
HTTP already has status codes for these situations. Use them.
Your API becomes much easier to understand.

---

### My Biggest Realization

Today I realized something.
Status codes aren't just numbers. They're a communication language.
Without reading the response body... I can already understand a lot.

Seeing \`200\`, I immediately think: Success.
Seeing \`404\`, Resource missing.
Seeing \`500\`, Backend problem.

That's incredibly powerful for debugging.

---

## Checkpoint Questions

### What is the difference between **401 Unauthorized** and **403 Forbidden**?

**401 Unauthorized** means the server cannot verify the user's identity. The client is either missing authentication credentials or has provided invalid or expired credentials.

**403 Forbidden** means the user has been successfully authenticated, but they do not have permission to perform the requested action.

A simple way to remember it:
> **401 = "Who are you?"**
> **403 = "I know who you are, but you're not allowed to do that."**

---

### If you see a **500 Internal Server Error**, is it your fault or the user's fault?

A **500 Internal Server Error** indicates that something went wrong on the server while processing the request. The client sent a valid request, but the backend failed due to an unexpected problem, such as an unhandled exception, a crashed service, or a database issue. This is considered a **server-side problem**, not the user's fault.

---

### When should you return **201 Created** instead of **200 OK**?

Return **201 Created** when a request successfully creates a new resource, such as after a successful \`POST /users\` or \`POST /orders\`. Use **200 OK** for successful operations that do not create a new resource, such as retrieving data or updating an existing one.

---

## Part 2 Complete!

Today's lesson felt like opening the hood of HTTP.
Instead of seeing requests as mysterious network traffic... I now understand that every HTTP conversation follows a predictable structure.

I learned that:
- Every request and response has four main parts.
- Headers provide instructions and metadata.
- HTTP methods describe **what action** we want to perform.
- Status codes describe **how the request ended**.

Together, these pieces form the language that browsers and servers use to communicate every single second.
The next time I open Chrome DevTools or inspect an API call in Postman, I won't just see random text—I’ll understand the conversation that's taking place.

---

## References

If you'd like to explore these concepts further, these resources are excellent:

- [MDN Web Docs — HTTP Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [MDN — HTTP Messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages)
- [MDN — HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- [MDN — HTTP Request Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [MDN — HTTP Response Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [RFC 9110 — HTTP Semantics (Official HTTP Specification)](https://www.rfc-editor.org/rfc/rfc9110)

---

## Up Next

In **Part 3**, I'll explore some of HTTP's most powerful ideas:
- Why HTTP is extensible
- Statelessness and why it makes the web scalable
- Idempotency and how it prevents disasters like duplicate payments
- Why every backend engineer should understand idempotent APIs

I'm excited because these concepts are less about syntax and more about **how great APIs are designed**.
`;

const fileContent = fs.readFileSync('data/posts.ts', 'utf-8');

// Find the section we want to replace
const targetString = `> **Coming next:** Every HTTP response includes a status code that tells the client what happened. Think of them as the server's emotions—or its **mood ring**. We'll explore the five status code families and learn why understanding them is one of the most valuable skills for every backend developer.\`,`;

if (fileContent.includes(targetString)) {
  const newContent = fileContent.replace(targetString, contentToAdd + '`,');
  fs.writeFileSync('data/posts.ts', newContent);
  console.log("Successfully appended Topic 2.4");
} else {
  console.log("Could not find the target string to replace!");
}
