import { useEffect, useState, FC } from 'react';
import stylesButton from './button.module.scss';

interface IButton {
  handlerButtonClick?: ()=> void;
  typeStyle?: 'dark' | 'transparentWhite'  | 'transparentDark',
  disabled?: boolean;
  type?: 'button' | 'submit';
  modifiedStyle?: string;
  nameButton?: string;
  children?: React.ReactNode;
}

export const Button: FC<IButton> = ({
  handlerButtonClick,
  typeStyle = 'dark',
  disabled = false,
  type = 'button',
  modifiedStyle = '',
  nameButton = 'button',
  children,
}) => {
  const [style, setStyle] = useState('');

  useEffect(() => {
    switch (typeStyle) {
      case 'dark':
        setStyle(stylesButton.dark);
        break;
      case 'transparentWhite':
        setStyle(stylesButton.transparentWhite);
        break;
      case 'transparentDark':
        setStyle(stylesButton.transparentDark);
        break;
      default:
        break;
    }
  }, [typeStyle]);

  return (
    <button
      type={type}
      className={`${stylesButton.buttonMain} ${modifiedStyle} ${style} ${
        disabled ? stylesButton.disabled : ''
      }`}
      onClick={handlerButtonClick}
      disabled={disabled}
      name={nameButton}
    >
      {children}
    </button>
  );
};
