import { Component, h, State, ComponentInterface, EventEmitter, Event } from '@stencil/core';
@Component({
  tag: 'my-newsletter',
  styleUrl: 'newsletter.scss',
  shadow: true,
})
export class MyNewsletter implements ComponentInterface {
  @State() isClosed = false;

  @State() name;
  @State() email;

  @Event({ eventName: 'submitEvent' }) submit?: EventEmitter;

  onSubmit = () => {
    this.submit.emit({
      name: this.name,
      email: this.email
    });
    this.isClosed = !this.isClosed;
  };

  render() {
    const { isClosed } = this;

    return (
      <div class="wrapper">
        <div
          class={{
            'mail': true,
            '-closed': isClosed,
          }}
        >
          <div class="cover"></div>
          <div class="letter">
            <my-text as="h3" size="large" font="title">
              Se inscreva para não perder nenhuma novidade
            </my-text>
            <my-input onChangeEvent={e => (this.name = e.detail)} label="Como devo te chamar"></my-input>
            <my-input onChangeEvent={e => (this.email = e.detail)} label="Qual seu email"></my-input>

            <my-button onClick={this.onSubmit}>
              <span slot="before">✉️</span>
              Inscrever-se
            </my-button>
          </div>
        </div>
      </div>
    );
  }
}
