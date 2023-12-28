import stylesSchemaTemperature from './schema-temperature.module.scss';
import { ReactComponent as IconTemperature } from '../../image/icons/icon-temperature.svg';
import { IPlantDataValue, WarningStatus } from '../../services/types';
import { FC } from 'react';

interface ISchemaTemperature {
  children?: React.ReactNode;
  data: IPlantDataValue;
  customStyleContainer?: string;
}

export const SchemaTemperature: FC<ISchemaTemperature> = ({
  data,
  customStyleContainer = '',
  children,
}): JSX.Element => {
  return (
    <div
      className={`${stylesSchemaTemperature.temperatureContainer} ${customStyleContainer}`}
    >
      <IconTemperature
        className={`${stylesSchemaTemperature.temperatureIcon} ${
          data.valueStatus === WarningStatus.Attention
            ? stylesSchemaTemperature.temperatureIconAttention
            : ''
        } ${
          data.valueStatus === WarningStatus.Alarm
            ? stylesSchemaTemperature.temperatureIconAlarm
            : ''
        }`}
      />
      <span
        className={stylesSchemaTemperature.temperatureText}
      >{children}</span>
    </div>
  );
};
