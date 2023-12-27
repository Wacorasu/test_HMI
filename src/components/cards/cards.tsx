import stylesCards from './cards.module.scss';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import { ReactComponent as IconConnect } from '../../image/icons/icon-status-server.svg';
import { ReactComponent as IconStatusPlant } from '../../image/icons/icon-status-plant.svg';
import { ReactComponent as IconWarringStatusPlant } from '../../image/icons/icon-waring-status-plant.svg';
import { ICard, PlantCardSize } from '../../services/types';

export const Cards: FC<ICard> = ({
  info,
  plantStatus,
  connect,
  select = false,
  size = PlantCardSize.Big,
}): JSX.Element => {
  const { id, name, type, location, responsible, image } = info;
  return (
    <article
      className={`${stylesCards.container} ${
        plantStatus === 'attention' && stylesCards.containerWarning
      } ${
        (plantStatus === 'alarm' || connect === 'disconnect') &&
        stylesCards.containerAlarm
      }
      ${size === PlantCardSize.Small ? stylesCards.containerSmall : ''}
      ${size === PlantCardSize.Medium ? stylesCards.containerMedium : ''}
      ${select ? stylesCards.containerSelect : ''}
      `}
    >
      <Link
        to={`/${id}`}
        className={`${stylesCards.linkWrapper} ${
          size === PlantCardSize.Small ? stylesCards.linkWrapperSmall : ''
        } ${
          size === PlantCardSize.Medium ? stylesCards.linkWrapperMedium : ''
        }`}
      >
        <h3
          className={`${stylesCards.title}
        ${size === PlantCardSize.Small ? stylesCards.titleSmall : ''} ${
            size === PlantCardSize.Medium ? stylesCards.titleMedium : ''
          }`}
        >
          {size === PlantCardSize.Small ? name : `Установка ${name}`}
        </h3>
        {size === PlantCardSize.Big && (
          <div className={stylesCards.subtitleContainer}>
            <span className={stylesCards.subtitle}>тип:</span>
            <span className={stylesCards.subtitleText}>{type}</span>
          </div>
        )}
        {size === PlantCardSize.Big && (
          <img src={image} alt={name} className={stylesCards.image} />
        )}
        {size === PlantCardSize.Big && (
          <div className={stylesCards.subtitleContainer}>
            <span className={stylesCards.subtitle}>ответственный:</span>
            <span className={stylesCards.subtitleText}>{responsible}</span>
          </div>
        )}
        {size !== PlantCardSize.Small && (
          <div
            className={`${stylesCards.subtitleContainer} ${
              size === PlantCardSize.Medium
                ? stylesCards.subtitleContainerMedium
                : ''
            }`}
          >
            <span className={stylesCards.subtitle}>местоположение:</span>
            <span className={stylesCards.subtitleText}>{location}</span>
          </div>
        )}
        <div
          className={`${stylesCards.statusContainer} ${
            size === PlantCardSize.Small ? stylesCards.statusContainerSmall : ''
          } ${
            size === PlantCardSize.Medium
              ? stylesCards.statusContainerMedium
              : ''
          }`}
        >
          <div className={`${stylesCards.statusContentContainer}`}>
            {size !== PlantCardSize.Small && (
              <span className={stylesCards.statusText}>соединение:</span>
            )}
            <IconConnect
              className={`${stylesCards.statusConnectIcon} ${
                connect === 'disconnect'
                  ? stylesCards.statusConnectIconDisconnect
                  : stylesCards.statusConnectIconConnect
              }`}
            />
          </div>
          <div className={`${stylesCards.statusContentContainer}`}>
            {size !== PlantCardSize.Small && (
              <span className={stylesCards.statusText}>соединение:</span>
            )}
            {plantStatus === 'none' ? (
              <IconStatusPlant className={stylesCards.statusPlantIcon} />
            ) : (
              <IconWarringStatusPlant
                className={`${
                  plantStatus === 'attention'
                    ? stylesCards.statusWarringPlantIcon
                    : stylesCards.statusAlarmPlantIcon
                }`}
              />
            )}
          </div>
        </div>
      </Link>
    </article>
  );
};
