import {
  IDataBoiler,
  IDataLineGas,
  IDataLineWater,
  IDataPump,
  PlantStatus,
  SchemaElement,
  ValveStatus,
  WarningStatus,
} from '../../services/types';
import stylesSchemaElements from './schema-elements.module.scss';
import { FC, useState } from 'react';
import { SchemaTemperature } from '../schema-temperature/schema-temperature';
import { SchemaProgressLine } from '../schema-progress-line/schema-progress-line';
import { SchemaElementInfo } from '../schema-element-info/schema-element-info';
import { ReactComponent as PumpIndicatorIcon } from '../../image/schema-elements/water-pump-indicator.svg';
import { ReactComponent as GusIndicatorIcon } from '../../image/schema-elements/gas-valve.svg';
import { ReactComponent as GusLine } from '../../image/schema-elements/gas-line.svg';
import { ReactComponent as WaterLineIn } from '../../image/schema-elements/water-line-in.svg';
import { ReactComponent as WaterLineOut } from '../../image/schema-elements/water-line-out.svg';
import { ReactComponent as WaterLineSub } from '../../image/schema-elements/water-line-sub.svg';

interface ISchemaElements {
  scale?: number;
  rotate?: number;
  nameScheme?: string;
  type: SchemaElement;
  data: IDataBoiler | IDataPump | IDataLineWater | IDataLineGas;
  customStyleContainer?: string;
  handleOpen?: () => void;
}

export const SchemaElements: FC<ISchemaElements> = ({
  scale,
  rotate,
  type = SchemaElement.Boiler,
  data,
  customStyleContainer = '',
  nameScheme = '',
  handleOpen,
}): JSX.Element => {
  let element;

  switch (type) {
    case SchemaElement.Boiler:
      const boilerData = data as IDataBoiler;
      element = (
        <button
          onClick={handleOpen}
          type='button'
          className={`${stylesSchemaElements.containerBoiler} ${stylesSchemaElements.button} ${customStyleContainer}`}
          aria-label={boilerData.name}
          style={scale ? { transform: `scale(${scale})` } : {}}
        >
          <SchemaTemperature data={boilerData.temperature} >{`${boilerData.temperature.value} ${boilerData.temperature.unit}`}</SchemaTemperature>
          <div
            className={stylesSchemaElements.boilerCorpus}
            style={rotate ? { transform: `rotate(${rotate}deg)` } : {}}
          >
            <SchemaProgressLine
              data={boilerData.fullness}
              customStyleContainer={stylesSchemaElements.progressLine}
            />
          </div>
          <SchemaElementInfo
            data={boilerData.performance}
            plantStatus={boilerData.status}
          >{`${nameScheme} ${boilerData.fullness.value} ${boilerData.fullness.unit}`}</SchemaElementInfo>
        </button>
      );
      break;
    case SchemaElement.Pump:
      const pumpData = data as IDataPump;
      element = (
        <button
          onClick={handleOpen}
          type='button'
          className={`${stylesSchemaElements.containerPump} ${customStyleContainer}  ${stylesSchemaElements.button}`}
          aria-label={pumpData.name}
          style={scale ? { transform: `scale(${scale})` } : {}}
        >
          <SchemaElementInfo
            data={pumpData.performance}
            plantStatus={pumpData.status}
          >{`${nameScheme} ${pumpData.performance.value} ${pumpData.performance.unit}`}</SchemaElementInfo>
          <div
            className={stylesSchemaElements.pumpBody}
            style={rotate ? { transform: `rotate(${rotate}deg)` } : {}}
          >
            <PumpIndicatorIcon
              className={`${stylesSchemaElements.pumpIndicatorIcon} 
              ${
                pumpData.status === PlantStatus.Attention
                  ? stylesSchemaElements.pumpIndicatorIconAttention
                  : ''
              } ${
                pumpData.status === PlantStatus.Alarm
                  ? stylesSchemaElements.pumpIndicatorIconAlarm
                  : ''
              } ${
                pumpData.status === PlantStatus.Off
                  ? stylesSchemaElements.pumpIndicatorIconOff
                  : ''
              }`}
            />
          </div>
        </button>
      );
      break;
    case SchemaElement.GasLine:
      const gusData = data as IDataLineGas;
      element = (
        <button
          onClick={handleOpen}
          type='button'
          className={`${stylesSchemaElements.containerGus}  ${stylesSchemaElements.button} ${customStyleContainer}`}
          aria-label={gusData.name}
          style={scale ? { transform: `scale(${scale})` } : {}}
        >
          <SchemaElementInfo
            data={gusData.pressure}
            plantStatus={gusData.status}
            customStyleContainer={stylesSchemaElements.gusInfo}
          >{`${nameScheme} ${gusData.pressure.value} ${gusData.pressure.unit}`}</SchemaElementInfo>
          <GusLine
            className={`${stylesSchemaElements.gusBody} ${
              gusData.status === PlantStatus.Off
                ? stylesSchemaElements.gusBodyOff
                : ''
            }`}
            style={rotate ? { transform: `rotate(${rotate}deg)` } : {}}
          />
          <div className={stylesSchemaElements.gusIndicatorContainer}>
            <span className={stylesSchemaElements.gusIndicatorLabel}>
              газовый клапан
            </span>
            <GusIndicatorIcon
              className={`${stylesSchemaElements.gusIndicatorIcon} 
                ${
                  gusData.valve.valueStatus === WarningStatus.Attention
                    ? stylesSchemaElements.gusIndicatorIconAttention
                    : ''
                } ${
                gusData.valve.valueStatus === WarningStatus.Alarm
                  ? stylesSchemaElements.gusIndicatorIconAlarm
                  : ''
              } ${
                gusData.valve.value === ValveStatus.Close
                  ? stylesSchemaElements.gusIndicatorIconOff
                  : ''
              }`}
            />
            <span
              className={`${stylesSchemaElements.gusIndicatorStatus} ${
                gusData.valve.valueStatus === WarningStatus.Attention
                  ? stylesSchemaElements.gusIndicatorStatusAttention
                  : ''
              } ${
                gusData.valve.valueStatus === WarningStatus.Alarm
                  ? stylesSchemaElements.gusIndicatorStatusAlarm
                  : ''
              }`}
            >
              {gusData.valve.value === ValveStatus.Open
                ? 'клапан открыт'
                : 'клапан закрыт'}
            </span>
          </div>
        </button>
      );
      break;
    case SchemaElement.WaterLineIn:
      const waterInData = data as IDataLineWater;
      element = (
        <button
          onClick={handleOpen}
          type='button'
          className={`${stylesSchemaElements.containerWaterIn} ${stylesSchemaElements.button} ${customStyleContainer}`}
          aria-label={waterInData.name}
          style={scale ? { transform: `scale(${scale})` } : {}}
        >
          <div className={stylesSchemaElements.containerWaterInWrapper}>
            <div className={stylesSchemaElements.waterInInfoContainer}>
              <SchemaElementInfo
                data={waterInData.pressure}
                plantStatus={waterInData.status}
              >{`${nameScheme} ${waterInData.pressure.value} ${waterInData.pressure.unit}`}</SchemaElementInfo>
              <SchemaTemperature data={waterInData.temperature} >{`под. ${waterInData.temperature.value} ${waterInData.temperature.unit}`}</SchemaTemperature>
            </div>
            <WaterLineIn
              className={`${stylesSchemaElements.waterInBody} ${
                waterInData.status === PlantStatus.Off
                  ? stylesSchemaElements.waterInBodyOff
                  : ''
              }`}
              style={rotate ? { transform: `rotate(${rotate}deg)` } : {}}
            />
          </div>
        </button>
      );
      break;
      case SchemaElement.WaterLineOut:
      const waterOutData = data as IDataLineWater;
      element = (
        <button
          onClick={handleOpen}
          type='button'
          className={`${stylesSchemaElements.containerWaterOut} ${stylesSchemaElements.button} ${customStyleContainer}`}
          aria-label={waterOutData.name}
          style={scale ? { transform: `scale(${scale})` } : {}}
        >
          <div className={stylesSchemaElements.containerWaterOutWrapper}>
            <div className={stylesSchemaElements.waterOutInfoContainer}>
              <SchemaElementInfo
                data={waterOutData.pressure}
                plantStatus={waterOutData.status}
              >{`${nameScheme} ${waterOutData.pressure.value} ${waterOutData.pressure.unit}`}</SchemaElementInfo>
              <SchemaTemperature data={waterOutData.temperature} >{`обр. ${waterOutData.temperature.value} ${waterOutData.temperature.unit}`}</SchemaTemperature>
            </div>
            <WaterLineOut
              className={`${stylesSchemaElements.waterOutBody} ${
                waterOutData.status === PlantStatus.Off
                  ? stylesSchemaElements.waterOutBodyOff
                  : ''
              }`}
              style={rotate ? { transform: `rotate(${rotate}deg)` } : {}}
            />
          </div>
        </button>
      );
      break;
      case SchemaElement.WaterLineSub:
        const waterSubData = data as IDataLineWater;
        element = (
          <button
            onClick={handleOpen}
            type='button'
            className={`${stylesSchemaElements.containerWaterSub} ${stylesSchemaElements.button} ${customStyleContainer}`}
            aria-label={waterSubData.name}
            style={scale ? { transform: `scale(${scale})` } : {}}
          >
            <div className={stylesSchemaElements.containerWaterSubWrapper}>
              <div className={stylesSchemaElements.waterSubInfoContainer}>
                <SchemaElementInfo
                  data={waterSubData.pressure}
                  plantStatus={waterSubData.status}
                >{`${nameScheme} ${waterSubData.pressure.value}${waterSubData.pressure.unit}`}</SchemaElementInfo>
                <SchemaTemperature data={waterSubData.temperature} >{`под. ${waterSubData.temperature.value} ${waterSubData.temperature.unit}`}</SchemaTemperature>
              </div>
              <WaterLineSub
                className={`${stylesSchemaElements.waterSubBody} ${
                  waterSubData.status === PlantStatus.Off
                    ? stylesSchemaElements.waterSubBodyOff
                    : ''
                }`}
                style={rotate ? { transform: `rotate(${rotate}deg)` } : {}}
              />
            </div>
          </button>
        );
        break;
    default:
      element = <div />;
      break;
  }

  return element;
};
