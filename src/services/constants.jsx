import testImage from '../image/bp-boiler-room.png';
import { ConnectStatus, PlantStatus } from './types';

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
    plantStatus: PlantStatus.None,
    connect: ConnectStatus.Connect,
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
  connect: true,
  status: 'work',
  errorType: null,
  otherPlants: PLANT_DATA_CARDS,
  currentPlant: {
    gas: {
      status: 'work',
      pressure: '5.79',
      error: '',
    },
    boiler_01: {
      status: 'work',
      temperature: '70',
      performance: '40',
      fullness: '75',
      error: '',
    },
    boiler_02: {
      status: 'work',
      temperature: '70',
      performance: '40',
      fullness: '75',
      error: '',
    },
    pump_main_01: {
      status: 'work',
      performance: '80',
      error: '',
    },
    pump_main_02: {
      status: 'off',
      performance: '0',
      error: '',
    },
    pump_sub_02: {
      status: 'off',
      performance: '0',
      error: '',
    },
    pump_sub_01: {
      status: 'off',
      performance: '0',
      error: '',
    },
    line_water_in: {
      status: 'work',
      pressure: '2.49',
      temperature: '70',
      error: '',
    },
    line_water_out: {
      status: 'work',
      pressure: '2.14',
      temperature: '62',
      error: '',
    },
    line_water_sub: {
      status: 'off',
      pressure: '1.49',
      temperature: '20',
      error: '',
    },
  },
}
