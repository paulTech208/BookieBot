const AmountButton = ({ amount, onClick = () => {} }) => (
  <button className="bg-black_3 px-3 py-1 rounded-md" type="button" onClick={onClick}>
    {amount}
  </button>
)

export default AmountButton
