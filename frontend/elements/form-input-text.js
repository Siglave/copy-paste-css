export const FORM_INPUT_TEXT = [
    {
        company: "Bootstrap",
        designSystemUrl: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
        elements: [
            {
                css: `
                padding: 6px 12px;
                font-size: 16px;
                font-weight: 400;
                line-height: 1.5;
                color: #212529;
                background-color: #fff;
                background-clip: padding-box;
                border: 1px solid #ced4da;
                appearance: none;
                border-radius: 4px;
                transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                :focus{
                    color: #212529;
                    background-color: #fff;
                    border-color: #86b7fe;
                    outline: 0;
                    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
                }
                `
            },
        ]
    },
    {
        company: "Twitch",
        elements: [
            {
                css: `
                font-size: 14px;
                border-radius: 6px;
                line-height: 1.5;
                padding: 5px 10px;
                transition: box-shadow 100ms ease-in, border 100ms ease-in, background-color 100ms ease-in;
                border: 2px solid #dee1e2;
                color: rgb(14, 14, 16);
                background: #dee1e2;
                display: block;
                height: 36px;
                :hover {
                    border-color: #ccc;
                }
                :focus{
                    border-color: #9147ff;
                    background: #fff;
                }
                `
            },
            {
                css: `
                font-size: 13px;
                border-radius: 4px;
                line-height: 1.5;
                padding: 5px 10px;
                transition: box-shadow 100ms ease-in, border 100ms ease-in, background-color 100ms ease-in;
                border: 2px solid #dee1e2;
                color: rgb(14, 14, 16);
                background: #dee1e2;
                display: block;
                height: 30px;
                :hover {
                    border-color: #ccc;
                }
                :focus{
                    border-color: #9147ff;
                    background: #fff;
                }
                `
            },
        ]
    }
]