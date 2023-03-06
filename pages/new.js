import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FormattedMessage, useIntl } from 'react-intl'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'



export default function New(dir) {

    const { locales } = useRouter();
    const intl = useIntl();

    const title = intl.formatMessage({ id: "page.home.head.title" });
    const description = intl.formatMessage({ id: "page.home.head.meta.description" });

    return (

        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" href="/favicon.ico" hrefLang='x-default' />
                <link rel="icon" href="/favicon.ico" hrefLang='en' />
                <link rel="icon" href="/favicon.ico" hrefLang='fr' />
            </Head>
            <header>
                {[...locales].sort().map((locale) => (
                    <Link key={locale} href="/" locale={locale}>
                        <div>{locale}</div>
                    </Link>
                ))}
            </header>
            <main className={styles.main}>
                <div className={styles.page__hero}>
                    <div className={styles.breadcrumbs}>

                    </div>
                    <div className={styles.image}>

                    </div>
                    <div>
                        <h1>
                            <FormattedMessage id="new.home.title" values={{ b: (info) => <b>{info}</b> }}></FormattedMessage>
                        </h1>
                        <p>
                            <FormattedMessage id="new.home.subtitle" />
                        </p>
                    </div>
                </div>

                <div className={styles.container}>
                    <aside className={styles.page__sidebar}>
                        <nav>
                            <h2>

                            </h2>
                            <div>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </nav>
                        <div className={styles.block__container}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </aside>
                    <h2><FormattedMessage id="new.home.main.title" /></h2>
                    <div>
                        <p>
                            <FormattedMessage id="new.home.main.note" />
                        </p>
                    </div>
                    <div>
                        <p>
                            <FormattedMessage id="new.home.main.delivery" />
                        </p>
                    </div>
                    <div>
                        <p>
                            <FormattedMessage id="new.home.main.description1" />
                        </p>
                        <p>
                            <FormattedMessage id="new.home.main.description2" />
                        </p>
                    </div>


                </div>
                <p className={styles.description}>
                    <FormattedMessage id='page.home.description'></FormattedMessage>
                </p>
            </main>
        </>
    )
}
