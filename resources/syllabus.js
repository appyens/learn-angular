/**
 1. Introduction

 2. Getting started
          - npm install -g @angular/cli

 3. Hello world - First run
          - ng serve

 4. Components
          - ng generate component (ng g c compName)

 5. Interpolation
          - {{value}}
          - global JS variables are not accessible in html
          - You need to write class attribute
          - Any class property which is of type string can be used in interpolation
          - Numbers can also be used in interpolation
          - Any method which return string can be used.

 6. Property Vs Value
          - Attribute cannot change once defined
          - Value do change
          - Attribute are defined by the html
          - Values are defined by the DOM
          - Attribute initializes DOM properties and they are done

 7. Property binding
          - [attribute]
          - we need to use square bracket to bind the property
          - We can also use interpolation but there are limitations to it.
          - Interpolation have certain limitations interpolation only works for string values
          - it cant be used with boolean

 8. Class binding
          - use [ngClass]
          - it takes JS object in which you need to write css class
          - use [class], [ngClass]  directives
          - regular class attributes becomes dummy in presence of class binding attribute
          - can use with css class
          - We can use ngClass directive to bind multiple classes
          - We can hard code the value of css class or can provide on condition

 9. Style binding
          - use [ngStyle]
          - it takes JS object in which you need to write css property
          - use [style.css-attribute]
          - You can also use component class property during binding
          - We can hard code the value of css class or can provide on condition

 10. Event binding
          - All of the above bindings are from components to template
          - But events are coming from templates and we need to listen it from components
          - Syntax is:
          - in parenthesis add the event and assign it to one of the property in component class
          - <button (click)="onClick"></button>
          - where onclick is the property from component class

  11. Template reference variable
          - These are the reference to the html elements which is later used by components class to modify them
          - syntax is:
          - #renferenceName

 12. Two way binding:
          - In this when view gets updated comp class attributes are get updated
          - And in reverse class binds data to the view. this is known as two way binding.
          - Angular provides [(ngModel)] directives for this purpose.
          - Remember the syntax, it is used for two way binding property and class binding at the same time.

 13. Directives:
          1. Structural directives
          - *ngIf [ngIf]
                - Used for adding or removing html elements
          2. Attribute directives
          - ngSwitch:
                - This is like switch statement
                 - *ngSwitch [ngSwitch]
                 - *ngSwitchCase
                 - *ngSwitchDefault
          - ngFor
                - It renders list of elements
                - *ngFor
                - some of the keywords are:
                     first as f
                     last as l
                     odd as o
                     even as e

 14. Component Interaction
          - This is two way process
          - For parent to child
                - Add property to parent comp class
                - Add this to child comp custom html tag in app comp
                - Receive the data with @Input() decorator in child comp class
                - render the data in child html with property binding
          - Child to parent
                The only way is by events
                Create EventEmitter() object with Output() decorator
                Create event handler method in child comp class in which call emit attribute of emitter object
                bind this method to event in child comp html
                Receive the data from child by using binding emitter object to html
                Add the parent comp class property to handle value coming from child
                bind this property to html for rendering

 15. Pipes
        - {{ value | pipe }}
        - This helps to transform data on html before rendering them.
        - There is builtin set of pipes
        - These are just like django template tags and filters
        - This only transform the data for the view and it does not do anything to class properties.

 16. Services
        - A class with a specific purpose
        - It is use for-
                - Share data
                - Implement application logic
                - External Interaction
        - By convention the file name should be .service.ts
        - To use services we need to use dependency injection

 17. Dependency Injection (DI)
        - 3 classes Tire, Engine, Car. Car is dependent on engine and tire,
        - but Car can easily broken with code change in Tire and Engine
        - DI as a design pattern
                - DI is a pattern in which a class receives its dependencies
                - from external sources rather than creating them itself
        - DI as a framework
                - Injector will complete all the dependencies for you
                - Define a EmpService class
                - Register with Injector by adding @Injectable decorator and register it on app module.ts in with providers
                - Declare as dependency in EmpList and EmpDetail in constructor with type of Service class in constructor
                - Access the service class data by Initialising it in ngOnInit method()

 18. Using a Service
                - Create service class with [ng generate service className]
                - Add @Injectable decorator to the class by importing it from @angular/core
                - Register the service in app.module.ts in providers metadata by importing it

 19. HTTP and Observables
                - Http interacts with service and webservice/ server database through http get
                - Http gets the response from web server
                - Observable
                      - This is a http response that arrives
                      - These are the sequence of item that arrive asynchronously over time
                      - We need to convert it to the format we can use
                - the service serve the this data to the components that subscribe to it
                - And after it it is up to components that how to use this data
                - Use:
                      1. HTTP Get request from EmployeeServie
                            - Import HttpClientModule in app module
                            - There no need to explicitly register this service in providers metadata
                            - Add a dependancy in Employee service in constructor with http variable of type HttpClient type
                            - Dont forget to import HttpClient from @angular/common/http
                            - write http get method in one of your service class method, get method takes url argument
                            - set a url of type string to a api
                      2. Receive the observable and cast it into an employee array
                            - create a employee interface for the data to be received
                            - Add this interface type to http get method for data casting
                            - Add type of Observable to your service class method passing interface to Observable
                            - Import Observable from RxJS
                      3. Subscribe to observable from Component Class in which data to be received
                            - in ngOnInit() call your custom method from service class which is now a Observable
                      4. Assign the employee array to a local variable
                            - call subscribe() method on that method
                            - In subscribe method assign received data to a local variable

 20. HTTP Error handling:
                -
 **/
