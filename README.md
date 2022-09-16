# typescipt-crash-course
## What is Angular?
* Angular is a framework for building modern single-page application.
* **Official docs tutorials** - www.angular.io

### Traditional Application
* Each user action results in a full HTML page load.
```mermaid
sequenceDiagram
Browser->>Server: Full HTML Page Loads
Server-->>Browser: 
```
### Single-Page Applicaton
* A web application that is composed of a single page
* Based on user actions, the application page is updated
```mermaid
sequenceDiagram
Browser->>Server: REST API for data
Server-->>Browser: Partioanl Page updates (Client side only)
```
### Example of Single-Page Applications
* Maps
* Email Applications
* Citi-Bank Customer Service
* Microsoft Xbox portal
* Refer to - www.madewithangular.com

## Setting up Development Tools
Tool | Purpose
-----|-------
node | For running JavaScript code from command-line
npm | Node Package Manage - Download new node packages and feature. Similar to maven
tsc | TypeScript compiler

## What is TypeScript?
* Language developed by Microsoft in 2012 - Free and Open source
* Provides static typing support to JavaScript. It has IDE Support: code completion and debugging
* Add Support for object-oriented programming - classes, objects, inheritance, interfaces etc
* TypeScript is a superset of JavaScript and ECMAScript
* Strongly-typed language with compile time checking and IDE support
* The Angular framework is internally developed using typescript
* Docs, online blogs and tutorials use TypeScript for coding examples
* For complete reference - www.typescriptlang.org

## TypeScript - Fundamentals
* First TypeScript Application - [Example](fundamentals/myhelloworld.ts)
* Defining Variables:

Type | Description | Example
-----|------------|--------
boolean| true/false values | [Example]()
number | supports integer and floating point | [Example]()
string | text data. enclosed in single or double quotes | [Example]()
any | Supports "any" datatype assignment | [Example]()
others | See details at www.typescriptlang.org




 
