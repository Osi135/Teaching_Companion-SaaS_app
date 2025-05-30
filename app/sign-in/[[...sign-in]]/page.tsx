import { SignIn } from '@clerk/nextjs';

const Signin = () => {
  return (
    <main className="flex items-center justify-center">
      <SignIn
        appearance={{
          variables: {
            colorPrimary: '#fe5933',
          },
        }}
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
      />
    </main>
  )
}

export default Signin