interface DeliveryCardProps {
  title: string
  price: number
  onClick: (p: number, t: string) => void
}

const DeliveryCard = ({ title, price, onClick }: DeliveryCardProps) => {
  return ( 
    <div>
      <div className="flex items-center justify-between text-small-regular cursor-pointer py-4 border rounded-rounded px-8 mb-2 hover:border-blue">
        <div className="flex items-center gap-x-4">
          <input type="checkbox" onClick={() => onClick(price, title)} />
          <span>{title}</span>
        </div>
        <span>$ {price}</span>
      </div>
    </div>
  );
}

export default DeliveryCard;