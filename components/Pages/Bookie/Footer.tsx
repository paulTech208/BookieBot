import Button from "@/components/Button"
import Media from "@/shared/Media"

const Footer = () => (
  <div
    className="border-t border-t-black_3 px-4 py-2
        !absolute bottom-0 w-full left-0"
  >
    <div className="flex justify-between items-center">
      <p>Gas Estimate</p>
      <div className="flex gap-2 items-center">
        <p className="text-lg">$0.043 | 0.048</p>
        <Media
          type="image"
          link="/images/MATIC.svg"
          blurLink="/images/MATIC.svg"
          containerClasses="w-[20px] aspect-[1/1]"
        />
      </div>
    </div>
    <Button className="!bg-green !mt-4">Add Liquidity</Button>
  </div>
)

export default Footer
