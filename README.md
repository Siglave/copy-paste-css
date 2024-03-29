# Copy Paste CSS

Open source code of https://copy-paste-css.com/ 

Copy Paste CSS aims to gather designs and css code of simple ui elements from different websites such as Buttons, Box-shadows, form inputs text and more for developers to reuse in their own projects or serve as inspiration.

Everyone is open to add a new element to the website that they found interesting, or to create an entire new category of elements.

![Site](https://imgur.com/6PUOmTB.png)

## How to Contribute

Everyone is welcome to collaborate to this project, but please take into consideration the following:

- New UI elements should come idealy from a know website
- Make sure the element you want to add is not already on the site
- Resources are written in javascript and plain css

## Adding an element

- Elements are listed in the /frontend/elements folder and every element type has it's own file

### Element format

Each resource matches a company and contain the following properties:
- `company:STRING` The company's name
- `designSystemUrl:STRING` A link to the company's design system ( optional, add an empty string if you don't find one )
- `elements:ARRAY` An array of objects with the css code of each UI element you want to add
- `css:String` CSS code of the element, to add an hover effect  put your code inside `:hover{}`


Object example

```javascript
// File: elements/box-shadows.js

{
    company: "GitHub",
    designSystemUrl: "https://primer.style/css/getting-started",
    elements: [
        {
            css: `box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px;`
        },
        {
            css: `box-shadow: rgba(149, 157, 165, 0.15) 0px 3px 6px 0px`
        },
        {
            css: `box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px 0px`
        },
        {
            css: `box-shadow: rgba(149, 157, 165, 0.3) 0px 12px 48px 0px`
        },
    ]
},
```

### Pull Request
To add a new element you need to create a pull request with the following infos:

- Company name
- Element type
- URL of the page where you found the element ( if possible )
- Screenshot from Copy Paste CSS of the element you created 

You can find a pull request example in the issues

### Thank you for contributing!
