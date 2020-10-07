import React from 'react';
import s from './ErrorBoundary.module.css';
import Button from '@material-ui/core/Button';

class ErrorBoundary extends React.Component {
  state = {
    hasErrored: false,
  };

  static getDerivedStateFromError(error) {
    //precess the error
    return { hasErrored: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className={s.errorBoundaryContainer}>
          <div className={s.errorBoundaryImage} />
          <h2>A Dog Ate this Page</h2>
          <p className={s.errorBoundaryText}>
            Your dog is cute but honestly a menace. Where are my shoes? Where is my graduation
            certificate? Where is the chocolate cake I baked for my Aunt’s birthday? And why did you
            take your dog to the vet on that same Thursday?!
          </p>
          <Button
            color={'secondary'}
            onClick={() => (window.location.href = 'mailto:kawory05@gmail.com')}
          >
            Contact me
          </Button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
