import stylesSchemaProgressLine from './schema-progress-line.module.scss';
import { IPlantDataValue, WarningStatus } from '../../services/types';
import { FC } from 'react';

interface ISchemaProgressLine {
  data: IPlantDataValue;
  customStyleContainer?: string;
}

export const SchemaProgressLine: FC<ISchemaProgressLine> = ({
  data,
  customStyleContainer= ''
}): JSX.Element => {
  return (
    <div
      className={`${stylesSchemaProgressLine.progressVolumeLine} ${customStyleContainer}`}
      style={{
        backgroundImage: `linear-gradient(to right, ${
          data.valueStatus === WarningStatus.Attention
            ? '#FFD18C'
            : data.valueStatus === WarningStatus.Alarm
            ? '#FF8A8A'
            : '#4FDFFF'
        } 0%, ${
          data.valueStatus === WarningStatus.Attention
            ? '#FFD18C'
            : data.valueStatus === WarningStatus.Alarm
            ? '#FF8A8A'
            : '#4FDFFF'
        } ${data.value}%, #FFF ${data.value}%, #FFF 100%)`,
      }}
    >
      <span
        className={stylesSchemaProgressLine.progressVolumeValue}
      >{`${data.value}%`}</span>
    </div>
  );
};
