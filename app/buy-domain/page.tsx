import { Authors, allAuthors } from 'contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import siteMetadata from '@/data/siteMetadata'

export const metadata = genPageMetadata({ title: 'Buy Domain' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Buy This domain
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            <span>
              <u><a target="_blank" href="https://www.namecheap.com/domains/registration/results/?domain=service-hub.ai">Domain for sale</a></u>
            </span> - managed by NameCheap.
            <br />
            For more information, send an email to <strong>support@appseed.us</strong>
          </p>
        </div>
      </div>
    </>
  )
}
