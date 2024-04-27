export class LibraryDto {
    constructor(name, workingHours, address) {
        this.name = name;
        this.workingHours = workingHours;
        this.address = address
    }
}

export class LibraryGetDto {
    constructor(id, name, workingHours, address) {
        this.id = id;
        this.name = name;
        this.workingHours = workingHours;
        this.address = address
    }
}