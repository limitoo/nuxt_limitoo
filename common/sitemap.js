const sitemap = [
  {
    path: '/sitemap.xml', // 生成的文件路径
    hostname: 'https://baidu.com/', // 网址
    cacheTime: 1000 * 60 * 60 * 24, // 1天 更新频率，只在 generate: false有用
    gzip: true, // 生成 .xml.gz 压缩的 sitemap
    generate: false, // 允许使用 nuxt generate 生成
    // 排除不要页面
    exclude: [
      '/404', //  这里的路径相对 hostname
    ],
    // xml默认的配置
    defaults: {
      changefreq: 'always',
      lastmod: new Date(),
    },
    // 需要生成的xml数据, return 返回需要给出的xml数据
    routes: () => {
      const routes = [
        {
          url: '/', //  这里的路径相对 hostname
          changefreq: 'always',
          lastmod: new Date(),
        },
        {
          url: '/helloword',
          changefreq: 'always',
          lastmod: '2020-12-04',
        },
      ]
      return routes
    },
  },
  {
    path: '/test/sitemap.xml', // 生成的文件路径
    hostname: 'https://baidu.com/', // 网址
    cacheTime: 1000 * 60 * 60 * 24, // 1天 更新频率，只在 generate: false有用
    gzip: true, // 生成 .xml.gz 压缩的 sitemap
    generate: false, // 允许使用 nuxt generate 生成
    // 排除不要页面
    exclude: [
      '/404', //  这里的路径相对 hostname
    ],
    // xml默认的配置
    defaults: {
      changefreq: 'always',
      lastmod: new Date(),
    },
    // 需要生成的xml数据, return 返回需要给出的xml数据
    routes: () => {
      const routes = [
        {
          url: '/test', //  这里的路径相对 hostname
          changefreq: 'always',
          lastmod: new Date(),
        },
        {
          url: '/test/helloword',
          changefreq: 'always',
          lastmod: '2020-12-04',
        },
      ]
      return routes
    },
  },
]

export default sitemap
