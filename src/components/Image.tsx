import NextImage from 'next/image';

export default function Image({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="img mb-12 mt-6 w-full">
      <NextImage
        src={src}
        alt={alt}
        fill={true}
        className="rounded-md shadow-2xl shadow-pink-300 dark:shadow-purple-950"
      />
      <p className="mt-4 text-center text-xs text-pink-700 dark:text-purple-100">
        {alt}
      </p>
    </div>
  )
}
