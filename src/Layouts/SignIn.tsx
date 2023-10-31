import { Center } from '@components';
import { Outlet } from 'react-router-dom';

const SignIn = () => {
  return (
    <Center>
      <div className="mb-12 mt-8 flex">
        <img
          className="flex-1 bg-red-100"
          src="https://s3-alpha-sig.figma.com/img/e77c/d2d0/2b04a252f47ea48c67b52281d6c44101?Expires=1699833600&Signature=O5BR~nTmw1ANp-SZ72jbOkVleBCAAX3XBRsMs8UlG3KNooipnBIqOS3zPIJvKtR6dGSbBqjXlEaup4~D0dopNrryfHi4pOJPNdifOp6CpE6NMiE2H4RqQhnE7SA1Ji0mxZYG9PBFtcOaWVMpxB67NF8nGVgBcryshO66YjuXRvG3H8YwHF8Waqzs6wkgTxPnahKBoApEd~MpV4cd96Cmf0t41Vi7uudIwUzSQDTCLjvoHMK91aTMV~td3ZD~YZmujElmG14nHOtkeEhROxdIuQ-vPDOAmk~D7HdILxDHn3M~1a-G-aTtYgEdmn5kvvu0Jad4wBY2o6fNKiFUmT~dAA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="ha women sluup, hahaha slup"
        />
        <div className="flex-1">
          <Outlet context={{ className: 'mx-auto max-w-[392px] pt-20 text-center bg-white' }} />
        </div>
      </div>
    </Center>
  );
};

export default SignIn;
