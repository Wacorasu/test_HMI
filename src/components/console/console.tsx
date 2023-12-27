import stylesConsole from './console.module.scss';
import { FC, useState } from 'react';

interface IConsole {
  logData: { log: string }[];
  customStyleContainer?: string;
}

export const Console: FC<IConsole> = ({
  logData,
  customStyleContainer = '',
}): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const handleExpandButton = () => {
    setOpen(!open);
  };

  return (
    <article
      className={`${stylesConsole.container} ${customStyleContainer} ${
        open ? stylesConsole.containerOpen : ''
      }`}
    >
      <div
        className={`${stylesConsole.headerContainer} ${
          open ? stylesConsole.headerContainerOpen : ''
        }`}
      >
        <button
          className={`${stylesConsole.buttonExpand} ${
            open ? stylesConsole.buttonExpandOpen : ''
          }`}
          type='button'
          aria-label='закрыть консоль'
          onClick={handleExpandButton}
        />
        <h2 className={stylesConsole.headerLabel}>Консоль</h2>
      </div>
      {open && <div className={stylesConsole.logContainer}>
        {logData.map((item, index) => {
          return (
            <p key={index} className={stylesConsole.text}>
              {item.log}
            </p>
          );
        })}
      </div>}
    </article>
  );
};
