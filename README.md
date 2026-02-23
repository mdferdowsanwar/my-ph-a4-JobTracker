1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:
(i) getElementById select only one id and return single element or null and syntax will like document.getElementById('idName');

(ii) getElementsByClassName select multiple element with class name and return HTML collection and syntax will like document.getElementsByClassName('className');

(iii) querySelector select only first matching element and have to use css selector like (. for class, # for id etc.) and return only single element or null.

(iv) querySelectorAll select all matching elements and return NodeList and syntax will like document.querySelectorAll('.class, #id, tagName') etc.

2. How do you create and insert a new element into the DOM?
Ans:
step-1: Create a new element by using document.createElement('elementName');
step-2: Add content to the created element like:
        elementName.textContent = "your text write here.";
        And/OR
        elementName.className = 'className className';
        And/OR
        elementName.id = 'IdName';
        And/OR
        elementName.setAttribute('data-type', 'info');
step-3: Select the parent element by selector.
step-4: Inserting into the parent element by using parentElement.appendChild 
        (elementName); or parentElement.append(elementName);

3. What is Event Bubbling? And how does it work?
Ans: When you trigger and event like click or other the event first run that element then step by step moves to its parent element until document.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is a technique where you can add only one addEventListener to a parent element instead of using multiple addEventListener. Then the parent handle the event using event Bubbling.

How it works:
(i) Event bubble up child to parent
(ii) The parent listens to the event
(iii)Finally by sing event.target we find which element was clicked.

5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault():
Stop the default behavior of an element.
Example:
    html file:
        <a id="link" href="https://google.com">Google</a>
    JS file:
    document.getElementById("link").addEventListener('click', function(event) {
        event.preventDefault();
        alert("Link click prevented");
    });

stopPropagation():
Stop the event from bubbling up the DOM tree.
Example:
    html file:
    <div id="parent">
        <button id="child">Click</button>
    </div>
    JS File:
    document.getElementById("parent").addEventListener('click', function() {
        console.log("Parent Clicked");
    });
    document.getElementById("parent").addEventListener('click', function(event) {
        event.stopPropagation(); // It stop bubbling
        console.log("Child Clicked");
    });