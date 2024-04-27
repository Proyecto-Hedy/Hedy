import Input from "../atoms/Input";

interface FormAddressProps {
  title: string;
  inputOptions: undefined
  /**
   * placeholder
   * required
   * title
   * onChange
   */
}
// This component is uncompleted
const FormAddress = ({ title }: FormAddressProps) => {
  return ( 
    <>
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <form className="mt-8">
        <div className="pb-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col w-full">
              <div className="flex relative z-0 w-full txt-compact-medium">
                <Input
                  onChange={() => console.log("!")}
                  placeholder="First name"
                  required
                  title="Enter your first name"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex relative z-0 w-full txt-compact-medium">
                <Input
                  onChange={() => console.log("!")}
                  placeholder="Last name"
                  required
                  title="Enter your last name"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex relative z-0 w-full txt-compact-medium">
                <Input
                  onChange={() => console.log("!")}
                  placeholder="Address"
                  required
                  title="Enter your address"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex relative z-0 w-full txt-compact-medium">
                <Input
                  onChange={() => console.log("!")}
                  placeholder="City"
                  required
                  title="Enter your city"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex relative z-0 w-full txt-compact-medium">
                <Input
                  onChange={() => console.log("!")}
                  placeholder="State"
                  required
                  title="Enter your state"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex relative z-0 w-full txt-compact-medium">
                <Input
                  onChange={() => console.log("!")}
                  placeholder="Phone"
                  required
                  title="Enter your phone"
                />
              </div>
            </div>

          </div>
        </div>
      </form>
    </>
  );
}

export default FormAddress;