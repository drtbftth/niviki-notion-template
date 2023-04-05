import * as React from 'react'

import * as types from '@/lib/types'

import { PageHead } from './PageHead'
import styles from './styles.module.css'

export const Page404: React.FC<types.PageProps> = ({ site, pageId, error }) => {
  const title = site?.name || 'Lỗi rồi nè'

  return (
    <>
      <PageHead site={site} title={title} />
      

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Thật Không May Bài Viết Bạn Vừa Click Vào Chưa Có Sẵn, Chờ xíu nha để tui fix</h1>
          <a href='/'>Về trang chủ nhá</a> <a href='/sitemap.xml'>SiteMap</a>
          {error ? (
            <p>{error.message}</p>
          ) : (
            pageId && (
              <p>
                Make sure that Notion page &quot;{pageId}&quot; is publicly
                accessible.
              </p>
            )
          )}

          <img
            src='/404.png'
            alt='404 Not Found'
            className={styles.errorImage}
          />
          
        </main>
      </div>
    </>
  )
}
