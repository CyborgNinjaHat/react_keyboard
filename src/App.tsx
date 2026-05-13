import React from 'react';

interface State {
  lastPressedKey: string;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    lastPressedKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ lastPressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render(): React.ReactNode {
    const { lastPressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastPressedKey === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${lastPressedKey}]`}
        </p>
      </div>
    );
  }
}
