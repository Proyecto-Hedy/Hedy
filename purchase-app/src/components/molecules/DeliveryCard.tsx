interface DeliveryCardProps {
  title: string
  price: number
  onClick: (p: number) => void
}

const DeliveryCard = ({ title, price, onClick }: DeliveryCardProps) => {
  return ( 
    <div>
      <div className="flex items-center justify-between text-small-regular cursor-pointer py-4 border rounded-rounded px-8 mb-2 hover:shadow-borders-interactive-with-active">
        <div className="flex items-center gap-x-4">
          <input type="checkbox" onClick={() => onClick(price)} />
          <span>{title}</span>
        </div>
        <span>$ {price}</span>
      </div>
    </div>
  );
}

export default DeliveryCard;