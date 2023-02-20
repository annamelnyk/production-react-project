import React, { Component, type ErrorInfo, type ReactNode, Suspense } from 'react';

import { classNames } from 'shared/lib/classNames';
import { PageError } from 'widgets/PageError/ui/PageError';

import css from './ErrorBoundary.module.scss';

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<
ErrorBoundaryProps,
ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  // eslint-disable-next-line n/handle-callback-err
  static getDerivedStateFromError() {
    // eslint-disable-next-line n/handle-callback-err
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className={classNames(css.ErrorBoundary)}>
          <Suspense fallback="">
            <PageError />
          </Suspense>
        </div>
      );
    }

    return children;
  }
}
