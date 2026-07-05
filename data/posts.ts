import type { Post } from "@/types/content";

export const posts: Post[] = [
  {
    title: "Day 2 — Learning Backend from First Principles (Part 2)",
    slug: "backend-first-principles-day-2-part-2",
    description: "What actually happens inside an HTTP request? Today I learned about the anatomy of HTTP communication, headers, and HTTP methods.",
    category: "Learning Journey",
    date: "2026-07-05",
    readingTime: "10 min read",
    content: `# The Anatomy of HTTP Communication

> *"Every click, every login, every API call follows the same conversation pattern. Once you understand that conversation, HTTP becomes much less mysterious."*

---

## Introduction

In **Part 1**, I learned something that completely changed how I think about networking.

I discovered that:

* HTTP isn't the only protocol.
* Backend engineers mainly live at Layer 7 of the OSI Model.
* TCP and UDP solve different problems.
* HTTP/3 introduced QUIC to improve web performance.

That was the foundation.

But after learning all of that, another question came to my mind.

> **What actually happens inside an HTTP request?**

When I write:

\`\`\`ts
fetch("/api/users")
\`\`\`

or

\`\`\`ts
axios.post("/login")
\`\`\`

What is actually being sent over the internet?

Is it just JSON?

Is it just a URL?

Or is there more to it?

The answer surprised me.

An HTTP message is much more structured than I imagined.

It's almost like sending a formal letter.

Every letter has:

* an address
* a subject
* the actual message

HTTP follows the same idea.

Every request and every response follows a well-defined structure.

Once I understood this structure, things like authentication, headers, CORS, APIs, and even debugging started making much more sense.

So let's open the envelope and see what's really inside an HTTP message.

---

## Topic 2.1 — The HTTP Request & Response Structure

One of the biggest realizations I had today was this:

> **HTTP is simply a conversation between two computers.**

Nothing more.

Nothing less.

The client says something.

The server replies.

Every website on the internet is basically millions of these tiny conversations happening every second.

For example:

\`\`\`text
Browser: "Can I have the homepage?"  →  Server: "Sure! Here it is."
\`\`\`

Or:

\`\`\`text
Browser: "Can I log in with this email and password?"  →  Server: "Yes, welcome back." (or) "No, your password is incorrect."
\`\`\`

Every request follows exactly the same communication pattern.

---

### Think of HTTP Like Sending a Letter

Imagine you're sending a letter to a friend.

A proper letter usually contains:

* Who you're sending it to.
* Information about the letter.
* The actual message.

HTTP works almost exactly the same way.

Every HTTP request contains four parts.

\`\`\`text
Start Line  →  Headers  →  Blank Line  →  Body
\`\`\`

Every response from the server follows a similar structure.

Once you learn these four parts...

Reading HTTP becomes almost like reading English.

---

## Part 1 — The Start Line

The Start Line is basically the title of the request.

It answers three questions immediately:

1. What do you want?
2. Where do you want it?
3. Which HTTP version are you using?

For example:

\`\`\`http
GET /users HTTP/1.1
\`\`\`

Let's break it down.

### GET

The HTTP Method.

It tells the server what action we want.

Examples include:

\`\`\`text
GET, POST, PUT, PATCH, DELETE
\`\`\`

We'll study these in detail later.

---

### /users

This is the path.

It tells the server which resource we're requesting.

Example:

\`\`\`text
/users, /products, /login, /api/tours
\`\`\`

Think of it like the destination address.

---

### HTTP/1.1

Finally...

The client tells the server which version of HTTP it's speaking.

Examples:

\`\`\`text
HTTP/1.1, HTTP/2, HTTP/3
\`\`\`

Just like two people agree on a language before talking...

Client and server agree on the HTTP version.

---

## Part 2 — Headers

Headers are one of the most important parts of HTTP.

When I first saw them...

They looked like random text.

Now I think of them as **metadata**.

Metadata simply means:

> Information about the request.

Not the actual data.

But information describing the data.

Example:

\`\`\`http
Host: api.example.com

User-Agent: Chrome

Accept: application/json

Authorization: Bearer eyJhb...
\`\`\`

Notice something interesting.

None of these are the user's data.

Instead they answer questions like:

* Which website am I contacting?
* Which browser sent this request?
* What response format do I prefer?
* Who is the current user?

Headers provide context.

---

## Part 3 — The Blank Line

This might sound funny...

But the blank line is actually important.

It separates:

Headers

from

Body.

Think of it like the empty space between the envelope and the letter inside.

Without this separator...

The server wouldn't know where the headers end and the body begins.

Sometimes...

The simplest parts are the most important.

---

## Part 4 — The Body

Finally...

We reach the actual content.

The body contains the real data being sent.

For example:

Logging in.

\`\`\`json
{
  "email": "belema@example.com",
  "password": "********"
}
\`\`\`

Creating a product.

\`\`\`json
{
  "name": "Mechanical Keyboard",
  "price": 120
}
\`\`\`

Booking a tour.

\`\`\`json
{
  "tourId": 5,
  "date": "2026-08-10"
}
\`\`\`

This is usually the information we care about most.

---

## A Complete HTTP Request

Putting everything together:

\`\`\`http
POST /login HTTP/1.1
Host: api.my-app.com
Content-Type: application/json
Accept: application/json

{
  "email": "belema@example.com",
  "password": "super-secret-password"
}
\`\`\`

Now it doesn't look scary anymore.

It simply says:

\`\`\`text
POST  →  to /login  →  I'm sending JSON  →  Here's the data
\`\`\`

That's it.

---

## The Server Responds

After reading the request...

The server sends a response.

Responses also contain four parts.

\`\`\`text
Status Line  →  Headers  →  Blank Line  →  Body
\`\`\`

Very similar.

But instead of saying what we want...

The response says what happened.

---

## Response Status Line

Example:

\`\`\`http
HTTP/1.1 200 OK
\`\`\`

Let's break it down.

\`\`\`text
HTTP Version  →  Status Code  →  Status Message
\`\`\`

Examples:

\`\`\`text
200 OK, 201 Created, 404 Not Found, 500 Internal Server Error
\`\`\`

We'll spend an entire section on these later because they're incredibly important for backend development.

---

## Response Headers

Just like requests...

Responses also have headers.

Example:

\`\`\`http
Content-Type: application/json

Cache-Control: no-cache

Content-Length: 256
\`\`\`

These tell the browser things like:

* What type of data is this?
* Can I cache it?
* How large is it?

Again...

They're metadata.

---

## Response Body

Finally...

The server returns the actual result.

Success:

\`\`\`json
{
  "message": "Login successful",
  "token": "eyJhbGc..."
}
\`\`\`

Failure:

\`\`\`json
{
  "message": "Invalid email or password"
}
\`\`\`

The browser reads this body and decides what to display to the user.

---

## Putting Everything Together

Here's the complete conversation.

\`\`\`http
REQUEST (POST /login)  →  SERVER THINKS  →  RESPONSE (200 OK)
\`\`\`

Every API you've ever called follows this same structure.

Whether it's:

* GitHub API
* Stripe API
* OpenAI API
* Your NestJS backend

Everything follows the HTTP message format.

---

## My Biggest Realization

Before today...

I thought an API request was basically:

\`\`\`text
URL + JSON
\`\`\`

Now I understand it's much more organized.

Every HTTP message is carefully structured.

Each part has a specific responsibility.

The start line explains the intention.

Headers provide context.

The blank line separates metadata from content.

The body carries the actual information.

Once I started seeing HTTP as a structured conversation instead of random text, debugging API requests suddenly became much easier.

---

## Checkpoint Questions

### Which part of the request contains the actual data the user submits?

The **Body** contains the actual data submitted by the user. For example, when logging in, the email and password are usually sent inside the request body as JSON.

---

### Which part of the response tells the browser if the request succeeded or failed?

The **Status Line**, specifically the **HTTP Status Code**, tells the browser whether the request was successful or not. For example, \`200 OK\` indicates success, while \`404 Not Found\` or \`500 Internal Server Error\` indicate different types of failures.

---

> **Coming next:** Now that we know the structure of an HTTP message, it's time to zoom in on one of its most important parts—**Headers**. We'll explore the four categories of HTTP headers, what they do, who sends them, and why almost every modern web application depends on them.



## Topic 2.2 — The 4 Types of HTTP Headers

After understanding the structure of an HTTP request, one thing immediately caught my attention.

Headers.

At first, they looked like random key-value pairs.

Whenever I opened Chrome DevTools, I would see things like:

\`\`\`http
Content-Type: application/json

Authorization: Bearer eyJhb...

Accept: application/json

User-Agent: Chrome
\`\`\`

Honestly...

I ignored them.

I thought:

> "The important part is the JSON body."

Turns out...

Headers are just as important as the body.

Sometimes...

They're even **more important**.

Without headers:

* Authentication wouldn't work.
* Browsers wouldn't know how to interpret responses.
* CORS wouldn't exist.
* HTTPS security would be much weaker.
* File downloads would behave incorrectly.

I finally realized that headers are basically **the instructions attached to every HTTP message.**

---

### What Exactly Is a Header?

Think about shipping a package.

The box contains the product.

But outside the box, you usually find labels like:

* Fragile
* This Side Up
* Keep Refrigerated
* Express Delivery

Those labels are **not the product**.

They simply describe **how the package should be handled**.

HTTP headers work exactly the same way.

The **body** is the package.

The **headers** are the labels.

They provide additional information about the request or response.

---

## Four Categories of Headers

The speaker grouped headers into four major categories.

\`\`\`text
1. Request Headers

2. General Headers

3. Representation (Entity) Headers

4. Security Headers
\`\`\`

Each category solves a different problem.

Let's go through them one by one.

---

## 1. Request Headers

These are sent **from the client to the server**.

Their job is to give the server more context.

Imagine introducing yourself before asking a question.

Example:

\`\`\`http
GET /users HTTP/1.1

Authorization: Bearer eyJhb...

Accept: application/json

User-Agent: Chrome
\`\`\`

The server immediately learns:

* Who is making the request?
* What format does the client want?
* Which browser is being used?

Without even looking at the body.

---

### Authorization

Probably the most important request header.

Example:

\`\`\`http
Authorization: Bearer eyJhbGc...
\`\`\`

Whenever you log in...

Your backend usually generates a JWT.

Every future request sends that token.

\`\`\`text
Login  →  Receive JWT  →  Store JWT  →  Send JWT on every request
\`\`\`

Your backend checks this header before allowing access.

Without it...

Protected routes wouldn't exist.

---

### Accept

Example:

\`\`\`http
Accept: application/json
\`\`\`

The client tells the server:

> "Please send JSON."

Sometimes clients may request:

* JSON
* HTML
* XML
* Images

The server chooses the best format.

---

### User-Agent

Example:

\`\`\`http
User-Agent: Chrome
\`\`\`

This tells the server which browser or application made the request.

Servers sometimes use this information to:

* optimize responses
* collect analytics
* troubleshoot compatibility issues

---

## 2. General Headers

General headers aren't specific to only requests or only responses.

They can be used by both.

Think of them as information relevant to the entire conversation.

Examples include:

\`\`\`http
Date

Connection

Cache-Control
\`\`\`

---

### Cache-Control

Example:

\`\`\`http
Cache-Control: no-cache
\`\`\`

This tells browsers and proxies how caching should behave.

Sometimes data changes frequently.

Example:

Bank balances.

You never want a cached balance.

Other times:

Images or logos rarely change.

Caching them improves performance dramatically.

---

### Connection

Example:

\`\`\`http
Connection: keep-alive
\`\`\`

This tells the server:

> "Let's keep this connection open."

Instead of opening a new TCP connection for every request...

The same connection can be reused.

This improves performance.

---

## 3. Representation Headers

These describe the actual data being transferred.

Think of them as labels attached directly to the package itself.

---

### Content-Type

One of the most common headers you'll ever see.

Example:

\`\`\`http
Content-Type: application/json
\`\`\`

This tells the receiver:

> "The body contains JSON."

Other examples include:

\`\`\`text
application/json, text/html, image/png, application/pdf
\`\`\`

Without Content-Type...

The browser wouldn't know how to interpret the response.

Imagine receiving bytes without knowing whether they're:

* an image
* a PDF
* HTML
* JSON

Chaos.

---

### Content-Length

Example:

\`\`\`http
Content-Length: 512
\`\`\`

This tells the receiver exactly how large the body is.

The browser knows when it has received the complete response.

---

### Content-Encoding

Sometimes data is compressed before transmission.

Example:

\`\`\`http
Content-Encoding: gzip
\`\`\`

The browser automatically decompresses it.

Smaller responses mean:

Faster websites.

---

## 4. Security Headers

These are some of the most important headers in modern web development.

They don't transfer business data.

Instead...

They protect users.

---

### Content-Security-Policy (CSP)

This header tells the browser:

> "Only load JavaScript from trusted sources."

Example:

\`\`\`http
Content-Security-Policy:
default-src 'self'
\`\`\`

This helps prevent one of the web's biggest attacks:

Cross-Site Scripting (XSS).

Without CSP...

Malicious JavaScript could potentially execute inside your website.

---

### Strict-Transport-Security (HSTS)

Example:

\`\`\`http
Strict-Transport-Security:
max-age=31536000
\`\`\`

This tells browsers:

> "Always use HTTPS."

Even if someone types:

\`\`\`text
http://example.com
\`\`\`

The browser automatically upgrades it to HTTPS.

Safer.

More secure.

---

### X-Frame-Options

Example:

\`\`\`http
X-Frame-Options: DENY
\`\`\`

This prevents other websites from embedding your pages inside an \`<iframe>\`.

It protects against:

Clickjacking attacks.

---

### X-Content-Type-Options

Example:

\`\`\`http
X-Content-Type-Options: nosniff
\`\`\`

This tells browsers:

> "Trust the Content-Type header."

Don't guess.

This prevents certain types of content spoofing attacks.

---

## Why So Many Headers?

When I first saw dozens of headers...

I thought:

> "Why make HTTP so complicated?"

Now I understand.

Headers keep HTTP flexible.

Instead of changing the protocol every time we invent a new feature...

We simply add another header.

That's one reason HTTP has survived for decades.

It's incredibly extensible.

---

## Example Response

Imagine our backend returns:

\`\`\`http
HTTP/1.1 200 OK

Content-Type: application/json

Cache-Control: no-cache

Content-Length: 154

Content-Security-Policy: default-src 'self'

{
   "message":"Login successful"
}
\`\`\`

Even before reading the body...

The browser already knows:

* The request succeeded.
* The response is JSON.
* Don't cache it.
* Only trusted scripts may execute.

That's powerful.

---

## My Biggest Realization

Today I stopped thinking of headers as "extra information."

They're actually **instructions**.

Some instruct the server.

Some instruct the browser.

Some improve performance.

Some improve security.

Some identify users.

Without headers...

Modern web applications simply wouldn't function the way they do today.

---

## Checkpoint Questions

### Which header does your backend read to authenticate a user?

Typically the **Authorization** header.

Example:

\`\`\`http
Authorization: Bearer eyJhbGc...
\`\`\`

The backend extracts the JWT or access token from this header, verifies it, and determines whether the user is authenticated.

---

### Which header does your backend set to tell the client that it is returning JSON?

The **Content-Type** response header.

Example:

\`\`\`http
Content-Type: application/json
\`\`\`

This tells the client how to interpret the response body.

---

### What happens if you forget to set Content-Security-Policy?

Your application becomes more vulnerable to attacks such as **Cross-Site Scripting (XSS)**. Without a CSP, browsers have fewer restrictions on which scripts can execute, making it easier for malicious code to run if it gets injected into your page.

---

> **Coming next:** We've explored how HTTP messages are structured and how headers provide context and instructions. Now it's time to look at the actions themselves—the famous HTTP methods: **GET, POST, PUT, PATCH, and DELETE**, and why choosing the wrong one can lead to confusing APIs and unexpected bugs.


## Topic 2.3 — HTTP Methods (The Verbs of the Web)

After understanding the structure of an HTTP request and learning about headers, another question naturally came to mind.

If every request has a **Start Line**, and that Start Line begins with words like:

\`\`\`http
GET /users

POST /login

PUT /users/1

DELETE /posts/10
\`\`\`

What do those words actually mean?

Why can't we just use **POST** for everything?

Or **GET** for everything?

Turns out...

Those first words are one of the most important parts of HTTP.

They're called **HTTP Methods**, or sometimes **HTTP Verbs**.

Just like verbs in English describe actions (run, eat, write, sleep), HTTP methods describe **what action we want the server to perform**.

Without them...

The server wouldn't know what we're trying to do.

---

## Think of the Backend Like a Library

Imagine walking into a library.

You could ask the librarian to:

* Show you a book.
* Add a new book.
* Update information about a book.
* Remove a book.

Notice something...

The building is the same.

The books are the same.

Only **your intention changes**.

HTTP methods work exactly like that.

The URL identifies **which resource** we're talking about.

The HTTP method tells the server **what we want to do with that resource**.

---

## The Big Five

Although HTTP defines many methods, backend developers spend most of their lives using these five.

\`\`\`text
GET, POST, PUT, PATCH, DELETE
\`\`\`

The speaker called these the "Big Five."

If you understand these five really well...

You'll understand most REST APIs.

---

## GET — "Give Me Something"

GET is the most common HTTP method.

Its job is simple:

> **Retrieve data.**

Nothing more.

Nothing less.

Example:

\`\`\`http
GET /users
\`\`\`

Translation:

> "Dear server...

Can you please give me all users?"

Or:

\`\`\`http
GET /users/25
\`\`\`

Translation:

> "Please give me the user whose ID is 25."

GET should never modify anything.

It only asks for information.

Think of GET like opening a book in a library.

Reading doesn't change the book.

---

### SQL Comparison

When using GET...

The backend usually performs something like:

\`\`\`sql
SELECT * FROM users;
\`\`\`

GET maps nicely to:

\`\`\`text
SELECT
\`\`\`

---

## POST — "Create Something"

POST is used when we want to create a new resource.

Example:

\`\`\`http
POST /users
\`\`\`

Body:

\`\`\`json
{
  "name": "Belema",
  "email": "belema@example.com"
}
\`\`\`

Translation:

> "Please create a new user using this data."

The backend receives the request...

Validates the information...

Saves it to the database...

Returns the newly created user.

---

### SQL Comparison

POST usually maps to:

\`\`\`sql
INSERT INTO users...
\`\`\`

Simple.

---

## PUT — "Replace Everything"

PUT confused me at first.

I thought:

> "Isn't PUT just another UPDATE?"

Not exactly.

PUT means:

> **Replace the entire resource.**

Imagine we currently have:

\`\`\`json
{
  "name": "Belema",
  "email": "belema@example.com",
  "age": 22
}
\`\`\`

Now we send:

\`\`\`http
PUT /users/1
\`\`\`

Body:

\`\`\`json
{
  "name": "Bella",
  "email": "bella@example.com",
  "age": 23
}
\`\`\`

The server replaces the whole user.

Everything becomes the new version.

Think of PUT like replacing an old document with a completely new one.

---

## PATCH — "Change Only This"

PATCH is more precise.

Instead of replacing everything...

It updates only specific fields.

Example:

\`\`\`http
PATCH /users/1
\`\`\`

Body:

\`\`\`json
{
  "age": 23
}
\`\`\`

Nothing else changes.

Only the age.

Imagine editing one sentence in a Word document.

You don't rewrite the whole document.

You simply modify one small section.

That's PATCH.

---

## DELETE — "Remove It"

DELETE is exactly what it sounds like.

Example:

\`\`\`http
DELETE /users/1
\`\`\`

Translation:

> "Please remove user number 1."

The backend checks:

* Does the user exist?
* Do you have permission?
* Is deletion allowed?

If everything is okay...

The user disappears from the database.

---

## CRUD Makes Everything Easier

Suddenly...

Everything clicked.

These HTTP methods map almost perfectly to CRUD.

| CRUD             | HTTP   | SQL    |
| ---------------- | ------ | ------ |
| Create           | POST   | INSERT |
| Read             | GET    | SELECT |
| Update (Replace) | PUT    | UPDATE |
| Update (Partial) | PATCH  | UPDATE |
| Delete           | DELETE | DELETE |

This table became one of my favorite mental models.

Whenever I build an API...

I immediately know which HTTP method belongs to which database operation.

---

### Why Not Just Use POST?

This question crossed my mind immediately.

Technically...

You *could* use POST for everything.

Example:

\`\`\`http
POST /delete-user

POST /update-user

POST /get-users
\`\`\`

Would it work?

Probably.

Should you do it?

Definitely not.

Why?

Because HTTP methods have meaning.

Other developers expect:

GET → Read

POST → Create

PUT → Replace

PATCH → Update

DELETE → Remove

Using POST for everything makes your API confusing.

Good APIs are predictable.

---

### GET Requests Shouldn't Change Data

This is a very important rule.

Imagine opening a webpage.

The browser automatically sends:

\`\`\`http
GET /products
\`\`\`

If GET deleted products...

Refreshing the page could accidentally destroy data.

That's why GET must remain safe.

It should never modify the server.

Reading should not have side effects.

---

### PUT vs PATCH

This was the biggest confusion for me.

Now I think of it like this.

PUT says:

> "Here's the new version."

PATCH says:

> "Only change this."

Example.

Current user:

\`\`\`json
{
  "name": "Belema",
  "age": 22,
  "city": "Addis Ababa"
}
\`\`\`

PUT:

\`\`\`json
{
  "name": "Bella",
  "age": 23,
  "city": "Adama"
}
\`\`\`

Entire object replaced.

PATCH:

\`\`\`json
{
  "city": "Adama"
}
\`\`\`

Only one field changes.

Everything else stays exactly the same.

---

## Real Example (NestJS)

Imagine our Tour API.

\`\`\`http
GET /tours
\`\`\`

Return all tours.

---

\`\`\`http
POST /tours
\`\`\`

Create a new tour.

---

\`\`\`http
PUT /tours/5
\`\`\`

Replace Tour #5 completely.

---

\`\`\`http
PATCH /tours/5
\`\`\`

Update only the price.

---

\`\`\`http
DELETE /tours/5
\`\`\`

Remove Tour #5.

This feels so clean and predictable.

That's exactly why REST became popular.

---

## My Biggest Realization

Before today...

I thought HTTP methods were just random keywords.

Now I see them as the **language of REST APIs**.

They communicate intent.

The URL answers:

> "Which resource?"

The HTTP method answers:

> "What should I do with it?"

Once you combine those two...

Your API becomes self-explanatory.

---

## Checkpoint Questions

### Why should a GET request never have a body?

Because GET is designed to retrieve data, not send new data to the server. Many servers, proxies, and browsers ignore GET request bodies entirely, and including one can lead to inconsistent behavior. The information needed for a GET request should typically be passed in the URL (path or query parameters), not in the body.

---

### If you use POST to update a resource, what are you doing wrong?

You're ignoring the semantic meaning of HTTP methods. POST is intended for creating new resources, while updating existing resources should use **PUT** (for full replacement) or **PATCH** (for partial updates). Using POST for updates makes your API less predictable and harder for other developers to understand.

---

### What is the difference between \`PUT /users/123\` and \`PATCH /users/123\`?

\`PUT\` replaces the entire resource. The client is expected to send the complete new representation of the user.

\`PATCH\` modifies only the fields included in the request, leaving all other fields unchanged.

---


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
`,
  },
  {
    title: "Day 2 — Learning Backend from First Principles (Part 1)",
    slug: "backend-first-principles-day-2-part-1",
    description:
      "HTTP isn't the internet. It's only one protocol among many. Today I learned about the ecosystem of protocols, the OSI Model, and TCP vs UDP.",
    category: "Learning Journey",
    date: "2026-07-04",
    readingTime: "12 min read",
    content: `# The Foundation: How Clients and Servers Talk

> *"HTTP is just the beginning. Behind every website you visit is an entire ecosystem of protocols working together to make the internet feel instant."*

---

## Introduction

Yesterday, I learned how a request travels from my browser all the way to the backend.

The journey looked like this:

\`\`\`text
Browser → DNS → Internet → Cloud Server → Firewall → Nginx → Backend App → Database
\`\`\`

At that point, I thought:

> "Nice... I finally understand how the internet works."

Well...

Today's lesson humbled me.

I realized something important:

> **HTTP isn't the internet.**

It's only **one protocol** among many.

In fact, if the internet were a city, HTTP would simply be one type of road.

Different kinds of communication require different roads.

Just like you wouldn't use a bicycle to carry a shipping container, you wouldn't use HTTP for every networking problem.

That is exactly what today's lesson is about.

Let's dive in.

---

## Topic 1.1 — Beyond HTTP: The Ecosystem of Protocols

### Wait... Isn't HTTP everything?

For the longest time, I thought this:

\`\`\`text
Frontend
      ↓
HTTP
      ↓
Backend
\`\`\`

End of story.

But that's far from reality.

HTTP is only **one communication protocol**.

The internet is actually filled with many different protocols, each designed for a specific purpose.

Think of protocols like different languages.

Imagine this:

* Two pilots communicate using aviation terminology.
* Doctors communicate using medical terminology.
* Programmers communicate using technical jargon.

Everyone is speaking...

But they're speaking **different languages** because they solve different problems.

Networking works exactly the same way.

---

## What is a Protocol?

A protocol is simply...

> **A set of rules that tells two computers how to communicate with each other.**

That's it.

Every protocol answers questions like:

* How do we start talking?
* What format should messages use?
* How do we know the message arrived?
* What happens if something goes wrong?
* How do we end the conversation?

Without these rules...

Every computer would speak differently.

The internet would be chaos.

---

### Real-Life Analogy

Imagine football.

Football has rules.

* The field has dimensions.
* Eleven players per team.
* No touching the ball with your hands (unless you're the goalkeeper).

Because everyone follows the same rules...

Teams from different countries can play together.

Protocols work the same way.

If every computer follows the same communication rules...

They can all communicate successfully.

---

## Meet HTTP

The most famous protocol is HTTP.

HTTP stands for:

> **HyperText Transfer Protocol**

Despite the fancy name...

Its job is actually very simple.

It helps a **client** and a **server** exchange information.

Example:

\`\`\`text
Browser

↓

GET /products

↓

Server

↓

Returns products
\`\`\`

Every time you:

* open YouTube
* browse Amazon
* log into Facebook
* read a blog

HTTP is usually involved.

But...

HTTP isn't always the best tool.

---

## One Tool Can't Solve Every Problem

Imagine opening a toolbox.

Inside you have:

* Hammer
* Screwdriver
* Wrench
* Saw

Could you build an entire house using only a hammer?

Probably not.

The hammer isn't bad.

It's just designed for one particular job.

HTTP is the hammer.

There are many other networking tools.

---

## WebSockets — Real-Time Conversations

Imagine chatting with your friend on WhatsApp.

You send:

> Hello

Immediately...

They reply.

No refreshing.

No clicking.

Everything happens instantly.

If HTTP handled this...

It would look something like:

\`\`\`text
Client

↓

"Any new messages?"

↓

"No."

↓

"Any new messages?"

↓

"No."

↓

"Any new messages?"

↓

"No."

↓

"Any new messages?"

↓

"Yes."
\`\`\`

Imagine asking that question every second.

That's inefficient.

Instead...

WebSockets establish **one long-lived connection**.

\`\`\`text
Client
═══════════════════════
Server
\`\`\`

The connection stays open.

Whenever something changes...

The server immediately pushes the update.

No repeated requests.

This makes WebSockets perfect for:

* Chat applications
* Multiplayer games
* Stock market dashboards
* Live sports scores
* Real-time notifications

---

### Why not just use HTTP?

Because HTTP is **request-response**.

The client always has to ask first.

WebSockets remove that limitation.

The server can speak whenever it wants.

That's a huge difference.

---

## WebRTC — Talking Directly

Suppose you're having a Google Meet call.

Would it make sense if every video frame traveled:

\`\`\`text
You

↓

Server

↓

Friend
\`\`\`

The delay would become noticeable.

Instead...

WebRTC tries to let devices communicate directly whenever possible.

\`\`\`text
You

⬅──────────────➡

Friend
\`\`\`

This dramatically reduces latency.

That's why WebRTC powers:

* Google Meet
* Zoom
* Discord Calls
* Video Chats

The priority here isn't just reliability.

It's **speed**.

Even a tiny delay feels awkward during a conversation.

---

## FTP — Moving Files

FTP stands for:

**File Transfer Protocol**

Long before services like Google Drive and Dropbox became common...

FTP was the standard way to move files between computers.

Imagine uploading:

* website files
* images
* backups
* documents

FTP was built specifically for that purpose.

Today it's less common because secure alternatives like SFTP and cloud storage have largely replaced it.

But understanding FTP helps explain why protocols evolve over time.

---

## SMTP — Sending Emails

Ever wondered what happens after clicking:

\`\`\`text
Send Email
\`\`\`

It isn't HTTP delivering your email.

It's usually SMTP.

SMTP stands for:

**Simple Mail Transfer Protocol**

Think of it as the internet's postal service.

\`\`\`text
You

↓

SMTP Server

↓

Recipient's Mail Server

↓

Recipient
\`\`\`

HTTP loads your Gmail interface.

SMTP actually delivers the email.

That was another surprise for me.

---

## MQTT — Tiny Messages for Tiny Devices

Now imagine a temperature sensor.

It isn't loading webpages.

It isn't streaming video.

It simply wants to say:

\`\`\`text
Temperature = 27°C
\`\`\`

Every few seconds.

That's it.

Using HTTP would be unnecessary overhead.

MQTT was designed for exactly these tiny messages.

It powers:

* Smart homes
* Temperature sensors
* Connected vehicles
* Industrial IoT
* Smart lights

It's lightweight, efficient, and perfect for devices with limited power and bandwidth.

---

## The Big Realization

The biggest lesson I learned today wasn't about HTTP.

It was this:

> **Every protocol exists because someone had a different problem to solve.**

HTTP solves webpage communication.

WebSockets solve real-time communication.

WebRTC solve low-latency audio and video.

SMTP solves email delivery.

FTP solves file transfer.

MQTT solves IoT communication.

No single protocol is "better" than the others.

They're simply optimized for different jobs.

---

## Protocol vs API

This was another concept that confused me at first.

They sound similar...

But they're completely different.

A **protocol** defines **how** communication happens.

An **API** defines **what** functionality is available.

Think of it like ordering food.

* The protocol is the language you and the waiter use to communicate.
* The API is the menu showing what you can order.

Without a protocol...

You couldn't communicate.

Without an API...

You wouldn't know what services are available.

Both are important, but they solve different problems.

---

## Checkpoint Questions

### Why can't I use HTTP for a live multiplayer game?

Because HTTP follows a request–response model. Every update requires the client to send a new request, which introduces unnecessary latency and overhead. In a multiplayer game, players expect movements and actions to appear almost instantly. Protocols like **WebSockets** maintain a persistent connection, allowing the server to push updates to players in real time, making them far more suitable for interactive applications.

---

### What is the difference between a protocol and an API?

A **protocol** defines the rules for communication between systems—how messages are sent, received, and interpreted.

An **API** defines the operations or services an application exposes. It tells clients *what* they can do, while the protocol determines *how* those requests and responses are exchanged.

---

> **Coming next:** Now that we've explored the different ways computers communicate, the next question is: **where do backend engineers fit into the networking stack?** To answer that, we need to understand one of the most important models in networking—the **OSI Model**.


## Topic 1.2 — The OSI Model: Where Backend Engineers Live

After learning about different protocols, another question popped into my head.

> "Okay... but **where** do all these protocols actually fit?"

Is HTTP the internet?

Is TCP the internet?

Where does IP belong?

Where does my NestJS application fit into all of this?

That's when I met something every backend engineer has probably heard about:

> **The OSI Model.**

At first...

I honestly thought it was just another boring networking diagram I'd memorize for exams and forget a week later.

Turns out...

It's actually one of the best mental models for understanding how computers communicate.

---

## What is the OSI Model?

OSI stands for:

> **Open Systems Interconnection Model**

Sounds scary...

But don't worry.

The OSI Model isn't something running on your computer.

It's simply **a conceptual model**.

Think of it like a blueprint.

Architects have blueprints before building a house.

Network engineers have the OSI Model before building networks.

It divides communication into **7 layers**.

Each layer has one responsibility.

Instead of one giant system doing everything...

Each layer focuses on one job.

---

## Think of it as Delivering a Package

Imagine you want to send a birthday gift to your friend.

Many things happen before it reaches them.

* Wrap the gift.
* Add the address.
* Transport it.
* Deliver it.

Each person involved has a different responsibility.

The OSI Model works exactly like that.

Each layer only worries about **its own job**.

It doesn't care what the other layers are doing internally.

---

## The Seven Layers

From bottom to top:

\`\`\`text
Layer 7 — Application
Layer 6 — Presentation
Layer 5 — Session
Layer 4 — Transport
Layer 3 — Network
Layer 2 — Data Link
Layer 1 — Physical
\`\`\`

The speaker immediately points out something interesting.

As backend engineers...

We **don't** need to master every layer.

---

## The Speaker's Golden Rule

One sentence from the video stood out to me.

> **Backend engineers live at Layer 7.**

Network engineers mostly worry about Layers 1–4.

Backend engineers mostly worry about Layer 7.

That doesn't mean we ignore networking.

It means we understand enough networking to build applications...

Without needing to become network specialists.

I loved this explanation because it removed a lot of fear.

I don't need to become a Cisco engineer just to build APIs.

---

## Layer 1 — Physical

This is literally...

The physical world.

Think:

* Ethernet cables
* Fiber optic cables
* Wi-Fi radio signals
* Routers
* Switches
* Electrical signals

Without Layer 1...

Nothing moves.

As a backend developer...

You'll almost never touch this layer.

And that's perfectly okay.

---

## Layer 2 — Data Link

Now devices on the same local network need to communicate.

Layer 2 handles things like:

* MAC Addresses
* Frames
* Local network communication

Again...

Very important.

But not something I'll be debugging while writing NestJS code.

---

## Layer 3 — Network

This is where **IP Addresses** live.

For example:

\`\`\`text
192.168.1.5

104.xxx.xxx.xxx
\`\`\`

Layer 3 decides:

> "How do I route this packet from one computer to another?"

This is basically GPS for the internet.

Packets travel through many routers before reaching their destination.

---

## Layer 4 — Transport

Now we reach the first layer backend engineers should actually understand.

This layer is responsible for transporting data between applications.

The two biggest protocols here are:

\`\`\`text
TCP

UDP
\`\`\`

We'll dive much deeper into these in the next section.

For now...

Think of Layer 4 as deciding **how** data should be delivered.

Should it be:

* Reliable?

or

* Fast?

That's exactly the choice between TCP and UDP.

---

## Layer 5 — Session

This layer manages conversations.

Imagine two people having a phone call.

Someone has to:

* Start the call.
* Keep the call alive.
* End the call.

That's basically what the Session Layer does.

Modern frameworks often hide this complexity from us.

So backend developers rarely interact with it directly.

---

## Layer 6 — Presentation

Imagine two computers speaking different languages.

One sends:

\`\`\`text
JSON
\`\`\`

Another expects:

\`\`\`text
XML
\`\`\`

Someone needs to translate.

Presentation Layer handles:

* Data formatting
* Encryption
* Compression
* Encoding

For example:

HTTPS encryption happens around here.

Again...

Most frameworks take care of this automatically.

---

## Layer 7 — Application

Finally...

We reach **our home**.

This is where protocols like:

* HTTP
* HTTPS
* WebSocket
* SMTP
* FTP

exist.

This is also where applications like:

* NestJS
* Express
* Django
* Spring Boot

operate.

When I write:

\`\`\`ts
@Get("/users")
\`\`\`

I'm working at Layer 7.

When I return JSON:

\`\`\`json
{
  "name": "Belema"
}
\`\`\`

I'm working at Layer 7.

When I build REST APIs...

Layer 7.

Authentication...

Layer 7.

Authorization...

Layer 7.

CRUD APIs...

Layer 7.

Everything I write as a backend developer lives here.

---

## Backend Engineer vs Network Engineer

The speaker explained this beautifully.

Imagine a company.

The backend team says:

> "Users can't log in."

The network team investigates.

Maybe:

* Router failed.
* Firewall blocked traffic.
* Cable disconnected.
* DNS misconfigured.

Backend engineers usually don't fix those problems.

Instead...

We focus on:

* API logic
* Authentication
* Database queries
* Business rules
* HTTP requests
* Responses

Different teams.

Different responsibilities.

---

### Why don't backend engineers care much about Layer 3?

That doesn't mean Layer 3 isn't important.

It absolutely is.

But modern infrastructure hides most of its complexity.

When I write:

\`\`\`ts
fetch("https://api.example.com/users")
\`\`\`

I don't manually calculate routing tables.

I don't choose internet paths.

I don't forward packets.

The operating system.

The routers.

The network.

They handle all of that automatically.

My responsibility begins once the HTTP request reaches my application.

---

### What happens if I try fixing TCP problems in NestJS?

This was another great point.

Suppose users report:

> "Requests randomly timeout."

A beginner backend developer might think:

> "I'll add another retry loop."

Or:

> "Maybe another if statement."

But what if the real problem is:

* Network congestion?
* Firewall configuration?
* Load balancer?
* Broken routing?
* Packet loss?

No amount of NestJS code will fix that.

That's a networking issue.

The correct solution is to involve the network or infrastructure team.

This perfectly demonstrates why understanding the OSI Model matters.

It helps you know:

> **Which problems belong to you... and which don't.**

---

## My Biggest Takeaway

Before today...

Networking felt like one giant mysterious blob.

Now I see it differently.

Each layer has a clear responsibility.

Backend engineers don't need to master electrical signals, routers, or packet routing.

We mainly live at **Layer 7**, building applications that communicate using protocols like HTTP.

Understanding the lower layers is still valuable because it helps us diagnose issues and collaborate with infrastructure teams—but we don't need to become networking experts to build great backend systems.

---

## Checkpoint Questions

### Why does a backend engineer usually not care about Layer 3 (IP addresses)?

Because Layer 3 is primarily responsible for routing packets across networks, a task handled by the operating system, routers, and network infrastructure. Backend developers typically work at Layer 7, where they build application logic using protocols like HTTP. They rely on the underlying network to deliver requests without manually managing IP routing.

---

### What happens if a backend engineer tries to fix a TCP timeout in application code instead of involving the network team?

They may spend hours changing application logic without solving the actual issue. If the timeout is caused by packet loss, firewall rules, routing problems, or network congestion, no amount of backend code can resolve it. The real fix belongs in the network or infrastructure layer, which is why understanding the OSI Model helps engineers identify where a problem truly exists.

---

> **Coming next:** We've now seen **where backend engineers live** in the networking stack. The next question is even more interesting: **How does data actually travel between computers?** That's where the famous battle begins... **TCP vs UDP**, followed by one of the biggest changes in modern web history—**HTTP/3 and QUIC**.



## Topic 1.3 — TCP vs UDP (And HTTP/3's Rebellion)

After understanding the OSI Model, we finally reached one of the topics I had heard about many times but never truly understood:

> **TCP vs UDP**

Before this lesson, I only knew one thing:

> "TCP is reliable."

> "UDP is faster."

Everyone kept repeating those two sentences.

But...

**Why is TCP reliable?**

Why is UDP faster?

And why on earth did **HTTP/3**, the newest version of HTTP, abandon TCP after decades?

Today's lesson answered all of those questions.

---

## Imagine Sending a Package

Let's forget computers for a minute.

Imagine you need to send your laptop to your friend.

You have two delivery companies.

### Company A

* Picks up your package.
* Calls your friend before delivery.
* Requires a signature.
* Confirms delivery.

If something goes wrong...

It sends another package.

Slow?

A little.

Reliable?

Very.

---

### Company B

* Throws the package into a truck.
* Drives away.

Never checks if it arrived.

Never asks for confirmation.

Never retries.

Faster?

Absolutely.

Reliable?

Not really.

---

That's basically the difference between **TCP** and **UDP**.

---

## TCP — "Let's Make Sure Everything Arrives"

TCP stands for:

> **Transmission Control Protocol**

The keyword is:

> **Reliable.**

TCP cares about one thing.

Making sure every piece of data arrives correctly.

Even if that means waiting.

---

### Before Anything Happens...

TCP doesn't immediately send data.

First...

It introduces itself.

Computers don't just start talking.

They first establish a connection.

This is called the:

### Three-Way Handshake

The speaker explained this as a conversation.

Computer A:

> "Hello, can we talk?"

Computer B:

> "Yes, I'm ready."

Computer A:

> "Great, let's begin."

That's it.

Three messages.

\`\`\`text
Client
   │
   ├──── SYN ────►
   │
   ◄── SYN-ACK ──┤
   │
   ├──── ACK ───►
   │
Connection Established
\`\`\`

Only after this handshake...

Can actual data start moving.

---

### Why is this important?

Imagine sending money through your banking app.

Would you want data randomly disappearing?

Absolutely not.

You want guarantees.

TCP guarantees:

* Every packet arrives.
* Packets arrive in order.
* Missing packets are resent.

That's why TCP powers things like:

* Banking
* File downloads
* Web browsing
* APIs
* Email

Reliability is more important than speed.

---

## The Downside of TCP

The handshake takes time.

Not much...

But enough to matter.

Every new connection requires:

\`\`\`text
Hello

↓

Hello back

↓

Okay let's talk

↓

Finally...
\`\`\`

Only then can your request begin.

For millions of requests every second...

Those milliseconds add up.

---

## UDP — "Just Send It!"

UDP stands for:

> **User Datagram Protocol**

UDP has a completely different philosophy.

It says:

> "Why waste time talking?"

Just send the data.

No handshake.

No confirmation.

No retries.

No guarantees.

\`\`\`text
Client

↓

Data

↓

Server
\`\`\`

Done.

---

## Isn't That Dangerous?

It depends.

Imagine watching a football match.

Every second...

Your phone receives new video frames.

Suppose one frame gets lost.

Do you want the video to stop?

Probably not.

You'd rather miss one frame than freeze for two seconds.

That's exactly why UDP exists.

Sometimes...

Speed matters more than perfection.

---

UDP is perfect for:

* Online Games
* Video Calls
* Voice Calls
* Live Streaming

If one packet disappears...

The next one arrives almost immediately anyway.

---

### Wait...

If HTTP uses TCP...

Why not UDP?

That confused me too.

Websites cannot afford missing data.

Imagine downloading:

\`\`\`text
report.pdf
\`\`\`

Halfway through...

Packet #84 disappears.

Without TCP...

Your PDF becomes corrupted.

Nobody wants that.

That's why:

HTTP/1.1

↓

TCP

HTTP/2

↓

TCP

Both depend on TCP's reliability.

---

## TCP's Biggest Weakness

The speaker introduced a term I'd never heard before:

> **Head-of-Line Blocking**

Imagine reading a book.

Page 18 goes missing.

Would you jump to page 19?

Probably not.

You'd wait.

TCP behaves the same way.

If one packet disappears...

Everything behind it waits.

\`\`\`text
Packet 1 (Arrived)

Packet 2 (Arrived)

Packet 3 (Lost)

Packet 4 (Waiting)

Packet 5 (Waiting)

Packet 6 (Waiting)
\`\`\`

Even though packets 4, 5 and 6 already arrived...

TCP refuses to process them.

Everything stops.

That's called:

> **Head-of-Line Blocking**

---

## Enter HTTP/3

Then came the plot twist.

Instead of improving TCP...

Google did something unexpected.

They said:

> "Let's stop using TCP."

Wait...

What?!

HTTP...

Without TCP?

Exactly.

---

## HTTP/3 Uses UDP

Instead of:

\`\`\`text
HTTP

↓

TCP
\`\`\`

HTTP/3 does:

\`\`\`text
HTTP

↓

QUIC

↓

UDP
\`\`\`

This completely surprised me.

---

## But UDP Isn't Reliable...

Exactly.

That's why Google created something called:

## QUIC

QUIC is a protocol built **on top of UDP**.

Think of UDP as an empty road.

Google built an intelligent delivery service on top of that road.

QUIC adds things like:

* Reliability
* Encryption
* Multiplexing
* Faster connection setup

But without TCP's limitations.

It's like getting:

The speed of UDP

*

Most of the reliability of TCP

---

### Why Not Just Improve TCP?

That was another question I had.

The speaker explained that TCP is deeply built into operating systems.

Changing TCP means changing:

Windows

Linux

macOS

Android

iOS

...and millions of networking devices.

That's almost impossible.

UDP is much simpler.

Google could innovate by building QUIC **above UDP** without waiting for every operating system in the world to change TCP itself.

A brilliant engineering decision.

---

## TCP vs UDP

Here's the mental model I now use.

| TCP                       | UDP                                                          |
| ------------------------- | ------------------------------------------------------------ |
| Reliable                  | Fast                                                         |
| Connection-oriented       | Connectionless                                               |
| Ordered delivery          | No ordering guarantee                                        |
| Retransmits lost packets  | Doesn't retransmit                                           |
| Three-way handshake       | No handshake                                                 |
| Used by HTTP/1.1 & HTTP/2 | Used by HTTP/3 (through QUIC), games, streaming, video calls |

The lesson isn't:

> TCP good.

UDP bad.

It's:

> **Choose the right tool for the job.**

---

## My Biggest Realization

When I first heard:

> "HTTP/3 uses UDP."

I thought:

> "That makes no sense."

Now it actually makes perfect sense.

Google wasn't trying to make HTTP unreliable.

They were trying to remove TCP's limitations while keeping reliability through QUIC.

Instead of fixing TCP...

They built something smarter above UDP.

That idea completely changed how I think about networking.

---

## Checkpoint Questions

### What is the Three-Way Handshake and why does it slow down HTTP/1.1?

The Three-Way Handshake is TCP's way of establishing a reliable connection before any application data is exchanged. The client sends a **SYN**, the server replies with **SYN-ACK**, and the client finishes with an **ACK**. Although this process only takes a short time, it introduces extra round trips before the actual HTTP request can begin, increasing latency.

---

### If UDP drops packets, how does HTTP/3 guarantee my file arrives complete?

HTTP/3 doesn't rely on raw UDP alone. It uses **QUIC**, which runs on top of UDP. QUIC implements reliability, retransmissions, packet ordering, congestion control, and encryption at the application layer, allowing HTTP/3 to deliver complete files while avoiding many of TCP's performance limitations.

---

### Why did Google build QUIC on top of UDP instead of fixing TCP?

TCP is deeply embedded in operating systems and networking infrastructure across the world. Changing it would require updates to billions of devices and servers. UDP is much simpler and more flexible, allowing Google to innovate at the protocol level by building QUIC on top of it without replacing TCP itself.

---

## Part 1 Complete!

Today's lesson completely changed my perspective on networking.

A few days ago, I thought backend development was simply:

\`\`\`text
Browser

↓

HTTP

↓

Backend
\`\`\`

Now I realize there is an entire world underneath that simple diagram.

I learned that:

* HTTP is only one protocol among many.
* Backend engineers mostly work at Layer 7 of the OSI Model.
* TCP values reliability over speed.
* UDP values speed over reliability.
* HTTP/3 broke tradition by moving away from TCP and embracing UDP through QUIC.

The deeper I go into backend development, the more I realize that understanding **why** technologies exist is just as important as learning **how** to use them.

And honestly...

That's what makes backend engineering so fascinating.`,
  },
  {
    title: "Day 1 — Learning Backend from First Principles",
    slug: "backend-first-principles-day-1",
    description:
      "Today I started a backend series called Backend from First Principles, and within the first video I realized something: what actually is a backend?",
    category: "Learning Journey",
    date: "2026-07-03",
    readingTime: "5 min read",
    content: `Today I started a backend series called Backend from First Principles, and within the first video I realized something...

## I thought I knew what a backend was...

Before today, if someone asked me "What's a backend?", my answer would've been NestJS 😎 or Node.js.

Turns out... that's not the backend. 😂 They're just technologies we use to build one.

## So... what actually is a backend?

The instructor explained something that completely changed my perspective. A backend is simply **another computer** connected to the internet.

Not magic. Not some mysterious cloud. Just another computer whose full-time job is:

\`\`\`
📥 Receive Requests

🧠 Process Them

📤 Send Responses

🔁 Repeat Forever
\`\`\`

Basically the hardest-working employee in the company. 😂

## Then a bigger question came...

When I type google.com, how does my computer even know where Google is? My browser doesn't magically know Google's location. That's where **DNS** comes in.

## DNS = The Internet's Contact List

Imagine trying to call your friend. Do you memorize their phone number? Probably not. You simply search: John 📱. Your phone finds the number.

DNS does exactly the same thing. Instead of:

\`\`\`
John
↓
0912345678
\`\`\`

It does:

\`\`\`
google.com
↓
142.xxx.xxx.xxx
\`\`\`

Humans love names. Computers love numbers. DNS is the translator. Pretty cool.

## The request begins its journey...

Now my browser finally knows where Google lives. So the request travels through the internet...

🏃💨 🏃💨 🏃💨

until it reaches another computer.

## The Cloud Isn't Magic 😂

One thing I loved from today's lesson: people say "It's in the cloud." Sounds mysterious.

Reality? It's literally... **someone else's computer.** 😂 Companies like AWS, Google Cloud and Azure simply rent powerful computers. Our backend lives there instead of on our laptop.

## But wait...

The request still doesn't reach my application. First... there's a security guard. 👮 The Firewall.

Its job is basically: "Who are you? Which port are you trying to use?"

Allowed? ✅ Come in.
Not allowed? ❌ Go home.

## Then comes Nginx...

I finally understood why people keep talking about Nginx. It's basically the receptionist of the server. Instead of visitors walking directly into the CEO's office, they first talk to reception.

Nginx does the same thing:

\`\`\`
Internet
↓
Nginx 👩💼
↓
Backend
\`\`\`

It receives requests first and then forwards them to the backend application.

## Finally... My Code!

Only after all of that... the request finally reaches the backend application. This is where frameworks like NestJS, Express, Django, or Spring Boot actually do their work.

This is where we write business logic. Things like:
- Is the user logged in?
- Is the password correct?
- Are seats still available?
- Should this booking be accepted?

This is the part backend developers actually build.

## Need data?

The backend doesn't magically know everything. It asks the database.

Browser: "Show me all tours."
Backend: "Database... can I borrow the tours?"
Database: "Sure 😎"

Returns the data. Backend sends it back to the browser. Done.

## Biggest Lesson Today

One thing became very clear. The frontend **cannot replace the backend.**

Why? Because browsers are intentionally limited. They cannot:
- Access databases directly
- Read all files on your computer
- Ignore security rules
- Be trusted with sensitive information

Everything important belongs on the backend.

## The Entire Journey

\`\`\`
👤 User
      ↓
🌐 Browser
      ↓
📖 DNS
      ↓
🌍 Internet
      ↓
☁️ Cloud Server
      ↓
🛡️ Firewall
      ↓
🚪 Nginx
      ↓
🧠 Backend Application
      ↓
🗄️ Database
      ↑
🧠 Backend
      ↑
🚪 Nginx
      ↑
🌍 Internet
      ↑
🌐 Browser
      ↓
👤 User 🎉
\`\`\`

## My Thoughts

I used to think backend development started when I wrote @Controller() or app.get(...). Now I realize... my code is only **one small part** of a much larger system.

Before my code even runs, the request has already traveled through DNS, the internet, a cloud server, a firewall, and Nginx. Understanding that flow makes backend feel much less like "magic" and much more like a beautifully organized system.

## What's Next?

Today's lesson was all about **how a request reaches the backend**. In the next lessons, I'll dive deeper into what happens **inside** the backend and how it communicates with databases, APIs, and other services.

One video in, and I've already changed how I think about the web. 🙌`,
  },
  {
    title: "How I Think About Data Fetching in Next.js",
    slug: "data-fetching-nextjs",
    description:
      "A practical breakdown of when to fetch on the server, when to use client hooks, and how I structure data flow in App Router projects.",
    category: "Technical Notes",
    date: "2026-04-28",
    readingTime: "8 min read",
    featured: true,
    content: `When I first moved to the App Router, I treated data fetching like a checklist: use fetch in a server component, or use useEffect on the client. That worked until pages grew more complex and I started mixing loading states, duplicate requests, and hydration issues.

Now I think about data fetching as a layering problem. Each piece of data has a home—server, client, or cache—and picking the wrong layer creates friction you feel weeks later.

## Start on the server by default

Server Components can await data directly in the component tree. For a blog listing, a project detail page, or static marketing content, that means the HTML arrives with real data. Users see content immediately instead of a skeleton that resolves a second later.

In my portfolio, blog posts and project case studies are loaded on the server from local data files. There is no client fetch for the initial view, which keeps the page simple and fast. The pattern looks like an async page component that reads data and passes it to presentational children.

The benefits go beyond perceived speed. Sensitive tokens stay on the server, bundle size stays smaller because data-fetching libraries do not ship to the browser, and SEO gets real content in the first response.

## Move to the client when interactivity demands it

Client fetching still has a clear role. I reach for it when user actions change what data I need: search-as-you-type, filters, pagination tied to UI state, or forms that refetch after submission.

On DevMeet, event search and filters depend on what the user selects. That state lives on the client, so fetching in response to user input belongs there too. The mistake is not using the client—it is fetching on the client for data that never needed interactivity in the first place.

When I do client fetch, I prefer a small, explicit hook or a library like TanStack Query if the app has many dependent requests, caching, and invalidation rules. For a single filter on one page, a focused useEffect or event handler is enough.

## Server Actions and mutations

Reads often belong on the server; writes can too. Server Actions let me handle form submissions and mutations without building a separate API route for every form. I validate on the server, update the database, and revalidate the paths that need fresh data.

That pattern clicked for me on full-stack projects where I was over-building REST endpoints for simple create/update flows. A Server Action plus revalidatePath is often the right size.

## Caching and freshness

Next.js extends fetch with caching semantics. For content that changes rarely—like this blog's static posts—I lean on defaults that favor static generation. For dashboards or user-specific data, I set cache: 'no-store' or use dynamic rendering so I do not show stale private data.

I also pay attention to where deduplication happens. Multiple server components requesting the same resource in one tree should share work; understanding default fetch caching prevents surprise duplicate queries during development.

## A simple decision checklist

Before I add a fetch anywhere, I ask:

- Does this data need to be in the first HTML response?
- Does it depend on browser-only state or user input?
- Is it user-specific or public?
- How fresh does it need to be?

If the answers point to stable, public, initial-render data, the server wins. If they point to reactive UI, the client wins. If they point to a form submission, a Server Action is often the cleanest path.

## What changed in my projects

After applying this consistently, my pages got flatter: fewer loading spinners on first paint, fewer "client" pages that were only client because I did not want to split components. I extract small client islands—filters, theme toggles, mobile menus—and leave the page shell on the server.

Data fetching in Next.js is not one API to memorize. It is choosing the right layer for each piece of data, then letting the framework do the heavy lifting.`,
  },
  {
    title: "Client Components vs Server Components",
    slug: "client-vs-server-components",
    description:
      "Notes from building real projects on where I draw the line between server and client components.",
    category: "Technical Notes",
    date: "2026-04-15",
    readingTime: "7 min read",
    content: `Server Components are the default in the App Router, and that default is intentional. They run on the server, ship no component JavaScript to the browser for their own logic, and compose naturally with async data fetching. Client Components are the exception you opt into with "use client"—and that exception is powerful when you need it.

The hard part is not learning the syntax. It is drawing a boundary that keeps bundles small without fighting the framework.

## What Server Components are good at

I use Server Components for layouts, pages, static sections, and anything that renders the same way for every user until data changes on the server. They can import server-only modules, read from the filesystem, talk to a database directly, and keep secrets off the client.

In practice, that means my blog post page, project case study shell, and most marketing sections never need "use client". They receive data, render HTML, and pass only the interactive pieces down as children.

## When I add "use client"

I reach for Client Components when I need one or more of these:

- Event handlers (onClick, onChange, onSubmit)
- React state (useState, useReducer)
- Browser APIs (localStorage, matchMedia, geolocation)
- Effects that depend on the window or document
- Third-party libraries that assume a browser environment

My theme toggle, mobile navigation, and contact form all live in client components. They are small leaf nodes at the edge of the tree, not wrappers around entire pages.

## The mistake I made early

My first App Router pages were marked "use client" at the top because one button needed state. That pulled the entire page—and every import beneath it—into the client bundle. Data fetching moved to useEffect, loading states multiplied, and I lost most of the benefits I had switched for.

The fix was mechanical but mindset-shifting: keep the page as a Server Component, identify the interactive island, and move only that subtree to a client file. Children of a Client Component can still be Server Components if they are passed as children props from a parent server tree—a pattern the docs call the "composition" approach.

## Composition over conversion

A pattern I use often looks like this mentally: the server page fetches data and renders structure; it passes server-rendered content into a client shell only where needed. For example, a client tabs component might receive pre-rendered tab panels as children from the server.

That way interactivity does not force data fetching to the client. The server still owns the expensive work.

## Boundaries and mental overhead

Every "use client" file creates a boundary. Imports below that boundary must be client-safe. That is why I avoid sprinkling "use client" in shared utility files unless they are truly client-only.

I also watch for accidental chains: a client card component imported by a client layout is fine; a client hook imported into a server component is not. The compiler error is clear, but the habit of checking the top of the file saves debugging time.

## How I decide in real features

For DevLink and DevMeet, listing pages are server-rendered with data from Prisma. Interactive pieces—dropdowns, modals, optimistic UI on a button—are isolated client components colocated next to the feature they serve, not in a generic "components/client" dumping ground.

If I am unsure, I default to server and wait for a concrete need: a handler, state, or browser API. That default has been right more often than wrong.

## Summary

Server Components are not a restriction—they are the baseline that keeps apps fast. Client Components are the tool for interactivity at the leaves. The skill is drawing that line early, composing server and client trees intentionally, and refusing to convert a whole page just because one corner needs state.`,
  },
  {
    title: "How I Structure React Projects",
    slug: "react-project-structure",
    description:
      "The folder conventions I use to keep components, data, and routes maintainable as projects grow.",
    category: "Technical Notes",
    date: "2026-03-22",
    readingTime: "6 min read",
    content: `Folder structure does not make an app good by itself, but bad structure makes every change slower. I have rebuilt enough projects to care about conventions that help future-me find things in minutes, not hours.

I organize by feature and route, not by file type alone. That does not mean I abandon shared folders—it means the top level answers "where would I look for this?" before "what extension is it?"

## The top-level map

A typical project I work on looks roughly like this:

- app/ for routes, layouts, and page-level composition
- components/ for reusable UI, split into ui primitives and domain-specific cards or sections
- data/ or lib/ for static content, helpers, and server utilities
- types/ for shared TypeScript contracts
- sections/ for larger page blocks that are not quite routes but more than atoms

Routes stay thin. They wire data to layout and defer presentation to components or sections. If a page file grows past a screen, something probably belongs in components/ or sections/.

## components/ui vs domain components

I keep design-system primitives—buttons, badges, containers, inputs—in components/ui. They know nothing about "projects" or "blog posts". Domain components like ProjectCard or BlogCard live alongside them but import from ui, not the other way around.

That separation stops business copy and layout hacks from leaking into primitives. It also makes it obvious what I can copy into another project wholesale.

## Data lives in one place

Static content for this portfolio—posts, projects, timeline entries—lives under data/ with small helper functions for sorting, filtering, and lookup by slug. Pages do not embed long arrays inline.

For full-stack apps, the same idea applies: Prisma client and query helpers sit near the database layer; route handlers and server components call those helpers instead of duplicating Prisma queries across files.

## Colocation when a feature is cohesive

If only one route uses a complex widget and it is unlikely to be reused, I colocate it under app/.../_components or next to the feature folder. I do not promote everything to global components/ on day one.

When a second route needs the same widget, I move it up. That rule prevents premature abstraction.

## Naming and imports

I use path aliases (@/components, @/data) so imports stay readable. File names match the default export: ProjectCard.tsx exports ProjectCard. Index barrels are sparing—I have seen barrels hide circular dependencies and slow down refactors.

## What this portfolio does specifically

This site uses app/ for routes, components/ for cards and layout chrome, sections/ for home and about blocks, and data/ for posts and projects. Blog slugs resolve through helpers; the blog page itself does not own the content array.

That mirrors how I structure DevLink and DevMeet: routes orchestrate, data layer supplies shape, UI components render.

## Signs the structure is failing

I reorganize when I notice:

- The same query copied in three route files
- A components folder with forty unrelated files and no subfolders
- Pages importing from five levels deep with relative paths
- "utils.ts" becoming a thousand-line junk drawer

None of those are fatal, but they are signals to split by feature or extract a data layer.

## Closing thought

Structure should reduce decisions, not create ceremony. I want a new contributor—or me in six months—to know where to add a blog post, a project, or a form without reading the entire repo. These conventions are how I get there.`,
  },
  {
    title: "What I Learned Building DevMeet",
    slug: "lessons-from-devmeet",
    description:
      "Reflections on full-stack event platform development—from Prisma models to responsive UI patterns.",
    category: "Building in Public",
    date: "2026-03-10",
    readingTime: "9 min read",
    content: `DevMeet is a full-stack platform for discovering and creating developer events—meetups, workshops, and online sessions. Building it was my most complete pass through authentication, database modeling, search, and deployment in one product. These are the lessons that stuck.

## The product is really a data model

Event platforms look like UI problems on the surface: cards, maps, calendars. Underneath, they are about consistent entities and relationships. An event has a title, description, date, location or URL, organizer, and maybe capacity. Users create events; visitors browse and filter.

Getting the Prisma schema right early saved the most pain. I thought about which fields need indexes for search, which relations cascade on delete, and how optional fields (online vs in-person) should be represented. Refactoring a live schema later is possible but expensive emotionally.

I modeled users and events with clear ownership: every event belongs to someone who created it. That single decision shaped authorization rules for edit and delete flows.

## Search and filters need planning

Users expect to filter by date, location, or keywords and see results quickly. That meant thoughtful queries—not loading every event to the client and filtering in JavaScript.

I used database-level filtering with Prisma where clauses, combined with pagination so lists stayed fast as seed data grew. Fields used in search and sort got indexes. It is a small step in development that matters a lot in production.

On the UI side, filter state lived in client components, but the actual fetch could still go through server actions or API routes that validate input before hitting the database.

## Authentication touches everything

Once users can create events, every write path needs to know who is calling. I integrated auth early enough that protected routes and server-side checks were part of the design, not a bolt-on.

The lesson: do not build the entire create-event flow as anonymous and "add auth later." Later always means revisiting every mutation and wondering if someone else can edit another user's event.

## UI consistency through reuse

Event listing and event detail share visual language: badges for date, typography for titles, muted text for location. I reused card patterns and layout primitives instead of one-off markup per page.

That sped development and made the app feel cohesive. When I changed spacing or border radius in one card component, the listing and detail pages improved together.

## Forms, validation, and errors

Event creation is a form-heavy flow. I paired React Hook Form with Zod so client-side feedback was immediate and server-side validation matched the same rules. Duplicated validation messages are frustrating; shared schemas fix that.

I also learned to show server errors in the UI visibly—generic "something went wrong" toasts are better than silent failures, but specific messages ("end date must be after start date") are better still.

## Deployment and environment discipline

DevMeet runs on Vercel with a hosted PostgreSQL database. Environment variables for database URL and auth secrets were non-negotiable. I document which vars are required locally and in production so I am not guessing when a deploy fails.

Migrations run as part of the workflow I trust before shipping schema changes. A broken migration on deploy is a bad day; rehearsing locally prevents most of that.

## What I would do differently

I would ship a thinner vertical slice even sooner: browse events, view one event, create one event—with auth—before adding nice-to-have features. I would also add basic analytics or logging earlier to see which flows fail in production.

## Why I am glad I built it

DevMeet connected patterns I had learned in isolation: Next.js App Router, Prisma, auth, forms, deployment. It is a reference project I can point to when discussing how I think about full-stack work—not because it is perfect, but because it is real, shipped, and maintained.`,
  },
  {
    title: "Prisma vs Drizzle: My Notes",
    slug: "prisma-vs-drizzle",
    description:
      "A comparison based on my experience with Prisma in production projects and exploring Drizzle for learning.",
    category: "Learning Journey",
    date: "2026-02-18",
    readingTime: "7 min read",
    content: `I have shipped multiple projects with Prisma. Drizzle keeps appearing in discussions, tutorials, and repos I admire—so I spent time with both to understand the tradeoffs honestly, not from hype.

This is not a verdict that one tool wins forever. It is how they fit my goals today: learning quickly, shipping full-stack apps, and building SQL intuition.

## Why Prisma became my default

Prisma's schema file is readable. Models, relations, and enums map closely to how I think about the domain. Migrations are integrated; the client is generated with types that match the schema. For DevMeet, DevLink, and other learning projects, that meant less time wiring raw SQL and more time on product flows.

The developer experience is polished: good docs, clear errors in many cases, and a studio to inspect data when debugging. When I was newer to databases, that guardrails feeling mattered.

Prisma Client's API is chainable and expressive for common CRUD and relation includes. I rarely write raw SQL in day-to-day feature work, which is a pro for velocity and a con for SQL depth.

## What draws me to Drizzle

Drizzle stays closer to SQL. Schemas are defined in TypeScript; queries look like SQL composed in code. People describe it as "lighter"—smaller runtime, less magic between you and the database.

That appeals to me as a learning tool. Reading Drizzle examples forces me to think in tables, joins, and indexes explicitly. If my long-term goal includes strong backend fluency, time in Drizzle is probably well spent.

Drizzle also fits teams that want SQL-native control without abandoning type safety. Migrations and schema live in the same ecosystem as the queries.

## Tradeoffs I actually feel

**Learning curve:** Prisma is gentler upfront. Drizzle assumes you are comfortable with SQL concepts earlier.

**Bundle and runtime:** Drizzle is often cited as leaner. For my projects so far, Prisma's weight has not been the bottleneck; feature delivery and query shape mattered more.

**Complex queries:** Prisma handles typical app queries well. Very complex reporting or database-specific features sometimes push you toward raw SQL or workarounds. Drizzle's model can shine when queries are inherently SQL-shaped.

**Ecosystem and hiring:** Prisma is widely used in Next.js tutorials and production apps. Drizzle is growing but smaller. That affects copy-paste answers and community examples.

## How I use them in practice today

Prisma remains what I reach for when I want to ship a full-stack MVP and learn product development end to end. I know the migration workflow, relation patterns, and how to deploy with a hosted Postgres provider.

Drizzle is what I reach for when the goal is deliberately educational: reproducing a schema by hand, writing queries that mirror SQL exercises, or comparing how the same feature looks in both tools.

## What I am building toward

I do not want to depend on ORM magic without understanding what gets executed. My plan is to keep shipping with Prisma while doing side exercises in Drizzle and occasional raw SQL—explaining query plans, indexes, and constraints in my own words.

If a future project needs maximum control or edge deployment constraints, I will re-evaluate. For now, the best ORM is the one that matches the project's learning and delivery goals.

## Short summary

- Prisma: fast to learn, great DX, strong fit for Next.js full-stack apps I have built
- Drizzle: SQL-forward, lighter feel, strong fit for deepening database skills
- Me today: Prisma for shipping, Drizzle for stretching

That split might change as I get more production experience. Documenting the reasoning now helps me notice when it is time to switch defaults.`,
  },
  {
    title: "Week 1: Rebuilding My Portfolio",
    slug: "week-1-portfolio-rebuild",
    description:
      "Documenting the shift from a single-page beginner portfolio to a content-driven personal site.",
    category: "Building in Public",
    date: "2026-05-01",
    readingTime: "6 min read",
    content: `This week I started rebuilding my portfolio from a one-page layout into a multi-route site with writing, a library, project case studies, and a clearer about page. I am documenting the process because the goal is not more pages—it is more signal.

## Why rebuild now

My earlier portfolio proved I could ship a responsive page: hero, projects grid, contact links. That was enough for a first version. It was not enough to show how I think, what I am learning, or how I write about technical decisions.

Recruiters and collaborators do not only want screenshots. They want context: problems, tradeoffs, and growth. A content-driven site supports that story better than a single scroll.

## Information architecture first

Before touching visual polish, I mapped routes: home, projects with detail pages, blog, library, about, contact. Each route has a job. Home orients and highlights; projects prove depth; blog shows thinking over time; library shares what I read and watch; about grounds the person behind the work.

That map prevented me from adding random sections because they looked cool elsewhere. Every page justifies its place in the nav.

## Content as data

Posts and projects live in typed data files with helpers for slugs, featured flags, and latest lists. That keeps pages thin and makes adding a new post a content edit, not a layout rewrite.

It also sets me up for MDX or a CMS later if I outgrow files. The abstraction boundary is already there: pages ask for getPostBySlug, not for inline arrays.

## Design system in small pieces

I leaned on a short list of primitives: container width, badges, cards, section headers. Tokens for color and spacing live in global CSS variables so dark mode and accent colors stay consistent.

The win is not a huge component library—it is not redesigning every section from scratch when I add the blog or library.

## What shipped in week one

By the end of the first week I had routing in place, core layout (header, footer), home sections wired to real data, project listing and detail templates, blog listing and post pages, and the start of library and about content.

Not everything was polished. Some posts were stubs. But the skeleton was real—you could navigate the whole site and see where content would deepen.

## Friction I hit

I re-learned that scope creeps quietly: "while I am at it" animations, perfect typography, every blog post fully written. I had to remind myself that a navigable site with honest placeholders beats a beautiful single page forever.

I also hit App Router details—async params, server vs client boundaries—that slowed me down in a good way. Fixing them once on the portfolio teaches the pattern for client work.

## Next weeks (intent)

- Flesh out blog posts and case study copy
- Tighten visual consistency on cards and section spacing
- Improve metadata and Open Graph for sharing
- Add small interactive touches only where they help UX

## Why document publicly

Writing this series holds me accountable and gives visitors a timeline of progress. If you are rebuilding your own site, I hope the takeaway is simple: define routes and content shape first, then iterate on craft. Week one is structure, not perfection.`,
  },
  {
    title: "Mistakes I Made While Building My First Full-stack App",
    slug: "first-fullstack-mistakes",
    description:
      "Honest notes on over-engineering, skipping validation, and learning to ship incrementally.",
    category: "Learning Journey",
    date: "2026-01-30",
    readingTime: "8 min read",
    content: `My first full-stack app was ambitious, messy, and incredibly educational. I am glad I shipped it—but I would not repeat every choice. These mistakes shaped how I build DevMeet, DevLink, and this portfolio.

## Planning every feature before shipping one

I had a long list: auth, profiles, posts, comments, notifications, admin dashboards. I built foundations for all of them instead of delivering one complete user journey.

The cost was months of partial UI and no single flow that felt done. Users (and reviewers) cannot experience "almost auth plus almost posts." They experience one working path or nothing.

Now I define the thinnest slice that proves the stack: sign up, create one resource, view it in a list. Ship that, then add the next layer.

## Treating validation as optional

Early forms accepted anything. Empty titles, broken dates, strings where numbers belonged. The database or Prisma sometimes caught issues; sometimes bad data slipped through and broke the UI later.

Adding Zod schemas shared between client and server felt tedious until I saw how many bugs disappeared. Validation is not bureaucracy—it is UX that fails fast with clear messages.

## Hiding errors from users and myself

When something failed, I logged to the console and showed a generic alert—or nothing at all. Debugging in production became guesswork.

I learned to return structured errors from server actions and API routes and to map them to form fields or toasts users can understand. Logging on the server stays, but the UI has to communicate failure too.

## One giant client page

I put "use client" on large pages because hooks felt convenient. Bundle size grew, data fetching moved to useEffect, and loading spinners appeared everywhere.

The portfolio and later projects use server pages with small client islands. That mistake alone is worth avoiding early in App Router work.

## Schema changes without a migration habit

I tweaked models manually in dev and forgot to migrate consistently. Deployments and local databases diverged. I lost time fixing drift that a disciplined migrate workflow would have prevented.

Now migrations are part of the definition of done for any schema change.

## Skipping basic security thinking

I assumed "nobody will hit this route." Unprotected API handlers and missing ownership checks are fine until they are not. Auth is not only login UI—it is verifying the user on every mutation.

I am not a security expert, but I ask on every write: who is allowed to do this, and does the server enforce it?

## Perfection before deployment

I delayed deploys because the app did not feel ready. Ready never came. The first deploy taught me more than another week of local polish—environment variables, build errors, database connectivity in production.

Shipping early is not shipping junk. It is exposing real constraints sooner.

## What improved on the next projects

DevMeet and DevLink used smaller milestones, shared validation, server-first pages, and earlier deploys. This portfolio uses the same habits: typed content, thin routes, real posts and case studies over time.

## If you are on your first full-stack app

You will make your own list. The point is not shame—it is to convert mistakes into defaults for the next repo: one vertical slice, validate everything, show errors, protect writes, deploy before you feel ready.

Those defaults are how my second and third projects shipped faster and broke less.`,
  },
  {
    title: "Why I'm Learning Frontend Seriously",
    slug: "why-frontend-seriously",
    description:
      "The mindset shift from tutorial hopping to building real interfaces and documenting the journey.",
    category: "Personal Thoughts",
    date: "2026-01-12",
    readingTime: "7 min read",
    content: `Frontend engineering sits at the intersection of logic, design, and user experience. That combination is what pulled me in—and what made me treat it as a serious craft instead of a box to check on the way to "full-stack."

## From tutorials to projects

For a while I measured progress by courses completed. I collected certificates and repo templates but hesitated on original ideas. Tutorials are useful—they remove setup friction and teach patterns—but they are not the finish line.

The shift happened when I started optimizing for shipped projects: a portfolio, DevMeet, DevLink, experiments that break in real ways. Painful bugs taught more than watching someone else fix them on video.

## Why the UI layer matters

It is easy to dismiss frontend as "just styling" when you are excited about databases and APIs. But the interface is what people actually use. Performance, accessibility, form feedback, and responsive layout directly affect whether software feels trustworthy.

I care about backend correctness and I care about whether a screen reader can navigate my form, whether tap targets work on a phone, and whether loading states feel honest. That is engineering, not decoration.

## Writing as a thinking tool

This blog exists because writing forces clarity. When I explain data fetching or project structure in prose, gaps in my understanding show up quickly. Posts are notes to future-me and signals to others about how I reason.

Public learning felt scary at first—what if I am wrong? Everyone is wrong sometimes. Documenting the version of understanding I have today is still valuable, especially when I update my view later.

## Design taste develops slowly

I will not claim to be a designer. I am learning spacing, type scale, contrast, and when to shut up visually. Studying sites I admire and reusing primitives (cards, containers, consistent headings) gets me most of the way without custom art direction on every project.

Serious frontend work includes caring how things look and feel, not only whether they compile.

## Community and consistency

Seeing other developers share builds, mistakes, and roadmaps normalized the messy middle. I contribute in small ways: shipping, writing, improving this site in public weeks.

Consistency beats intensity. An hour most days on a real repo outlasts a weekend binge followed by silence.

## How this portfolio fits

This site is the outward face of that shift: projects with context, posts with substance, an about page that is more than a headshot. It is not a checklist of technologies—it is evidence of how I work and what I am becoming.

## If you are deciding whether to go deep on frontend

You do not need to abandon backend interests. You need to give the UI layer the same respect: real projects, real users, real constraints. Tutorials open the door; what you build after walking through is what counts.

That is why I am learning frontend seriously—and why I expect still to be learning years from now.`,
  },
];
