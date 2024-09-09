let dictionary = {
  egg: "round egg",
  bacon: "breakfast staple",
  cheese: "delicious cheese",
};

for (let key in dictionary) {
  console.log(dictionary[key]);
  console.log(`${key} = ${dictionary[key]}`);
};