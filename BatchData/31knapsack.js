function fractionalKnapsack(items, capacity) {
    items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

    let totalValue = 0;
    for (let item of items) {
        if (capacity === 0) break;
        let takeWeight = Math.min(item.weight, capacity);
        totalValue += takeWeight * (item.value / item.weight);
        console.log("totalValue",totalValue);
        
        capacity -= takeWeight;
        console.log("capacity ",capacity);
    }
    return totalValue;
}
let items = [
    { value: 60, weight: 10 },
    { value: 10, weight: 200 },
    { value: 100, weight: 20 },
    { value: 120, weight: 30 }
];
let capacity = 50;
console.log(fractionalKnapsack(items, capacity)); 