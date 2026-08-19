export
class Staff {
    private name: string;
    private salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    getDetails(): string {
        return `Name: ${this.name}, Salary: $${this.salary}`;
    }
}

class Manager extends Staff {
    department: string;

    constructor(name: string, salary: number, department: string) {
        super(name, salary);
        this.department = department;
    }

    override getDetails(): string {
        return `${super.getDetails()}, Department: ${this.department}`;
    }
}

const staff1 = new Staff("Santa", 50000);
console.log(staff1.getDetails());

const manager1 = new Manager("Bank", 80000, "IT Support");
console.log(manager1.getDetails());