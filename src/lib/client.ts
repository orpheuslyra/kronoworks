//microcms-sdk は下記のサイトを参照
//https://qiita.com/hinako_n/items/e53b02c241b8e35d42cb#%E6%A6%82%E8%A6%81

import {createClient} from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_MICRO_CMS_SERVICE_ID || "",
    apiKey: process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY || "",
});


