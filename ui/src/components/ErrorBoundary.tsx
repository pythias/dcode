import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  override render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div style={{ padding: 20, color: "#f85149", fontFamily: "monospace" }}>
          <h2>Something went wrong</h2>
          <pre style={{ fontSize: 12, overflow: "auto" }}>
            {this.state.error?.message}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
