import stylesSchemaElementInfo from './schema-element-info.module.scss';
import {
  IPlantDataValue,
  PlantStatus,
  WarningStatus,
} from '../../services/types';
import { FC } from 'react';

interface ISchemaElementInfo {
  data: IPlantDataValue;
  customStyleContainer?: string;
  plantStatus: PlantStatus;
  children?: React.ReactNode;
}

export const SchemaElementInfo: FC<ISchemaElementInfo> = ({
  data,
  plantStatus,
  customStyleContainer = '',
  children
}): JSX.Element => {
  return (
    <div
      className={`${
        stylesSchemaElementInfo.infoContainer
      } ${customStyleContainer} ${
        data.valueStatus === WarningStatus.Attention ||
        plantStatus === PlantStatus.Attention
          ? stylesSchemaElementInfo.infoContainerAttention
          : ''
      } ${
        data.valueStatus === WarningStatus.Alarm ||
        plantStatus === PlantStatus.Alarm
          ? stylesSchemaElementInfo.infoContainerAlarm
          : ''
      } ${
        plantStatus === PlantStatus.Off
          ? stylesSchemaElementInfo.progressVolumeOff
          : ''
      }`}
    >
      <span
        className={stylesSchemaElementInfo.infoText}
      >{children}</span>
    </div>
  );
};
