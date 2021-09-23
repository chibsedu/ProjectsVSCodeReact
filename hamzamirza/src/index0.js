/**
 * In JavaScript, this Keyword refers to the Object,
 *  the method or class that it belongs to.
 */

 class House{
  
    constructor(doorColour){
      this.doorColour = doorColour;
    }
  
    displayDoorColour = () => {
      console.log(`Maison de couleur ${this.doorColour}`);
    }
  
  }
  
  /* const house1 = new House('Grise');
  console.log(house1.displayDoorColour());
   */
  
  class NewHouse extends House {
  
    changeDoorColour(newDoorColour){
      this.doorColour = newDoorColour;            // this refers to House Object.
      console.log(`Changed to ${newDoorColour}`); // Ici, this est inutile.
    }
  }
  
  const house2 = new NewHouse('Noire');
  
  console.log(house2.changeDoorColour('Vert'));