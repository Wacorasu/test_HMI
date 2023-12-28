import testImage from '../image/bp-boiler-room.webp';
import {
  ConnectStatus,
  PlantStatus,
  ValveStatus,
  WarningStatus,
} from './types';

export const DROPDOWN_LIST_TEST = [
  {
    value: 'type01',
    element: <>тип1</>,
  },
  {
    value: 'type02',
    element: <>тип2</>,
  },
  {
    value: 'type03',
    element: <>тип3</>,
  },
  {
    value: 'type04',
    element: <>тип4</>,
  },
];

export const PLANT_DATA_CARDS = [
  {
    plantStatus: PlantStatus.Work,
    connect: ConnectStatus.Connect,
    warningStatus: WarningStatus.None,
    connectError: null,
    plantError: null,
    info: {
      id: '5213',
      name: '№АГК0038',
      type: 'xxxx',
      responsible: ' участок yyyy,  объект zzzz',
      location: ' участок yyyy,  объект zzzz',
      image: testImage,
    },
  },
  {
    plantStatus: PlantStatus.Attention,
    warningStatus: WarningStatus.Attention,
    connect: ConnectStatus.Connect,
    connectError: null,
    plantError: { statuscode: 652, statusText: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
    info: {
      id: '5212',
      name: '№АГК0037',
      type: 'xxxx',
      responsible: ' участок yyyy,  объект zzzz',
      location: ' участок yyyy,  объект zzzz',
      image: testImage,
    },
  },
  {
    plantStatus: PlantStatus.Alarm,
    warningStatus: WarningStatus.Alarm,
    connect: ConnectStatus.Disconnect,
    connectError: { statuscode: 503, statusText: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
    plantError: { statuscode: 342, statusText: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
    info: {
      id: '5214',
      name: '№АГК0039',
      type: 'xxxx',
      responsible: ' участок yyyy,  объект zzzz',
      location: ' участок yyyy,  объект zzzz',
      image: testImage,
    },
  },
];

export const LOG_DATA = [
  { log: `HTTP GET /static/admin/img/icon-no.svg 200 [0.02, 127.0.0.1:56955]` },
  { log: `HTTP GET /static/admin/img/icon-no.svg 200 [0.02, 127.0.0.1:56955]` },
  { log: `HTTP GET /static/admin/img/icon-no.svg 200 [0.02, 127.0.0.1:56955]` },
  { log: `HTTP GET /static/admin/img/icon-no.svg 200 [0.02, 127.0.0.1:56955]` },
  { log: `HTTP GET /static/admin/img/icon-no.svg 200 [0.02, 127.0.0.1:56955]` },
  { log: `HTTP GET /static/admin/img/icon-no.svg 200 [0.02, 127.0.0.1:56955]` },
  { log: `HTTP GET /static/admin/img/icon-no.svg 200 [0.02, 127.0.0.1:56955]` },
  { log: `HTTP GET /static/admin/img/icon-no.svg 200 [0.02, 127.0.0.1:56955]` },
  { log: `HTTP GET /static/admin/img/icon-no.svg 200 [0.02, 127.0.0.1:56955]` },
  { log: `HTTP GET /static/admin/img/icon-no.svg 200 [0.02, 127.0.0.1:56955]` },
  { log: `HTTP GET /static/admin/img/icon-no.svg 200 [0.02, 127.0.0.1:56955]` },
  { log: `HTTP GET /static/admin/img/icon-no.svg 200 [0.02, 127.0.0.1:56955]` },
  { log: `HTTP GET /static/admin/img/icon-no.svg 200 [0.02, 127.0.0.1:56955]` },
  { log: `HTTP GET /static/admin/img/icon-no.svg 200 [0.02, 127.0.0.1:56955]` },
];

export const INITIAL_PLANT_DATA = {
  id: '5213',
  name: '№АГК0038',
  connect: ConnectStatus.Connect,
  status: PlantStatus.Work,
  errorType: null,
  otherPlants: PLANT_DATA_CARDS,
  currentPlant: {
    gas: {
      status: PlantStatus.Work,
      id: '12348',
      name: 'Газовый клапан, газовая линия трубопровода',
      valve: { value: ValveStatus.Open, valueStatus: WarningStatus.None },
      pressure: { value: 5.79, unit: 'КПа', valueStatus: WarningStatus.None },
      error: '',
    },
    boiler_01: {
      status: PlantStatus.Work,
      id: '82348',
      name: 'Газовый котёл 01',
      temperature: { value: 70, unit: '°C', valueStatus: WarningStatus.None },
      performance: { value: 40, unit: '%', valueStatus: WarningStatus.None },
      fullness: { value: 75, unit: '%', valueStatus: WarningStatus.None },
      error: '',
    },
    boiler_02: {
      status: PlantStatus.Work,
      id: '82347',
      name: 'Газовый котёл 02',
      temperature: { value: 70, unit: '°C', valueStatus: WarningStatus.None },
      performance: { value: 40, unit: '%', valueStatus: WarningStatus.None },
      fullness: { value: 75, unit: '%', valueStatus: WarningStatus.None },
      error: '',
    },
    pump_main_01: {
      status: PlantStatus.Work,
      id: '72348',
      name: 'Насос на линии обратки 01',
      performance: { value: 80, unit: '%', valueStatus: WarningStatus.None },
      error: '',
    },
    pump_main_02: {
      status: PlantStatus.Off,
      id: '72349',
      name: 'Насос на линии обратки 02',
      performance: { value: 0, unit: '%', valueStatus: WarningStatus.None },
      error: '',
    },
    pump_sub_02: {
      status: PlantStatus.Off,
      id: '72049',
      name: 'Насос на линии подпитки 01',
      performance: { value: 0, unit: '%', valueStatus: WarningStatus.None },
      error: '',
    },
    pump_sub_01: {
      status: PlantStatus.Off,
      id: '72050',
      name: 'Насос на линии подпитки 02',
      performance: { value: 0, unit: '%', valueStatus: WarningStatus.None },
      error: '',
    },
    line_water_in: {
      status: PlantStatus.Work,
      id: '12801',
      name: 'Линия трубопровода на подачу',
      pressure: {
        value: 2.49,
        unit: 'кгс/см3',
        valueStatus: WarningStatus.None,
      },
      temperature: { value: 70, unit: '°C', valueStatus: WarningStatus.None },
      error: '',
    },
    line_water_out: {
      status: PlantStatus.Work,
      id: '12802',
      name: 'Линия трубопровода на обратку',
      pressure: {
        value: 2.14,
        unit: 'кгс/см3',
        valueStatus: WarningStatus.None,
      },
      temperature: { value: 62, unit: '°C', valueStatus: WarningStatus.None },
      error: '',
    },
    line_water_sub: {
      status: PlantStatus.Off,
      id: '12811',
      name: 'Линия трубопровода на подпитку',
      pressure: {
        value: 1.49,
        unit: 'кгс/см3',
        valueStatus: WarningStatus.None,
      },
      temperature: { value: 20, unit: '°C', valueStatus: WarningStatus.None },
      error: '',
    },
  },
};
