import { FaArrowUp } from 'react-icons/fa'
import { BackToTopMobile } from './BackToTopMobile'

export const BackToTop = () => (
  <>
    <div className="mx-auto max-w-3xl hidden md:block mt-8">
      <p className="text-right">
        <a href="#" className="text-pink-500 text-sm flex-inline items-center">
          <span className="pr-1">Back to Top</span>
          <FaArrowUp size={10} className="w-4 h-4 inline" />
        </a>
      </p>
    </div>
    <div className="md:hidden">
      <BackToTopMobile />
    </div>
  </>
)
