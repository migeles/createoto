import getData from './getData';
import Image from 'next/image';

export default async function Instagram() {
  const data = await getData();
  const feeds = data.data;
  // console.log(feeds); // object

  return (
    <div className='w-full h-full grid-row-2  sm:grid-row-1 grid-cols-2 sm:grid-cols-3 grid-flow-row  grid gap-[4vw] sm:gap-[3vw] px-[9vw] sm:px-[14vw] sm:py-[6vw] pt-16  bg-[#1a1a1a]'>
      {feeds && Object.keys(feeds).slice(0, 6).map((key, index) => {
        const feed = feeds[key];
        if (feed.media_type === 'IMAGE' || feed.media_type === 'CAROUSEL_ALBUM') {
          return (
          
            <a href="https://www.instagram.com/createoto.official/" key={feed.id} ><div className='h-auto aspect-square ' style={{width: '100%' , position: 'relative'}}>
              <Image src={feed.media_url} fill={true} alt={feed.caption} className='w-full h-full rounded-lg sm:rounded-3xl object-cover aspect-square object-center hover:w-full brightness-[.90] contrast-[1.1]'/>
              {/* <p>{feed.caption}</p> */}
            </div>
            </a>
          ); 
        }
        else {
          return ;
        }
        
      })}
    </div>
  );
}
