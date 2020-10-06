import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from './index';

const WrappedApp = ({Component, pageProps}) => (
    <Component {...pageProps} />
);

export default wrapper.withRedux(WrappedApp);