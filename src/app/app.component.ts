import { Component } from '@angular/core';

import { OrderPipe } from './order-pipe/ngx-order.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  order: string = 'info.name';
  reverse: boolean = false;
  collection: any[] = [
    {
      id: 1,
      info: {
name: "The Harborview Goat",
logoUrl: "https://picsum.photos/250/250/?random",
isOpen: false
      }
    }, {
      id: 2,
      info: {
  name: "The Royal God",
logoUrl: "https://picsum.photos/250/250/?random",
isOpen: true
      }
    }, {
      id: 3,
      info: {
name: "The Autumn Oak",
logoUrl: "https://picsum.photos/250/250/?random",
isOpen: true
      }
    }, {
      id: 4,
      info: {
name: "The Moroccan Oak",
logoUrl: "https://picsum.photos/250/250/?random",
isOpen: false
      }
    }, 
    {
      id: 5,
      info: {
"name": "Bones",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": false
      }
    },
     {
      id: 6,
      info: {
"name": "The Mockingbird",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": false
      }
    },
     {
      id: 7,
      info: {
"name": "Enigma",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": true
      }
    },
     {
      id: 8,
      info: {
"name": "The Depot",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": true
      }
    },
     {
      id: 9,
      info: {
"name": "Blossoms",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": false
      }
    },
     {
      id: 10,
      info: {
"name": "The Island Palace",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": true
      }
    },
     {
      id: 11,
      info: {
"name": "The Winter Window",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": true
      }
    },
     {
      id: 12,
      info: {
"name": "The Old Road",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": true
      }
    },
     {
      id: 13,
      info: {
"name": "The Seaside Hook",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": false
      }
    },
     {
      id:14,
      info: {
"name": "The Noodle Eats",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": true
      }
    },
     {
      id: 15,
      info: {
"name": "Harvest",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": true
      }
    },
     {
      id: 16,
      info: {
"name": "Interlude",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": false
      }
    },
     {
      id: 17,
      info: {
"name": "Mirage",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": true
      }
    },
     {
      id: 18,
      info: {
"name": "Harlequin",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": true
      }
    },
     {
      id: 19,
      info: {
"name": "The Peacock",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": true
      }
    },
     {
      id: 20,
      info: {
"name": "The Sushi Panda",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": false
      }
    },
     {
      id: 21,
      info: {
"name": "The Cocoa Smith",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": false
      }
    },
     {
      id: 22,
      info: {
"name": "The Narrow Morning",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": false
      }
    },
    {
     id: 23,
     info: {
"name": "The Arctic Monument",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": true
     }
   },
   
     {
      id: 24,
      info: {
"name": "The Chili Cow",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": false
      }
    },
    
     {
      id: 25,
      info: {
"name": "The Hummingbird",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": true
      }
    },

    
     {
      id: 26,
      info: {
"name": "Queens",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": true
      }
    },
    
     {
      id: 27,
      info: {
"name": "Incognito",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": true
      }
    },
    
     {
      id: 28,
      info: {
"name": "Ivy",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": true
      }
    },
    
     {
      id: 29,
      info: {
"name": "Chapter",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": true
      }
    },
    
     {
      id: 30,
      info: {
"name": "The Arctic Pizzeria",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": true
      }
    },
    
     {
      id: 31,
      info: {
"name": "The Crystal Bay",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": false
      }
    },
    
     {
      id: 32,
      info: {
"name": "The Bamboo Balcony",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": false
      }
    },
    
     {
      id: 33,
      info: {
"name": "The Fresh Windmill",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": true
      }
    },
    
     {
      id: 34,
      info: {
"name": "The Imperial Bay",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": false
      }
    },
    
     {
      id: 35,
      info: {
"name": "Alpha",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": false
      }
    },
    
     {
      id: 36,
      info: {
"name": "Midnight",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": true
      }
    },

    {
      id: 37,
      info: {
"name": "Indigo",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": false
      }
    },
    
    {
      id: 38,
      info: {
"name": "Petals",
"logoUrl": "https://picsum.photos/250/250/?random",
"isOpen": true
      }
    },
    
  ];


  // new json

  /**
   * Example: Use Order pipe in the component
   *
   * @param {OrderPipe} orderPipe
   */
  constructor(private orderPipe: OrderPipe) {
    console.log(this.orderPipe.transform(this.collection, this.order));
  }
  
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
}
