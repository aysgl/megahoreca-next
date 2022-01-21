import React from 'react';
import Head from 'next/head';

export default function Meta({ title, desc, currentURL, previewImage, siteName }) {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <meta name="description" content={desc}></meta>

            {/* facebook */}
            <meta property="og:title" content={title} key="ogtitle" />
            <meta property="og:description" content={desc} key="ogdesc" />

            {/* twitter */}
            <meta name="twitter:card" content="summary" key="twcard" />
            {/* <meta name="twitter:creator" content={twitterHandle} key="twhandle" /> */}


            {/* opengraph */}
            <meta property="og:url" content={currentURL} key="ogurl" />
            <meta property="og:image" content={previewImage} key="ogimage" />
            <meta property="og:site_name" content={siteName} key="ogsitename" />
            <meta property="og:title" content={title} key="ogtitle" />
            <meta property="og:description" content={desc} key="ogdesc" />

            <title>{title}</title>
        </Head>
    );
}
