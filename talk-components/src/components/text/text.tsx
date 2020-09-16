import { Component, Prop, h } from '@stencil/core';
@Component({
  tag: 'my-text',
  styleUrl: 'text.scss',
  scoped: true,
})
export class MyText {
  @Prop() as: string = 'span';

  @Prop() size?: 'small' | 'medium' | 'large';

  @Prop() font?: 'base' | 'title';

  render() {
    const { as: Component, size, font = {} } = this;

    return (
      <Component
        class={{
          text: true,
          [`-size-${size}`]: size,
          [`-family-${font}`]: font,
        }}
      >
        <slot />
      </Component>
    );
  }
}
