import { SideMenu } from '../../components/side-menu/side-menu';
import {
  INITIAL_PLANT_DATA,
  LOG_DATA,
  PLANT_DATA_CARDS,
} from '../../services/constants';
import { useParams } from 'react-router-dom';
import stylesPlant from './plant.module.scss';
import { Fragment, FC, useState, useEffect } from 'react';
import { Console } from '../../components/console/console';
import { Dialog, Transition } from '@headlessui/react';
import { PlantsList } from '../../components/plants-list/plants-list';
import { IInputData } from '../../services/types';
import { ReactComponent as IconDetails } from '../../image/icons/icon-about.svg';
import { ReactComponent as IconAttention } from '../../image/icons/icon-attention.svg';
import { ReactComponent as IconGraphics } from '../../image/icons/icon-graphics.svg';

export const Plant: FC = (): JSX.Element => {
  const { id } = useParams();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [testData, setTestData] = useState<IInputData>(INITIAL_PLANT_DATA);

  const openListPlants = () => {
    setOpenModal(true);
  };

  const closeListPlants = () => {
    setOpenModal(false);
  };

  const openDetail = () => {
    //Открытие подробной информации об установки и ее компонентах
  };
  const openAttention = () => {
    //Открытие подробной информации об событиях установки
  };
  const openGraphics = () => {
    //Открытие графики работы установки
  };

  useEffect(() => {
    /* При наличии api: Открытие сокет соединения для мониторинга в реальном режиме
     получение основных данных по текущей установке, и данных состояний других, все записывается в редакс 
     и оттуда уже берется в самом компоненте   */
    setTestData({
      ...INITIAL_PLANT_DATA,
    });
  }, []);

  return (
    <main className={stylesPlant.container}>
      {!openModal && (
        <SideMenu
          handleOpenButton={openListPlants}
          plantCards={PLANT_DATA_CARDS}
          id={id}
          customStyleContainer={stylesPlant.sideMenu}
        />
      )}
      {!openModal && (
        <Console
          logData={LOG_DATA}
          customStyleContainer={stylesPlant.console}
        />
      )}
      <h2 className={stylesPlant.title}>{`Установка ${testData.name}`}</h2>
      <div className={stylesPlant.buttonContainer}>
        <button
          type='button'
          className={`${stylesPlant.button}`}
          onClick={openDetail}
        >
          <IconDetails className={stylesPlant.icon} />
        </button>
        <button
          type='button'
          className={`${stylesPlant.button} ${
            testData.status === 'attention' ? stylesPlant.buttonAttention : ''
          } ${testData.status === 'alarm' ? stylesPlant.buttonAlarm : ''}`}
          onClick={openAttention}
        >
          <IconAttention className={stylesPlant.icon} />
        </button>
        <button
          type='button'
          className={`${stylesPlant.button}`}
          onClick={openGraphics}
        >
          <IconGraphics className={stylesPlant.icon} />
        </button>
      </div>
      <Transition appear show={openModal} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeListPlants}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <PlantsList
                    window={true}
                    handleExitButton={closeListPlants}
                    customStyleContainer={stylesPlant.modal}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  );
};
