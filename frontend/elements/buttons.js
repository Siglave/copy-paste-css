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
                `
            }
        ],
    },
    {
        company: "Tailwindcss",
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
                    padding: 0 10px;
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
    }
]