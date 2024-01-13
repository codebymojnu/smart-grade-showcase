import logo from "../../assets/logo.png";

export default function NavigationBar() {
  return (
    <nav className="py-6 bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)] pt-32 pb-20 -mt-[92px] md:-mt-[118px]">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        {/* <!-- Logo --> */}
        <a href="/">
          <img className="h-[40px]" src={logo} alt="Lws" />
        </a>
        {/* <!-- Logo Ends --> */}
        <a className="px-5 py-2 bg-[#172227] rounded-[44px]" href="#">
          Get Admission
        </a>
      </div>
    </nav>
  );
}
