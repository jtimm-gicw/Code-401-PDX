# Mock Interview - 4

## Inventory Order Fulfillment

**Topic:** Hash tables · Arrays · Counting frequencies

---

### Problem Domain

An online store keeps track of products available in its warehouse. Each product is listed in an **array**, and a product can appear more than once. **Each occurrence represents one unit** of that product.

When a customer places an order, the store needs to determine whether it has **enough of each product** to fill the order. If there are not enough items, the store must report **which products are missing and how many more units are needed**.

Your job is to use a **hash table** (a JavaScript object or `Map`) to count products and identify any shortages efficiently.

### Task

Write a function named `findMissingItems(inventory, order)` that:

- Takes **two arrays** as arguments: `inventory` (products in stock) and `order` (products requested).
- Uses a **hash table** to count how many units of each product are available.
- Checks the order against the available inventory, accounting for **repeated product names**.
- Returns an **object** where each key is a missing product and each value is the **number of additional units needed**.
- Returns an **empty object** (`{}`) if the entire order can be filled.
- Does **not change** either original array.

**Assume:** Product names are lowercase strings. Each appearance of a product in either array represents **one unit**. The order of keys in the returned object does not matter.

### Example

**Input:**

```js
const inventory = ['rice', 'noodles', 'rice', 'tea', 'tea'];
const order = ['rice', 'rice', 'rice', 'tea', 'soup'];

findMissingItems(inventory, order);
```

**Expected output:**

```js
{
  rice: 1,
  soup: 1
}
```

**Why?** The warehouse has **2 units of rice**, but the customer ordered **3**, so it needs **1 more**. The warehouse has **no soup**, so it needs **1 unit**. There is enough tea to fill that part of the order.

**Remember:** A hash table helps you **keep track of counts** without repeatedly searching the entire inventory. For the mock interview, be prepared to explain your approach, draw or write a sample count table, discuss edge cases (such as empty arrays or repeated products), and describe the **time and space complexity (Big-O)** of your solution.
