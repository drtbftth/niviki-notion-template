import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  // rootNotionPageId: 'niviki-com-t-do-t-i-ch-nh-10f5e54221eb4b059bc5b5305da949ba',
  rootNotionPageId: 'Medical-Lectures-96831b6b2e7d49c49eb85bc4af46ee62',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Medical Lectures',
  domain: 'tbftth.online',
  author: 'TBFTTH',

  // open graph metadata (optional)
  description: 'Học Tốt - Mơ Nhiều - Yêu Say Đắm',

  // social usernames (optional)
  twitter: 'tbftth1',
  // github: 'transitive-bullshit',
  linkedin: 'tbftth',
  
  facebook: 'https://www.facebook.com/tbftth',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  youtube: 'channel/UC2hASZDjUaupqGYli4a0XkA', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    // '/hoa-don-dien-tu-voi-blockchain-p1/': '/9dd30a7b68af4b40a8ad3d6d9cb845f0',
    // '/giai-phap-hoa-don-dien-tu-voi-blockchain-phan-2-the-mvp': '/9dd30a7b68af4b40a8ad3d6d9cb845f0',
    // '/phong-van-business-analyst-ba-ky-su-phan-1': '/60ebc3f1d53646119f703fe5d13df633'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Blog',
      pageId: '93db1fa3d2144643ab9241b3620a0e75'
    },    
    {
      title: 'Contact',
      pageId: '96b08a422ba747f8903ce1df6354e271'
    },    
    {
      title: 'Medical Books',
      pageId: '512a4397112d4cf6962cfcda9e388c29'
    },    
    {
      title: 'About',
      pageId: 'ac24260f99954ad584c1f72848ea60a6'
    }
  ]
})
