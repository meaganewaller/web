/* eslint-disable @next/next/no-img-element */
import { FaMastodon, FaEnvelope, FaRss, FaNewspaper } from "react-icons/fa";
import Link from "next/link";

import tw, { css } from "twin.macro";

const styles = {
	card: () => [
		tw`md:rounded-lg leading-snug text-gray-600 text-base p-4 relative shadow-xl mt-8 mx-auto border border-gray-100`,
		css`
      min-height: 100px;

      :before {
        background: linear-gradient(135deg, #ff00a9 0%, #ff8370 100%);
        background-size: 64px;
        float: left;
        transition: 0.5s all;
        min-height: 64px;
        min-width: 64px;
        margin-right: 1rem;
        transform: rotate(-10deg);
        content: '';
      }

      :hover:before {
        transform: rotate(5deg);
      }
    `,
	],
};

export const Follow = () => (
	<div
		css={styles.card()}
		className="bg-pink-100 max-w-4xl mx-auto gap-8 leading-6"
	>
		<h2 className="font-semibold text-lg mb-4">
			Let&apos;s keep in touch 🧑‍🤝‍🧑
		</h2>
		<ul className="space-y-2">
			<li>
				<FaEnvelope className="pr-1 text-pink-600" />
				Send me an email at{" "}
				<a
					href="mailto:heyhey@adamfortuna.com"
					target="_blank"
					className="link--blue"
					rel="noreferrer"
				>
					heyhey@adamfortuna.com
				</a>
			</li>
			<li>
				<FaMastodon className="pr-1 text-pink-600" />
				Follow me on Mastodon at{" "}
				<a
					href="https://ruby.social/@adam"
					target="_blank"
					className="link--blue"
					rel="noreferrer"
				>
					@adam@ruby.social
				</a>
			</li>
			<li>
				<FaNewspaper className="pr-1 text-pink-600" />
				Subscribe to my{" "}
				<Link href="/newsletter" className="link--blue">
					monthly newsletter
				</Link>
			</li>
			<li>
				<FaRss className="pr-1 text-pink-600" />
				Subscribe to my{" "}
				<a href="/feed" target="_blank" className="link--blue" rel="noreferrer">
					RSS feed
				</a>
			</li>
		</ul>
	</div>
);
