import { Component, ComponentInterface, h, Host, Prop, Event, EventEmitter } from '@stencil/core';
let count = 0;

@Component({
  tag: 'my-input',
  scoped: true,
  styleUrl: 'input.scss',
})
export class Input implements ComponentInterface {
  private id = `my-input-${++count}`;
  @Prop() type: 'tel' | 'text' | 'date' | 'number' | 'search' | 'password' = 'text';
  @Prop() value?: string;
  @Prop() label: string;

  @Event({ eventName: 'changeEvent' }) change?: EventEmitter;

  private handleInput(e: Event): void {
    this.change && this.change.emit(e);
  }

  render() {
    const { type, value, label } = this;

    return (
      <Host>
        <my-text size="small" font="base" id={`${this.id}-label`} as={'label'}>
          {label}
        </my-text>
        <input
          id={this.id}
          name={name}
          type={type}
          value={value}
          onInput={e => this.handleInput(e)}
          class={{
            'input': true,
            '-filled': !!value,
          }}
          autoComplete="off"
          aria-labelledby={`${this.id}-label`}
          aria-errormessage={`${this.id}-error`} // TODO
        />
      </Host>
    );
  }
}
