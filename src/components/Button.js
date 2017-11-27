import React from 'react';

function Button({
  children,
  primary = false,
  magic = false,
  href
}) {
  let className = 'btn'

  if (primary) {
    className += ' btn--primary'
  }

  if (magic) {
    className += ' btn--rainbow'
  }

// href = '/competion'
// href == null => false
// href != null => true
// !href => false
// !!href => true

  const renderLink = !!href // Is href being passed?
  const Component = renderLink ? 'a' : 'button'

  return (
    <Component href={ href } className={ className }>
      { children }
    </Component>
  )

  // if (renderLink) {
  //   return (
  //     <a href={ href } className={ className }>
  //       { children }
  //     </a>
  //   )
  // }
  // else {
  //   return (
  //     <button className={ className }>
  //       { children }
  //     </button>
  //   )
  // }
}

export default Button
// module.exports = Button