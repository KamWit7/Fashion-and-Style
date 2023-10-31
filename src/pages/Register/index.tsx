import { Text, Input, Button } from '@components';
import { Link, useOutletContext } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  {
    const { className } = useOutletContext() as { className?: string };

    return (
      <div className={className}>
        <Text variant="h1" className="mb-10">
          Create Account
        </Text>
        <form action="" className="bg-[#fff]">
          <Input name="name" className="mb-4" label="Name" />
          <Input name="lastname" className="mb-4" label="Last name" />
          <Input name="email" className="mb-4" label="Email" />
          <Input name="password" label="Password" />
        </form>

        <Button className="mt-6 w-full">
          <Text variant="b1">Log In</Text>
        </Button>

        <Text variant="b1" className="mt-6">
          Already Have An Account?
          <Link to="/login" className=" pl-2 text-gray">
            Sign In
          </Link>
        </Text>

        <Text variant="b2" className="mt-8">
          Or
        </Text>

        <FcGoogle size={36} className="mx-auto my-6 cursor-pointer" />

        <Text variant="label1" className="mt-6 text-black">
          By Clicking Register Now You Agree to
          <Link to="." className="px-2 text-gray underline">
            Terms & Conditions
          </Link>
          And
          <Link to="." className="pl-2 text-gray underline">
            Privacy Policy
          </Link>
        </Text>
      </div>
    );
  }
};

export default Register;
