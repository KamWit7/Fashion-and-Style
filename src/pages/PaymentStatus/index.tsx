import usePaymentStatus from '@pages/Basket/CartForm/hooks/usePaymentStatus';

const PaymentStatus = () => {
  const message = usePaymentStatus();

  return (
    <div>
      PaymentStatus end with status:
      {message}
    </div>
  );
};

export default PaymentStatus;
