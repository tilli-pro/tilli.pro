const Footer: React.FC = () => {
  return (
    <footer className="bg-background relative -top-4 flex w-full justify-center">
      <div className="grid w-full max-w-4xl grid-cols-3 grid-rows-2 gap-4">
        <div className="">
          <div>logo</div>
          <p>
            We&apos;re devoted to creating a global consumer environment that
            feels more personalized and connected than ever before. Through
            cloud-based, customer-centric tools, we&apos;re revolutionizing
            CPaaS and payment processing landscapes to create avenues that help
            businesses and people connect, collaborate, and make payments in
            real-time.
          </p>
          <a href="/about">More about us</a>
        </div>

        <div className="col-span-2 grid grid-cols-5 grid-rows-1">
          <div>
            <div>Products</div>
            <div>
              <div>Nudge</div>
              <div>tilliX</div>
              <div>Monay</div>
            </div>
          </div>
          <div>
            <div>Industries</div>
            <div>
              <div>Utilities</div>
              <div>Banking & Finance</div>
              <div>Telecommunications</div>
            </div>
          </div>
          <div>
            <div>Company</div>
            <div>
              <div>About us</div>
              <div>Careers</div>
              <div>Services</div>
            </div>
          </div>

          <div>
            <div>Developers</div>

            <div>
              <div>Monay</div>
              <div>
                <div>Documentation</div>
                <div>API Reference</div>
              </div>
            </div>

            <div>
              <div>Nudge</div>
              <div>
                <div>Documentation</div>
                <div>API Reference</div>
              </div>
            </div>
          </div>

          <div>
            <div>Resources</div>
            <div>
              <div>Request a Demo</div>
              <div>Start a Free Trial</div>
              <div>Contact Us</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-3">
          <div>YT</div>
          <div>IN</div>
          <div>FB</div>
          <div>IG</div>
          <div>X</div>
        </div>

        <div>
          <div>Request a Demo</div>
          <div>Start a Free Trial</div>
        </div>

        <div className="justify-self-end">
          <div>Headquarters</div>
          <div>8260 Greensboro Drive</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
