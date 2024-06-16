import useClickOutside from "@/hooks/useClickOutSide"
import Icon from "@/shared/Icon"
import Media from "@/shared/Media"
import TokenButton from "./TokenButton"

const PairTokens = () => {
  const { selectRef, setIsVisibleSelect, isVisibleSelect } = useClickOutside()

  return (
    <div className="pl-2">
      <p className="pb-1">Token</p>
      <div className="w-full relative" ref={selectRef}>
        <button
          type="button"
          className="flex w-full gap-2 items-center justify-between
                pr-2"
          onClick={() => setIsVisibleSelect(!isVisibleSelect)}
        >
          <div className="flex gap-2 items-center">
            <Media
              type="image"
              link="/images/USDC.svg"
              blurLink="/images/USDC.svg"
              containerClasses="w-[20px] aspect-[1/1]"
            />
            <p>USDC</p>
          </div>
          <Icon name={isVisibleSelect ? "arrowUp" : "arrowDown"} size={25} color="white" raw />
        </button>
        {isVisibleSelect && (
          <div
            className="absolute top-full left-0 z-[2]
                bg-black_2 py-2 px-3
                w-full rounded-md flex flex-col gap-2"
          >
            <TokenButton tokenIcon="/images/USDC.svg" tokenName="USDC" />
            <TokenButton tokenIcon="/images/USDT.svg" tokenName="USDT" />
          </div>
        )}
      </div>
    </div>
  )
}

export default PairTokens
