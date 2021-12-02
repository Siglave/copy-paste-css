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
    },
    {
        company: "Stripe",
        elements: [
            {
                css: `
                    border: 0;
                    outline: 0;
                    color: rgb(60, 66, 87);
                    background-color: rgb(255, 255, 255);
                    box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px;
                    border-radius: 4px;
                    font-size: 14px;
                    line-height: 20px;
                    font-weight: 400;
                    padding: 4px 8px;
                    min-height: 28px;
                    vertical-align: middle;
                    transition: background-color .24s,box-shadow .24s;
                    transition-property: background-color, box-shadow;
                    transition-duration: 0.24s, 0.24s;
                    transition-timing-function: ease, ease;
                    transition-delay: 0s, 0s;
                    :focus{
                        box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(58 151 212 / 36%) 0px 0px 0px 4px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px;
                    }
                `
            },
        ]
    },
    {
        company: "Carbon",
        elements: [
            {
                css: `
                    box-sizing: border-box;
                    font-family: inherit;
                    font-size: 14px;
                    vertical-align: baseline;
                    font-weight: 400;
                    line-height: 1.29;
                    letter-spacing: .16px;
                    border-radius: 0;
                    outline: 2px solid transparent;
                    outline-offset: -2px;
                    width: 100%;
                    height: 40px;
                    border: none;
                    border-bottom: 1px solid #8d8d8d;
                    background-color: #f4f4f4;
                    padding: 0 16px;
                    color: #161616;
                    transition: background-color 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9);  
                    :focus{
                        outline: 2px solid #0f62fe;
                        outline-offset: -2px;
                    }
                `
            },
        ]
    },
    {
        company: "Github",
        elements: [
            {
                css: `
                padding: 5px 12px;
                font-size: 14px;
                line-height: 20px;
                color: #24292e;
                vertical-align: middle;
                background-color: #ffffff;
                background-repeat: no-repeat;
                background-position: right 8px center;
                border: 1px solid #e1e4e8;
                border-radius: 6px;
                outline: none;
                box-shadow: rgba(225, 228, 232, 0.2) 0px 1px 0px 0px inset;
                :focus{
                    border-color: #0366d6;
                    outline: none;
                    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
                }
                `
            },
        ]
    },
    {
        company: "Mailchimp",
        elements: [
            {
                css: `
                    padding: 0 8px;
                    vertical-align: middle;
                    border-radius: 2px;
                    width: 100%;
                    min-height: 36px;
                    background-color: #ffffff;
                    border: 1px solid rgba(36,28,21,0.3);
                    transition: all 0.2s ease-in-out 0s;
                    font-size: 16px;
                    line-height: 18px;
                    font-weight: normal;
                    :focus{
                        outline: none;
                        border: 1px solid #007c89;
                        box-shadow: inset 0 0 0 1px #007c89;
                    }
                `
            },
        ]
    },
    {
        company: "Salesforce",
        elements: [
            {
                css: `
                    display: inline-block;
                    padding: 0 16px 0 12px;
                    width: 100%;
                    line-height: 30px;
                    height: 32px;
                    border: 1px solid #dddbda;
                    border-radius: 4px;
                    background-color: #fff;
                    color: rgb(8, 7, 7);
                    transition: border .1s linear,background-color .1s linear;
                    :focus{
                        border-color: #1b96ff;
                        color: var(--sds-c-input-text-color-focus);
                        box-shadow: rgb(1, 118, 211) 0px 0px 3px 0px;
                    }
                `
            },
        ]
    },
    {
        company: "Atlassian",
        elements: [
            {
                css: `
                    background-color: rgb(250, 251, 252);
                    border-color: rgb(223, 225, 230);
                    color: rgb(9, 30, 66);
                    cursor: text;
                    border-radius: 3px;
                    border-width: 2px;
                    border-style: solid;
                    box-sizing: border-box;
                    font-size: 14px;
                    transition: background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s;
                    line-height: 1.42857; 
                    padding: 8px 6px;
                    height: 36px;
                    :hover{
                        background-color: rgb(235, 236, 240);
                    }
                    :focus{
                        background-color: rgb(255, 255, 255);
                        border-color: rgb(76, 154, 255);
                    }
                `
            },
        ]
    },
    {
        company: "Flexport",
        elements: [
            {
                css: `
                    padding: 0 10px;
                    text-align: left;
                    transition-property: box-shadow, background;
                    transition-duration: 150ms;
                    transition-timing-function: ease-in-out;
                    background-color: #FFFFFF;
                    border-width: 2px;
                    border-style: solid;
                    border-color: #DAE3F3;
                    border-radius: 0px;
                    color: #272C34;
                    width: 100%;
                    cursor: text;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: 0px;
                    font-weight: 400;
                    font-style: normal;
                    height: 30px;
                    :hover{
                        box-shadow: 0px 2px 4px rgb(39 44 52 / 12%);
                    }
                    :focus{
                        transition-property: border-color, box-shadow, background;
                        border-color: #39414D;
                        outline: 0px;
                        box-shadow: 0 0 0 3px #c5d2e7;
                    }
                `
            },
        ]
    },
    {
        company: "Biteable",
        elements: [
            {
                css: `
                    box-shadow: inset #abacaf 0 0 0 2px;
                    border: 0;
                    background: rgba(0, 0, 0, 0);
                    appearance: none;
                    width: 100%;
                    position: relative;
                    border-radius: 3px;
                    padding: 9px 12px;
                    line-height: 1.4;
                    color: rgb(0, 0, 0);
                    font-size: 16px;
                    font-weight: 400;
                    height: 40px;
                    transition: all .2s ease;
                    :hover{
                        box-shadow: 0 0 0 0 #fff inset, #1de9b6 0 0 0 2px;
                    }
                    :focus{
                        background: #fff;
                        outline: 0;
                        box-shadow: 0 0 0 0 #fff inset, #1de9b6 0 0 0 3px;
                    }
                `
            },
        ]
    },
    {
        company: "Material",
        elements: [
            {
                css: `
                    color: rgba(0,0,0,.87);
                    border-bottom-color: rgba(0,0,0,.42);
                    font-size: 1rem;
                    font-weight: 400;
                    letter-spacing: .009375em;
                    text-decoration: inherit;
                    text-transform: inherit;
                    align-self: flex-end;
                    box-sizing: border-box;
                    width: 100%;
                    padding: 20px 16px 6px;
                    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
                    border: none;
                    border-bottom: 1px solid;
                    border-radius: 4px 4px 0 0;
                    background: rgb(245, 245, 245);
                    height: 56px;
                    :hover{
                        border-bottom-color: rgba(0,0,0,.87);
                        background: #ececec;
                    }
                    :focus{
                        border-color: #6200ee;
                    }
                `
            },
        ]
    },
    {
        company: "MongoDB",
        elements: [
            {
                css: `
                    width: 100%;
                    height: 36px;
                    border-radius: 4px;
                    padding-left: 12px;
                    font-size: 14px;
                    font-weight: normal;
                    border: 1px solid rgb(137, 151, 155);
                    transition: border-color 150ms ease-in-out 0s;
                    outline: none;
                    color: rgb(33, 49, 60);
                    background-color: rgb(255, 255, 255);
                    padding-right: 12px;
                    :hover{
                        box-shadow: rgb(231 238 236) 0px 0px 0px 3px;
                    }
                `
            },
        ]
    },
    {
        company: "RemoteOK",
        elements: [
            {
                css: `
                    padding: 7px;
                    border-radius: 6px;
                    font-size: 16px;
                    background: #fbfbfb;
                    border: 2px solid transparent;
                    height: 36px;
                    box-shadow: 0 0 0 1px #dddddd, 0 2px 4px 0 rgb(0 0 0 / 7%), 0 1px 1.5px 0 rgb(0 0 0 / 5%);
                    :focus{
                        border: 2px solid #000;
                        border-radius: 4px;
                    }
                `
            },
        ]
    },
    {
        company: "Rocketcrew.space",
        elements: [
            {
                css: `
                    width: 100%;
                    color: rgb(36, 35, 42);
                    font-size: 16px;
                    line-height: 20px;
                    min-height: 28px;
                    border-radius: 4px;
                    padding: 8px 16px;
                    border: 2px solid transparent;
                    box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 24%) 0px 1px 2px;
                    background: rgb(251, 251, 251);
                    transition: all 0.1s ease 0s;
                    :focus{
                        border: 2px solid rgb(124, 138, 255);
                    }
                `
            },
        ]
    },
    {
        company: "Amazon",
        elements: [
            {
                css: `
                    background-color: #fff;
                    height: 31px;
                    padding: 3px 7px;
                    line-height: normal;
                    border: 1px solid #a6a6a6;
                    border-top-color: #949494;
                    border-radius: 3px;
                    box-shadow: 0 1px 0 rgb(255 255 255 / 50%), 0 1px 0 rgb(0 0 0 / 7%) inset;
                    outline: 0;
                    color: #111;
                    font-size: 13px;
                    :focus{
                        border-color: #e77600;
                        box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
                    }
                `
            },
        ]
    },
    {
        company: "Algolia",
        elements: [
            {
                css: `
                    position: relative;
                    cursor: text;
                    font-size: 14px;
                    line-height: 20px;
                    padding: 0 16px;
                    height: 48px;
                    background-color: #fff;
                    border: 1px solid #d6d6e7;
                    border-radius: 3px;
                    color: rgb(35, 38, 59);
                    box-shadow: inset 0 1px 4px 0 rgb(119 122 175 / 30%);
                    overflow: hidden;
                    transition: all 100ms ease-in-out;
                    :focus {
                        border-color: #3c4fe0;
                        box-shadow: 0 1px 0 0 rgb(35 38 59 / 5%);
                    }
                `
            },
        ]
    },
    {
        company: "Linear (Dark Mode)",
        elements: [
            {
                css: `
                    padding: 6px 12px;
                    background: rgb(31, 32, 35);
                    border: 1px solid rgb(60, 63, 68);
                    border-radius: 4px;
                    font-size: 13px;
                    color: rgb(247, 248, 248);
                    height: 46px;
                    appearance: none;
                    transition: border 0.15s ease 0s;
                    :focus{
                        outline: none;
                        box-shadow: none;
                        border-color: rgb(100, 153, 255);
                    }
                `
            },
        ]
    },
    {
        company: "Figma",
        elements: [
            {
                css: `
                border: 3px solid #000;
                border-radius: 5px;
                height: 50px;
                line-height: normal;
                color: #282828;
                display: block;
                width: 100%;
                box-sizing: border-box;
                user-select: auto;
                font-size: 16px;
                padding: 0 6px;
                padding-left: 12px;
                :focus{
                    border: 3px solid #5551ff;
                }
                `
            },
        ]
    },
    {
        company: "DEV.to",
        elements: [
            {
                css: `
                border-radius: 5px;
                background: rgb(249, 250, 250);
                border: 1px solid rgb(181, 189, 196);
                font-size: 16px;
                height: 40px;
                line-height: 24px;
                padding: 7px 8px;
                color: rgb(8, 9, 10);
                box-shadow: none;
                :focus{
                    background-color: #fff;
                    border-color: #3b49df;
                    box-shadow: 1px 1px 0 #3b49df;
                }
                `
            },
        ]
    },
]