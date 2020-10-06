import React from 'react';

class Error extends React.Component {

    render() {
        const {statusCode} = this.props;

        return (
            <div>
                <link href="/errorStyles.css" rel="stylesheet"/>
                {statusCode
                    ?
                    (
                        <div className="body">

                            <div className="content">
                                <div className="cloudContent">
                                    <svg width="360" height="203" viewBox="0 0 160 138">
                                        <defs>
                                            <path id="a" d="M0 202.5h360V0H0z"></path>
                                            <path id="c" d="M.114.944H5.6V11H.114z"></path>
                                            <path id="e" d="M.61.944h5.484V11H.61z"></path>
                                            <path id="g" d="M0 138h160V.198H0z"></path>
                                            <path
                                                d="M7.1 11.499c-.769 2.105-2.835 3.457-5.077 3.457-.727 0-1.434.425-1.648 1.121a1.645 1.645 0 0 0 1.561 2.157h63.081a1.64 1.64 0 0 0 1.617-1.914c-.132-.806-.889-1.364-1.705-1.364h-2.272c-2.055 0-3.865-1.208-4.82-3.027a11.813 11.813 0 0 0-10.468-6.334c-3.507 0-6.646 1.536-8.81 3.961C35.701 4.004 29.926.198 23.252.198 15.825.198 9.51 4.906 7.1 11.499"
                                                id="i"></path>
                                            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="j">
                                                <stop stop-color="#EFF0F2" offset="0%"></stop>
                                                <stop stop-color="#FFF" offset="100%"></stop>
                                            </linearGradient>
                                        </defs>
                                        <g transform="translate(-100 -40)" fill="none" fill-rule="evenodd">
                                            <mask id="b" fill="#fff">
                                                <use></use>
                                            </mask>
                                            <path d="M184.44 123.9v29.087" stroke="#BABFC5" stroke-width="3.511"
                                                  stroke-linecap="round"></path>
                                            <g mask="url(#b)">
                                                <g transform="translate(100 39.802)">
                                                    <path
                                                        d="M84.015 126.058h-9.531v-9.003a3.87 3.87 0 0 1 3.87-3.87h5.66v12.873z"
                                                        fill="#BABFC5"></path>
                                                    <g transform="translate(77 127)">
                                                        <mask id="d" fill="#fff">
                                                            <use></use>
                                                        </mask>
                                                        <path
                                                            d="M.114.944H5.6v8.11A1.947 1.947 0 0 1 3.653 11H.113V.944z"
                                                            fill="#FABB05" mask="url(#d)"></path>
                                                    </g>
                                                    <g transform="translate(85 127)">
                                                        <mask id="f" fill="#fff">
                                                            <use></use>
                                                        </mask>
                                                        <path
                                                            d="M.61.944h5.484v8.11A1.947 1.947 0 0 1 4.148 11H.61V.944z"
                                                            fill="#EDA606" mask="url(#f)"></path>
                                                    </g>
                                                    <path
                                                        d="M93.716 126.058H80v-9.862a3.012 3.012 0 0 1 3.01-3.011h8.214a2.492 2.492 0 0 1 2.492 2.49v10.383z"
                                                        fill="#DFE1E5"></path>
                                                    <mask id="h" fill="#fff">
                                                        <use></use>
                                                    </mask>
                                                    <path fill="#959CA5" mask="url(#h)"
                                                          d="M72.722 127.944h8.784v-1.886h-8.784z"></path>
                                                    <path fill="#CDD0D5" mask="url(#h)"
                                                          d="M81.506 127.944h14.65v-1.886h-14.65z"></path>
                                                    <path
                                                        d="M87.088 134.25a1.265 1.265 0 1 1 2.53 0 1.265 1.265 0 0 1-2.53 0M78.592 134.25a1.265 1.265 0 1 1 2.53 0 1.265 1.265 0 0 1-2.53 0"
                                                        fill="#FFF" mask="url(#h)"></path>
                                                    <path
                                                        d="M158.423 81.825c1.283 0 2.03-1.449 1.274-2.485-6.994-9.585-24.286-43.62-48.372-43.62-2.26 0-7.336 1.57-10.714 2.707a4.997 4.997 0 0 1-5.501-1.612l-14.497-18.08C73.292 9.226 61.698 3.18 48.703 3.478c-20.181.464-37.01 16.73-38.11 36.887-1.234 22.585 16.715 41.286 39.03 41.286l108.8.173"
                                                        fill="#DFE1E5" mask="url(#h)"></path>
                                                    <path
                                                        d="M98.552 93.47c.854 0-15.335-30.723-31.385-30.723-1.507 0-4.89 1.046-7.14 1.804a3.33 3.33 0 0 1-3.666-1.074L46.7 51.427c-4.878-6.334-12.604-10.364-21.263-10.164C11.987 41.572.775 52.41.04 65.843c-.822 15.05 11.138 27.513 26.01 27.513l72.502.115"
                                                        fill="#EFF0F2" mask="url(#h)"></path>
                                                </g>
                                            </g>
                                            <g mask="url(#b)">
                                                <g transform="translate(191 39.802)">
                                                    <mask id="k" fill="#fff">
                                                        <use></use>
                                                    </mask>
                                                    <path
                                                        d="M7.1 11.499c-.769 2.105-2.835 3.457-5.077 3.457-.727 0-1.434.425-1.648 1.121a1.645 1.645 0 0 0 1.561 2.157h63.081a1.64 1.64 0 0 0 1.617-1.914c-.132-.806-.889-1.364-1.705-1.364h-2.272c-2.055 0-3.865-1.208-4.82-3.027a11.813 11.813 0 0 0-10.468-6.334c-3.507 0-6.646 1.536-8.81 3.961C35.701 4.004 29.926.198 23.252.198 15.825.198 9.51 4.906 7.1 11.499"
                                                        fill="url(#j)" opacity=".9" mask="url(#k)"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className="header">
                                    Imposible conectarse
                                </div>
                                <div className="subheader">
                                    Debe tener una conexión activa para conectarse a nuestros servidores.
                                </div>
                                <a href="/" className="button">Reintentar</a>
                            </div>

                        </div>
                    )
                    :
                    (
                        <div id="notfound">
                            <div className="notfound">
                                <div className="notfound-404">
                                    <h1>404</h1>
                                </div>
                                <div className="header">Oops, la página que estás buscando no se puede encontrar!</div>
                                <a href="/" className="button">Regresar</a>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

Error.getInitialProps = ({res, err}) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return {statusCode}
};

export default Error;