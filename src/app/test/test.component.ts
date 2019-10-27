import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = 'Anurag';
  public siteUrl = window.location.href;
  public myId = 'testId';
  public isDisabled = 'true';
  public successClass = 'text-success';
  public hasError = 'false';
  public isSpecial = 'true';
  public highlightColor = 'orange';
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  };

  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic'
  };

  public msg = '';
  public eventMsg = '';


  // two way binding
  public two = '';
  public displaySwitch = false;


  // ngswitch test
  public ngSwitchTest = 'black';
  public colors = ['red', 'black', 'blue', 'yellow'];


  // component interaction
  @Input() public parentData;
  // comp interaction using alis
  // tslint:disable-next-line:no-input-rename
  @Input('parentData') public incoming;
  // from child to parent comp
  @Output() public childEvent = new EventEmitter();

  // pipe test
  public pipTest = 'I am Anurag Gundappa';
  public date = new Date();

  // Using a service
  public employee = [];
  public post: [];

  constructor(private empService: EmployeeService) { }

  // This is component lifecycle hook, it gets called once the component has been initialised
  // this hook is useful for fetching service data
  // Used for static data example with employee array
  // ngOnInit() {
  //   this.employee = this._testService.getEmplyoees();
  // }

  // 3rd step to subscribe
  // 4th step to assign data to local variable
  ngOnInit() {
    this.empService.getEmployeesOverHttp().subscribe(data => this.employee = data);
  }

  greetUser() {
    return 'Hello ' + this.name;
  }
  onClick(event) {
    console.log('I am leraning angular');
    this.msg = 'I am learning Angular';
    this.eventMsg = event.type;
  }
  logMsg(value) {
    console.log(value);
  }

  fireEvent(event) {
    this.childEvent.emit('This is emitted from child');
  }
}
