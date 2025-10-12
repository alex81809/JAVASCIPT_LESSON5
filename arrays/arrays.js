var fruits = ["Mango", "Apple", "Kiwi", "Banana", "Orange"]
var foods = ["Rice", "Bread", "Eggs"]

document.getElementById("result").innerHTML = fruits

fruits.pop()
document.getElementById("result1").innerHTML = fruits

fruits.push("Pineapple")
document.getElementById("result2").innerHTML = fruits

fruits.shift()
document.getElementById("result3").innerHTML = fruits

fruits.unshift("Lemon")
document.getElementById("result4").innerHTML = fruits

fruits.splice(2, 2, "Coconut", "Dragon Fruit")
document.getElementById("result5").innerHTML = fruits

var merged = fruits.concat(foods)
document.getElementById("result6").innerHTML = merged
