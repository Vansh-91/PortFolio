// components/ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Canvas Error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-white text-center mt-10 text-lg">
          ⚠️ WebGL rendering failed. Your device or browser may not support 3D graphics.
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
