import { SuperClass } from './superclass.js';

// Define the subclass, extending the superclass
export class SubClass extends SuperClass {
    constructor(id, email, password) {
        // Call the superclass constructor with super()
        super(id, email, password);
    }

}