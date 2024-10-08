import React from 'react'

interface IInputLogin {
  label: string;
  value: string;
  type?: string;

  onChange: (newValue: string) => void;
  onPressEnter?: () => void;
}

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLogin>((props, ref) => {
  //React.FC<IInputLogin>((props)
  return (
    <label>
      <span>{props.label}</span>
      <input
        ref = {ref}
        value={props.value}
        type = {props.type}
        onChange={e => props.onChange(e.target.value)}
        onKeyDown={e => e.key === 'Enter'
          ? props.onPressEnter && props.onPressEnter()
          : undefined}
      />
    </label>
  );
});