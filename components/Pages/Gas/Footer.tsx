import Button from "@/components/Button"

const Footer = () => (
  <div
    className="border-t border-t-black_3 px-4 py-2
        !absolute bottom-0 w-full left-0"
  >
    <p>Estimated MATIC Amount</p>
    <Button className="!bg-green !mt-4">Get Gas</Button>
  </div>
)

export default Footer
