import Image from "next/image";
import Logo from "../../assets/images/logo/createoto logo.png";

const contact = () => {
  return (
    <footer className='bg-black futura-medium'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0 '>
            <a href='' className='flex items-center justify-between w-full'>
              <Image
                src={Logo}
                className='h-8 w-auto object-contain'
                alt='Createoto Logo'
              />
            </a>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2'>
            {/* <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Resources
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <li className='mb-4'>
                  <a href='https://flowbite.com/' className='hover:underline'>
                    Flowbite
                  </a>
                </li>
                <li>
                  <a href='https://tailwindcss.com/' className='hover:underline'>
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div> */}
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Follow us
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <li className='mb-4'>
                  <a
                    href='https://www.instagram.com/createoto.official/'
                    className='hover:underline '>
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.tiktok.com/@createoto'
                    className='hover:underline'>
                    Tiktok
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Buy our Item
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <li className='mb-4'>
                  <a
                    href='https://www.tokopedia.com/createoto-3'
                    className='hover:underline'>
                    Tokopedia
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='https://shopee.co.id/shop/1081838564'
                    className='hover:underline'>
                    Shopee
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.lazada.co.id/shop/createoto/?spm=a2o4j.pdp_revamp.seller.1.3320631dmAkCu9&itemId=7861074560&channelSource=pdp'
                    className='hover:underline'>
                    Lazada
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2023{" "}
            <a href='' className='hover:underline'>
              Createoto
            </a>
            . All Rights Reserved.
          </span>
          <span>
            <div className='flex flex-col text-sm  sm:text-start'>
              <p className='text-gray-500'>Manufacture under</p>
              <h3 className='text-gray-300'>PT. Saudara Panca Sejati</h3>
            </div>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default contact;
