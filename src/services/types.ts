export enum ConnectStatus {
  Connect = 'connect',
  Disconnect = 'disconnect',
}

export enum WarningStatus {
  None = 'none',
  Attention = 'attention',
  Alarm = 'alarm',
}

export enum PlantStatus {
  Work = 'work',
  Off = 'off',
  Attention = 'attention',
  Alarm = 'alarm',
}

export enum PlantCardSize {
  Small = 'small',
  Medium = 'medium',
  Big = 'big',
}

export enum SchemaElement {
  Boiler = 'boiler',
  Pump = 'pump',
  WaterLineIn = 'waterLineIn',
  WaterLineOut = 'waterLineOut',
  WaterLineSub = 'waterLineSub',
  GasLine = 'gasLine',
}

export enum ValveStatus {
    Open = 'open',
    Close = 'Close'
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
  warningStatus: WarningStatus;
  connect: ConnectStatus;
  plantStatus: PlantStatus;
  select?: boolean;
}

export interface IPlantDataValue {
  value: number;
  valueStatus: WarningStatus;
  unit: string;
}

export interface IDataBoiler {
  status: PlantStatus;
  id: string;
  name: string;
  temperature: IPlantDataValue;
  fullness: IPlantDataValue;
  performance: IPlantDataValue;
  error: string;
}

export interface IDataPump {
  status: PlantStatus;
  id: string;
  name: string;
  performance: IPlantDataValue;
  error: string;
}

export interface IDataLineWater {
  status: PlantStatus;
  id: string;
  name: string;
  temperature: IPlantDataValue;
  pressure: IPlantDataValue;
  error: string;
}

export interface IDataLineGas {
  status: PlantStatus;
  id: string;
  name: string;
  pressure: IPlantDataValue;
  valve: {value: ValveStatus, valueStatus: WarningStatus}
  error: string;
}

export interface IInputData {
  id: string,
  name: string,
  connect: ConnectStatus;
  status: PlantStatus;
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
