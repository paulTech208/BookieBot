import Media from "@/shared/Media"

const Sport = ({ data, selected = false, toggelSport }) => (
  <button className="flex flex-col items-center" type="button" onClick={toggelSport}>
    <div
      className={`!w-[40px] h-[40px] bg-black_3  
      border-[2px]  rounded-md
      ${selected ? "border-green" : "border-transparent"}
      flex justify-center items-center m-[4px] p-[8px]`}
    >
      <Media
        type="image"
        link={data.icon}
        blurLink={data.icon}
        containerClasses="w-[30px] aspect-[1/1]"
      />
    </div>
    <p
      className={`font-inter text-[8px] capitalize
      ${selected ? "text-green" : "text-white"}`}
    >
      {data.title}
    </p>
  </button>
)

export default Sport
