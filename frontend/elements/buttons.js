// Stripe, Spotify, Material Design, Bootstrap

/* 
    https://primer.style/css/components/buttons
    https://polaris.shopify.com/components/actions/button#navigation
    https://www.carbondesignsystem.com/components/button/usage/
    https://ux.mailchimp.com/patterns/buttons
    https://developer.salesforce.com/docs/component-library/bundle/lightning:button/example
    https://style.helpscout.com/visual-elements/
    https://designsystemsrepo.com/design-systems/
*/

export const BUTTONS = [
    {
        company: "Bootstrap",
        designSystemUrl: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
        elements: [
            {
                css: `
                    cursor: pointer;
                    outline: 0;
                    color: #fff;
                    background-color: #0d6efd;
                    border-color: #0d6efd;
                    display: inline-block;
                    font-weight: 400;
                    line-height: 1.5;
                    text-align: center;
                    border: 1px solid transparent;
                    padding: 6px 12px;
                    font-size: 16px;
                    border-radius: .25rem;
                    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                    :hover {
                        color: #fff;
                        background-color: #0b5ed7;
                        border-color: #0a58ca;
                    }
                `
            },
            {
                css: `
                    cursor: pointer;
                    outline: 0;
                    display: inline-block;
                    font-weight: 400;
                    line-height: 1.5;
                    text-align: center;
                    background-color: transparent;
                    border: 1px solid transparent;
                    padding: 6px 12px;
                    font-size: 1rem;
                    border-radius: .25rem;
                    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                    color: #0d6efd;
                    border-color: #0d6efd;
                    :hover {
                        color: #fff;
                        background-color: #0d6efd;
                        border-color: #0d6efd;
                    }
                `
            }
        ]
    },
    {
        company: "Stripe",
        elements: [
            {
                css: `
                    border: 0;
                    outline: 0;
                    cursor: pointer;
                    color: white;
                    background-color: rgb(84, 105, 212);
                    box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(84 105 212) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px;
                    border-radius: 4px;
                    font-size: 14px;
                    font-weight: 500;
                    padding: 4px 8px;
                    display: inline-block;
                    min-height: 28px;
                    transition: background-color .24s,box-shadow .24s;
                    :hover {
                        box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(84 105 212) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 3px 9px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px;
                    }
                `
            },
            {
                css: `
                    border: 0;
                    outline: 0;
                    cursor: pointer;
                    color: rgb(60, 66, 87);
                    background-color: rgb(255, 255, 255);
                    box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px;
                    border-radius: 4px;
                    font-size: 14px;
                    font-weight: 500;
                    padding: 4px 8px;
                    display: inline-block;
                    min-height: 28px;
                    transition: background-color .24s,box-shadow .24s;
                    :hover {
                        box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 3px 9px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px;
                    }
                `
            }
        ],
    },
    {
        company: "Airbnb",
        elements: [
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    font-size: 16px;
                    line-height: 20px;
                    font-weight: 600;
                    border-radius: 8px;
                    padding: 14px 24px;
                    border: none;
                    transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
                    background: linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%);
                    color: #fff;
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    font-size: 16px;
                    line-height: 20px;
                    font-weight: 600;
                    border-radius: 8px;
                    padding: 13px 23px;
                    border: 1px solid #222222;
                    transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
                    background: #fff;
                    color: #222222;
                    :hover {
                        border-color: #000000;
                        background: #f7f7f7;
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
                    display: inline-block;
                    outline: 0;
                    border: none;
                    cursor: pointer;
                    font-weight: 600;
                    border-radius: 4px;
                    font-size: 13px;
                    height: 30px;
                    background-color: #9147ff;
                    color: white;
                    padding: 0 20px;
                    :hover {
                        background-color: #772ce8;
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: 0;
                    border: none;
                    cursor: pointer;
                    font-weight: 600;
                    border-radius: 4px;
                    font-size: 13px;
                    height: 30px;
                    background-color: #9147ff;
                    color: white;
                    padding: 0 10px;
                    :hover {
                        background-color: #772ce8;
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: 0;
                    border: none;
                    cursor: pointer;
                    font-weight: 600;
                    border-radius: 4px;
                    font-size: 13px;
                    height: 30px;
                    background-color: #0000000d;
                    color: #0e0e10;
                    padding: 0 20px;
                    :hover {
                        background-color: #0000001a;
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: 0;
                    border: none;
                    cursor: pointer;
                    font-weight: 600;
                    border-radius: 4px;
                    font-size: 13px;
                    height: 30px;
                    background-color: #0000000d;
                    color: #0e0e10;
                    padding: 0 10px;
                    :hover {
                        background-color: #0000001a;
                    }
                `
            },

        ]
    },
    {
        company: "GitHub",
        designSystemUrl: "https://primer.style/css/getting-started",
        elements: [
            {
                css: `
                    display: inline-block;
                    outline: 0;
                    cursor: pointer;
                    padding: 5px 16px;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 20px;
                    vertical-align: middle;
                    border: 1px solid;
                    border-radius: 6px;
                    color: #ffffff;
                    background-color: #2ea44f;
                    border-color: #1b1f2326;
                    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
                    transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
                    transition-property: color, background-color, border-color;
                    :hover {
                        background-color: #2c974b;
                        border-color: #1b1f2326;
                        transition-duration: 0.1s;
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: 0;
                    cursor: pointer;
                    padding: 5px 16px;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 20px;
                    vertical-align: middle;
                    border: 1px solid;
                    border-radius: 6px;
                    color: #24292e;
                    background-color: #fafbfc;
                    border-color: #1b1f2326;
                    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
                    transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
                    transition-property: color, background-color, border-color;
                    :hover {
                        background-color: #f3f4f6;
                        border-color: #1b1f2326;
                        transition-duration: 0.1s;
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: 0;
                    cursor: pointer;
                    padding: 5px 16px;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 20px;
                    vertical-align: middle;
                    border: 1px solid;
                    border-radius: 6px;
                    color: #0366d6;
                    background-color: #fafbfc;
                    border-color: #1b1f2326;
                    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
                    transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
                    transition-property: color, background-color, border-color;
                    :hover {
                        color: #ffffff;
                        background-color: #0366d6;
                        border-color: #1b1f2326;
                        box-shadow: rgba(27, 31, 35, 0.1) 0px 1px 0px 0px, rgba(255, 255, 255, 0.03) 0px 1px 0px 0px inset;
                        transition-duration: 0.1s;
                    }
                `
            }
        ]
    },
    {
        company: "Shopify",
        designSystemUrl: "https://polaris.shopify.com/components/get-started#navigation",
        elements: [
            {
                css: `
                    display: inline-block;
                    outline: 0;
                    cursor: pointer;
                    text-align: center;
                    border: 0;
                    padding: 7px 16px;
                    min-height: 36px;
                    min-width: 36px;
                    color: #ffffff;
                    background: #008060;
                    border-radius: 4px;
                    font-weight: 500;
                    font-size: 14px;
                    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.2) 0px -1px 0px 0px inset;
                    :hover {
                        background: #006e52;
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: 0;
                    cursor: pointer;
                    text-align: center;
                    border: 1px solid #babfc3;
                    padding: 7px 16px;
                    min-height: 36px;
                    min-width: 36px;
                    color: #202223;
                    background: #ffffff;
                    border-radius: 4px;
                    font-weight: 500;
                    font-size: 14px;
                    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px 0px;
                    :hover {
                        background: #f6f6f7;
                        outline: 1px solid transparent;
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: 0;
                    cursor: pointer;
                    text-align: center;
                    border: 1px solid #babfc3;
                    padding: 11px 24px;
                    min-height: 44px;
                    min-width: 44px;
                    color: #202223;
                    background: #ffffff;
                    border-radius: 4px;
                    font-weight: 500;
                    font-size: 14px;
                    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px 0px;
                    :hover {
                        background: #f6f6f7;
                        outline: 1px solid transparent;
                    }
                `
            },
        ]
    },
    {
        company: "Mailchimp",
        designSystemUrl: "https://ux.mailchimp.com/patterns/buttons",
        elements: [
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    font-weight: 500;
                    border: 1px solid transparent;
                    border-radius: 2px;
                    height: 36px;
                    line-height: 34px;
                    font-size: 14px;
                    color: #ffffff;
                    background-color: #007c89;
                    transition: background-color 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s;
                    padding: 0 18px;
                    :hover {
                        color: #ffffff;
                        background-color: #006570;
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    font-weight: 500;
                    border: 1px solid transparent;
                    border-radius: 2px;
                    height: 36px;
                    line-height: 34px;
                    font-size: 14px;
                    color: #241c15;
                    background-color: #efeeea;
                    transition: background-color 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s;
                    padding: 0 18px;
                    :hover {
                        color: #241c15;
                        background-color: #d9d7cd;
                    }
                `
            },

        ]
    },
    {
        company: "Carbon ( IBM )",
        designSystemUrl: "https://www.carbondesignsystem.com/",
        elements: [
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    border: 1px solid transparent;
                    text-align: left;
                    vertical-align: top;
                    padding: calc(.875rem - 3px) 63px calc(.875rem - 3px) 15px;
                    background-color: rgb(15, 98, 254);
                    font-size: 14px;
                    letter-spacing: 0.16px;
                    min-height: 48px;
                    line-height: 1.29;
                    color: #fff;
                    font-weight: 400;
                    transition: background 70ms cubic-bezier(0,0,.38,.9),box-shadow 70ms cubic-bezier(0,0,.38,.9),border-color 70ms cubic-bezier(0,0,.38,.9),outline 70ms cubic-bezier(0,0,.38,.9);
                    :hover {
                        background-color: #0353e9;
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    border: 1px solid transparent;
                    text-align: left;
                    vertical-align: top;
                    padding: calc(.375rem - 3px) 60px calc(.375rem - 3px) 12px;
                    background-color: rgb(15, 98, 254);
                    font-size: 14px;
                    letter-spacing: 0.16px;
                    min-height: 32px;
                    line-height: 1.29;
                    color: #fff;
                    font-weight: 400;
                    transition: background 70ms cubic-bezier(0,0,.38,.9),box-shadow 70ms cubic-bezier(0,0,.38,.9),border-color 70ms cubic-bezier(0,0,.38,.9),outline 70ms cubic-bezier(0,0,.38,.9);
                    :hover {
                        background-color: #0353e9;
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    border: 1px solid #0f62fe;
                    text-align: left;
                    vertical-align: top;
                    padding: calc(.875rem - 3px) 63px calc(.875rem - 3px) 15px;
                    background-color: #00000000;
                    font-size: 14px;
                    letter-spacing: 0.16px;
                    min-height: 48px;
                    line-height: 1.29;
                    color: #0f62fe;
                    font-weight: 400;
                    transition: background 70ms cubic-bezier(0,0,.38,.9),box-shadow 70ms cubic-bezier(0,0,.38,.9),border-color 70ms cubic-bezier(0,0,.38,.9),outline 70ms cubic-bezier(0,0,.38,.9);
                    :hover {
                        background-color: #0353e9;
                        color: #fff;
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    border: 1px solid #0f62fe;
                    text-align: left;
                    vertical-align: top;
                    padding: calc(.375rem - 3px) 60px calc(.375rem - 3px) 12px;
                    background-color: #00000000;
                    font-size: 14px;
                    letter-spacing: 0.16px;
                    min-height: 32px;
                    line-height: 1.29;
                    color: #0f62fe;
                    font-weight: 400;
                    transition: background 70ms cubic-bezier(0,0,.38,.9),box-shadow 70ms cubic-bezier(0,0,.38,.9),border-color 70ms cubic-bezier(0,0,.38,.9),outline 70ms cubic-bezier(0,0,.38,.9);
                    :hover {
                        background-color: #0353e9;
                        color: #fff;
                    }
                `
            }
        ]
    },
    {
        company: "Salesforce",
        designSystemUrl: "https://developer.salesforce.com/docs/component-library/overview/components",
        elements: [
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    padding: 0 16px;
                    background-color: #0070d2;
                    border-radius: 0.25rem;
                    border: 1px solid #0070d2;
                    color: #fff;
                    font-size: 13px;
                    line-height: 30px;
                    font-weight: 400;
                    text-align: center;
                    :hover {
                        background-color: #005fb2;  
                        border-color: #005fb2;
                    } 
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    padding: 0 16px;
                    background-color: #fff;
                    border-radius: 0.25rem;
                    border: 1px solid #0070d2;
                    color: #0070d2;
                    font-size: 13px;
                    line-height: 30px;
                    font-weight: 400;
                    text-align: center;
                    :hover {
                        background-color: #f4f6f9; 
                    } 
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    padding: 0 16px;
                    background-color: #fff;
                    border-radius: 0.25rem;
                    border: 1px solid #dddbda;
                    color: #0070d2;
                    font-size: 13px;
                    line-height: 30px;
                    font-weight: 400;
                    text-align: center;
                    :hover {
                        background-color: #f4f6f9; 
                    } 
                `
            },

        ]
    },
    {
        company: "Atlassian",
        designSystemUrl: "https://atlassian.design/",
        elements: [
            {
                css: `
                    display: inline-block;
                    outline: none;
                    border-width: 0px;
                    border-radius: 3px;
                    box-sizing: border-box;
                    font-size: inherit;
                    font-weight: 500;
                    max-width: 100%;
                    text-align: center;
                    text-decoration: none;
                    transition: background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
                    background: rgb(0, 82, 204);
                    cursor: pointer;
                    height: 32px;
                    line-height: 32px;
                    padding: 0px 12px;
                    vertical-align: middle;
                    width: auto;
                    font-size: 14px;
                    color: rgb(255, 255, 255);
                    :hover {
                        background: rgb(0, 101, 255);
                        text-decoration: inherit;
                        transition-duration: 0s, 0.15s;
                        color: rgb(255, 255, 255);
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: none;
                    border-width: 0px;
                    border-radius: 3px;
                    box-sizing: border-box;
                    font-size: inherit;
                    font-weight: 500;
                    max-width: 100%;
                    text-align: center;
                    text-decoration: none;
                    transition: background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
                    background: rgb(0, 82, 204);
                    cursor: pointer;
                    height: 24px;
                    line-height: 24px;
                    padding: 0px 12px;
                    vertical-align: middle;
                    width: auto;
                    font-size: 14px;
                    color: rgb(255, 255, 255);
                    :hover {
                        background: rgb(0, 101, 255);
                        text-decoration: inherit;
                        transition-duration: 0s, 0.15s;
                        color: rgb(255, 255, 255);
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: none;
                    border-width: 0px;
                    border-radius: 3px;
                    box-sizing: border-box;
                    font-size: inherit;
                    font-weight: 500;
                    max-width: 100%;
                    text-align: center;
                    text-decoration: none;
                    transition: background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
                    background: #091e420a;
                    cursor: pointer;
                    height: 32px;
                    line-height: 32px;
                    padding: 0px 12px;
                    vertical-align: middle;
                    width: auto;
                    font-size: 14px;
                    color: #42526e;
                    :hover {
                        background: #091e4214;
                        text-decoration: inherit;
                        transition-duration: 0s, 0.15s;
                        color: #42526e;
                    }
                `
            },
        ]
    },
    {
        company: "Flexport",
        designSystemUrl: "https://www.flexport.com/design",
        elements: [
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    font-size: 14px;
                    padding: 0 12px;
                    line-height: 20px;
                    height: 30px;
                    max-height: 30px;
                    background: #566AE5;
                    font-weight: 700;
                    border: 0;
                    border-radius: 0;
                    color: #FFFFFF;
                    transition-timing-function: ease-in-out;
                    transition-property: box-shadow;
                    transition-duration: 150ms;
                    :hover {
                        box-shadow: 0 2px 2px rgb(39 44 52 / 12%);
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    font-size: 14px;
                    padding: 0 12px;
                    line-height: 20px;
                    height: 30px;
                    max-height: 30px;
                    background: #fff;
                    font-weight: 700;
                    border: 2px solid #DAE3F3;
                    border-radius: 0;
                    color: #272C34;
                    transition-timing-function: ease-in-out;
                    transition-property: box-shadow;
                    transition-duration: 150ms;
                    :hover {
                        box-shadow: 0 2px 2px rgb(39 44 52 / 12%);
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    font-size: 14px;
                    padding: 0 12px;
                    line-height: 20px;
                    height: 30px;
                    max-height: 30px;
                    background: none;
                    font-weight: 700;
                    border: 0;
                    border-radius: 0;
                    color: #D92736;
                    transition-timing-function: ease-in-out;
                    transition-property: background;
                    transition-duration: 150ms;
                    box-shadow: none;
                    :hover {
                        background: #F7F9FD;
                    }
                `
            },
        ]
    },
    {
        company: "Biteable",
        designSystemUrl: "https://biteable.github.io/biteable-ui",
        elements: [
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    font-weight: 600;
                    border-radius: 3px;
                    padding: 12px 24px;
                    border: 0;
                    color: #000021;
                    background: #1de9b6;
                    line-height: 1.15;
                    font-size: 16px;
                    :hover {
                        transition: all .1s ease;
                        box-shadow: 0 0 0 0 #fff, 0 0 0 3px #1de9b6;
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    font-weight: 600;
                    border-radius: 3px;
                    padding: 12px 24px;
                    border: 0;
                    color: #fff;
                    background: #000a47;
                    line-height: 1.15;
                    font-size: 16px;
                    :hover {
                        transition: all .1s ease;
                        box-shadow: 0 0 0 0 #fff, 0 0 0 3px #1de9b6;
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    font-weight: 600;
                    border-radius: 3px;
                    padding: 12px 24px;
                    border: 0;
                    color: #3a4149;
                    background: #e7ebee;
                    line-height: 1.15;
                    font-size: 16px;
                    :hover {
                        transition: all .1s ease;
                        box-shadow: 0 0 0 0 #fff, 0 0 0 3px #1de9b6;
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    font-weight: 600;
                    border-radius: 3px;
                    padding: 12px 24px;
                    border: 0;
                    color: #fff;
                    background: #ff5000;
                    line-height: 1.15;
                    font-size: 16px;
                    :hover {
                        transition: all .1s ease;
                        box-shadow: 0 0 0 0 #fff, 0 0 0 3px #1de9b6;
                    }
                `
            },
        ]
    },
    {
        company: "Material Design",
        designSystemUrl: "https://material.io/",
        elements: [
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    font-weight: 500;
                    border-radius: 3px;
                    padding: 0 16px;
                    border-radius: 4px;
                    color: #fff;
                    background: #6200ee;
                    line-height: 1.15;
                    font-size: 14px;
                    height: 36px;
                    word-spacing: 0px;
                    letter-spacing: .0892857143em;
                    text-decoration: none;
                    text-transform: uppercase;
                    min-width: 64px;
                    border: none;
                    text-align: center;
                    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
                    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
                    :hover {
                        background: rgb(98, 0, 238);
                        box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    font-weight: 500;
                    border-radius: 3px;
                    padding: 0 15px;
                    border-radius: 4px;
                    color: #6200ee;
                    background: transparent;
                    line-height: 1.15;
                    font-size: 14px;
                    height: 36px;
                    word-spacing: 0px;
                    letter-spacing: .0892857143em;
                    text-decoration: none;
                    text-transform: uppercase;
                    min-width: 64px;
                    border: 1px solid #6200ee;
                    text-align: center;
                    transition: background 280ms cubic-bezier(0.4, 0, 0.2, 1);
                    :hover {
                       background: #f4f4f4;
                    }
                `
            },
        ]
    },
    {
        company: "Spotify",
        elements: [
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 1;
                    border-radius: 500px;
                    transition-property: background-color,border-color,color,box-shadow,filter;
                    transition-duration: .3s;
                    border: 1px solid transparent;
                    letter-spacing: 2px;
                    min-width: 160px;
                    text-transform: uppercase;
                    white-space: normal;
                    font-weight: 700;
                    text-align: center;
                    padding: 17px 48px;
                    color: #fff;
                    background-color: #1ED760;
                    height: 48px;
                    :hover{
                        transform: scale(1.04);
                        background-color: #21e065;
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 1;
                    border-radius: 500px;
                    transition-property: background-color,border-color,color,box-shadow,filter;
                    transition-duration: .3s;
                    border: 1px solid transparent;
                    letter-spacing: 2px;
                    min-width: 160px;
                    text-transform: uppercase;
                    white-space: normal;
                    font-weight: 700;
                    text-align: center;
                    padding: 16px 14px 18px;
                    color: #fff;
                    background-color: #15883e;
                    height: 48px;
                    :hover{
                        background-color: #1db954;
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 1;
                    border-radius: 500px;
                    transition-property: background-color,border-color,color,box-shadow,filter;
                    transition-duration: .3s;
                    border: 1px solid transparent;
                    letter-spacing: 2px;
                    min-width: 160px;
                    text-transform: uppercase;
                    white-space: normal;
                    font-weight: 700;
                    text-align: center;
                    padding: 16px 14px 18px;
                    color: #616467;
                    box-shadow: inset 0 0 0 2px #616467;
                    background-color: transparent;
                    height: 48px;
                    :hover{
                        color: #fff;
                        background-color: #616467;
                    }
                `
            },
        ]
    },
    {
        company: "Discord",
        elements: [
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    border-radius: 3px;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 16px;
                    padding: 2px 16px;
                    height: 38px;
                    min-width: 96px;
                    min-height: 38px;
                    border: none;
                    color: #fff;
                    background-color: rgb(88, 101, 242);
                    transition: background-color .17s ease,color .17s ease;
                    :hover {
                        background-color: rgb(71, 82, 196);
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    border-radius: 3px;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 16px;
                    padding: 2px 16px;
                    height: 32px;
                    min-width: 60px;
                    min-height: 32px;
                    border: none;
                    color: #fff;
                    background-color: rgb(88, 101, 242);
                    transition: background-color .17s ease,color .17s ease;
                    :hover {
                        background-color: rgb(71, 82, 196);
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    border-radius: 3px;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 16px;
                    padding: 2px 16px;
                    height: 32px;
                    min-width: 60px;
                    min-height: 32px;
                    border: none;
                    color: #fff;
                    background-color: #4f545c;
                    transition: background-color .17s ease,color .17s ease;
                `
            },

        ]
    },
    {
        company: "Tailwindcss",
        designSystemUrl: "https://tailwindcss.com/docs",
        elements: [
            {
                css: `
                    display: inline-block;
                    outline: 0;
                    border: 0;
                    cursor: pointer;
                    background-color: #4299e1;
                    border-radius: 4px;
                    padding: 8px 16px;
                    font-size: 16px;
                    font-weight: 700;
                    color: white;
                    line-height: 26px;
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: 0;
                    border: 0;
                    cursor: pointer;
                    background-color: #4299e1;
                    border-radius: 4px;
                    padding: 8px 16px;
                    font-size: 16px;
                    border-bottom: 4px solid #2b6cb0;
                    font-weight: 700;
                    color: white;
                    line-height: 26px;
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: 0;
                    border: 0;
                    cursor: pointer;
                    background-color: #4299e1;
                    border-radius: 50px;
                    padding: 8px 16px;
                    font-size: 16px;
                    font-weight: 700;
                    color: white;
                    line-height: 26px;
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: 0;
                    border: 0;
                    cursor: pointer;
                    background-color: white;
                    border-radius: 4px;
                    padding: 8px 16px;
                    font-size: 16px;
                    font-weight: 600;
                    color: rgb(43, 108, 176);
                    border: 1px solid rgb(66, 153, 225);
                    line-height: 26px;
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: 0;
                    border: 0;
                    cursor: pointer;
                    background-color: white;
                    border-radius: 4px;
                    padding: 8px 16px;
                    font-size: 16px;
                    font-weight: 600;
                    color: #2d3748;
                    border: 1px solid #cbd5e0;
                    line-height: 26px;
                    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);
                `
            },
        ],
    },
    {
        company: "Fluent UI ( Microsoft )",
        designSystemUrl: "https://developer.microsoft.com/en-us/fluentui#/controls/web/",
        elements: [
            {
                css: `
                    display: inline-block;
                    outline: 0;
                    text-align: center;
                    cursor: pointer;
                    padding: 0px 16px;
                    border-radius: 2px;
                    min-width: 80px;
                    height: 32px;
                    background-color: rgb(0, 120, 212);
                    color: rgb(255, 255, 255);
                    font-size: 14px;
                    font-weight: 400;
                    box-sizing: border-box;
                    border: 1px solid rgb(0, 120, 212);
                    :hover {
                        background-color: rgb(16, 110, 190);
                        border: 1px solid rgb(16, 110, 190);
                    }
                `
            },
            {
                css: `
                    display: inline-block;
                    outline: 0;
                    text-align: center;
                    cursor: pointer;
                    padding: 0px 16px;
                    border-radius: 2px;
                    min-width: 80px;
                    height: 32px;
                    background-color: rgb(255, 255, 255);
                    color: rgb(50, 49, 48);
                    font-size: 14px;
                    font-weight: 400;
                    box-sizing: border-box;
                    border: 1px solid rgb(138, 136, 134);
                    :hover {
                        background-color: rgb(243, 242, 241);
                        color: rgb(32, 31, 30);
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
                display: inline-block;
                outline: 0;
                cursor: pointer;
                border-radius: 8px;
                box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
                background: #FFD814;
                border: 1px solid #FCD200;
                font-size: 13px;
                height: 31px;
                padding: 0 11px;
                text-align: center;
                width: 100%;
                min-width: 200px;
                font-weight: 500;
                color: #0F1111;
                :hover{
                    background: #F7CA00;
                    border-color: #F2C200;
                    box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
                }
                `
            },
            {
                css: `
                display: inline-block;
                outline: 0;
                cursor: pointer;
                border-radius: 8px;
                box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
                background: #FFD814;
                border: 1px solid #FCD200;
                font-size: 11px;
                height: 22px;
                padding: 0 6px;
                text-align: center;
                font-weight: 500;
                color: #0F1111;
                :hover{
                    background: #F7CA00;
                    border-color: #F2C200;
                    box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
                }
                `
            },
            {
                css: `
                display: inline-block;
                outline: 0;
                cursor: pointer;
                border-radius: 8px;
                box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
                background: #FFF;
                border: 1px solid #D5D9D9;
                font-size: 13px;
                height: 31px;
                padding: 0 11px;
                text-align: center;
                font-weight: 400;
                color: #0F1111;
                :hover{
                    background-color: #F7FAFA;
                    border-color: #D5D9D9;
                }
                `
            },
        ]
    },
    {
        company: "Techcrunch",
        elements: [
            {
                css: `
                display: inline-block;
                outline: 0;
                text-align: center;
                cursor: pointer;
                padding: 17px 30px;
                border: 0;
                color: #fff;
                font-size: 17.5px;
                background: #00d301;
                background: -webkit-linear-gradient(-196deg,#00d301,#36c275 50%,#00a562);
                background: -webkit-linear-gradient(164deg,#00d301,#36c275 50%,#00a562);
                background: linear-gradient(286deg,#00d301,#36c275 50%,#00a562);
                line-height: 30px;
                font-weight: 800;
                transition: background,color .1s ease-in-out;
                `
            },
            {
                css: `
                display: inline-block;
                outline: 0;
                text-align: center;
                cursor: pointer;
                padding: 17px 30px;
                border: 0;
                color: #fff;
                font-size: 17.5px;
                border: 2px solid transparent;
                border-color: #000;
                color: #000;
                background: transparent;
                font-weight: 800;
                line-height: 30px;
                transition: background,color .1s ease-in-out;
                :hover {
                    background-color: #000;
                    color: #fff;
                }
                `
            },
        ]
    },
    {
        company: "Producthunt",
        elements: [
            {
                css: `
                display: inline-block;
                outline: 0;
                text-align: center;
                cursor: pointer;
                height: 34px;
                padding: 0 13px;
                color: #fff;
                vertical-align: top;
                border-radius: 3px;
                border: 1px solid transparent;
                transition: all .3s ease;
                background: #cc4d29;
                border-color: #cc4d29;
                font-weight: 600;
                text-transform: uppercase;
                line-height: 16px;
                font-size: 11px;
                :hover {
                    background: #e4461b;
                    border-color: #e4461b;
                }
                `
            },
            {
                css: `
                display: inline-block;
                outline: 0;
                text-align: center;
                cursor: pointer;
                height: 34px;
                padding: 0 13px;
                vertical-align: top;
                border-radius: 3px;
                border: 1px solid transparent;
                transition: all .3s ease;
                background: #fff;
                border-color: #e8e8e8;
                color: #000;
                font-weight: 600;
                text-transform: uppercase;
                line-height: 16px;
                font-size: 11px;
                :hover {
                    background: #e8e8e8;
                    color: #3d3d3d;
                }
                `
            },
            {
                css: `
                display: inline-block;
                outline: 0;
                text-align: center;
                cursor: pointer;
                background: #fff;
                border-color: #fff;
                color: #000;
                height: 42px;
                padding: 0 20px;
                border-radius: 3px;
                border: 1px solid transparent;
                transition: all .3s ease;
                text-align: center;
                min-width: 110px;
                line-height: 20px;
                text-transform: uppercase;
                font-weight: 600;
                font-size: 13px;
                :hover {
                    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 10%);
                }
                `
            },
        ]
    },
]