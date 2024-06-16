import Media from "@/shared/Media"

const ChainButton = ({ chainIcon = "", chainName, onclick = () => {} }) => (
  <button type="button" className="flex gap-2 items-center w-fulll" onClick={onclick}>
    <Media
      type="image"
      link={chainIcon}
      blurLink={chainIcon}
      containerClasses="w-[20px] aspect-[1/1]"
    />
    {chainName}
  </button>
)

export default ChainButton
