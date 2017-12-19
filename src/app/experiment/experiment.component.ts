import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent implements OnInit {
    public employee:{id:number , name:string,address:string };
    public myContent : IMyEntity[];
    test='test';
    persons:Person[];
    constructor()
    {
      
      //this.employee.id=1;
      //this.employee.name="Pradeep";
      a=23;
      var contentOrderBy = [
        { id: 0, name: 'CId', key: 'contentId' },
        { id: 1, name: 'Modified By', key: 'modifiedBy' },
        { id: 2, name: 'Modified Date', key: 'modified' },
        { id: 3, name: 'Status', key: 'contentStatusId' },
    ];
     this.myContent = contentOrderBy;
  
      this.persons = [
      new Person(),
      new Person({}),
      new Person({name:"John"}),
      new Person({address:"Earth"}),    
      new Person({age:20, address:"Earth", name:"John"}),
    ];
    }
  

  ngOnInit() {
  }

}

interface IMyEntity {
  id: number;
  name: string;
  key: string;    
}


class Person {
  public name: string = "default"
  public address: string = "default"
  public age: number = 0;

  public constructor(init?:Partial<Person>) {
      Object.assign(this, init);
  }
}


class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};

let a=10;

let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}

