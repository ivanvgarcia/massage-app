import React, { Component } from 'react';
import Error from './Error';

interface ErrorState {
  hasError: boolean;
}

class ErrorBoundary extends Component<{}, ErrorState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any): { hasError: boolean } {
    // Update state so the next render will show the fallback UI.
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any): void {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  resetApp = (): void => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Error resetApp={this.resetApp} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
