import { h, Host, Prop, Component, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'my-button',
  scoped: true,
  styleUrl: 'button.scss',
})
export class Button implements ComponentInterface {
  @Prop() as: string = 'button';

  @Prop() type?: 'submit' | 'reset' | 'button';

  render() {
    const { as: Component, type = 'button' } = this;

    return (
      <Host>
        <Component type={type} class="button">
          <slot name="before" />
          <my-text size="medium" font="base">
            <slot />
          </my-text>
        </Component>
      </Host>
    );
  }
}
