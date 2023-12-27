import stylesNotFound from './not-found.module.scss';
import { FC } from 'react';

export const NotFound: FC = (): JSX.Element => {
    return <main className={stylesNotFound.container}>
        <h2 className={stylesNotFound.title}>404</h2>
    </main>
}