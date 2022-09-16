# typescript-crash-course
## What is TypeScript?
* Language developed by Microsoft in 2012 - Free and Open source
* Provides static typing support to JavaScript. It has IDE Support: code completion and debugging
* Add Support for object-oriented programming - classes, objects, inheritance, interfaces etc
* TypeScript is a superset of JavaScript and ECMAScript
* Strongly-typed language with compile time checking and IDE support
* The Angular framework is internally developed using typescript
* Docs, online blogs and tutorials use TypeScript for coding examples
* For complete reference - www.typescriptlang.org

## Setting up Development Tools
Tool | Purpose
-----|-------
node | For running JavaScript code from command-line
npm | Node Package Manage - Download new node packages and feature. Similar to maven
tsc | TypeScript compiler

## TypeScript - Terminology
* First TypeScript Application - [Example](01-hellowworld/myhelloworld.ts)

* Defining Variables:
    * **Syntax** - let \<variableName\>: \<type\> = \<initial value\>;

Type | Description | Example
-----|------------|--------
boolean| true/false values | [Example](02-variables/variable-types.ts)
number | supports integer and floating point | [Example](02-variables/variable-types.ts)
string | text data. enclosed in single or double quotes | [Example](02-variables/variable-types.ts)
any | Supports "any" datatype assignment | [Example](02-variables/variable-types.ts)
others | See details at www.typescriptlang.org

* Loop and Arrays - [Example](03-loops-and-arrays)

* Access Modifiers

Modifier | Definition
---------|-----------
public | Property is accessible to all classes (default modifier)
protected | Property is only accessible in current and sub classes
private | Property is only accessible in current class

* Classes
    * Class Definition - [Example](04-classes/01-class-definition/customer.ts)
    * Access Modifiers - [Example](04-classes/02-access-modifiers/customer.ts)
    * Parameter Properties - [Example](04-classes/04-parameter-properties/customer.ts)

* tsconfig
    * Configuration file for TypeScript - [Example](04-classes/03-tsconfig/customer.ts)

* Module import and export
    * import - import {\<ClassName\>} from "\<Absolute Path of the file whereclass is defined\>" - [Example](04-classes/05-modules/driver.ts)
    * export - just add export before class name - [Example](04-classes/05-modules/customer.ts)

* Inheritance - [Example](05-inheritance)
    * Define common properties and methods in the superclass
    * Subclasses can extend superclasses and add properties and methods
    * Support for abstract classes and overriding
    * Support only single inheritance
    * However we can implement multiple interfaces

* Abstract Class - [Example](06-abstract-classes)
    * An abstract class represents a general concept - for example: Shape, Vehicle, Computer etc...
    * We can't create an instance of an abstract class
    * Abstract class can also have abstract method(s)
    * Abstract method must be implemented by concrete subclasses

* Interfaces - [Example](07-interfaces)
    * Define an interface with a method contract
    * Classes implement the interface accordingly
    * A class can implement multiple inheritances

* Compiling and Executing the TypeScript
    * **tsc \<fileName.ts\>** - to compile the specific file or type tsc to compile all the typescript files in directory.
    * **node \<fileName.js\>** - to run the java script file







 
