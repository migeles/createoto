import Instagram from "./instagram"
import Title from "./title"

const container = () => {
  return (
    <div id="instagram" className="w-full h-full flex flex-col py-[15vh]  sm:py-20">
        <Title />
        <Instagram />
    </div>
  )
}

export default container