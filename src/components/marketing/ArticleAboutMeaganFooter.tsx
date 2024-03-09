'use client'
/** @jsxImportSource @emotion/react */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import tw, { css } from 'twin.macro'

const styles = {
  card: () => [
    tw`md:rounded-lg leading-snug text-gray-600 text-base p-4 relative shadow-xl mt-8 mx-auto border border-gray-100`,
    css`
      min-height: 100px;
    `,
  ],
}

export const ArticleAboutMeaganFooter = () => (
  <div className="max-w-3xl mx-auto my-8">
    <div css={styles.card()} className="max-w-4xl mx-auto flex flex-row gap-8">
      <img
        className="rounded-lg w-[100px] h-[100px]"
        alt="Avatar for Meagan Waller"
        loading="lazy"
        src="/images/meaganwaller.png"
        width={100}
        height={100}
      />
      <img className="u-photo hidden" alt="Avatar for Meagan Waller" loading="lazy" src="/images/meaganwaller.png" />
      <div>
        <div className="mb-2">
          <p className="font-semibold">Hey hey! 👋</p>
          <p>
            I'm{' '}
            <Link className="p-name fn u-url" href={String(process.env.NEXT_PUBLIC_URL)} rel="author">
              Meagan
            </Link>
            ,{' '}
            <span className="p-note">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
)
