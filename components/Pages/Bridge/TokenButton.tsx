import Media from "@/shared/Media"

const TokenButton = ({ tokenIcon = "", tokenName }) => (
  <button type="button" className="flex gap-2 items-center w-fulll">
    <Media
      type="image"
      link={tokenIcon}
      blurLink={tokenIcon}
      containerClasses="w-[20px] aspect-[1/1]"
    />
    {tokenName}
  </button>
)

export default TokenButton
