import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Logo = ({ onClick }) => {
  const [isHovering, setIsHovering] = useState(false);
  const onMouseEnter = () => setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHovering(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Link href="/" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
      {isHovering ? (
        <Image
          alt="Meagan Waller - A Software Development Blog"
          height={350}
          width={300}
          sizes="10vw"
          src="/images/logo-hover.svg"
          className="mr-6 inline-block"
          priority
        />
      ) : (
        <Image
          alt="Meagan Waller - A Software Development Blog"
          height={350}
          width={300}
          sizes="10vw"
          src="/images/logo.svg"
          className="mr-6 inline-block"
          priority
        />
      )}
    </Link>
  );
};

export default Logo;
