import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = ({
  variant, size, fullWidth, disabled, className, onClick, children,
}) => {
  const buttonClasses = classNames('text-sm px-4 py-2 rounded-md focus:outline-none focus:shadow-outline transition-all duration-200', {
    'border border-gray-600 text-gray-600 hover:bg-gray-100': variant === 'outlined',
    'bg-gray-800 hover:bg-gray-700 text-gray-50': variant === 'contained',
    'text-gray-600 hover:bg-gray-100': variant === 'text',
    'text-xs px-3 py-2': size === 'small',
    'text-sm px-4 py-2': size === 'medium',
    'text-lg px-6 py-3': size === 'large',
    'w-full': fullWidth,
    'opacity-50 cursor-not-allowed': disabled,
  }, className)

  const handleButtonClick = (event) => {
    if (!disabled) {
      const button = event.currentTarget
      const rect = button.getBoundingClientRect()
      const ripple = document.createElement('span')
      const diameter = Math.max(rect.width, rect.height)
      const radius = diameter / 2

      ripple.style.width = ripple.style.height = `${diameter}px`
      ripple.style.left = `${event.clientX - rect.left - radius}px`
      ripple.style.top = `${event.clientY - rect.top - radius}px`
      ripple.classList.add('absolute', 'bg-gray-200', 'rounded-full')
      ripple.animate([
        { transform: 'scale(0)', opacity: 0.5 }, { transform: 'scale(1)', opacity: 0 }], { duration: 500, easing: 'ease-out' })

      button.appendChild(ripple)

      setTimeout(() => {
        button.removeChild(ripple)
      }, 500)

      onClick(event)
    }
  }

  return (<button
    className={buttonClasses}
    disabled={disabled}
    onClick={handleButtonClick}
  >
    {children}
  </button>)
}

Button.propTypes = {
  variant: PropTypes.oneOf(['outlined', 'contained', 'text']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  variant: 'contained', size: 'medium', fullWidth: false, disabled: false, className: '', onClick: () => { },
}

export default Button
