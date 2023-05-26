import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const TextField = ({
  label, placeholder, value, onChange, fullWidth, disabled, helperText, startAdornment, endAdornment, className, ...rest
}) => {
  const textFieldClasses = cn('border rounded-md p-2', {
    'w-full': fullWidth, 'opacity-50 cursor-not-allowed': disabled,
  }, className)

  return (<div className="flex flex-col">
    {label && <label className="mb-1 text-gray-700">{label}</label>}
    <div className="relative">
      {startAdornment && (<span className="absolute inset-y-0 left-0 flex items-center pl-2">
            {startAdornment}
          </span>)}
      <input
        className={textFieldClasses}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...rest}
      />
      {endAdornment && (<span className="absolute inset-y-0 right-0 flex items-center pr-2">
            {endAdornment}
          </span>)}
    </div>
    {helperText && <p className="text-sm text-gray-500">{helperText}</p>}
  </div>)
}

TextField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  className: PropTypes.string,
}

TextField.defaultProps = {
  label: '',
  placeholder: '',
  value: '',
  onChange: () => { },
  fullWidth: false,
  disabled: false,
  helperText: '',
  startAdornment: null,
  endAdornment: null,
  className: '',
}

export default TextField
