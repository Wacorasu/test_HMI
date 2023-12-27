import { PlantsList } from '../../components/plants-list/plants-list';
import { FC } from 'react';
import stylesHome from './home.module.scss';

//Как заглушка главной страницы, в дальнейшем имеет смысл сделать главной страницей профиль с подгрузкой туда всей актуальной информации по объектам
export const Home: FC = (): JSX.Element => {
  return (
    <main className={stylesHome.container}>
      <PlantsList window={false} />
    </main>
  );
};
