# Day 6 content migration map

This map was created before the Day 6 rewrite. It records where every meaningful section of the original single article moves in the eleven-part series.

| Original material | New home | How it is developed |
| --- | --- | --- |
| Introduction: Your API Cannot Trust Anyone | Parts 1 and 9 | Part 1 establishes the trust boundary; Part 9 proves why the official frontend cannot provide authority. |
| Malformed Create User requests | Parts 1, 4, 5, 7, 8, 9, and 11 | One recurring request reveals a new failure or protection at each layer. |
| TypeScript does not inspect runtime JSON | Parts 1, 5, and 8 | Introduced as a trust problem, explained through JavaScript runtime types, then solved with a Zod runtime schema. |
| Journey of Data Through an API | Parts 2 and 11 | Part 2 separates architectural responsibilities; Part 11 follows the complete request through them. |
| Application boundary | Parts 2, 8, and 11 | Explained conceptually, implemented with a schema/helper, then integrated end to end. |
| Validation does not belong only in controllers | Parts 2, 6, 8, 10, and 11 | Boundary contract, service rules, repository duties, and database invariants remain distinct. |
| Extract accepted input / allowlisting | Parts 2 and 4 | Explicit command construction and unknown-field policy prevent mass assignment. |
| Transform external representations | Parts 5 and 7 | Strict parsing exposes coercion traps; transformation and normalization receive a dedicated lesson. |
| Three levels of validation | Part 3 | Syntactic, runtime type, and semantic validation are compared using one request. |
| Syntactic validation | Part 4 | Expanded into shape, required fields, strings, formats, arrays, nested objects, strict schemas, and useful errors. |
| Runtime type validation | Part 5 | Expanded into JSON types, null, NaN, finite/safe integers, arrays, objects, optional/nullable, and strict number/boolean parsing. |
| Semantic validation | Part 6 | Expanded into permissions, ownership, state, existence, uniqueness, inventory, and service-level rules. |
| Common transformations | Part 7 | Expanded into trimming, casing, whitespace, numbers, booleans, dates, enums, defaults, normalization, and destination-specific sanitization. |
| Production-style TypeScript and Zod implementation | Parts 8 and 11 | Part 8 teaches the boundary implementation; Part 11 assembles schema, controller, service, repository, and conflict mapping. |
| Validation failure response | Parts 4, 8, 10, and 11 | Field errors are designed first, emitted from Zod, categorized safely, then used in the complete flow. |
| Frontend vs backend validation | Part 9 | Expanded into UX, accessibility, bypasses, old clients, direct calls, and shared schemas without shared trust. |
| Request and collection size limits | Part 10 | Body, strings, arrays, files, nesting, and pagination are treated as resource boundaries. |
| Unknown-field handling | Parts 4, 8, 10, and 11 | Strict rejection is used for Create User, while explicit stripping is explained as a documented alternative. |
| Defaults only for missing values | Part 7 | `page` missing is distinguished from `page=banana`. |
| Validation versus injection defenses | Part 10 | SQL parameters, HTML encoding, shell argument APIs, file paths, and redirect allowlists are separated by destination. |
| Boundary testing | Part 10 | Expanded to missing/null/empty/wrong type/oversized/Unicode/boundary/concurrency cases. |
| Logging without secrets | Part 10 | Safe metrics, request IDs, error codes, and redaction are explained. |
| Validation as API compatibility | Part 10 | Stricter rules are treated as contract changes requiring measurement, coordination, and sometimes versioning. |
| Service uniqueness check and race | Parts 6 and 10 | Previewed as a business rule, then demonstrated as a concurrency race requiring a database unique constraint. |
| Repository and database integrity | Parts 2, 10, and 11 | Persistence responsibilities, constraints, transactions, and conflict translation are kept explicit. |
| Engineering questions and golden rules | Parts 10 and 11 | Production questions lead into a final senior-engineer checklist and complete mental model. |
| Final trust-boundary principle | Parts 1 and 11 | The opening rule returns as the series conclusion: every external value must earn trust. |

The legacy slug remains a published Day 6 overview. It is intentionally excluded from the numbered `day: 6` part navigation so Parts 1–11 remain the complete ordered lesson sequence.
