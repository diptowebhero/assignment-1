

# (১)What are some differences between interfaces and types in TypeScript?

TypeScript-এ `interface` এবং `type` structure describe করতে use হয়, কিন্তু তাদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।

## Interface কী এবং কখন ব্যবহার করবেন?

`interface` দিয়ে মূলত Object এর structure কেমন হবে তা নির্ধারণ করা হয়।

## Type Alias এর Multipurpose ব্যবহার

অন্যদিকে, `type` alias অনেক বেশি multipurpose এবং flexible। এটি শুধু অবজেক্ট নয়, বরং অনেক ধরনের টাইপ represent করতে পারে:

- **Union type** – একাধিক type এর মধ্যে যেকোনো একটি
- **Primitive type** – string, number, boolean, null, undefined
- **Tuple** – নির্দিষ্ট order এ fixed-length array
- **Function** – function signature define করা
- **Intersection** – একাধিক type একসাথে combine করা
- **Literal types** – specific value হিসেবে type

## কোনটি কখন ব্যবহার করবেন?

সহজ কথায়, **অবজেক্টের structure define করার জন্য `interface` ব্যবহার করুন, আর জটিল বা composite টাইপের জন্য `type` ব্যবহার করুন।** দুটোই অত্যন্ত powerful এবং TypeScript এর type safety নিশ্চিত করতে গুরুত্বপূর্ণ ভূমিকা পালন করে।





# (২) What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

আমরা যখন বড় প্রজেক্টে কাজ করি, তখন প্রায়ই কিছু related constant values বারবার ব্যবহার করতে হয়। যেমন user roles, order status, বা direction values। এই constant values গুলোকে সুন্দরভাবে organize এবং manage করার জন্য TypeScript-এ **enum** একটি দুর্দান্ত feature।

## Enum কী এবং কেন ব্যবহার করবেন?

Enum (Enumeration) হলো একটি special type যা আমাদেরকে **set of related constant values** একসাথে define করতে দেয়। এটি ব্যবহার করলে:

- কোড আরও **readable এবং maintainable** হয়
- IDE-তে **auto-completion** সুবিধা পাওয়া যায়
- **Compile-time type checking** নিশ্চিত হয়
- Magic numbers বা hard-coded strings এড়ানো যায়


## String Enum উদাহরণ

String enum-এ প্রতিটি member-কে একটি string value explicitly assign করতে হয়:

```typescript
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
  Guest = "GUEST"
}

// ব্যবহার
function checkPermission(role: UserRole) {
  switch (role) {
    case UserRole.Admin:
      return "Full access granted";
    case UserRole.Editor:
      return "Edit access granted";
    case UserRole.Viewer:
      return "Read-only access";
    default:
      return "Limited access";
  }
}

const userRole: UserRole = UserRole.Admin;
console.log(checkPermission(userRole)); // Output: Full access granted
console.log(UserRole.Editor); // Output: "EDITOR"
```


## কখন Enum ব্যবহার করবেন?

Enum ব্যবহার করুন যখন:
- একটি variable-এর **fixed set of values** থাকে
- Related constants একসাথে group করতে চান
- Type safety এবং auto-completion চান

Enum এর মাধ্যমে আপনার কোড আরও structured, type-safe এবং maintainable হয়ে ওঠে।





# (৩) Explain the difference between any, unknown, and never types in TypeScript

TypeScript এর type system এর মধ্যে `any`, `unknown`, এবং `never` তিনটি special type রয়েছে যা প্রায়ই কনফিউজিং হয়ে যায়। এগুলো আসলে type safety এর তিনটি ভিন্ন approach represent করে। আসুন একে একে দেখে নেওয়া যাক।

## any: Type Safety এর অভাব

`any` হলো TypeScript এর "escape hatch" – যখন আপনি কোনো type define করতে চান না বা করতে পারেন না। এটি ব্যবহার করলে:

- **সব ধরনের type checking বন্ধ হয়ে যায়**
- JavaScript এর মতো behave করে
- Runtime error এর সম্ভাবনা বেড়ে যায়

```typescript
let value: any = "hello";
value = 42;           // OK
value = { name: "Dip" }; // OK
value.nonExistentMethod(); // Runtime error, কিন্তু compile-time error নেই
```

### কখন any ব্যবহার করবেন?
- Legacy code migrate করার সময়
- Third-party library এর type definition না থাকলে
- যখন আপনি নিশ্চিত যে কী করছেন

## unknown: Type-Safe any

`unknown` হলো `any` এর type-safe alternative। এটি বলে যে "আমি জানি না এই value এর type কী, কিন্তু আমি এটাকে safely handle করতে চাই"।

```typescript
let value: unknown = "hello";

// এটি করা যাবে না
// value.toUpperCase(); // Error: Object is of type 'unknown'

if (typeof value === "string") {
  value.toUpperCase(); // OK – এখন TypeScript জানে এটি string
}
```

### unknown এর সুবিধা:
- **Type safety maintain করে**
- **Type guards** ব্যবহার করে safe access নিশ্চিত করে
- **Runtime error কমায়**

## never: যা কখনো ঘটে না

`never` type represent করে এমন values যা কখনো occur করে না। এটি ব্যবহার হয়:

- Functions যা কখনো return করে না (infinite loop বা always throws)
- Exhaustive type checking এর জন্য

```typescript
// Function যা কখনো return করে না
function throwError(message: string): never {
  throw new Error(message);
}

```

## তুলনা করে দেখে নেওয়া যাক:

- `any` | ❌ কোনো safety নেই
- `unknown` | ✅ Full safety
- `never` | ✅ Strict safety

## কোনটি কখন ব্যবহার করবেন?

- **`any`**: যখন আপনি intentionally type safety ignore করতে চান
- **`unknown`**: যখন value এর type আগে থেকে জানা নেই কিন্তু safely handle করতে চান
- **`never`**: যখন কোনো value এর occurrence impossible

TypeScript এর type system এর শক্তি বুঝতে এই তিনটি type এর proper ব্যবহার খুবই গুরুত্বপূর্ণ।





# (৪) What is the use of the keyof keyword in TypeScript? Provide an example.

TypeScript এর `keyof` operator একটি powerful feature যা আমাদেরকে type level এ object এর keys extract করতে দেয়। এটি advanced TypeScript patterns এর foundation এবং type-safe property access নিশ্চিত করে।

## keyof কী এবং কেন গুরুত্বপূর্ণ?

`keyof` operator একটি type এর সব property names এর union type তৈরি করে। এটি ব্যবহার করে আমরা:

- **Type-safe property access** নিশ্চিত করতে পারি
- **Dynamic property access** safely করতে পারি
- **Mapped types** তৈরি করতে পারি
- **Generic constraints** apply করতে পারি

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
}

type UserKeys = keyof User;
// "id" | "name" | "email" | "role"
```



## কখন keyof ব্যবহার করবেন?

- **Generic functions** তৈরি করার সময়
- **Type-safe property access** নিশ্চিত করতে
- **Mapped types** তৈরি করার সময়
- **API responses** বা **form handling** এর সময়

`keyof` operator TypeScript এর advanced features এর মধ্যে একটি। এটি শিখলে আপনার type manipulation skills অনেক উন্নত হবে এবং আরও robust এবং maintainable code লিখতে পারবেন।
