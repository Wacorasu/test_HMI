export enum ConnectStatus {
  Connect = 'connect',
  Disconnect = 'disconnect',
}

export enum PlantStatus {
  None = 'none',
  Attention = 'attention',
  Alarm = 'alarm',
}

export enum PlantCardSize {
  Small = 'small',
  Medium = 'medium',
  Big = 'big',
}

export interface ICard {
  info: {
    id: string;
    name: string;
    type: string;
    responsible: string;
    location: string;
    image: string;
  };
  size: PlantCardSize;
  plantStatus: PlantStatus;
  connect: ConnectStatus;
  select?: boolean;
}

export interface IDataBoiler {
  status: string;
  temperature: string;
  fullness: string;
  performance: string;
  error: string;
}

export interface IDataPump {
  status: string;
  performance: string;
  error: string;
}

export interface IDataLineWater {
  status: string;
  temperature: string;
  pressure: string;
  error: string;
}

export interface IDataLineGas {
  status: string;
  pressure: string;
  error: string;
}

export interface IInputData {
  id: string,
  name: string,
  connect: boolean;
  status: string;
  errorType: { code: string; text: string } | null;
  otherPlants: Omit<ICard, 'size'>[];
  currentPlant: {
    gas: IDataLineGas;
    boiler_01: IDataBoiler;
    boiler_02: IDataBoiler;
    pump_main_01: IDataPump;
    pump_main_02: IDataPump;
    pump_sub_01: IDataPump;
    pump_sub_02: IDataPump;
    line_water_in: IDataLineWater;
    line_water_out: IDataLineWater;
    line_water_sub: IDataLineWater;
  } | null;
}
