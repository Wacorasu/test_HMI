import { ICard, PlantCardSize } from '../../services/types';
import { Cards } from '../cards/cards';
import stylesSideMenu from './side-menu.module.scss';
import { FC, useState } from 'react';

interface ISideMenu {
  plantCards: Omit<ICard, 'size'>[];
  handleOpenButton: () => void;
  customStyleContainer?: string;
  id?: string;
}

export const SideMenu: FC<ISideMenu> = ({
  plantCards,
  handleOpenButton,
  customStyleContainer = '',
  id,
}): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const handleExpandButton = () => {
    setOpen(!open);
  };

  return (
    <menu
      className={`${stylesSideMenu.container} ${customStyleContainer} ${
        open ? stylesSideMenu.containerOpen : ''
      }`}
    >
      <div
        className={`${stylesSideMenu.headerContainer} ${
          open ? stylesSideMenu.headerContainerOpen : ''
        }`}
      >
        {open && <h2 className={stylesSideMenu.headerLabel}>Установки</h2>}
        <div className={stylesSideMenu.buttonContainer}>
          <button
            className={`${stylesSideMenu.buttonExpand} ${
              open ? stylesSideMenu.buttonExpandOpen : ''
            }`}
            type='button'
            aria-label='свернуть меню'
            onClick={handleExpandButton}
          />
          {open && (
            <button
              className={stylesSideMenu.buttonOpen}
              type='button'
              aria-label='открыть список установок'
              onClick={handleOpenButton}
            />
          )}
        </div>
      </div>
      <div className={stylesSideMenu.cardsContainer}>
        {plantCards.map((item, index) => {
          return (
            <Cards
              select={item.info.id === id ? true : false}
              size={open ? PlantCardSize.Medium : PlantCardSize.Small}
              key={index}
              info={item.info}
              connect={item.connect}
              plantStatus={item.plantStatus}
            />
          );
        })}
      </div>
    </menu>
  );
};
