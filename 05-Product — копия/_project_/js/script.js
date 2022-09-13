const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  // Change code below this line
  getPotions() {
    const { potions } = this;
    return [...potions];
  },
  addPotion(newPotion) {
    const { potions } = this;
    for (const element of potions) {
      const { name } = element;
      if (name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    potions.push(newPotion);
  },
   removePotion(potionName) {
      const { potions } = this;
      for (let i = 0; i < potions.length; i++) {
         const { name } = potions[i];
         if (name === potionName) {
            potions.splice(i, 1);
         }
      }
      return `Potion ${potionName} is not in inventory!`;
   },

   updatePotionName(oldName, newName) {
      const { potions } = this;
      for (const element of potions) {
         // let { name } = element;
         if (element.name === oldName) {
            element.name = newName;
            return;
         }
         
      }
   
      return `Potion ${oldName} is not in inventory!`;
    }

  // Change code above this line
};

atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")