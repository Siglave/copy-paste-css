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
    }
]