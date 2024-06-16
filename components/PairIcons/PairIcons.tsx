import Media from "@/shared/Media"

const PairIcons = ({ size = 10, baseIcon, pairIcon = null }) => (
  <div
    className="relative"
    style={{
      width: size,
      height: size,
    }}
  >
    <Media
      type="image"
      link={baseIcon}
      blurLink={pairIcon}
      containerClasses="!absolute w-full h-full left-0 top-0 z-[1]"
    />
    {pairIcon && (
      <Media
        type="image"
        link={pairIcon}
        blurLink={pairIcon}
        containerClasses="!absolute w-[60%] h-[60%] left-[45%] top-[45%] z-[2]"
      />
    )}
  </div>
)

export default PairIcons
