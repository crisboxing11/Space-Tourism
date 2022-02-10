import React from 'react';

const Link = ({className, href, children}) => {
  const onClick = (e) => {
    if (e.metaKey || e.metaKey) {
      return;
    };

    e.preventDefault();
    window.history.pushState({},"", href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }
}

export default Link;
