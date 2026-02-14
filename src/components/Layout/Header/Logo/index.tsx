import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/" className='flex items-center text-black dark:text-white text-2xl font-semibold gap-4'>
      <Image
        src="/images/logo/logo-dark.svg"
        alt="logo"
        width={0}
        height={0}
        style={{ width: '140px', height: '40px' }}
        quality={100}
        className="dark:invert"
      />

    </Link>
  );
};

export default Logo;
