1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:
(i) getElementById select only one id and return single element or null and syntax will like document.getElementById('idName');

(ii) getElementsByClassName select multiple element with class name and return HTML collection and syntax will like document.getElementsByClassName('className');

(iii) querySelector select only first matching element and have to use css selector like (. for class, # for id etc.) and return only single element or null.

(iv) querySelectorAll select all matching elements and return NodeList and syntax will like document.querySelectorAll('.class, #id, tagName') etc.

2. How do you create and insert a new element into the DOM?
Ans:
Step-1: Create a new element by using document.createElement('elementName');
Step-2: Add content to the created element like:
        elementName.textContent = "your text write here.";
        And/OR
        elementName.className = 'className className';
        And/OR
        elementName.id = 'IdName';
        And/OR
        elementName.setAttribute('data-type', 'info');