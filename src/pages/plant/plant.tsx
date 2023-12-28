import { SideMenu } from '../../components/side-menu/side-menu';
import {
  INITIAL_PLANT_DATA,
  LOG_DATA,
  PLANT_DATA_CARDS,
} from '../../services/constants';
import { useParams } from 'react-router-dom';
import stylesPlant from './plant.module.scss';
import { Fragment, FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Console } from '../../components/console/console';
import { Dialog, Transition } from '@headlessui/react';
import { PlantsList } from '../../components/plants-list/plants-list';
import {
  IInputData,
  PlantStatus,
  SchemaElement,
  WarningStatus,
} from '../../services/types';
import { ReactComponent as IconDetails } from '../../image/icons/icon-about.svg';
import { ReactComponent as IconAttention } from '../../image/icons/icon-attention.svg';
import { ReactComponent as IconGraphics } from '../../image/icons/icon-graphics.svg';
import { SchemaElements } from '../../components/schema-elements/schema-elements';

export const Plant: FC = (): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();
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
  const openDetailComponent = () => {
    //Открытие информация по отдельному компоненту (либо с подгрузкой с сервера, либо с уже загруженных данных)
  };

  useEffect(() => {
    /* При наличии api: Открытие сокет соединения для мониторинга в реальном режиме
     получение основных данных по текущей установке, и данных состояний других, все записывается в редакс 
     и оттуда уже берется в самом компоненте   */

    if (INITIAL_PLANT_DATA.otherPlants.some((item) => item.info.id === id)) {
      if (id === '5213') {
        setTestData({
          ...INITIAL_PLANT_DATA,
        });
      }
      if (id === '5212') {
        setTestData({
          ...INITIAL_PLANT_DATA,
          currentPlant: {
            ...INITIAL_PLANT_DATA.currentPlant,
            boiler_02: {
              status: PlantStatus.Attention,
              id: '82347',
              name: 'Газовый котёл 02',
              temperature: {
                value: 70,
                unit: '°C',
                valueStatus: WarningStatus.None,
              },
              performance: {
                value: 10,
                unit: '%',
                valueStatus: WarningStatus.Attention,
              },
              fullness: {
                value: 25,
                unit: '%',
                valueStatus: WarningStatus.Attention,
              },
              error: '',
            },
          },
        });
      }
      if (id === '5214') {
        setTestData({
          ...INITIAL_PLANT_DATA,
          currentPlant: {
            ...INITIAL_PLANT_DATA.currentPlant,
            boiler_02: {
              status: PlantStatus.Alarm,
              id: '82347',
              name: 'Газовый котёл 02',
              temperature: {
                value: 40,
                unit: '°C',
                valueStatus: WarningStatus.Alarm,
              },
              performance: {
                value: 0,
                unit: '%',
                valueStatus: WarningStatus.Alarm,
              },
              fullness: {
                value: 15,
                unit: '%',
                valueStatus: WarningStatus.Alarm,
              },
              error: '',
            },
            boiler_01: {
              status: PlantStatus.Work,
              id: '82347',
              name: 'Газовый котёл 02',
              temperature: {
                value: 70,
                unit: '°C',
                valueStatus: WarningStatus.None,
              },
              performance: {
                value: 100,
                unit: '%',
                valueStatus: WarningStatus.None,
              },
              fullness: {
                value: 95,
                unit: '%',
                valueStatus: WarningStatus.None,
              },
              error: '',
            },
            pump_main_02: {
              status: PlantStatus.Work,
              id: '72349',
              name: 'Насос на линии обратки 02',
              performance: {
                value: 80,
                unit: '%',
                valueStatus: WarningStatus.None,
              },
              error: '',
            },
          },
        });
      }
    } else navigate('*'); //При наличии api: перекидываем на Not found если сервер пришел, что такого объекта нет
  }, [id]);

 
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
      {testData.currentPlant && (
        <div className={stylesPlant.schemaContainer}>
          <SchemaElements
            handleOpen={openDetailComponent}
            type={SchemaElement.Boiler}
            data={testData.currentPlant?.boiler_01}
            customStyleContainer={stylesPlant.boiler01}
            nameScheme='К-1, P:'
          />
          <SchemaElements
            handleOpen={openDetailComponent}
            type={SchemaElement.Boiler}
            data={testData.currentPlant?.boiler_02}
            customStyleContainer={stylesPlant.boiler02}
            nameScheme='К-2, P:'
          />
          <SchemaElements
            handleOpen={openDetailComponent}
            type={SchemaElement.Pump}
            data={testData.currentPlant?.pump_main_02}
            rotate={180}
            customStyleContainer={stylesPlant.pumpMain02}
            nameScheme='Н-2, P:'
          />
          <SchemaElements
            handleOpen={openDetailComponent}
            type={SchemaElement.Pump}
            data={testData.currentPlant?.pump_main_01}
            customStyleContainer={stylesPlant.pumpMain01}
            nameScheme='Н-1, P:'
          />
          <SchemaElements
            handleOpen={openDetailComponent}
            type={SchemaElement.Pump}
            data={testData.currentPlant?.pump_sub_01}
            customStyleContainer={stylesPlant.pumpSub01}
            nameScheme='НП-1, P:'
            scale={0.7}
          />
          <SchemaElements
            handleOpen={openDetailComponent}
            type={SchemaElement.Pump}
            data={testData.currentPlant?.pump_sub_02}
            rotate={180}
            customStyleContainer={stylesPlant.pumpSub02}
            nameScheme='НП-2, P:'
            scale={0.7}
          />
          <SchemaElements
            handleOpen={openDetailComponent}
            type={SchemaElement.GasLine}
            data={testData.currentPlant?.gas}
            customStyleContainer={stylesPlant.gusLine}
            nameScheme='p(газ):'
          />
          <SchemaElements
            handleOpen={openDetailComponent}
            type={SchemaElement.WaterLineIn}
            data={testData.currentPlant?.line_water_in}
            customStyleContainer={stylesPlant.waterLineIn}
            nameScheme='p(под.):'
          />
          <SchemaElements
            handleOpen={openDetailComponent}
            type={SchemaElement.WaterLineOut}
            data={testData.currentPlant?.line_water_out}
            customStyleContainer={stylesPlant.waterLineOut}
            nameScheme='p(обр.):'
          />
          <SchemaElements
            handleOpen={openDetailComponent}
            type={SchemaElement.WaterLineSub}
            data={testData.currentPlant?.line_water_sub}
            customStyleContainer={stylesPlant.waterLineSub}
            nameScheme='p(под.):'
          />
        </div>
      )}
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
