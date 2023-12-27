import { FC, useEffect } from 'react';
import stylesPlantsList from './plants-list.module.scss';
import { ButtonDropdown } from '../button-dropdown/button-dropdown';
import { Button } from '../button/button';
import { DROPDOWN_LIST_TEST, PLANT_DATA_CARDS } from '../../services/constants';
import { Cards } from '../cards/cards';
import { PlantCardSize } from '../../services/types';

interface IPlantsList {
  window?: boolean;
  handleExitButton?: VoidFunction;
  customStyleContainer?: string;
}

export const PlantsList: FC<IPlantsList> = ({
  window = true,
  handleExitButton,
  customStyleContainer=''
}): JSX.Element => {
  const acceptFilterPlants = () => {
    // применение фильтров поиска установок
  };

  const resetFilterPlants = () => {
    // сброс фильтров поиска установок
  };

  useEffect(() => {
    //при монтировании идет запрос на получение данных по доступным установкам (если объектом много можно использовать пагинацию)
  }, []);

  return (
    <section className={`${stylesPlantsList.container} ${customStyleContainer}`}>
      <div
        className={`${stylesPlantsList.headerContainer} ${
          window ? stylesPlantsList.headerContainerWindow : ''
        }`}
      >
        <h2 className={stylesPlantsList.headerLabel}>Установки</h2>
        {window && (
          <button
            className={stylesPlantsList.buttonExit}
            type='button'
            aria-label='закрыть окно'
            onClick={handleExitButton}
          />
        )}
      </div>
      <div className={stylesPlantsList.buttonsContainer}>
        <form className={stylesPlantsList.buttonsMenuContainer}>
          <ButtonDropdown dropdownList={DROPDOWN_LIST_TEST}>Тип</ButtonDropdown>
          <ButtonDropdown dropdownList={DROPDOWN_LIST_TEST}>
            Локация
          </ButtonDropdown>
          <ButtonDropdown dropdownList={DROPDOWN_LIST_TEST}>
            Статус
          </ButtonDropdown>
        </form>
        <div className={stylesPlantsList.buttonsControlContainer}>
          <Button
            type='submit'
            typeStyle='transparentDark'
            disabled
            modifiedStyle={stylesPlantsList.catalogButtonAccept}
            handlerButtonClick={acceptFilterPlants}
          >
            Применить
          </Button>
          <Button
            typeStyle='transparentDark'
            modifiedStyle={stylesPlantsList.catalogButtonDecline}
            handlerButtonClick={resetFilterPlants}
          >
            Сбросить
          </Button>
        </div>
      </div>
      <div className={stylesPlantsList.cardsContainer}>
        {PLANT_DATA_CARDS.map((item, index) => {
          return (
            <Cards
              size={PlantCardSize.Big}
              key={index}
              info={item.info}
              connect={item.connect}
              plantStatus={item.plantStatus}
            />
          );
        })}
      </div>
    </section>
  );
};
