import Link from "next/link";

const Page = async (): Promise<JSX.Element> => {
  return (
    <div>
      <h1 className="font-pixel dark:text-turquoise-300 text-center text-2xl uppercase text-pink-600 before:pr-[7px] before:content-[url('/images/ui/leftsparkle.gif')] after:pl-[5px] after:content-[url('/images/ui/rightsparkle.gif')] lg:text-3xl mb-4">
        Privacy policy
      </h1>

      <p className="mb-4">
        This Privacy Policy describes how Meagan Waller (&quot;we&quot;
        &quot;us&quot; or &quot;our&quot;) collects, uses, and shares personal
        information when you use our website meaganwaller.com (the
        &quot;Site&quot;).
      </p>

      <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>

      <ul className="mb-4">
        <li className="mb-2">
          <p>
            <strong>Log Data</strong>: Like many websites, we collect
            information that your browser sends whenever you visit our Site.
            This may include information such as your computer&apos;s Internet
            Protocol (&quot;IP&quot;) address, browser type, browser version,
            the pages of our Site that you visit, the time and date of your
            visit, the time spent on those pages, and other statistics.
          </p>
        </li>
        <li className="mb-2">
          <p>
            <strong>Cookies</strong>: We use cookies to collect information. You
            can instruct your browser to refuse all cookies or to indicate when
            a cookie is being sent. However, if you do not accept cookies, you
            may not be able to use some portions of our Site.
          </p>
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">How We Use Information</h2>

      <p className="mb-4">
        We may use the information collected for various purposes, including:
      </p>

      <ul className="mb-4">
        <li className="mb-2">
          <p>To provide and maintain our Site</p>
        </li>
        <li className="mb-2">
          <p>To improve, personalize, and expand our Site.</p>
        </li>
        <li className="mb-2">
          <p>To understand how visitors use our Site</p>
        </li>
        <li className="mb-2">
          <p>
            To communicate with you, either directly or through one of our
            partners.
          </p>
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Third-Party Services</h2>

      <p className="mb-4">
        We may use third-party services to analyze the user of our Site, such as
        Vercel Analytics. These third-party services providers have their own
        privacy policies addressing how they use such information.
      </p>

      <h2 className="text-2xl font-bold mb-2">Security</h2>

      <p className="mb-4">
        The security of your personal information is important to us, but
        remember that no method of transmission over the Internet or method of
        electronic storage is 100% secure. While we strive to use commercially
        acceptable means to protect your personal information, we cannot
        guarantee its absolute security.
      </p>

      <h2 className="text-2xl font-bold mb-2">Links to Other Sites</h2>

      <p className="mb-4">
        Our Site may contain links to other sites that are not operated by us.
        If you click on a third-party link, you will be directed to that third
        party&apos;s site. We strongly advise you to review the Privacy Policy
        of every site you visit.
      </p>

      <h2 className="text-2xl font-bold mb-2">
        Changes to This Privacy Policy
      </h2>

      <p className="mb-4">
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page.
      </p>

      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>

      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us
        at{" "}
        <Link href="mailto:privacy@meaganwaller.com">
          privacy@meaganwaller.com
        </Link>
      </p>
    </div>
  );
};

export default Page;
