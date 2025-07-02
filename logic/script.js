const date = new Date();
const startOfMonth = `2025-${String(3).padStart(2, '0')}-01T00:00:00Z`;
const endOfMonth = new Date(2025, 3, 0, 23, 59, 59);
console.log(new Date(startOfMonth) > new Date(endOfMonth));
