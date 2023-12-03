import { Text, Input, Button } from '@components';
import { Form, Link, useOutletContext } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const { className } = useOutletContext() as { className?: string };

  return (
    <div className={className}>
      <Text variant="h1" className="mb-10">
        Log In
      </Text>
      <Form method="POST" className="bg-[#fff]">
        <Input type="email" name="email" className="mb-4" label="Email" />
        <Input type="password" name="password" label="Password" />

        <Text variant="b1" className="text-left text-primary">
          Forgot Your Password?
        </Text>

        <Button type="submit" className="mt-6 w-full">
          <Text variant="b1">Log In</Text>
        </Button>
      </Form>

      <Text variant="b2" className="mt-8">
        Or
      </Text>

      <FcGoogle size={36} className="mx-auto my-6 cursor-pointer" />

      <Text variant="b1">
        New To Modimal?{' '}
        <Link to="/register" className="text-gray">
          Create An Account
        </Link>
      </Text>
    </div>
  );
};

export default Login;
