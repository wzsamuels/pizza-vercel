import about1 from "public/images/about1.jpg"
import about2 from "public/images/about2.jpg"
import about3 from "public/images/about3.jpg"

const aboutData = [
  {
    text: "Established in 1856 by Angus Scrimm, generations of experience go into every slice.",
    src: about1
  },
  {
    text: "Angus didn't make his fortune during the Gold Rush...",
    src: about2
  },
  {
    text: "...but there are nuggets of love in every pizza!",
    src: about3
  }
]

export default function AboutRoute() {
  return (
    <div>
      { aboutData.map((item, index) =>
        <div key={index} className="mt-8 w-[800x] max-w-[100vw] md:max-w-[90vw]">
          <div className="w-full shadow-2xl md:w-2/3 p-4 mx-auto mt-0 md:-mb-20 border z-10 relative bg-white   ">
            <div className="text-2xl md:text-3xl p-4 text-center">{item.text}</div>
          </div>
          <div
            className={`w-full lg:max-w-[75%] min-h-[60vh] bg-no-repeat bg-cover relative my-0 mx-auto`}
            style={{backgroundImage: `url(${item.src})`}}
          />
        </div>
      )}
    </div>
  )
}