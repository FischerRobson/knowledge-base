## DOM Manipulation

#### append
Appends Node elements and strings.

#### appendChild
Appends Node elements.

#### innerText
Display the text like its on the screen, if there some hide text, it will not be in innerText.

#### textContent
Display the text exactly like its on code (with identation).

#### innerHTML
Can understand HTML tags passed as strings like:

```html
div.innterHTML = '<p>Hello</p>'
```

So it create the element P with 'hello' inside;

#### Remove()
Remove the element from DOM.

#### getAttribute()
Get the value from attribute passed as arg.
Generaly, i can acess the attribute direct from Node.

#### setAttribute()
Set the attribute in first arg with the value in second arg.
Like getAttribute, can be accessed directly.

#### removeAttribute()
Remove the attribute passed as arg from the element.

#### dataset
Get the object with all data attributes from the element.
Works like a JS object to create, set and get attributes.

#### classList
Contains all classes of the element.

* add(): adds a new class list of the element
* remove(): remove the class from list

#### style
You can change or get directly the attributes of stlye from this object.
