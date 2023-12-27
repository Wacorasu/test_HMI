import { useState, useRef, useEffect, FC } from 'react';
import styledButtonDropdown from './button-dropdown.module.scss';
import { ReactComponent as IconArrow}  from '../../image/icons/icon-arrow-updown.svg';

interface IButtonDropdown {
  children?: React.ReactNode;
  accordingMode?: Boolean;
  dropdownList: { value: string; element: JSX.Element }[];
  modifiedStyleMain?: string;
  modifiedStyleButton?: string;
  modifiedStyleIcon?: string;
  modifiedStyleIconOpen?: string;
  modifiedStyleListContainer?: string;
  accordingStyle?: string;
  modifiedStyleText?: string;
  accordingContent?: JSX.Element;
}

export const ButtonDropdown: FC<IButtonDropdown> = ({
  children,
  modifiedStyleMain = '',
  modifiedStyleText = '',
  modifiedStyleButton = '',
  modifiedStyleIcon = '',
  modifiedStyleIconOpen = '',
  modifiedStyleListContainer = '',
  dropdownList,
  accordingMode = false,
  accordingStyle = '',
  accordingContent = '',
}): JSX.Element => {
  const container = useRef<HTMLDivElement>(null);
  const [dropdownState, setDropdownState] = useState({ open: false });

  const handleDropdownClick = () =>
    setDropdownState({ open: !dropdownState.open });

  const handleClickOutside = (e: MouseEvent) => {
    const targetNode = e.target as Node;
    if (container.current && !container.current.contains(targetNode)) {
      setDropdownState({ open: false });
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className={`${styledButtonDropdown.container} ${modifiedStyleMain}`}
      ref={container}
    >
      <button
        type='button'
        className={`${styledButtonDropdown.button} ${modifiedStyleButton} ${
          dropdownState.open ? styledButtonDropdown.buttonOpen : ''
        }`}
        onClick={handleDropdownClick}
      >
        <div className={styledButtonDropdown.buttonContentContainer}>
          <span className={`${styledButtonDropdown.text} ${modifiedStyleText}`}>
            {children}
          </span>
          <IconArrow
            className={`${styledButtonDropdown.icon} ${modifiedStyleIcon} ${
              dropdownState.open ? styledButtonDropdown.iconOpen : ''
            } ${dropdownState.open ? modifiedStyleIconOpen : ''}`}
          />
        </div>
      </button>
      {dropdownState.open && !accordingMode && (
        <fieldset
          className={`${styledButtonDropdown.dropdownListContainer} ${modifiedStyleListContainer}`}
        >
          {dropdownList?.length > 1 &&
            dropdownList.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${styledButtonDropdown.dropdownListItemContainer} `}
                >
                  <input type='checkbox' id={item.value} name={item.value} />
                  <label
                    className={styledButtonDropdown.dropdownListItem}
                    htmlFor={item.value}
                  >
                    {item.element}
                  </label>
                </div>
              );
            })}
        </fieldset>
      )}
      {dropdownState.open && accordingMode && (
        <div className={`${accordingStyle}`}>{accordingContent}</div>
      )}
    </div>
  );
};
