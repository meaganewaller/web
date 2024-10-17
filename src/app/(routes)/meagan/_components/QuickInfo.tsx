import Image from '@/components/Image'
import Link from '@/components/Link'

export function QuickInfo() {
  return (
    <div className="md:flex-row mx-auto my-10 flex w-full flex-nowrap justify-center flex-col">
      <Image
        src="/images/meaganwaller.png"
        width={200}
        height={200}
        alt="Meagan Waller's avatar"
        className="border-image mr-[10px] md:h-[200px] w-auto rounded-[20px] border-[8px] border-solid h-full md:w-[200px]"
      />
      <div className="ml-3 h-full overflow-auto">
        <ul className="list-flower flex h-full list-inside flex-col justify-center">
          <li className="text-lg relative">
            <strong className="mr-2">name:</strong>
            meagan <em>(she/her/hers)</em>
          </li>
          <li className="text-lg relative">
            <strong className="mr-2">location:</strong>
            northeast florida
          </li>
          <li className="text-lg relative">
            <strong className="mr-2">working at:</strong>
            senior dev consultant @{' '}
            <Link href="https://testdouble.com" className="">
              test double
            </Link>
          </li>
          <li className="text-lg relative">
            <strong className="mr-2">sign:</strong>
            aries ☼ / aquarius ☽ / taurus ↑
          </li>
          <li className="text-lg relative">
            <strong className="mr-2">languages:</strong>
            ruby, typescript, lua
          </li>
          <li className="text-lg relative">
            <strong className="mr-2">contact:</strong>
            meagan [at] meaganwaller.com
          </li>
        </ul>
      </div>
    </div>
  )
}
