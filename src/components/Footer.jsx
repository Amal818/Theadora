import { footerLinks } from '../constants'
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="font-semibold text-gray text-xs">
              More ways to Explore:{' '}
              <span className="underline text-blue hover:text-blue-400 cursor-pointer">
                Find our Palace{' '}
              </span>
              or{' '}
              <span className="underline text-blue hover:text-blue-400 cursor-pointer">
                other retailer
              </span>{' '}
              near you.
            </p>
            <p className="font-semibold text-gray text-xs mt-1">
              Or call 000800-040-1966
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray hover:text-blue transition"
            >
              <FaInstagram size={18} />
            </a>|
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray hover:text-blue transition"
            >
              <FaFacebookF size={18} />
            </a>|
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray hover:text-blue transition"
            >
              <FaTwitter size={18} />
            </a>|
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray hover:text-blue transition"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright © 2024 Theadora. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-3 md:mt-0">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2 text-gray-500">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
