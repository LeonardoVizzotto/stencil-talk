/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyButton {
        "as": string;
        "type"?: 'submit' | 'reset' | 'button';
    }
    interface MyInput {
        "label": string;
        "type": 'tel' | 'text' | 'date' | 'number' | 'search' | 'password';
        "value"?: string;
    }
    interface MyNewsletter {
    }
    interface MyText {
        "as": string;
        "font"?: 'base' | 'title';
        "size"?: 'small' | 'medium' | 'large';
    }
}
declare global {
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    interface HTMLMyInputElement extends Components.MyInput, HTMLStencilElement {
    }
    var HTMLMyInputElement: {
        prototype: HTMLMyInputElement;
        new (): HTMLMyInputElement;
    };
    interface HTMLMyNewsletterElement extends Components.MyNewsletter, HTMLStencilElement {
    }
    var HTMLMyNewsletterElement: {
        prototype: HTMLMyNewsletterElement;
        new (): HTMLMyNewsletterElement;
    };
    interface HTMLMyTextElement extends Components.MyText, HTMLStencilElement {
    }
    var HTMLMyTextElement: {
        prototype: HTMLMyTextElement;
        new (): HTMLMyTextElement;
    };
    interface HTMLElementTagNameMap {
        "my-button": HTMLMyButtonElement;
        "my-input": HTMLMyInputElement;
        "my-newsletter": HTMLMyNewsletterElement;
        "my-text": HTMLMyTextElement;
    }
}
declare namespace LocalJSX {
    interface MyButton {
        "as"?: string;
        "type"?: 'submit' | 'reset' | 'button';
    }
    interface MyInput {
        "label"?: string;
        "onChangeEvent"?: (event: CustomEvent<any>) => void;
        "type"?: 'tel' | 'text' | 'date' | 'number' | 'search' | 'password';
        "value"?: string;
    }
    interface MyNewsletter {
        "onSubmitEvent"?: (event: CustomEvent<any>) => void;
    }
    interface MyText {
        "as"?: string;
        "font"?: 'base' | 'title';
        "size"?: 'small' | 'medium' | 'large';
    }
    interface IntrinsicElements {
        "my-button": MyButton;
        "my-input": MyInput;
        "my-newsletter": MyNewsletter;
        "my-text": MyText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-input": LocalJSX.MyInput & JSXBase.HTMLAttributes<HTMLMyInputElement>;
            "my-newsletter": LocalJSX.MyNewsletter & JSXBase.HTMLAttributes<HTMLMyNewsletterElement>;
            "my-text": LocalJSX.MyText & JSXBase.HTMLAttributes<HTMLMyTextElement>;
        }
    }
}
