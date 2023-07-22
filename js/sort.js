const foodItems = [
  {
    name: "Apple",
    category: "Fruits",
    calories: 52
  },
  {
    name: "Banana",
    category: "Fruits",
    calories: 96
  },
  {
    name: "Carrot",
    category: "Vegetables",
    calories: 41
  },
  {
    name: "Chicken Breast",
    category: "Meat",
    calories: 165
  },
  {
    name: "Broccoli",
    category: "Vegetables",
    calories: 55
  },
  {
    name: "Salmon",
    category: "Fish",
    calories: 206
  }
];

// Sort food items by category alphabetically
const sortedByCategory = foodItems.sort((a, b) => a.category.localeCompare(b.category));

// Sort food items by calories in ascending order
const sortedByCalories = foodItems.sort((a, b) => a.calories - b.calories);

const foodContainer = document.getElementById("food-container");

function renderFoodItems(items) {
  foodContainer.innerHTML = "";
  items.forEach((item) => {
    const foodItemDiv = document.createElement("div");
    foodItemDiv.classList.add("food-item");
    foodItemDiv.innerHTML = `
      <h3>${item.name}</h3>
      <p>Category: ${item.category}</p>
      <p>Calories: ${item.calories}</p>
    `;
    foodContainer.appendChild(foodItemDiv);
  });
}

renderFoodItems(sortedByCategory);

// Example: Sort by calories when a button is clicked
const sortByCaloriesBtn = document.createElement("button");
sortByCaloriesBtn.textContent = "Sort by Calories";
sortByCaloriesBtn.addEventListener("click", () => {
  renderFoodItems(sortedByCalories);
});

foodContainer.insertAdjacentElement("beforebegin", sortByCaloriesBtn);

